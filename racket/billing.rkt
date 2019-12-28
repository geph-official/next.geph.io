#lang web-server
(require db
         db/util/datetime
         "paymentwall.rkt"
         "paymentwall-secrets.rkt"
         "stripe-secrets.rkt"
         web-server/templates
         racket/random
         racket/date
         json
         web-server/http/response-structs
         racket/system
         file/sha1)
(provide serve-paymentwall-pingback
         serve-alipay
         serve-userinfo
         serve-login
         serve-stripe-cancel
         serve-stripe-webhook)

;; db connection for postgres
(define db-conn
  (virtual-connection
   (connection-pool
    (lambda ()
      (postgresql-connect
       #:user "postgres"
       #:password "postgres"
       #:database "postgres")))))

(define (in-transaction tx)
  (query-exec db-conn "BEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE")
  (with-handlers ([exn? (λ (e)
                          (query-exec db-conn "ROLLBACK")
                          (raise e))])
    (define res (tx))
    (query-exec db-conn "COMMIT")
    res))

(define (username->uid username)
  (in-transaction
   (lambda()
     (match (query-rows db-conn
                        "select id from users where username=$1" username)
       [(list (vector uid)) uid]))))

(define (register-subscription username subid)
  (in-transaction
   (lambda()
     (query-exec db-conn
                 "insert into stripeSubs (username, subscription) values ($1, $2)
on conflict (username) do update set
subscription = excluded.subscription" username subid))))

(define (extend-subscription username months)
  (let ([uid (username->uid username)])
    (in-transaction
     (lambda()
       (pay-invoice (make-invoice uid months (* months 500) "EUR"))))))


(define (make-invoice uid months price code)
  (define (seconds->sql-timestamp secs)
    (let ([current-date (seconds->date secs #f)])
      (sql-timestamp (date-year current-date)
                     (date-month current-date)
                     (date-day current-date)
                     (date-hour current-date)
                     (date-minute current-date)
                     (date-second current-date)
                     0
                     #f)))
  (define base-seconds
    (match (query-rows
            db-conn
            "SELECT expires FROM subscriptions WHERE id = $1" uid)
      [(list (vector expires))
       (date->seconds (sql-datetime->srfi-date expires))]
      [else (current-seconds)]))
  (query-value
   db-conn
   "INSERT INTO invoices (CreateTime, Paid, Amount, Currency, ID, Plan, PlanExpiry)
VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING InvoiceID"
   (seconds->sql-timestamp (current-seconds))
   #f
   price
   code
   uid
   "plus"
   (seconds->sql-timestamp (+ 86400 (* months 2592000) base-seconds))))

(define (pay-invoice invoice-id)
  (query-exec
   db-conn
   "UPDATE invoices SET paid = true WHERE invoiceid = $1" invoice-id)
  (match (query-row db-conn
                    "SELECT id,plan,planexpiry FROM invoices WHERE invoiceid = $1"
                    invoice-id)
    [(vector user-id plan-id expires)
     (query-exec
      db-conn
      "INSERT INTO subscriptions (id, plan, expires) VALUES
 ($1, $2, $3) ON CONFLICT (id) DO UPDATE SET
plan = excluded.plan, expires = excluded.expires"
      user-id plan-id expires)]))



(define session-cache (make-hash))

(define (serve-login req)
  (let* ([bindings (request-bindings req)]
         [username (extract-binding/single 'uname bindings)]
         [password (extract-binding/single 'pwd bindings)])
    (response/full 200
                   #"OK"
                   (current-seconds)
                   TEXT/HTML-MIME-TYPE
                   empty
                   '(#"<!DOCTYPE html><html><head>
<script>
var urlParams = new URLSearchParams(window.location.search);
sessionStorage.setItem('username', urlParams.get('uname'));
sessionStorage.setItem('password', urlParams.get('pwd'));
window.location.replace('/billing');
</script>
</head>
<body></body>
</html>"))))

(define (serve-paymentwall-pingback req secret)
  (unless (equal? secret pw-skey)
    (error "unauthorized"))
  (with-handlers ([exn:fail? void])
    (let* ([bindings (request-bindings req)]
           [type (extract-binding/single 'type bindings)]
           [invoice-id (extract-binding/single 'uid bindings)])
      (pay-invoice (string->number invoice-id))))
  (response/full 200
                 #"OK"
                 (current-seconds)
                 TEXT/HTML-MIME-TYPE
                 (list (make-header #"Cache-Control" #"no-store"))
                 '(#"OK")))

(define (serve-stripe-webhook req secret)
  (unless (equal? secret stripe-webhook-secret)
    (error "bad secret"))
  (let ([x (bytes->jsexpr (request-post-data/raw req))])
    (match (hash-ref x 'type)
      ["invoice.payment_succeeded"
       (define inner-data (hash-ref (hash-ref x 'data) 'object))
       (define customer (car (string-split (hash-ref inner-data 'customer_email) "@")))
       (define amount-paid (hash-ref inner-data 'amount_paid))
       (extend-subscription customer (exact-round (/ amount-paid 500)))
       (printf "extending ~a by ~a months \n" customer (exact-round (/ amount-paid 500)))]
      ["checkout.session.completed"
       (define inner-data (hash-ref (hash-ref x 'data) 'object))
       (define customer (car (string-split (hash-ref inner-data 'customer_email) "@")))
       (match (hash-ref inner-data 'mode)
         ["subscription" (define subscription-id (hash-ref inner-data 'subscription))
                         (printf "registering subscription ~a :: ~a\n" customer subscription-id)
                         (register-subscription customer subscription-id)]
         ["payment" (define customer (car (string-split (hash-ref inner-data 'customer_email) "@")))
                    (define amount-paid (hash-ref (car (hash-ref inner-data 'display_items))
                                                  'amount))
                    (printf "extending ~a by ~a months \n" customer (exact-round (/ amount-paid 500)))
                    (extend-subscription customer (exact-round (/ amount-paid 500)))]
         [_ (void)])]
      [_ (void)]))
                         
  (response/full 200
                 #"OK"
                 (current-seconds)
                 TEXT/HTML-MIME-TYPE
                 (list (make-header #"Cache-Control" #"no-store"))
                 empty))

(define (serve-stripe-cancel req)
  (define user (extract-binding/single 'username (request-bindings req)))
  (with-output-to-string
    (lambda()
      (in-transaction
       (lambda()
         (match (query-rows db-conn
                            "select subscription from stripeSubs where username = $1"
                            user)
           [(list (vector ss))
            (system (format
                     "curl https://api.stripe.com/v1/subscriptions/~a -u ~a: -X POST -d cancel_at_period_end=true
"
                     ss
                     stripe-sk))
            (query-exec db-conn "delete from stripeSubs where username = $1" user)])))))
  (response/full 200
                 #"OK"
                 (current-seconds)
                 TEXT/HTML-MIME-TYPE
                 (list (make-header #"Cache-Control" #"no-store"))
                 '(#"OK")))

(define (serve-userinfo req)
  (define username (extract-binding/single 'username (request-bindings req)))
  (let ([rows (in-transaction
               (lambda()
                 (append
                  (query-rows db-conn
                             "select extract(epoch from expires) from subscriptions where id = $1"
                             (username->uid username))
                  (query-rows db-conn
                              "select subscription from stripeSubs where username = $1" username))))])
    (response/full 200
                   #"OK"
                   (current-seconds)
                   #"application/json; charset=utf-8"
                   (list (make-header #"Cache-Control" #"no-store"))
                   (list (jsexpr->bytes
                          (match rows
                            [(list (vector expiry))
                             (hash 'username username
                                   'type "paid"
                                   'expires expiry
                                   'subscription #f)]
                            [(list (vector expiry)
                                   (vector stripeSub))
                             (hash 'username username
                                   'type "paid"
                                   'expires expiry
                                   'subscription #t)]
                            [_ (hash 'username username
                                     'type "free")]))))))

(define (serve-alipay req)
  (define bindings (request-bindings req))
  (pretty-print bindings)
  (define cookie (extract-binding/single 'username bindings))
  (define uid (username->uid cookie))
  (displayln uid)
  (define months (string->number (extract-binding/single 'months bindings)))
  (displayln months)
  (define-values (price code)
    (values (* months 5.25) "EUR"))
  (define invoice-id (make-invoice uid months (exact-round (* price 100)) code))
  (define payment-url
    (widget-url #:currency-code code
                #:amount (* price 100)
                #:order-name (format "~a Plus" "迷雾通")
                #:order-id invoice-id
                #:payment-type "all"
                #:language "zh-CN"
                #:success-url "https://geph.io/billing"))
  (displayln payment-url)
  (response/full 302
                 #"Found"
                 (current-seconds)
                 TEXT/HTML-MIME-TYPE
                 (list (make-header #"Location"
                                    (string->bytes/utf-8 payment-url))
                       (make-header #"Cache-Control" #"no-store"))
                 '()))
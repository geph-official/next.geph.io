#lang racket
(require "stripe-secrets.rkt"
         net/url
         net/uri-codec
         net/url-connect
         json)

(provide stripe-new-session
         register-session
         fulfill-session)

; string (hash symbol string) -> jsexpr
(define (post-with-form url form (headers empty))
  (parameterize ([current-https-protocol 'secure])
    (define encoded-form (alist->form-urlencoded (hash->list form)))
    (bytes->jsexpr
     (port->bytes
      (post-pure-port url
                      (string->bytes/utf-8 encoded-form)
                      headers)))))

; -> stripe-session
(define (stripe-new-session #:name name
                            #:description description
                            #:eurocents eurocents
                            #:success-url success-url
                            #:cancel-url cancel-url
                            #:email email)
   (hash-ref
    (post-with-form
     (string->url "https://api.stripe.com/v1/checkout/sessions")
     (hash '|payment_method_types[0]| "card"
           '|line_items[][name]| name
           '|line_items[][description]| description
           '|line_items[][images][]| "https://geph.io/static/logo-naked.4655e64a.png"
           '|line_items[][amount]| (number->string eurocents)
           '|line_items[][currency]| "eur"
           '|line_items[][quantity]| "1"
           'success_url success-url
           'customer_email email
           'cancel_url cancel-url)
     (list (format "Authorization: Bearer ~a"
                   stripe-sk)))
    'id))

(define living-sessions (make-hash))

(define (register-session session assocdata)
  (hash-set! living-sessions session assocdata))

(define (fulfill-session session)
  (let ([x (hash-ref living-sessions session)])
    (hash-remove! living-sessions session)
    x))

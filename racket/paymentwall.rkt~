#lang racket
(require "paymentwall-secrets.rkt"
         sha)
(provide widget-url)

(define (widget-url
         #:amount amt
         #:currency-code ccode
         #:order-name ordername
         #:order-id orderid
         #:payment-type ps
         #:country (country "CN")
         #:language (lang "en")
         #:success-url success-url)
  (define kvs (hash "key" pw-key
                    "uid" (format "~a" orderid)
                    "widget" "pw_1"
                    "email" (format "~a@orders.geph.io" orderid)
                    "timestamp" (format "~a" (current-seconds))
                    "amount" (format "~a" (/ amt 100.0))
                    "currencyCode" ccode
                    "ag_name" ordername
                    "ag_external_id" (format "~a" orderid)
                    "ag_type" "fixed"
                    "lang" lang
                    "country_code" country
                    "success_url" success-url
                    "sign_version" "3"))
  (define pairs (sort (hash->list kvs) (λ(a b) (string<? (car a) (car b)))))
  (define signature
    (bytes->hex-string
     (sha256 (string->bytes/utf-8
              (string-append
               (string-append*
                (for/list ([p pairs])
                  (format "~a=~a" (car p) (cdr p))))
               pw-skey)))))
  (string-append
   "https://api.paymentwall.com/api/subscription?"
   (string-append* (for/list ([p pairs])
                     (format "~a=~a&" (car p) (cdr p))))
   "sign=" signature))
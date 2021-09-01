#lang racket
(require file/sha1)
(provide apply-promotion)

(define (apply-promotion promotion price)
  (match promotion
["ARMISTICE" (exact-round (* price 0.8082))]
  ;  ["2ad8e737f489cb18758f9b547f4097889c31eec7"
   ;  (exact-round (* price 85/100))]
    [_ price]))

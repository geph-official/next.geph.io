#lang racket
(require file/sha1)
(provide apply-promotion)

(define (apply-promotion promotion price)
  (match (sha1 (string->bytes/utf-8 promotion))
    ["fa37413545d3b67274f8718ca3ae8ab9c6ca7c6a"
     (quotient price 2)]
    [_ price]))
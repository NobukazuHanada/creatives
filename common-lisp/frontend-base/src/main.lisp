(defun load (event)
  (let ((dom (chain document (create-element "div")))
        (text (chain document (create-text-node "Hello World!"))))
    (chain document body (append-child dom))
    (chain dom (append-child text))
    ))


(setf (@ window onload) #'load)

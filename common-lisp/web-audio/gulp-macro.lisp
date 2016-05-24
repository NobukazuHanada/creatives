
(defmacro deftask (task deps &body body)
  (let ((firstTask (car body))
        (restTask (cdr body)))
    `(chain gulp
            (task ,task (array ,@deps)
                  (lambda ()
                          (chain ,@firstTask
                                 ,@(mapcar (lambda (pipedTask)
                                            `(pipe ,pipedTask)
                                            )
                                           restTask)
                                 )
                          )))
    ))

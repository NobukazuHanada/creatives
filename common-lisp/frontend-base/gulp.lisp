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



(defvar gulp (require "gulp"))
(defvar sass (require "gulp-sass"))
(defvar minifycss (require "gulp-minify-css"))
(defvar rename (require "gulp-rename"))


(deftask "sass" ()
  (gulp (src "sass/*/*.css"))
  (sass "sass" (create :style "exanded"))
  ((@ gulp dest) "css")
  (minifycss)
  (rename (create :suffix ".min"))
  ((@ gulp dest) "css"))

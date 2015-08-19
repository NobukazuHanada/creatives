(defvar gulp (require "gulp"))
(defvar sass (require "gulp-sass"))
(defvar minifycss (require "gulp-minify-css"))
(defvar rename (require "gulp-rename"))

(chain gulp (task "sass"
                  (lambda ()
                    (chain
                     gulp (src "sass/**/*.scss")
                     (pipe (sass "sass" (create :style "expanded")))
                     (pipe ((@ gulp dest) "css"))
                     (pipe (rename (create :suffix ".min")))
                     (pipe (minifycss))
                     (pipe ((@ gulp dest) "css")))
                    )))

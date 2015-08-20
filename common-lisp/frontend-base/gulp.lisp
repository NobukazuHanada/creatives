
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

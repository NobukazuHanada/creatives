(defun text (text)
  (chain document (create-text-node text)))

(defun element (tag-name attributes children)
  (let ((dom (chain document (create-element tag-name))))
    (dolist (child children)
      (if child 
          (chain dom (append-child child))))
    (if attributes 
        (dolist (attribute attributes)
          (if attribute 
              (let ((attribute-name (car attribute))
                    (attribute-value (cdr attribute)))
                (chain dom (setAttribute attribute-name attribute-value))))))
    dom))

(defmacro element-func (tag-name)
  `(defun ,tag-name (attributes &rest children)
     (element ,(string-downcase (symbol-name tag-name)) attributes children))
    )
(element-func div)
(element-func p)


(defun load (event)
  (let ((dom (div ()
                  (p ()
                     (text "yes!")
                     d
                     (text "Hello World"))))
        )
    (chain document body (append-child dom))))


(setf (@ window onload) #'load)

(defun main (window)
  (play window))

(defun play (window)
  (let* ((*audio-cxt (@ window *audio-context))
         (audio-context (new (*audio-cxt)))
         (osc-node (chain audio-context (create-oscillator))))
    (setf (@ osc-node type) "square")
    (setf (@ osc-node frequency value) 2000)
    (chain osc-node (start 0))
    (chain osc-node (connect (@ audio-context destination)))))

(main window)

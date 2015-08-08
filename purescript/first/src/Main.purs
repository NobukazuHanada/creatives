module Main where

import Prelude
import Control.Monad.Eff
import Control.Monad.Eff.Console
import Control.Monad.ST
import Control.Monad.Eff.Random
import Graphics.Canvas
import Data.Maybe

main = do
  Just element <- getCanvasElementById "canvas"
  setCanvasWidth 600.0 element
  setCanvasHeight 600.0 element
  context <- getContext2D element
  forE 1.0 20.0 (\i -> do
       value1 <- random
       value2 <- random
       rect context { x: value1 * 500.0, y:value2 * 500.0, w:100.0, h: 100.0 }
       stroke context
       return unit
  )
   

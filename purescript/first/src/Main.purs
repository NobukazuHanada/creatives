module Main where

import Prelude
import Control.Monad.Eff
import Control.Monad.Eff.Console
import Control.Monad.ST
import Control.Monad.Eff.Random
import Graphics.Canvas
import Data.Maybe
import qualified Math as M


main :: forall err. Eff ( graphical : Graphics ) Unit
main = do
  Just element <- getCanvasElementById "canvas"
  setCanvasWidth 600.0 element
  setCanvasHeight 600.0 element
  context <- getContext2D element
  beginPath context
  setLineWidth 1.5 context
  translate { translateX : 0.0, translateY : 0.0 } context
  forE 1.0 20.0 (\i -> do
       x <- map (\x -> x * 500.0 + 50.0) random
       y <- map (\x -> x * 500.0 + 50.0) random
       size <- map (* 60.0) random
       foreachE (myRect x y size) (line context)
       stroke context
       return unit
  )
  closePath context
  return unit

type Pos = {x::Number, y::Number}

myRect :: Number -> Number -> Number -> Array Pos
myRect x y size = 
  let
    -- A
    a = { x : (x - size),
          y : (y - size)}
    -- B
    b = { x : (x - size),
          y : (y + size)}
    -- C
    c = { x : (x + size),
          y : (y + size)}
    -- D
    d = { x : (x + size),
          y : (y - size)}
  in
    [a,b,c,d]
    


line context pos = do
  lineTo context pos.x pos.y
  return unit
   

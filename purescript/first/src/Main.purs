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
  beginPath context
  setLineWidth 1.5 context
  translate { translateX : 0.0, translateY : 0.0 } context
  forE 1.0 20.0 (\i -> do
       x <- map (\x -> x * 500.0 + 50.0) random
       y <- map (\x -> x * 500.0 + 50.0) random
       foreachE (myRect x y) (line context)
       stroke context
       return unit
  )
  closePath context
  return unit


myRect x y = 
  let
    -- A
    a = { x : (x - 50.0),
          y : (y - 50.0)}
    -- B
    b = { x : (x - 50.0),
          y : (y + 50.0)}
    -- C
    c = { x : (x + 50.0),
          y : (y + 50.0)}
    -- D
    d = { x : (x + 50.0),
          y : (y - 50.0)}
  in
    [a,b,c,d]


line context pos = do
  lineTo context pos.x pos.y
  return unit
   

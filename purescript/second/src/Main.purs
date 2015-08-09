module Main where

import Prelude
import qualified Math as M
import qualified Data.Vector2 as V
import qualified Data.Vector as V
import Control.Monad.Eff
import Control.Monad.Eff.Console
import Control.Monad.ST
import Control.Monad.Eff.Random
import Control.Apply
import Graphics.Canvas
import Data.Maybe
import DOM

foreign import windowWidth :: forall eff. Eff ( dom :: DOM | eff ) Number
foreign import windowHeight :: forall eff. Eff ( dom :: DOM | eff ) Number

main = do
  Just element <- getCanvasElementById "canvas"
  width <- windowWidth
  height <- windowHeight
  setCanvasWidth width element
  setCanvasHeight height element
  context <- getContext2D element
  forE 0.0 50.0 (\i -> do
       x <- map (* width) random
       y <- map (* height) random
       r <- map (\x -> x * 70.0 + 50.0) random
       color <- map (\x -> "hsla(" ++ show (x * 360.0) ++ ",100%,50%, 0.4)") random
       draw context x y r color
       return unit
  )
  
draw context x y radius color = do
  beginPath context
  translate { translateX : x, translateY : y } context
  setGlobalAlpha context 0.0
  setLineWidth 2.5 context
  setFillStyle color context
  forE 0.0 10000.0 (\i ->
       let
        -- previus
        preAngle = M.pi * 2.0 * (i - 1.0) / 100.0
        preR = (func (preAngle * 10.0) radius) + radius
        prePos = V.scale preR $ V.vec2 (M.sin preAngle) (M.cos preAngle)
        -- current
        angle = M.pi * 2.0 * i / 100.0
        r = (func (angle * 10.0) radius) + radius
        pos = V.scale r $ V.vec2 (M.sin angle) (M.cos angle)
       in
        do
          line context prePos pos
          return unit
  )
  closePath context
  fill context
  translate { translateX : (0.0 - x), translateY : (0.0 - y) } context
  

func angle radius =      
     let   
       a = radius / 20.0
     in
        a * (10.0 * M.pow (M.sin $ angle / 2.0 + 1.0) 3.0) + (20.0 * (M.sin $ angle + 3.0))


line context origin to =
  let
    originX = V.get2X origin + 0.5
    originY = V.get2Y origin + 0.5
    toX = V.get2X to + 0.5
    toY = V.get2Y to + 0.5
  in 
     lineTo context toX toY


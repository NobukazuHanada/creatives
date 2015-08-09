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
import Data.Array.ST
import Graphics.Canvas
import Data.Maybe
import DOM
import Signal
import Signal.Time

foreign import windowWidth :: forall eff. Eff ( dom :: DOM | eff ) Number
foreign import windowHeight :: forall eff. Eff ( dom :: DOM | eff ) Number


main = do
  Just element <- getCanvasElementById "canvas"
  width <- windowWidth
  height <- windowHeight
  setCanvasWidth width element
  setCanvasHeight height element  
  context <- getContext2D element
  initRef <- emptySTArray
  forE 0.0 50.0 (\_ -> do
       x <- map (* width) random
       y <- map (* height) random
       r <- map (\x -> x * 70.0 + 50.0) random
       c <- map (\x -> "hsla(" ++ show (x * 360.0) ++ ",100%,50%, 0.4)") random
       pushSTArray initRef $ {x:x, y:y, r:r, c:c}
       return unit)    
  runSignal $ loop ~> (\angle -> do
       clearRect context {x:0.0,y:0.0,w:width,h:height}
       init <- toAssocArray initRef
       foreachE init (\{index:_, value:{x:x,y:y,r:r,c:c}} -> do
                             draw context x y r (angle * (r/100.0)) c
                             return unit))

loop = foldp (\a b -> b + 0.2) 0.0 (every $ 50.0 * millisecond)
  
draw context x y radius baseAngle color = do
  beginPath context
  translate { translateX : x, translateY : y } context
  setGlobalAlpha context 0.0
  setLineWidth 2.5 context
  setFillStyle color context
  forE 0.0 samples (\i ->
       let
        -- previus
        preAngle = M.pi * 2.0 * (i - 1.0) / samples
        preR = (func (preAngle * 10.0) radius) + radius
        prePos = V.scale preR $ V.vec2 (M.sin preAngle) (M.cos preAngle)
        -- current
        angle = M.pi * 2.0 * i / samples
        r = (func (angle * 10.0) radius) + radius
        pos = V.scale r $ V.vec2 (M.sin $ angle + baseAngle) (M.cos $ angle + baseAngle)
       in
        do
          line context prePos pos
          return unit
  )
  closePath context
  fill context
  translate { translateX : (0.0 - x), translateY : (0.0 - y) } context
  where 
        samples = 200.0
  

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


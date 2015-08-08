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

main = do
  Just element <- getCanvasElementById "canvas"
  setCanvasWidth 1000.0 element
  setCanvasHeight 600.0 element
  context <- getContext2D element
  beginPath context
  translate { translateX : 500.0, translateY : 300.0 } context
  draw context
  setLineWidth 1.0 context
  setStrokeStyle "#BBBAB9" context
  stroke context

  
draw context =
  forE 1.0 10000.0 (\i ->
       let
        -- previus
        preAngle = M.pi * 2.0 * (i - 1.0) / 100.0
        preR = func (preAngle * 10.0) + 200.0
        prePos = V.scale preR $ V.vec2 (M.sin preAngle) (M.cos preAngle)
        -- current
        angle = M.pi * 2.0 * i / 100.0
        r = func (angle * 10.0) + 200.0  
        pos = V.scale r $ V.vec2 (M.sin angle) (M.cos angle)
       in
        do
          line context prePos pos
          return unit
  )

func angle = 
     let   
       a = 10.0
     in
        a * (10.0 * M.pow (M.sin $ angle / 2.0 + 1.0) 3.0) + (20.0 * (M.sin $ angle + 3.0))


line context origin to =
  let
    originX = V.get2X origin
    originY = V.get2Y origin
    toX = V.get2X to    
    toY = V.get2Y to
  in do
     moveTo context originX originY
     lineTo context toX toY


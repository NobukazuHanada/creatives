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
import Data.Int

foreign import windowWidth :: forall eff. Eff ( dom :: DOM | eff ) Number
foreign import windowHeight :: forall eff. Eff ( dom :: DOM | eff ) Number

type Position = { x :: Number, y :: Number }

main = do
  Just element <- getCanvasElementById "canvas"
  width <- windowWidth
  height <- windowHeight
  setCanvasWidth width element
  setCanvasHeight height element  
  context <- getContext2D element
  tree context {x : 400.0, y : 400.0}
  return unit

numChildren = 3
maxLevels = 3

tree context pos = do
  nextPos <- randomNextPos pos
  branch 0 context pos nextPos

branch level context parentPos pos = 
  if maxLevels == level
  then
    do
        return unit
  else
    do
        line context pos parentPos
        ellipse context parentPos {x:1.0, y:1.0}
        forE 1.0 3.0 $ (\i ->
             do
                nextPos <- randomNextPos pos
                branch (level + 1) context pos nextPos
        )
        return unit


randomNextPos pos = do
  x <- map ((-) 50.0 <<< (*) 100.0) random
  y <- map ((+) 50.0 <<< (*) 50.0) random
  return (addPos pos {x : x, y : y})


line context from to = do
  beginPath context
  moveTo context from.x from.y
  lineTo context to.x to.y
  stroke context

ellipse context pos size = do
  beginPath context
  scale scaleTransition context
  arc context { x : pos.x, y : pos.y,
                r : r, start : 0.0, end : M.pi * 2.0 }
  stroke context
  where
    r = if size.x > size.y then size.x else size.y
    scaleTransition = { scaleX : (size.x / r), scaleY : (size.y / r) }


addPos :: Position -> Position -> Position
addPos pos1 pos2 =
  { x : (pos1.x + pos2.x), y : (pos1.y + pos2.y) }

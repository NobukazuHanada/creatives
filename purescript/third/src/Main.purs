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
import Graphics.Canvas (getCanvasElementById, getContext2D, setCanvasHeight, setCanvasWidth)
import Graphics.Canvas.Free
import Data.Maybe
import DOM
import Signal
import Signal.Time

foreign import windowWidth :: forall eff. Eff ( dom :: DOM | eff ) Number
foreign import windowHeight :: forall eff. Eff ( dom :: DOM | eff ) Number


foreign import data Audio :: !
foreign import data AudioContext :: *
foreign import data Osillator :: *
foreign import data Destination :: *

                    
class AudioNode node
instance osillatorAudioNode :: AudioNode Osillator
instance destinationAudioNode :: AudioNode Destination
      
foreign import createAudioContext :: forall eff. Eff ( audio :: Audio | eff ) AudioContext
foreign import createOscillator :: forall eff. AudioContext -> Eff ( audio :: Audio | eff ) Osillator 
foreign import createDestination :: forall eff. AudioContext -> Eff ( audio :: Audio | eff ) Osillator 
foreign import connect :: forall fromNode toNode eff. (AudioNode fromNode, AudioNode toNode) =>
        fromNode
        -> toNode
        -> Eff ( audio :: Audio | eff ) Unit 
foreign import start :: forall eff. Osillator -> Eff ( audio :: Audio | eff ) Osillator



main = do
  Just element <- getCanvasElementById "canvas"
  width <- windowWidth
  height <- windowHeight
  setCanvasWidth width element
  setCanvasHeight height element  
  context <- getContext2D element

  audioContext <- createAudioContext
  osillator <- createOscillator audioContext
  destination <- createDestination audioContext
  connect osillator destination
  start osillator

  runGraphics context $ do
    setFillStyle "#00FFFF"
    rect { x: 0.0, y: 0.0, w: 400.0, h: 600.0 }
    fill

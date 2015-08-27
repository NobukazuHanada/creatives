/* global exports, Main */
"use strict;"

// module Main

exports.windowWidth = function(){
    return window.document.documentElement.clientWidth;    
}


exports.windowHeight = function(){
    return window.document.documentElement.clientHeight; 
}

exports.createAudioContext = function(){
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    return new AudioContext();
}

exports.createOscillator = function(context){
    return function(){
        return context.createOscillator();
    };
}

exports.createDestination = function(context){
    return function(){
        return context.destination;
    };
}

exports.connect = function(_audioNode1){
    return function(_audioNode2){
        return function(node1){
            return function(node2){
                return function(){
                    node1.connect(node2);
                }
            }
        }
    }
}

exports.setFrequency = function(f){
    return function(osc){
        return function(){
            osc.frequency.value = f;
        }      
    }
}

exports.start = function(osc){
    return function(){
        osc.start();
    };
}

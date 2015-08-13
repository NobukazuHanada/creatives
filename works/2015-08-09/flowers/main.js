// Generated by psc-bundle 0.7.0.0
var PS = { };
(function(exports) {
  /* global exports */
  "use strict";

  // module Control.Monad.Eff

  exports.returnE = function (a) {
    return function () {
      return a;
    };
  };

  exports.bindE = function (a) {
    return function (f) {
      return function () {
        return f(a())();
      };
    };
  };

  exports.forE = function (lo) {
    return function (hi) {
      return function (f) {
        return function () {
          for (var i = lo; i < hi; i++) {
            f(i)();
          }
        };
      };
    };
  };

  exports.foreachE = function (as) {
    return function (f) {
      return function () {
        for (var i = 0, l = as.length; i < l; i++) {
          f(as[i])();
        }
      };
    };
  };
 
})(PS["Control.Monad.Eff"] = PS["Control.Monad.Eff"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  // module Prelude

  //- Functor --------------------------------------------------------------------

  exports.arrayMap = function (f) {
    return function (arr) {
      var l = arr.length;
      var result = new Array(l);
      for (var i = 0; i < l; i++) {
        result[i] = f(arr[i]);
      }
      return result;
    };
  };

  exports.numAdd = function (n1) {
    return function (n2) {
      return n1 + n2;
    };
  };

  exports.numMul = function (n1) {
    return function (n2) {
      return n1 * n2;
    };
  };

  exports.numDiv = function (n1) {
    return function (n2) {
      return n1 / n2;
    };
  };

  exports.numSub = function (n1) {
    return function (n2) {
      return n1 - n2;
    };
  };

  exports.showNumberImpl = function (n) {
    /* jshint bitwise: false */
    return n === (n | 0) ? n + ".0" : n.toString();
  };
 
})(PS["Prelude"] = PS["Prelude"] || {});
(function(exports) {
  // Generated by psc version 0.7.0.0
  "use strict";
  var $foreign = PS["Prelude"];
  var Functor = function (map) {
      this.map = map;
  };
  var Apply = function (__superclass_Prelude$dotFunctor_0, apply) {
      this["__superclass_Prelude.Functor_0"] = __superclass_Prelude$dotFunctor_0;
      this.apply = apply;
  };
  var Applicative = function (__superclass_Prelude$dotApply_0, pure) {
      this["__superclass_Prelude.Apply_0"] = __superclass_Prelude$dotApply_0;
      this.pure = pure;
  };
  var Bind = function (__superclass_Prelude$dotApply_0, bind) {
      this["__superclass_Prelude.Apply_0"] = __superclass_Prelude$dotApply_0;
      this.bind = bind;
  };
  var Monad = function (__superclass_Prelude$dotApplicative_0, __superclass_Prelude$dotBind_1) {
      this["__superclass_Prelude.Applicative_0"] = __superclass_Prelude$dotApplicative_0;
      this["__superclass_Prelude.Bind_1"] = __superclass_Prelude$dotBind_1;
  };
  var Semiring = function (add, mul, one, zero) {
      this.add = add;
      this.mul = mul;
      this.one = one;
      this.zero = zero;
  };
  var Ring = function (__superclass_Prelude$dotSemiring_0, sub) {
      this["__superclass_Prelude.Semiring_0"] = __superclass_Prelude$dotSemiring_0;
      this.sub = sub;
  };
  var ModuloSemiring = function (__superclass_Prelude$dotSemiring_0, div, mod) {
      this["__superclass_Prelude.Semiring_0"] = __superclass_Prelude$dotSemiring_0;
      this.div = div;
      this.mod = mod;
  };
  var DivisionRing = function (__superclass_Prelude$dotModuloSemiring_1, __superclass_Prelude$dotRing_0) {
      this["__superclass_Prelude.ModuloSemiring_1"] = __superclass_Prelude$dotModuloSemiring_1;
      this["__superclass_Prelude.Ring_0"] = __superclass_Prelude$dotRing_0;
  };
  var Num = function (__superclass_Prelude$dotDivisionRing_0) {
      this["__superclass_Prelude.DivisionRing_0"] = __superclass_Prelude$dotDivisionRing_0;
  };
  var Show = function (show) {
      this.show = show;
  };
  var zero = function (dict) {
      return dict.zero;
  };                                                                           
  var unit = {};
  var sub = function (dict) {
      return dict.sub;
  }; 
  var showNumber = new Show($foreign.showNumberImpl);
  var show = function (dict) {
      return dict.show;
  };             
  var semiringNumber = new Semiring($foreign.numAdd, $foreign.numMul, 1.0, 0.0);
  var ringNumber = new Ring(function () {
      return semiringNumber;
  }, $foreign.numSub);
  var pure = function (dict) {
      return dict.pure;
  };
  var $$return = function (__dict_Applicative_2) {
      return pure(__dict_Applicative_2);
  };                   
  var one = function (dict) {
      return dict.one;
  };
  var mul = function (dict) {
      return dict.mul;
  };
  var $times = function (__dict_Semiring_4) {
      return mul(__dict_Semiring_4);
  }; 
  var moduloSemiringNumber = new ModuloSemiring(function () {
      return semiringNumber;
  }, $foreign.numDiv, function (_30) {
      return function (_31) {
          return 0.0;
      };
  });                                  
  var mod = function (dict) {
      return dict.mod;
  };
  var map = function (dict) {
      return dict.map;
  };
  var $less$dollar$greater = function (__dict_Functor_5) {
      return map(__dict_Functor_5);
  };
  var functorArray = new Functor($foreign.arrayMap);
  var flip = function (f) {
      return function (b) {
          return function (a) {
              return f(a)(b);
          };
      };
  }; 
  var divisionRingNumber = new DivisionRing(function () {
      return moduloSemiringNumber;
  }, function () {
      return ringNumber;
  });
  var numNumber = new Num(function () {
      return divisionRingNumber;
  });
  var div = function (dict) {
      return dict.div;
  };
  var bind = function (dict) {
      return dict.bind;
  }; 
  var apply = function (dict) {
      return dict.apply;
  };
  var $less$times$greater = function (__dict_Apply_25) {
      return apply(__dict_Apply_25);
  };
  var liftA1 = function (__dict_Applicative_26) {
      return function (f) {
          return function (a) {
              return $less$times$greater(__dict_Applicative_26["__superclass_Prelude.Apply_0"]())(pure(__dict_Applicative_26)(f))(a);
          };
      };
  };
  var ap = function (__dict_Monad_30) {
      return function (f) {
          return function (a) {
              return bind(__dict_Monad_30["__superclass_Prelude.Bind_1"]())(f)(function (_6) {
                  return bind(__dict_Monad_30["__superclass_Prelude.Bind_1"]())(a)(function (_5) {
                      return $$return(__dict_Monad_30["__superclass_Prelude.Applicative_0"]())(_6(_5));
                  });
              });
          };
      };
  }; 
  var add = function (dict) {
      return dict.add;
  };
  exports["Show"] = Show;
  exports["DivisionRing"] = DivisionRing;
  exports["Num"] = Num;
  exports["Ring"] = Ring;
  exports["ModuloSemiring"] = ModuloSemiring;
  exports["Semiring"] = Semiring;
  exports["Monad"] = Monad;
  exports["Bind"] = Bind;
  exports["Applicative"] = Applicative;
  exports["Apply"] = Apply;
  exports["Functor"] = Functor;
  exports["show"] = show;
  exports["sub"] = sub;
  exports["mod"] = mod;
  exports["div"] = div;
  exports["*"] = $times;
  exports["one"] = one;
  exports["mul"] = mul;
  exports["zero"] = zero;
  exports["add"] = add;
  exports["ap"] = ap;
  exports["return"] = $$return;
  exports["bind"] = bind;
  exports["liftA1"] = liftA1;
  exports["pure"] = pure;
  exports["apply"] = apply;
  exports["<$>"] = $less$dollar$greater;
  exports["map"] = map;
  exports["flip"] = flip;
  exports["unit"] = unit;
  exports["functorArray"] = functorArray;
  exports["semiringNumber"] = semiringNumber;
  exports["ringNumber"] = ringNumber;
  exports["moduloSemiringNumber"] = moduloSemiringNumber;
  exports["divisionRingNumber"] = divisionRingNumber;
  exports["numNumber"] = numNumber;
  exports["showNumber"] = showNumber;;
 
})(PS["Prelude"] = PS["Prelude"] || {});
(function(exports) {
  // Generated by psc version 0.7.0.0
  "use strict";
  var $foreign = PS["Control.Monad.Eff"];
  var Prelude = PS["Prelude"];     
  var monadEff = new Prelude.Monad(function () {
      return applicativeEff;
  }, function () {
      return bindEff;
  });
  var bindEff = new Prelude.Bind(function () {
      return applyEff;
  }, $foreign.bindE);
  var applyEff = new Prelude.Apply(function () {
      return functorEff;
  }, Prelude.ap(monadEff));
  var applicativeEff = new Prelude.Applicative(function () {
      return applyEff;
  }, $foreign.returnE);
  var functorEff = new Prelude.Functor(Prelude.liftA1(applicativeEff));
  exports["functorEff"] = functorEff;
  exports["applyEff"] = applyEff;
  exports["applicativeEff"] = applicativeEff;
  exports["bindEff"] = bindEff;
  exports["monadEff"] = monadEff;
  exports["foreachE"] = $foreign.foreachE;
  exports["forE"] = $foreign.forE;;
 
})(PS["Control.Monad.Eff"] = PS["Control.Monad.Eff"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  // module Control.Monad.Eff.Random

  exports.random = Math.random;
 
})(PS["Control.Monad.Eff.Random"] = PS["Control.Monad.Eff.Random"] || {});
(function(exports) {
  // Generated by psc version 0.7.0.0
  "use strict";
  var $foreign = PS["Control.Monad.Eff.Random"];
  var Prelude = PS["Prelude"];
  var Data_Int = PS["Data.Int"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  exports["random"] = $foreign.random;;
 
})(PS["Control.Monad.Eff.Random"] = PS["Control.Monad.Eff.Random"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  exports.emptySTArray = function () {
    return [];
  };

  exports.pushAllSTArray = function (xs) {
    return function (as) {
      return function () {
        return xs.push.apply(xs, as);
      };
    };
  };

  exports.toAssocArray = function (xs) {
    return function () {
      var n = xs.length;
      var as = new Array(n);
      for (var i = 0; i < n; i++) as[i] = { value: xs[i], index: i };
      return as;
    };
  };
 
})(PS["Data.Array.ST"] = PS["Data.Array.ST"] || {});
(function(exports) {
  // Generated by psc version 0.7.0.0
  "use strict";
  var Prelude = PS["Prelude"];
  var Data_Functor_Invariant = PS["Data.Functor.Invariant"];
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Extend = PS["Control.Extend"];
  var Control_MonadPlus = PS["Control.MonadPlus"];
  var Control_Plus = PS["Control.Plus"];
  var Data_Monoid = PS["Data.Monoid"];     
  var Nothing = (function () {
      function Nothing() {

      };
      Nothing.value = new Nothing();
      return Nothing;
  })();
  var Just = (function () {
      function Just(value0) {
          this.value0 = value0;
      };
      Just.create = function (value0) {
          return new Just(value0);
      };
      return Just;
  })();
  exports["Nothing"] = Nothing;
  exports["Just"] = Just;;
 
})(PS["Data.Maybe"] = PS["Data.Maybe"] || {});
(function(exports) {
  // Generated by psc version 0.7.0.0
  "use strict";
  var $foreign = PS["Data.Array.ST"];
  var Prelude = PS["Prelude"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_ST = PS["Control.Monad.ST"];
  var Data_Maybe = PS["Data.Maybe"];
  var pushSTArray = function (arr) {
      return function (a) {
          return $foreign.pushAllSTArray(arr)([ a ]);
      };
  };
  exports["pushSTArray"] = pushSTArray;
  exports["toAssocArray"] = $foreign.toAssocArray;
  exports["emptySTArray"] = $foreign.emptySTArray;;
 
})(PS["Data.Array.ST"] = PS["Data.Array.ST"] || {});
(function(exports) {
  /* global exports */
  "use strict";            

  exports.cos = Math.cos;

  exports.pow = function (n) {
    return function (p) {
      return Math.pow(n, p);
    };
  };                         

  exports.sin = Math.sin;      

  exports.pi = Math.PI;      
 
})(PS["Math"] = PS["Math"] || {});
(function(exports) {
  // Generated by psc version 0.7.0.0
  "use strict";
  var $foreign = PS["Math"];
  exports["pi"] = $foreign.pi;
  exports["sin"] = $foreign.sin;
  exports["pow"] = $foreign.pow;
  exports["cos"] = $foreign.cos;;
 
})(PS["Math"] = PS["Math"] || {});
(function(exports) {
  // Generated by psc version 0.7.0.0
  "use strict";
  var Data_Array = PS["Data.Array"];
  var Data_TypeNat = PS["Data.TypeNat"];
  var Extensions = PS["Extensions"];
  var Prelude = PS["Prelude"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Monoid = PS["Data.Monoid"];
  var Control_Apply = PS["Control.Apply"];
  var $$Math = PS["Math"];
  var functorVec = new Prelude.Functor(function (f) {
      return function (_322) {
          return Prelude.map(Prelude.functorArray)(f)(_322);
      };
  });
  var scale = function (__dict_Num_5) {
      return function (s) {
          return function (v) {
              return Prelude["<$>"](functorVec)(function (e) {
                  return Prelude["*"](((__dict_Num_5["__superclass_Prelude.DivisionRing_0"]())["__superclass_Prelude.ModuloSemiring_1"]())["__superclass_Prelude.Semiring_0"]())(e)(s);
              })(v);
          };
      };
  };
  exports["scale"] = scale;
  exports["functorVec"] = functorVec;;
 
})(PS["Data.Vector"] = PS["Data.Vector"] || {});
(function(exports) {
  // Generated by psc version 0.7.0.0
  "use strict";
  var Prelude = PS["Prelude"];
  var Data_Array = PS["Data.Array"];
  var Data_Array_Unsafe = PS["Data.Array.Unsafe"];
  var Data_Maybe_Unsafe = PS["Data.Maybe.Unsafe"];
  var Data_Vector = PS["Data.Vector"];
  var Data_TypeNat = PS["Data.TypeNat"];
  var $$Math = PS["Math"];
  var vec2 = function (x) {
      return function (y) {
          return [ x, y ];
      };
  };                    
  var get2Y = function (_328) {
      return _328[1];
  };
  var get2X = function (_327) {
      return _327[0];
  };
  exports["get2Y"] = get2Y;
  exports["get2X"] = get2X;
  exports["vec2"] = vec2;;
 
})(PS["Data.Vector2"] = PS["Data.Vector2"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  // module Graphics.Canvas

  exports.getCanvasElementByIdImpl = function(id, Just, Nothing) {
      return function() {
          var el = document.getElementById(id);
          if (el && el instanceof HTMLCanvasElement) {
              return Just(el);
          } else {
              return Nothing;
          }
      };
  };

  exports.getContext2D = function(c) {
      return function() {
          return c.getContext('2d');
      };
  };

  exports.setCanvasWidth = function(width) {
      return function(canvas) {
          return function() {
              canvas.width = width;
              return canvas;
          };
      };
  };

  exports.setCanvasHeight = function(height) {
      return function(canvas) {
          return function() {
              canvas.height = height;
              return canvas;
          };
      };
  };

  exports.setLineWidth = function(width) {
      return function(ctx) {
          return function() {
              ctx.lineWidth = width;
              return ctx;
          };
      };
  };

  exports.setFillStyle = function(style) {
      return function(ctx) {
          return function() {
              ctx.fillStyle = style;
              return ctx;
          };
      };
  };

  exports.setGlobalAlpha = function(ctx) {
      return function(alpha) {
          return function() {
              ctx.setGlobalAlpha = alpha;
              return ctx;
          };
      };
  };

  exports.beginPath = function(ctx) {
      return function() {
          ctx.beginPath();
          return ctx;
      };
  };

  exports.fill = function(ctx) {
      return function() {
          ctx.fill();
          return ctx;
      };
  };

  exports.lineTo = function(ctx) {
      return function(x) {
          return function(y) {
              return function() {
                  ctx.lineTo(x, y);
                  return ctx;
              };
          };
      };
  };

  exports.closePath = function(ctx) {
      return function() {
          ctx.closePath();
          return ctx;
      };
  };

  exports.translate = function(t) {
      return function(ctx) {
          return function() {
              ctx.translate(t.translateX, t.translateY);
              return ctx;
          };
      };
  };

  exports.clearRect = function(ctx) {
      return function(r) {
          return function() {
              ctx.clearRect(r.x, r.y, r.w, r.h);
              return ctx;
          };
      };
  };
 
})(PS["Graphics.Canvas"] = PS["Graphics.Canvas"] || {});
(function(exports) {
  // Generated by psc version 0.7.0.0
  "use strict";
  var $foreign = PS["Graphics.Canvas"];
  var Data_Function = PS["Data.Function"];
  var Prelude = PS["Prelude"];
  var Data_Maybe = PS["Data.Maybe"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var getCanvasElementById = function (elId) {
      return $foreign.getCanvasElementByIdImpl(elId, Data_Maybe.Just.create, Data_Maybe.Nothing.value);
  };
  exports["getCanvasElementById"] = getCanvasElementById;
  exports["translate"] = $foreign.translate;
  exports["clearRect"] = $foreign.clearRect;
  exports["closePath"] = $foreign.closePath;
  exports["lineTo"] = $foreign.lineTo;
  exports["fill"] = $foreign.fill;
  exports["beginPath"] = $foreign.beginPath;
  exports["setGlobalAlpha"] = $foreign.setGlobalAlpha;
  exports["setFillStyle"] = $foreign.setFillStyle;
  exports["setLineWidth"] = $foreign.setLineWidth;
  exports["setCanvasHeight"] = $foreign.setCanvasHeight;
  exports["setCanvasWidth"] = $foreign.setCanvasWidth;
  exports["getContext2D"] = $foreign.getContext2D;;
 
})(PS["Graphics.Canvas"] = PS["Graphics.Canvas"] || {});
(function(exports) {
  /* global exports, Main */
  "use strict;"

  // module Main

  exports.windowWidth = function(){
      return window.document.documentElement.clientWidth;    
  }


  exports.windowHeight = function(){
      return window.document.documentElement.clientHeight; 
  }
 
})(PS["Main"] = PS["Main"] || {});
(function(exports) {
  // module Signal

  exports.constant =
    function constant(initial) {
      var subs = [];
      var val = initial;
      var sig = {
        subscribe: function(sub) {
          subs.push(sub);
          sub(val);
        },
        get: function() { return val; },
        set: function(newval) {
          val = newval;
          subs.forEach(function(sub) { sub(newval); });
        }
      };
      return sig;
    };

  exports.mapSigP =
    function mapSigP(constant) {
      return function(fun) {
        return function(sig) {
          var out = constant(fun(sig.get()));
          sig.subscribe(function(val) { out.set(fun(val)); });
          return out;
        };
      };
    };

  exports.foldpP =
    function foldpP(constant) {
      return function(fun) {
        return function(seed) {
          return function(sig) {
            var acc = seed;
            var out = constant(acc);
            sig.subscribe(function(val) {
              acc = fun(val)(acc);
              out.set(acc);
            });
            return out;
          };
        };
      };
    };

  exports.runSignal =
    function runSignal(sig) {
      return function() {
        sig.subscribe(function(val) {
          val();
        });
        return {};
      };
    };
 
})(PS["Signal"] = PS["Signal"] || {});
(function(exports) {
  // Generated by psc version 0.7.0.0
  "use strict";
  var $foreign = PS["Signal"];
  var Data_Foldable = PS["Data.Foldable"];
  var Prelude = PS["Prelude"];
  var Data_Maybe = PS["Data.Maybe"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];     
  var $tilde$greater = function (__dict_Functor_0) {
      return Prelude.flip(Prelude["<$>"](__dict_Functor_0));
  };                                                 
  var mapSig = $foreign.mapSigP($foreign.constant);
  var functorSignal = new Prelude.Functor(mapSig);
  var foldp = $foreign.foldpP($foreign.constant);
  exports["~>"] = $tilde$greater;
  exports["foldp"] = foldp;
  exports["functorSignal"] = functorSignal;
  exports["runSignal"] = $foreign.runSignal;
  exports["constant"] = $foreign.constant;;
 
})(PS["Signal"] = PS["Signal"] || {});
(function(exports) {
  // module Signal.Time

  function now() {
    var perf = typeof performance !== 'undefined' ? performance : null,
        proc = typeof process !== 'undefined' ? process : null;
    return (
      perf && (perf.now || perf.webkitNow || perf.msNow || perf.oNow || perf.mozNow) ||
      (proc && proc.hrtime && function() {
        var t = proc.hrtime();
        return (t[0] * 1e9 + t[1]) / 1e6;
      }) ||
      Date.now
    ).call(perf);
  };

  exports.now = now;

  exports.everyP = function everyP(constant) {
    return function(t) {
      var out = constant(now());
      setInterval(function() {
        out.set(now());
      }, t);
      return out;
    };
  };
 
})(PS["Signal.Time"] = PS["Signal.Time"] || {});
(function(exports) {
  // Generated by psc version 0.7.0.0
  "use strict";
  var $foreign = PS["Signal.Time"];
  var Signal = PS["Signal"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Timer = PS["Control.Timer"];
  var millisecond = 1.0;
  var every = $foreign.everyP(Signal.constant);
  exports["millisecond"] = millisecond;
  exports["every"] = every;;
 
})(PS["Signal.Time"] = PS["Signal.Time"] || {});
(function(exports) {
  // Generated by psc version 0.7.0.0
  "use strict";
  var $foreign = PS["Main"];
  var Prelude = PS["Prelude"];
  var Graphics_Canvas = PS["Graphics.Canvas"];
  var Data_Array_ST = PS["Data.Array.ST"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Eff_Random = PS["Control.Monad.Eff.Random"];
  var Signal = PS["Signal"];
  var Signal_Time = PS["Signal.Time"];
  var $$Math = PS["Math"];
  var Data_Vector = PS["Data.Vector"];
  var Data_Vector2 = PS["Data.Vector2"];
  var Control_Monad_Eff_Console = PS["Control.Monad.Eff.Console"];
  var Control_Monad_ST = PS["Control.Monad.ST"];
  var Control_Apply = PS["Control.Apply"];
  var Data_Maybe = PS["Data.Maybe"];
  var DOM = PS["DOM"];     
  var loop = Signal.foldp(function (a) {
      return function (b) {
          return b + 0.2;
      };
  })(0.0)(Signal_Time.every(50.0 * Signal_Time.millisecond));
  var line = function (context) {
      return function (origin) {
          return function (to) {
              var toY = Data_Vector2.get2Y(to) + 0.5;
              var toX = Data_Vector2.get2X(to) + 0.5;
              var originY = Data_Vector2.get2Y(origin) + 0.5;
              var originX = Data_Vector2.get2X(origin) + 0.5;
              return Graphics_Canvas.lineTo(context)(toX)(toY);
          };
      };
  };
  var func = function (angle) {
      return function (radius) {
          var a = radius / 20.0;
          return a * (10.0 * $$Math.pow($$Math.sin(angle / 2.0 + 1.0))(3.0)) + 20.0 * $$Math.sin(angle + 3.0);
      };
  };
  var draw = function (context) {
      return function (x) {
          return function (y) {
              return function (radius) {
                  return function (baseAngle) {
                      return function (color) {
                          return function __do() {
                              Graphics_Canvas.beginPath(context)();
                              Graphics_Canvas.translate({
                                  translateX: x, 
                                  translateY: y
                              })(context)();
                              Graphics_Canvas.setGlobalAlpha(context)(0.0)();
                              Graphics_Canvas.setLineWidth(2.5)(context)();
                              Graphics_Canvas.setFillStyle(color)(context)();
                              Control_Monad_Eff.forE(0.0)(200.0)(function (i) {
                                  var preAngle = ($$Math.pi * 2.0 * (i - 1.0)) / 200.0;
                                  var preR = func(preAngle * 10.0)(radius) + radius;
                                  var prePos = Data_Vector.scale(Prelude.numNumber)(preR)(Data_Vector2.vec2($$Math.sin(preAngle))($$Math.cos(preAngle)));
                                  var angle = ($$Math.pi * 2.0 * i) / 200.0;
                                  var r = func(angle * 10.0)(radius) + radius;
                                  var pos = Data_Vector.scale(Prelude.numNumber)(r)(Data_Vector2.vec2($$Math.sin(angle + baseAngle))($$Math.cos(angle + baseAngle)));
                                  return function __do() {
                                      line(context)(prePos)(pos)();
                                      return Prelude["return"](Control_Monad_Eff.applicativeEff)(Prelude.unit)();
                                  };
                              })();
                              Graphics_Canvas.closePath(context)();
                              Graphics_Canvas.fill(context)();
                              return Graphics_Canvas.translate({
                                  translateX: 0.0 - x, 
                                  translateY: 0.0 - y
                              })(context)();
                          };
                      };
                  };
              };
          };
      };
  };
  var main = function __do() {
      var _11 = Graphics_Canvas.getCanvasElementById("canvas")();
      if (_11 instanceof Data_Maybe.Just) {
          var _10 = $foreign.windowWidth();
          var _9 = $foreign.windowHeight();
          Graphics_Canvas.setCanvasWidth(_10)(_11.value0)();
          Graphics_Canvas.setCanvasHeight(_9)(_11.value0)();
          var _8 = Graphics_Canvas.getContext2D(_11.value0)();
          var _7 = Data_Array_ST.emptySTArray();
          Control_Monad_Eff.forE(0.0)(50.0)(function (_12) {
              return function __do() {
                  var _5 = Prelude.map(Control_Monad_Eff.functorEff)(function (_0) {
                      return _0 * _10;
                  })(Control_Monad_Eff_Random.random)();
                  var _4 = Prelude.map(Control_Monad_Eff.functorEff)(function (_1) {
                      return _1 * _9;
                  })(Control_Monad_Eff_Random.random)();
                  var _3 = Prelude.map(Control_Monad_Eff.functorEff)(function (x_1) {
                      return x_1 * 70.0 + 50.0;
                  })(Control_Monad_Eff_Random.random)();
                  var _2 = Prelude.map(Control_Monad_Eff.functorEff)(function (x_1) {
                      return "hsla(" + (Prelude.show(Prelude.showNumber)(x_1 * 360.0) + ",100%,50%, 0.4)");
                  })(Control_Monad_Eff_Random.random)();
                  Data_Array_ST.pushSTArray(_7)({
                      x: _5, 
                      y: _4, 
                      r: _3, 
                      c: _2
                  })();
                  return Prelude["return"](Control_Monad_Eff.applicativeEff)(Prelude.unit)();
              };
          })();
          return Signal.runSignal(Signal["~>"](Signal.functorSignal)(loop)(function (angle) {
              return function __do() {
                  Graphics_Canvas.clearRect(_8)({
                      x: 0.0, 
                      y: 0.0, 
                      w: _10, 
                      h: _9
                  })();
                  var _6 = Data_Array_ST.toAssocArray(_7)();
                  return Control_Monad_Eff.foreachE(_6)(function (_13) {
                      return function __do() {
                          draw(_8)(_13.value.x)(_13.value.y)(_13.value.r)(angle * (50.0 / _13.value.r))(_13.value.c)();
                          return Prelude["return"](Control_Monad_Eff.applicativeEff)(Prelude.unit)();
                      };
                  })();
              };
          }))();
      };
      throw new Error("Failed pattern match at /Users/hanadanobukazu/creatives/purescript/second/src/Main.purs line 23, column 1 - line 45, column 1: " + [ _11.constructor.name ]);
  };
  exports["line"] = line;
  exports["func"] = func;
  exports["draw"] = draw;
  exports["loop"] = loop;
  exports["main"] = main;
  exports["windowHeight"] = $foreign.windowHeight;
  exports["windowWidth"] = $foreign.windowWidth;;
 
})(PS["Main"] = PS["Main"] || {});

PS["Main"].main();
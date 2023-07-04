var Or = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function po(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function yo(r) {
  if (r.__esModule)
    return r;
  var t = r.default;
  if (typeof t == "function") {
    var e = function n() {
      if (this instanceof n) {
        var o = [null];
        o.push.apply(o, arguments);
        var a = Function.bind.apply(t, o);
        return new a();
      }
      return t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else
    e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(r).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(r, n);
    Object.defineProperty(e, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return r[n];
      }
    });
  }), e;
}
var Lr = Object.prototype.toString, tn = function(t) {
  var e = Lr.call(t), n = e === "[object Arguments]";
  return n || (n = e !== "[object Array]" && t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && Lr.call(t.callee) === "[object Function]"), n;
}, _t, Nr;
function vo() {
  if (Nr)
    return _t;
  Nr = 1;
  var r;
  if (!Object.keys) {
    var t = Object.prototype.hasOwnProperty, e = Object.prototype.toString, n = tn, o = Object.prototype.propertyIsEnumerable, a = !o.call({ toString: null }, "toString"), f = o.call(function() {
    }, "prototype"), i = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], u = function(s) {
      var p = s.constructor;
      return p && p.prototype === s;
    }, c = {
      $applicationCache: !0,
      $console: !0,
      $external: !0,
      $frame: !0,
      $frameElement: !0,
      $frames: !0,
      $innerHeight: !0,
      $innerWidth: !0,
      $onmozfullscreenchange: !0,
      $onmozfullscreenerror: !0,
      $outerHeight: !0,
      $outerWidth: !0,
      $pageXOffset: !0,
      $pageYOffset: !0,
      $parent: !0,
      $scrollLeft: !0,
      $scrollTop: !0,
      $scrollX: !0,
      $scrollY: !0,
      $self: !0,
      $webkitIndexedDB: !0,
      $webkitStorageInfo: !0,
      $window: !0
    }, y = function() {
      if (typeof window > "u")
        return !1;
      for (var s in window)
        try {
          if (!c["$" + s] && t.call(window, s) && window[s] !== null && typeof window[s] == "object")
            try {
              u(window[s]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    }(), l = function(s) {
      if (typeof window > "u" || !y)
        return u(s);
      try {
        return u(s);
      } catch {
        return !1;
      }
    };
    r = function(p) {
      var m = p !== null && typeof p == "object", S = e.call(p) === "[object Function]", O = n(p), $ = m && e.call(p) === "[object String]", b = [];
      if (!m && !S && !O)
        throw new TypeError("Object.keys called on a non-object");
      var I = f && S;
      if ($ && p.length > 0 && !t.call(p, 0))
        for (var h = 0; h < p.length; ++h)
          b.push(String(h));
      if (O && p.length > 0)
        for (var g = 0; g < p.length; ++g)
          b.push(String(g));
      else
        for (var d in p)
          !(I && d === "prototype") && t.call(p, d) && b.push(String(d));
      if (a)
        for (var A = l(p), w = 0; w < i.length; ++w)
          !(A && i[w] === "constructor") && t.call(p, i[w]) && b.push(i[w]);
      return b;
    };
  }
  return _t = r, _t;
}
var go = Array.prototype.slice, ho = tn, kr = Object.keys, yt = kr ? function(t) {
  return kr(t);
} : vo(), Rr = Object.keys;
yt.shim = function() {
  if (Object.keys) {
    var t = function() {
      var e = Object.keys(arguments);
      return e && e.length === arguments.length;
    }(1, 2);
    t || (Object.keys = function(n) {
      return ho(n) ? Rr(go.call(n)) : Rr(n);
    });
  } else
    Object.keys = yt;
  return Object.keys || yt;
};
var wr = yt, Dt = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var t = {}, e = Symbol("test"), n = Object(e);
  if (typeof e == "string" || Object.prototype.toString.call(e) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
    return !1;
  var o = 42;
  t[e] = o;
  for (e in t)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
    return !1;
  var a = Object.getOwnPropertySymbols(t);
  if (a.length !== 1 || a[0] !== e || !Object.prototype.propertyIsEnumerable.call(t, e))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var f = Object.getOwnPropertyDescriptor(t, e);
    if (f.value !== o || f.enumerable !== !0)
      return !1;
  }
  return !0;
}, Ur = typeof Symbol < "u" && Symbol, mo = Dt, Pr = function() {
  return typeof Ur != "function" || typeof Symbol != "function" || typeof Ur("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : mo();
}, zr = {
  foo: {}
}, So = Object, bo = function() {
  return { __proto__: zr }.foo === zr.foo && !({ __proto__: null } instanceof So);
}, $o = "Function.prototype.bind called on incompatible ", Wt = Array.prototype.slice, Ao = Object.prototype.toString, Oo = "[object Function]", wo = function(t) {
  var e = this;
  if (typeof e != "function" || Ao.call(e) !== Oo)
    throw new TypeError($o + e);
  for (var n = Wt.call(arguments, 1), o, a = function() {
    if (this instanceof o) {
      var y = e.apply(
        this,
        n.concat(Wt.call(arguments))
      );
      return Object(y) === y ? y : this;
    } else
      return e.apply(
        t,
        n.concat(Wt.call(arguments))
      );
  }, f = Math.max(0, e.length - n.length), i = [], u = 0; u < f; u++)
    i.push("$" + u);
  if (o = Function("binder", "return function (" + i.join(",") + "){ return binder.apply(this,arguments); }")(a), e.prototype) {
    var c = function() {
    };
    c.prototype = e.prototype, o.prototype = new c(), c.prototype = null;
  }
  return o;
}, Po = wo, Ir = Function.prototype.bind || Po, Io = Ir, rn = Io.call(Function.call, Object.prototype.hasOwnProperty), v, K = SyntaxError, en = Function, J = TypeError, Lt = function(r) {
  try {
    return en('"use strict"; return (' + r + ").constructor;")();
  } catch {
  }
}, U = Object.getOwnPropertyDescriptor;
if (U)
  try {
    U({}, "");
  } catch {
    U = null;
  }
var Nt = function() {
  throw new J();
}, Eo = U ? function() {
  try {
    return arguments.callee, Nt;
  } catch {
    try {
      return U(arguments, "callee").get;
    } catch {
      return Nt;
    }
  }
}() : Nt, q = Pr(), jo = bo(), P = Object.getPrototypeOf || (jo ? function(r) {
  return r.__proto__;
} : null), H = {}, To = typeof Uint8Array > "u" || !P ? v : P(Uint8Array), z = {
  "%AggregateError%": typeof AggregateError > "u" ? v : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? v : ArrayBuffer,
  "%ArrayIteratorPrototype%": q && P ? P([][Symbol.iterator]()) : v,
  "%AsyncFromSyncIteratorPrototype%": v,
  "%AsyncFunction%": H,
  "%AsyncGenerator%": H,
  "%AsyncGeneratorFunction%": H,
  "%AsyncIteratorPrototype%": H,
  "%Atomics%": typeof Atomics > "u" ? v : Atomics,
  "%BigInt%": typeof BigInt > "u" ? v : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? v : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? v : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? v : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? v : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? v : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? v : FinalizationRegistry,
  "%Function%": en,
  "%GeneratorFunction%": H,
  "%Int8Array%": typeof Int8Array > "u" ? v : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? v : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? v : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": q && P ? P(P([][Symbol.iterator]())) : v,
  "%JSON%": typeof JSON == "object" ? JSON : v,
  "%Map%": typeof Map > "u" ? v : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !q || !P ? v : P((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? v : Promise,
  "%Proxy%": typeof Proxy > "u" ? v : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? v : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? v : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !q || !P ? v : P((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? v : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": q && P ? P(""[Symbol.iterator]()) : v,
  "%Symbol%": q ? Symbol : v,
  "%SyntaxError%": K,
  "%ThrowTypeError%": Eo,
  "%TypedArray%": To,
  "%TypeError%": J,
  "%Uint8Array%": typeof Uint8Array > "u" ? v : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? v : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? v : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? v : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? v : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? v : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? v : WeakSet
};
if (P)
  try {
    null.error;
  } catch (r) {
    var xo = P(P(r));
    z["%Error.prototype%"] = xo;
  }
var Bo = function r(t) {
  var e;
  if (t === "%AsyncFunction%")
    e = Lt("async function () {}");
  else if (t === "%GeneratorFunction%")
    e = Lt("function* () {}");
  else if (t === "%AsyncGeneratorFunction%")
    e = Lt("async function* () {}");
  else if (t === "%AsyncGenerator%") {
    var n = r("%AsyncGeneratorFunction%");
    n && (e = n.prototype);
  } else if (t === "%AsyncIteratorPrototype%") {
    var o = r("%AsyncGenerator%");
    o && P && (e = P(o.prototype));
  }
  return z[t] = e, e;
}, Gr = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, ft = Ir, $t = rn, Mo = ft.call(Function.call, Array.prototype.concat), Do = ft.call(Function.apply, Array.prototype.splice), Vr = ft.call(Function.call, String.prototype.replace), At = ft.call(Function.call, String.prototype.slice), Fo = ft.call(Function.call, RegExp.prototype.exec), Co = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, _o = /\\(\\)?/g, Wo = function(t) {
  var e = At(t, 0, 1), n = At(t, -1);
  if (e === "%" && n !== "%")
    throw new K("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && e !== "%")
    throw new K("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return Vr(t, Co, function(a, f, i, u) {
    o[o.length] = i ? Vr(u, _o, "$1") : f || a;
  }), o;
}, Lo = function(t, e) {
  var n = t, o;
  if ($t(Gr, n) && (o = Gr[n], n = "%" + o[0] + "%"), $t(z, n)) {
    var a = z[n];
    if (a === H && (a = Bo(n)), typeof a > "u" && !e)
      throw new J("intrinsic " + t + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: n,
      value: a
    };
  }
  throw new K("intrinsic " + t + " does not exist!");
}, C = function(t, e) {
  if (typeof t != "string" || t.length === 0)
    throw new J("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof e != "boolean")
    throw new J('"allowMissing" argument must be a boolean');
  if (Fo(/^%?[^%]*%?$/, t) === null)
    throw new K("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = Wo(t), o = n.length > 0 ? n[0] : "", a = Lo("%" + o + "%", e), f = a.name, i = a.value, u = !1, c = a.alias;
  c && (o = c[0], Do(n, Mo([0, 1], c)));
  for (var y = 1, l = !0; y < n.length; y += 1) {
    var s = n[y], p = At(s, 0, 1), m = At(s, -1);
    if ((p === '"' || p === "'" || p === "`" || m === '"' || m === "'" || m === "`") && p !== m)
      throw new K("property names with quotes must have matching quotes");
    if ((s === "constructor" || !l) && (u = !0), o += "." + s, f = "%" + o + "%", $t(z, f))
      i = z[f];
    else if (i != null) {
      if (!(s in i)) {
        if (!e)
          throw new J("base intrinsic for " + t + " exists, but the property is not available.");
        return;
      }
      if (U && y + 1 >= n.length) {
        var S = U(i, s);
        l = !!S, l && "get" in S && !("originalValue" in S.get) ? i = S.get : i = i[s];
      } else
        l = $t(i, s), i = i[s];
      l && !u && (z[f] = i);
    }
  }
  return i;
}, No = C, nr = No("%Object.defineProperty%", !0), or = function() {
  if (nr)
    try {
      return nr({}, "a", { value: 1 }), !0;
    } catch {
      return !1;
    }
  return !1;
};
or.hasArrayLengthDefineBug = function() {
  if (!or())
    return null;
  try {
    return nr([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var ko = or, Ro = wr, Uo = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", zo = Object.prototype.toString, Go = Array.prototype.concat, nn = Object.defineProperty, Vo = function(r) {
  return typeof r == "function" && zo.call(r) === "[object Function]";
}, qo = ko(), on = nn && qo, Ho = function(r, t, e, n) {
  if (t in r) {
    if (n === !0) {
      if (r[t] === e)
        return;
    } else if (!Vo(n) || !n())
      return;
  }
  on ? nn(r, t, {
    configurable: !0,
    enumerable: !1,
    value: e,
    writable: !0
  }) : r[t] = e;
}, an = function(r, t) {
  var e = arguments.length > 2 ? arguments[2] : {}, n = Ro(t);
  Uo && (n = Go.call(n, Object.getOwnPropertySymbols(t)));
  for (var o = 0; o < n.length; o += 1)
    Ho(r, n[o], t[n[o]], e[n[o]]);
};
an.supportsDescriptors = !!on;
var G = an, fn = { exports: {} };
(function(r) {
  var t = Ir, e = C, n = e("%Function.prototype.apply%"), o = e("%Function.prototype.call%"), a = e("%Reflect.apply%", !0) || t.call(o, n), f = e("%Object.getOwnPropertyDescriptor%", !0), i = e("%Object.defineProperty%", !0), u = e("%Math.max%");
  if (i)
    try {
      i({}, "a", { value: 1 });
    } catch {
      i = null;
    }
  r.exports = function(l) {
    var s = a(t, o, arguments);
    if (f && i) {
      var p = f(s, "length");
      p.configurable && i(
        s,
        "length",
        { value: 1 + u(0, l.length - (arguments.length - 1)) }
      );
    }
    return s;
  };
  var c = function() {
    return a(t, n, arguments);
  };
  i ? i(r.exports, "apply", { value: c }) : r.exports.apply = c;
})(fn);
var ut = fn.exports, un = C, sn = ut, Qo = sn(un("String.prototype.indexOf")), T = function(t, e) {
  var n = un(t, !!e);
  return typeof n == "function" && Qo(t, ".prototype.") > -1 ? sn(n) : n;
}, Jo = wr, cn = Dt(), ln = T, qr = Object, Ko = ln("Array.prototype.push"), Hr = ln("Object.prototype.propertyIsEnumerable"), Yo = cn ? Object.getOwnPropertySymbols : null, pn = function(t, e) {
  if (t == null)
    throw new TypeError("target must be an object");
  var n = qr(t);
  if (arguments.length === 1)
    return n;
  for (var o = 1; o < arguments.length; ++o) {
    var a = qr(arguments[o]), f = Jo(a), i = cn && (Object.getOwnPropertySymbols || Yo);
    if (i)
      for (var u = i(a), c = 0; c < u.length; ++c) {
        var y = u[c];
        Hr(a, y) && Ko(f, y);
      }
    for (var l = 0; l < f.length; ++l) {
      var s = f[l];
      if (Hr(a, s)) {
        var p = a[s];
        n[s] = p;
      }
    }
  }
  return n;
}, kt = pn, Zo = function() {
  if (!Object.assign)
    return !1;
  for (var r = "abcdefghijklmnopqrst", t = r.split(""), e = {}, n = 0; n < t.length; ++n)
    e[t[n]] = t[n];
  var o = Object.assign({}, e), a = "";
  for (var f in o)
    a += f;
  return r !== a;
}, Xo = function() {
  if (!Object.assign || !Object.preventExtensions)
    return !1;
  var r = Object.preventExtensions({ 1: 2 });
  try {
    Object.assign(r, "xy");
  } catch {
    return r[1] === "y";
  }
  return !1;
}, yn = function() {
  return !Object.assign || Zo() || Xo() ? kt : Object.assign;
}, ta = G, ra = yn, ea = function() {
  var t = ra();
  return ta(
    Object,
    { assign: t },
    { assign: function() {
      return Object.assign !== t;
    } }
  ), t;
}, na = G, oa = ut, aa = pn, vn = yn, ia = ea, fa = oa.apply(vn()), gn = function(t, e) {
  return fa(Object, arguments);
};
na(gn, {
  getPolyfill: vn,
  implementation: aa,
  shim: ia
});
var ua = gn, dn = { exports: {} }, it = function() {
  return typeof function() {
  }.name == "string";
}, nt = Object.getOwnPropertyDescriptor;
if (nt)
  try {
    nt([], "length");
  } catch {
    nt = null;
  }
it.functionsHaveConfigurableNames = function() {
  if (!it() || !nt)
    return !1;
  var t = nt(function() {
  }, "name");
  return !!t && !!t.configurable;
};
var sa = Function.prototype.bind;
it.boundFunctionsHaveNames = function() {
  return it() && typeof sa == "function" && function() {
  }.bind().name !== "";
};
var ca = it;
(function(r) {
  var t = ca.functionsHaveConfigurableNames(), e = Object, n = TypeError;
  r.exports = function() {
    if (this != null && this !== e(this))
      throw new n("RegExp.prototype.flags getter called on non-object");
    var a = "";
    return this.hasIndices && (a += "d"), this.global && (a += "g"), this.ignoreCase && (a += "i"), this.multiline && (a += "m"), this.dotAll && (a += "s"), this.unicode && (a += "u"), this.unicodeSets && (a += "v"), this.sticky && (a += "y"), a;
  }, t && Object.defineProperty && Object.defineProperty(r.exports, "name", { value: "get flags" });
})(dn);
var hn = dn.exports, la = hn, pa = G.supportsDescriptors, ya = Object.getOwnPropertyDescriptor, mn = function() {
  if (pa && /a/mig.flags === "gim") {
    var t = ya(RegExp.prototype, "flags");
    if (t && typeof t.get == "function" && typeof RegExp.prototype.dotAll == "boolean" && typeof RegExp.prototype.hasIndices == "boolean") {
      var e = "", n = {};
      if (Object.defineProperty(n, "hasIndices", {
        get: function() {
          e += "d";
        }
      }), Object.defineProperty(n, "sticky", {
        get: function() {
          e += "y";
        }
      }), e === "dy")
        return t.get;
    }
  }
  return la;
}, va = G.supportsDescriptors, ga = mn, da = Object.getOwnPropertyDescriptor, ha = Object.defineProperty, ma = TypeError, Qr = Object.getPrototypeOf, Sa = /a/, ba = function() {
  if (!va || !Qr)
    throw new ma("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
  var t = ga(), e = Qr(Sa), n = da(e, "flags");
  return (!n || n.get !== t) && ha(e, "flags", {
    configurable: !0,
    enumerable: !1,
    get: t
  }), t;
}, $a = G, Aa = ut, Oa = hn, Sn = mn, wa = ba, bn = Aa(Sn());
$a(bn, {
  getPolyfill: Sn,
  implementation: Oa,
  shim: wa
});
var Pa = bn, vt = { exports: {} }, Ia = Dt, k = function() {
  return Ia() && !!Symbol.toStringTag;
}, Ea = k(), ja = T, ar = ja("Object.prototype.toString"), Ft = function(t) {
  return Ea && t && typeof t == "object" && Symbol.toStringTag in t ? !1 : ar(t) === "[object Arguments]";
}, $n = function(t) {
  return Ft(t) ? !0 : t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && ar(t) !== "[object Array]" && ar(t.callee) === "[object Function]";
}, Ta = function() {
  return Ft(arguments);
}();
Ft.isLegacyArguments = $n;
var An = Ta ? Ft : $n;
const xa = {}, Ba = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xa
}, Symbol.toStringTag, { value: "Module" })), Ma = /* @__PURE__ */ yo(Ba);
var Er = typeof Map == "function" && Map.prototype, Rt = Object.getOwnPropertyDescriptor && Er ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Ot = Er && Rt && typeof Rt.get == "function" ? Rt.get : null, Jr = Er && Map.prototype.forEach, jr = typeof Set == "function" && Set.prototype, Ut = Object.getOwnPropertyDescriptor && jr ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, wt = jr && Ut && typeof Ut.get == "function" ? Ut.get : null, Kr = jr && Set.prototype.forEach, Da = typeof WeakMap == "function" && WeakMap.prototype, ot = Da ? WeakMap.prototype.has : null, Fa = typeof WeakSet == "function" && WeakSet.prototype, at = Fa ? WeakSet.prototype.has : null, Ca = typeof WeakRef == "function" && WeakRef.prototype, Yr = Ca ? WeakRef.prototype.deref : null, _a = Boolean.prototype.valueOf, Wa = Object.prototype.toString, La = Function.prototype.toString, Na = String.prototype.match, Tr = String.prototype.slice, N = String.prototype.replace, ka = String.prototype.toUpperCase, Zr = String.prototype.toLowerCase, On = RegExp.prototype.test, Xr = Array.prototype.concat, F = Array.prototype.join, Ra = Array.prototype.slice, te = Math.floor, ir = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, zt = Object.getOwnPropertySymbols, fr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Y = typeof Symbol == "function" && typeof Symbol.iterator == "object", j = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Y || "symbol") ? Symbol.toStringTag : null, wn = Object.prototype.propertyIsEnumerable, re = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(r) {
  return r.__proto__;
} : null);
function ee(r, t) {
  if (r === 1 / 0 || r === -1 / 0 || r !== r || r && r > -1e3 && r < 1e3 || On.call(/e/, t))
    return t;
  var e = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof r == "number") {
    var n = r < 0 ? -te(-r) : te(r);
    if (n !== r) {
      var o = String(n), a = Tr.call(t, o.length + 1);
      return N.call(o, e, "$&_") + "." + N.call(N.call(a, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return N.call(t, e, "$&_");
}
var ur = Ma, ne = ur.custom, oe = In(ne) ? ne : null, Ua = function r(t, e, n, o) {
  var a = e || {};
  if (L(a, "quoteStyle") && a.quoteStyle !== "single" && a.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (L(a, "maxStringLength") && (typeof a.maxStringLength == "number" ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0 : a.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var f = L(a, "customInspect") ? a.customInspect : !0;
  if (typeof f != "boolean" && f !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (L(a, "indent") && a.indent !== null && a.indent !== "	" && !(parseInt(a.indent, 10) === a.indent && a.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (L(a, "numericSeparator") && typeof a.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var i = a.numericSeparator;
  if (typeof t > "u")
    return "undefined";
  if (t === null)
    return "null";
  if (typeof t == "boolean")
    return t ? "true" : "false";
  if (typeof t == "string")
    return jn(t, a);
  if (typeof t == "number") {
    if (t === 0)
      return 1 / 0 / t > 0 ? "0" : "-0";
    var u = String(t);
    return i ? ee(t, u) : u;
  }
  if (typeof t == "bigint") {
    var c = String(t) + "n";
    return i ? ee(t, c) : c;
  }
  var y = typeof a.depth > "u" ? 5 : a.depth;
  if (typeof n > "u" && (n = 0), n >= y && y > 0 && typeof t == "object")
    return sr(t) ? "[Array]" : "[Object]";
  var l = ii(a, n);
  if (typeof o > "u")
    o = [];
  else if (En(o, t) >= 0)
    return "[Circular]";
  function s(V, st, lo) {
    if (st && (o = Ra.call(o), o.push(st)), lo) {
      var Wr = {
        depth: a.depth
      };
      return L(a, "quoteStyle") && (Wr.quoteStyle = a.quoteStyle), r(V, Wr, n + 1, o);
    }
    return r(V, a, n + 1, o);
  }
  if (typeof t == "function" && !ae(t)) {
    var p = Ya(t), m = ct(t, s);
    return "[Function" + (p ? ": " + p : " (anonymous)") + "]" + (m.length > 0 ? " { " + F.call(m, ", ") + " }" : "");
  }
  if (In(t)) {
    var S = Y ? N.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : fr.call(t);
    return typeof t == "object" && !Y ? tt(S) : S;
  }
  if (ni(t)) {
    for (var O = "<" + Zr.call(String(t.nodeName)), $ = t.attributes || [], b = 0; b < $.length; b++)
      O += " " + $[b].name + "=" + Pn(za($[b].value), "double", a);
    return O += ">", t.childNodes && t.childNodes.length && (O += "..."), O += "</" + Zr.call(String(t.nodeName)) + ">", O;
  }
  if (sr(t)) {
    if (t.length === 0)
      return "[]";
    var I = ct(t, s);
    return l && !ai(I) ? "[" + cr(I, l) + "]" : "[ " + F.call(I, ", ") + " ]";
  }
  if (Va(t)) {
    var h = ct(t, s);
    return !("cause" in Error.prototype) && "cause" in t && !wn.call(t, "cause") ? "{ [" + String(t) + "] " + F.call(Xr.call("[cause]: " + s(t.cause), h), ", ") + " }" : h.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + F.call(h, ", ") + " }";
  }
  if (typeof t == "object" && f) {
    if (oe && typeof t[oe] == "function" && ur)
      return ur(t, { depth: y - n });
    if (f !== "symbol" && typeof t.inspect == "function")
      return t.inspect();
  }
  if (Za(t)) {
    var g = [];
    return Jr && Jr.call(t, function(V, st) {
      g.push(s(st, t, !0) + " => " + s(V, t));
    }), ie("Map", Ot.call(t), g, l);
  }
  if (ri(t)) {
    var d = [];
    return Kr && Kr.call(t, function(V) {
      d.push(s(V, t));
    }), ie("Set", wt.call(t), d, l);
  }
  if (Xa(t))
    return Gt("WeakMap");
  if (ei(t))
    return Gt("WeakSet");
  if (ti(t))
    return Gt("WeakRef");
  if (Ha(t))
    return tt(s(Number(t)));
  if (Ja(t))
    return tt(s(ir.call(t)));
  if (Qa(t))
    return tt(_a.call(t));
  if (qa(t))
    return tt(s(String(t)));
  if (!Ga(t) && !ae(t)) {
    var A = ct(t, s), w = re ? re(t) === Object.prototype : t instanceof Object || t.constructor === Object, E = t instanceof Object ? "" : "null prototype", x = !w && j && Object(t) === t && j in t ? Tr.call(R(t), 8, -1) : E ? "Object" : "", B = w || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "", Ct = B + (x || E ? "[" + F.call(Xr.call([], x || [], E || []), ": ") + "] " : "");
    return A.length === 0 ? Ct + "{}" : l ? Ct + "{" + cr(A, l) + "}" : Ct + "{ " + F.call(A, ", ") + " }";
  }
  return String(t);
};
function Pn(r, t, e) {
  var n = (e.quoteStyle || t) === "double" ? '"' : "'";
  return n + r + n;
}
function za(r) {
  return N.call(String(r), /"/g, "&quot;");
}
function sr(r) {
  return R(r) === "[object Array]" && (!j || !(typeof r == "object" && j in r));
}
function Ga(r) {
  return R(r) === "[object Date]" && (!j || !(typeof r == "object" && j in r));
}
function ae(r) {
  return R(r) === "[object RegExp]" && (!j || !(typeof r == "object" && j in r));
}
function Va(r) {
  return R(r) === "[object Error]" && (!j || !(typeof r == "object" && j in r));
}
function qa(r) {
  return R(r) === "[object String]" && (!j || !(typeof r == "object" && j in r));
}
function Ha(r) {
  return R(r) === "[object Number]" && (!j || !(typeof r == "object" && j in r));
}
function Qa(r) {
  return R(r) === "[object Boolean]" && (!j || !(typeof r == "object" && j in r));
}
function In(r) {
  if (Y)
    return r && typeof r == "object" && r instanceof Symbol;
  if (typeof r == "symbol")
    return !0;
  if (!r || typeof r != "object" || !fr)
    return !1;
  try {
    return fr.call(r), !0;
  } catch {
  }
  return !1;
}
function Ja(r) {
  if (!r || typeof r != "object" || !ir)
    return !1;
  try {
    return ir.call(r), !0;
  } catch {
  }
  return !1;
}
var Ka = Object.prototype.hasOwnProperty || function(r) {
  return r in this;
};
function L(r, t) {
  return Ka.call(r, t);
}
function R(r) {
  return Wa.call(r);
}
function Ya(r) {
  if (r.name)
    return r.name;
  var t = Na.call(La.call(r), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function En(r, t) {
  if (r.indexOf)
    return r.indexOf(t);
  for (var e = 0, n = r.length; e < n; e++)
    if (r[e] === t)
      return e;
  return -1;
}
function Za(r) {
  if (!Ot || !r || typeof r != "object")
    return !1;
  try {
    Ot.call(r);
    try {
      wt.call(r);
    } catch {
      return !0;
    }
    return r instanceof Map;
  } catch {
  }
  return !1;
}
function Xa(r) {
  if (!ot || !r || typeof r != "object")
    return !1;
  try {
    ot.call(r, ot);
    try {
      at.call(r, at);
    } catch {
      return !0;
    }
    return r instanceof WeakMap;
  } catch {
  }
  return !1;
}
function ti(r) {
  if (!Yr || !r || typeof r != "object")
    return !1;
  try {
    return Yr.call(r), !0;
  } catch {
  }
  return !1;
}
function ri(r) {
  if (!wt || !r || typeof r != "object")
    return !1;
  try {
    wt.call(r);
    try {
      Ot.call(r);
    } catch {
      return !0;
    }
    return r instanceof Set;
  } catch {
  }
  return !1;
}
function ei(r) {
  if (!at || !r || typeof r != "object")
    return !1;
  try {
    at.call(r, at);
    try {
      ot.call(r, ot);
    } catch {
      return !0;
    }
    return r instanceof WeakSet;
  } catch {
  }
  return !1;
}
function ni(r) {
  return !r || typeof r != "object" ? !1 : typeof HTMLElement < "u" && r instanceof HTMLElement ? !0 : typeof r.nodeName == "string" && typeof r.getAttribute == "function";
}
function jn(r, t) {
  if (r.length > t.maxStringLength) {
    var e = r.length - t.maxStringLength, n = "... " + e + " more character" + (e > 1 ? "s" : "");
    return jn(Tr.call(r, 0, t.maxStringLength), t) + n;
  }
  var o = N.call(N.call(r, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, oi);
  return Pn(o, "single", t);
}
function oi(r) {
  var t = r.charCodeAt(0), e = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[t];
  return e ? "\\" + e : "\\x" + (t < 16 ? "0" : "") + ka.call(t.toString(16));
}
function tt(r) {
  return "Object(" + r + ")";
}
function Gt(r) {
  return r + " { ? }";
}
function ie(r, t, e, n) {
  var o = n ? cr(e, n) : F.call(e, ", ");
  return r + " (" + t + ") {" + o + "}";
}
function ai(r) {
  for (var t = 0; t < r.length; t++)
    if (En(r[t], `
`) >= 0)
      return !1;
  return !0;
}
function ii(r, t) {
  var e;
  if (r.indent === "	")
    e = "	";
  else if (typeof r.indent == "number" && r.indent > 0)
    e = F.call(Array(r.indent + 1), " ");
  else
    return null;
  return {
    base: e,
    prev: F.call(Array(t + 1), e)
  };
}
function cr(r, t) {
  if (r.length === 0)
    return "";
  var e = `
` + t.prev + t.base;
  return e + F.call(r, "," + e) + `
` + t.prev;
}
function ct(r, t) {
  var e = sr(r), n = [];
  if (e) {
    n.length = r.length;
    for (var o = 0; o < r.length; o++)
      n[o] = L(r, o) ? t(r[o], r) : "";
  }
  var a = typeof zt == "function" ? zt(r) : [], f;
  if (Y) {
    f = {};
    for (var i = 0; i < a.length; i++)
      f["$" + a[i]] = a[i];
  }
  for (var u in r)
    L(r, u) && (e && String(Number(u)) === u && u < r.length || Y && f["$" + u] instanceof Symbol || (On.call(/[^\w$]/, u) ? n.push(t(u, r) + ": " + t(r[u], r)) : n.push(u + ": " + t(r[u], r))));
  if (typeof zt == "function")
    for (var c = 0; c < a.length; c++)
      wn.call(r, a[c]) && n.push("[" + t(a[c]) + "]: " + t(r[a[c]], r));
  return n;
}
var xr = C, X = T, fi = Ua, ui = xr("%TypeError%"), lt = xr("%WeakMap%", !0), pt = xr("%Map%", !0), si = X("WeakMap.prototype.get", !0), ci = X("WeakMap.prototype.set", !0), li = X("WeakMap.prototype.has", !0), pi = X("Map.prototype.get", !0), yi = X("Map.prototype.set", !0), vi = X("Map.prototype.has", !0), Br = function(r, t) {
  for (var e = r, n; (n = e.next) !== null; e = n)
    if (n.key === t)
      return e.next = n.next, n.next = r.next, r.next = n, n;
}, gi = function(r, t) {
  var e = Br(r, t);
  return e && e.value;
}, di = function(r, t, e) {
  var n = Br(r, t);
  n ? n.value = e : r.next = {
    // eslint-disable-line no-param-reassign
    key: t,
    next: r.next,
    value: e
  };
}, hi = function(r, t) {
  return !!Br(r, t);
}, Tn = function() {
  var t, e, n, o = {
    assert: function(a) {
      if (!o.has(a))
        throw new ui("Side channel does not contain " + fi(a));
    },
    get: function(a) {
      if (lt && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return si(t, a);
      } else if (pt) {
        if (e)
          return pi(e, a);
      } else if (n)
        return gi(n, a);
    },
    has: function(a) {
      if (lt && a && (typeof a == "object" || typeof a == "function")) {
        if (t)
          return li(t, a);
      } else if (pt) {
        if (e)
          return vi(e, a);
      } else if (n)
        return hi(n, a);
      return !1;
    },
    set: function(a, f) {
      lt && a && (typeof a == "object" || typeof a == "function") ? (t || (t = new lt()), ci(t, a, f)) : pt ? (e || (e = new pt()), yi(e, a, f)) : (n || (n = { key: {}, next: null }), di(n, a, f));
    }
  };
  return o;
}, mi = C, Si = rn, rt = Tn(), W = mi("%TypeError%"), Mr = {
  assert: function(r, t) {
    if (!r || typeof r != "object" && typeof r != "function")
      throw new W("`O` is not an object");
    if (typeof t != "string")
      throw new W("`slot` must be a string");
    if (rt.assert(r), !Mr.has(r, t))
      throw new W("`" + t + "` is not present on `O`");
  },
  get: function(r, t) {
    if (!r || typeof r != "object" && typeof r != "function")
      throw new W("`O` is not an object");
    if (typeof t != "string")
      throw new W("`slot` must be a string");
    var e = rt.get(r);
    return e && e["$" + t];
  },
  has: function(r, t) {
    if (!r || typeof r != "object" && typeof r != "function")
      throw new W("`O` is not an object");
    if (typeof t != "string")
      throw new W("`slot` must be a string");
    var e = rt.get(r);
    return !!e && Si(e, "$" + t);
  },
  set: function(r, t, e) {
    if (!r || typeof r != "object" && typeof r != "function")
      throw new W("`O` is not an object");
    if (typeof t != "string")
      throw new W("`slot` must be a string");
    var n = rt.get(r);
    n || (n = {}, rt.set(r, n)), n["$" + t] = e;
  }
};
Object.freeze && Object.freeze(Mr);
var bi = Mr, et = bi, $i = SyntaxError, fe = typeof StopIteration == "object" ? StopIteration : null, Ai = function(t) {
  if (!fe)
    throw new $i("this environment lacks StopIteration");
  et.set(t, "[[Done]]", !1);
  var e = {
    next: function() {
      var o = et.get(this, "[[Iterator]]"), a = et.get(o, "[[Done]]");
      try {
        return {
          done: a,
          value: a ? void 0 : o.next()
        };
      } catch (f) {
        if (et.set(o, "[[Done]]", !0), f !== fe)
          throw f;
        return {
          done: !0,
          value: void 0
        };
      }
    }
  };
  return et.set(e, "[[Iterator]]", t), e;
}, Oi = {}.toString, xn = Array.isArray || function(r) {
  return Oi.call(r) == "[object Array]";
}, wi = String.prototype.valueOf, Pi = function(t) {
  try {
    return wi.call(t), !0;
  } catch {
    return !1;
  }
}, Ii = Object.prototype.toString, Ei = "[object String]", ji = k(), Bn = function(t) {
  return typeof t == "string" ? !0 : typeof t != "object" ? !1 : ji ? Pi(t) : Ii.call(t) === Ei;
}, Dr = typeof Map == "function" && Map.prototype ? Map : null, Ti = typeof Set == "function" && Set.prototype ? Set : null, Pt;
Dr || (Pt = function(t) {
  return !1;
});
var Mn = Dr ? Map.prototype.has : null, ue = Ti ? Set.prototype.has : null;
!Pt && !Mn && (Pt = function(t) {
  return !1;
});
var Dn = Pt || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (Mn.call(t), ue)
      try {
        ue.call(t);
      } catch {
        return !0;
      }
    return t instanceof Dr;
  } catch {
  }
  return !1;
}, xi = typeof Map == "function" && Map.prototype ? Map : null, Fr = typeof Set == "function" && Set.prototype ? Set : null, It;
Fr || (It = function(t) {
  return !1;
});
var se = xi ? Map.prototype.has : null, Fn = Fr ? Set.prototype.has : null;
!It && !Fn && (It = function(t) {
  return !1;
});
var Cn = It || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (Fn.call(t), se)
      try {
        se.call(t);
      } catch {
        return !0;
      }
    return t instanceof Fr;
  } catch {
  }
  return !1;
}, ce = An, le = Ai;
if (Pr() || Dt()) {
  var Vt = Symbol.iterator;
  vt.exports = function(t) {
    if (t != null && typeof t[Vt] < "u")
      return t[Vt]();
    if (ce(t))
      return Array.prototype[Vt].call(t);
  };
} else {
  var Bi = xn, Mi = Bn, pe = C, Di = pe("%Map%", !0), Fi = pe("%Set%", !0), M = T, ye = M("Array.prototype.push"), ve = M("String.prototype.charCodeAt"), Ci = M("String.prototype.slice"), _i = function(t, e) {
    var n = t.length;
    if (e + 1 >= n)
      return e + 1;
    var o = ve(t, e);
    if (o < 55296 || o > 56319)
      return e + 1;
    var a = ve(t, e + 1);
    return a < 56320 || a > 57343 ? e + 1 : e + 2;
  }, qt = function(t) {
    var e = 0;
    return {
      next: function() {
        var o = e >= t.length, a;
        return o || (a = t[e], e += 1), {
          done: o,
          value: a
        };
      }
    };
  }, ge = function(t, e) {
    if (Bi(t) || ce(t))
      return qt(t);
    if (Mi(t)) {
      var n = 0;
      return {
        next: function() {
          var a = _i(t, n), f = Ci(t, n, a);
          return n = a, {
            done: a > t.length,
            value: f
          };
        }
      };
    }
    if (e && typeof t["_es6-shim iterator_"] < "u")
      return t["_es6-shim iterator_"]();
  };
  if (!Di && !Fi)
    vt.exports = function(t) {
      if (t != null)
        return ge(t, !0);
    };
  else {
    var Wi = Dn, Li = Cn, de = M("Map.prototype.forEach", !0), he = M("Set.prototype.forEach", !0);
    if (typeof process > "u" || !process.versions || !process.versions.node)
      var me = M("Map.prototype.iterator", !0), Se = M("Set.prototype.iterator", !0);
    var be = M("Map.prototype.@@iterator", !0) || M("Map.prototype._es6-shim iterator_", !0), $e = M("Set.prototype.@@iterator", !0) || M("Set.prototype._es6-shim iterator_", !0), Ni = function(t) {
      if (Wi(t)) {
        if (me)
          return le(me(t));
        if (be)
          return be(t);
        if (de) {
          var e = [];
          return de(t, function(o, a) {
            ye(e, [a, o]);
          }), qt(e);
        }
      }
      if (Li(t)) {
        if (Se)
          return le(Se(t));
        if ($e)
          return $e(t);
        if (he) {
          var n = [];
          return he(t, function(o) {
            ye(n, o);
          }), qt(n);
        }
      }
    };
    vt.exports = function(t) {
      return Ni(t) || ge(t);
    };
  }
}
var ki = vt.exports, Ae = function(r) {
  return r !== r;
}, _n = function(t, e) {
  return t === 0 && e === 0 ? 1 / t === 1 / e : !!(t === e || Ae(t) && Ae(e));
}, Ri = _n, Wn = function() {
  return typeof Object.is == "function" ? Object.is : Ri;
}, Ui = Wn, zi = G, Gi = function() {
  var t = Ui();
  return zi(Object, { is: t }, {
    is: function() {
      return Object.is !== t;
    }
  }), t;
}, Vi = G, qi = ut, Hi = _n, Ln = Wn, Qi = Gi, Nn = qi(Ln(), Object);
Vi(Nn, {
  getPolyfill: Ln,
  implementation: Hi,
  shim: Qi
});
var Ji = Nn, kn = Function.prototype.toString, Q = typeof Reflect == "object" && Reflect !== null && Reflect.apply, lr, gt;
if (typeof Q == "function" && typeof Object.defineProperty == "function")
  try {
    lr = Object.defineProperty({}, "length", {
      get: function() {
        throw gt;
      }
    }), gt = {}, Q(function() {
      throw 42;
    }, null, lr);
  } catch (r) {
    r !== gt && (Q = null);
  }
else
  Q = null;
var Ki = /^\s*class\b/, pr = function(t) {
  try {
    var e = kn.call(t);
    return Ki.test(e);
  } catch {
    return !1;
  }
}, Ht = function(t) {
  try {
    return pr(t) ? !1 : (kn.call(t), !0);
  } catch {
    return !1;
  }
}, dt = Object.prototype.toString, Yi = "[object Object]", Zi = "[object Function]", Xi = "[object GeneratorFunction]", tf = "[object HTMLAllCollection]", rf = "[object HTML document.all class]", ef = "[object HTMLCollection]", nf = typeof Symbol == "function" && !!Symbol.toStringTag, of = !(0 in [,]), yr = function() {
  return !1;
};
if (typeof document == "object") {
  var af = document.all;
  dt.call(af) === dt.call(document.all) && (yr = function(t) {
    if ((of || !t) && (typeof t > "u" || typeof t == "object"))
      try {
        var e = dt.call(t);
        return (e === tf || e === rf || e === ef || e === Yi) && t("") == null;
      } catch {
      }
    return !1;
  });
}
var ff = Q ? function(t) {
  if (yr(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  try {
    Q(t, null, lr);
  } catch (e) {
    if (e !== gt)
      return !1;
  }
  return !pr(t) && Ht(t);
} : function(t) {
  if (yr(t))
    return !0;
  if (!t || typeof t != "function" && typeof t != "object")
    return !1;
  if (nf)
    return Ht(t);
  if (pr(t))
    return !1;
  var e = dt.call(t);
  return e !== Zi && e !== Xi && !/^\[object HTML/.test(e) ? !1 : Ht(t);
}, uf = ff, sf = Object.prototype.toString, Rn = Object.prototype.hasOwnProperty, cf = function(t, e, n) {
  for (var o = 0, a = t.length; o < a; o++)
    Rn.call(t, o) && (n == null ? e(t[o], o, t) : e.call(n, t[o], o, t));
}, lf = function(t, e, n) {
  for (var o = 0, a = t.length; o < a; o++)
    n == null ? e(t.charAt(o), o, t) : e.call(n, t.charAt(o), o, t);
}, pf = function(t, e, n) {
  for (var o in t)
    Rn.call(t, o) && (n == null ? e(t[o], o, t) : e.call(n, t[o], o, t));
}, yf = function(t, e, n) {
  if (!uf(e))
    throw new TypeError("iterator must be a function");
  var o;
  arguments.length >= 3 && (o = n), sf.call(t) === "[object Array]" ? cf(t, e, o) : typeof t == "string" ? lf(t, e, o) : pf(t, e, o);
}, Un = yf, Qt = [
  "BigInt64Array",
  "BigUint64Array",
  "Float32Array",
  "Float64Array",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "Uint16Array",
  "Uint32Array",
  "Uint8Array",
  "Uint8ClampedArray"
], vf = typeof globalThis > "u" ? Or : globalThis, zn = function() {
  for (var t = [], e = 0; e < Qt.length; e++)
    typeof vf[Qt[e]] == "function" && (t[t.length] = Qt[e]);
  return t;
}, gf = C, ht = gf("%Object.getOwnPropertyDescriptor%", !0);
if (ht)
  try {
    ht([], "length");
  } catch {
    ht = null;
  }
var Gn = ht, Vn = Un, df = zn, Cr = T, hf = Cr("Object.prototype.toString"), qn = k(), mt = Gn, mf = typeof globalThis > "u" ? Or : globalThis, Hn = df(), Sf = Cr("Array.prototype.indexOf", !0) || function(t, e) {
  for (var n = 0; n < t.length; n += 1)
    if (t[n] === e)
      return n;
  return -1;
}, bf = Cr("String.prototype.slice"), Qn = {}, Jt = Object.getPrototypeOf;
qn && mt && Jt && Vn(Hn, function(r) {
  var t = new mf[r]();
  if (Symbol.toStringTag in t) {
    var e = Jt(t), n = mt(e, Symbol.toStringTag);
    if (!n) {
      var o = Jt(e);
      n = mt(o, Symbol.toStringTag);
    }
    Qn[r] = n.get;
  }
});
var $f = function(t) {
  var e = !1;
  return Vn(Qn, function(n, o) {
    if (!e)
      try {
        e = n.call(t) === o;
      } catch {
      }
  }), e;
}, Jn = function(t) {
  if (!t || typeof t != "object")
    return !1;
  if (!qn || !(Symbol.toStringTag in t)) {
    var e = bf(hf(t), 8, -1);
    return Sf(Hn, e) > -1;
  }
  return mt ? $f(t) : !1;
}, Af = ut, Of = T, Kn = C, wf = Jn, Oe = Kn("ArrayBuffer", !0), we = Kn("Float32Array", !0), St = Of("ArrayBuffer.prototype.byteLength", !0), Pe = Oe && !St && new Oe().slice, Ie = Pe && Af(Pe), Yn = St || Ie ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    return St ? St(t) : Ie(t, 0), !0;
  } catch {
    return !1;
  }
} : we ? function(t) {
  try {
    return new we(t).buffer === t && !wf(t);
  } catch (e) {
    return typeof t == "object" && e.name === "RangeError";
  }
} : function(t) {
  return !1;
}, Pf = Date.prototype.getDay, If = function(t) {
  try {
    return Pf.call(t), !0;
  } catch {
    return !1;
  }
}, Ef = Object.prototype.toString, jf = "[object Date]", Tf = k(), xf = function(t) {
  return typeof t != "object" || t === null ? !1 : Tf ? If(t) : Ef.call(t) === jf;
}, vr = T, Zn = k(), Xn, to, gr, dr;
if (Zn) {
  Xn = vr("Object.prototype.hasOwnProperty"), to = vr("RegExp.prototype.exec"), gr = {};
  var Kt = function() {
    throw gr;
  };
  dr = {
    toString: Kt,
    valueOf: Kt
  }, typeof Symbol.toPrimitive == "symbol" && (dr[Symbol.toPrimitive] = Kt);
}
var Bf = vr("Object.prototype.toString"), Mf = Object.getOwnPropertyDescriptor, Df = "[object RegExp]", Ff = Zn ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  var e = Mf(t, "lastIndex"), n = e && Xn(e, "value");
  if (!n)
    return !1;
  try {
    to(t, dr);
  } catch (o) {
    return o === gr;
  }
} : function(t) {
  return !t || typeof t != "object" && typeof t != "function" ? !1 : Bf(t) === Df;
}, Cf = T, Ee = Cf("SharedArrayBuffer.prototype.byteLength", !0), _f = Ee ? function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    return Ee(t), !0;
  } catch {
    return !1;
  }
} : function(t) {
  return !1;
}, Wf = Number.prototype.toString, Lf = function(t) {
  try {
    return Wf.call(t), !0;
  } catch {
    return !1;
  }
}, Nf = Object.prototype.toString, kf = "[object Number]", Rf = k(), Uf = function(t) {
  return typeof t == "number" ? !0 : typeof t != "object" ? !1 : Rf ? Lf(t) : Nf.call(t) === kf;
}, ro = T, zf = ro("Boolean.prototype.toString"), Gf = ro("Object.prototype.toString"), Vf = function(t) {
  try {
    return zf(t), !0;
  } catch {
    return !1;
  }
}, qf = "[object Boolean]", Hf = k(), Qf = function(t) {
  return typeof t == "boolean" ? !0 : t === null || typeof t != "object" ? !1 : Hf && Symbol.toStringTag in t ? Vf(t) : Gf(t) === qf;
}, hr = { exports: {} }, Jf = Object.prototype.toString, Kf = Pr();
if (Kf) {
  var Yf = Symbol.prototype.toString, Zf = /^Symbol\(.*\)$/, Xf = function(t) {
    return typeof t.valueOf() != "symbol" ? !1 : Zf.test(Yf.call(t));
  };
  hr.exports = function(t) {
    if (typeof t == "symbol")
      return !0;
    if (Jf.call(t) !== "[object Symbol]")
      return !1;
    try {
      return Xf(t);
    } catch {
      return !1;
    }
  };
} else
  hr.exports = function(t) {
    return !1;
  };
var tu = hr.exports, mr = { exports: {} }, je = typeof BigInt < "u" && BigInt, ru = function() {
  return typeof je == "function" && typeof BigInt == "function" && typeof je(42) == "bigint" && typeof BigInt(42) == "bigint";
}, eu = ru();
if (eu) {
  var nu = BigInt.prototype.valueOf, ou = function(t) {
    try {
      return nu.call(t), !0;
    } catch {
    }
    return !1;
  };
  mr.exports = function(t) {
    return t === null || typeof t > "u" || typeof t == "boolean" || typeof t == "string" || typeof t == "number" || typeof t == "symbol" || typeof t == "function" ? !1 : typeof t == "bigint" ? !0 : ou(t);
  };
} else
  mr.exports = function(t) {
    return !1;
  };
var au = mr.exports, iu = Bn, fu = Uf, uu = Qf, su = tu, cu = au, lu = function(t) {
  if (t == null || typeof t != "object" && typeof t != "function")
    return null;
  if (iu(t))
    return "String";
  if (fu(t))
    return "Number";
  if (uu(t))
    return "Boolean";
  if (su(t))
    return "Symbol";
  if (cu(t))
    return "BigInt";
}, Et = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap : null, Te = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet : null, jt;
Et || (jt = function(t) {
  return !1;
});
var Sr = Et ? Et.prototype.has : null, Yt = Te ? Te.prototype.has : null;
!jt && !Sr && (jt = function(t) {
  return !1;
});
var pu = jt || function(t) {
  if (!t || typeof t != "object")
    return !1;
  try {
    if (Sr.call(t, Sr), Yt)
      try {
        Yt.call(t, Yt);
      } catch {
        return !0;
      }
    return t instanceof Et;
  } catch {
  }
  return !1;
}, br = { exports: {} }, yu = C, eo = T, vu = yu("%WeakSet%", !0), Zt = eo("WeakSet.prototype.has", !0);
if (Zt) {
  var Xt = eo("WeakMap.prototype.has", !0);
  br.exports = function(t) {
    if (!t || typeof t != "object")
      return !1;
    try {
      if (Zt(t, Zt), Xt)
        try {
          Xt(t, Xt);
        } catch {
          return !0;
        }
      return t instanceof vu;
    } catch {
    }
    return !1;
  };
} else
  br.exports = function(t) {
    return !1;
  };
var gu = br.exports, du = Dn, hu = Cn, mu = pu, Su = gu, bu = function(t) {
  if (t && typeof t == "object") {
    if (du(t))
      return "Map";
    if (hu(t))
      return "Set";
    if (mu(t))
      return "WeakMap";
    if (Su(t))
      return "WeakSet";
  }
  return !1;
}, no = Un, $u = zn, oo = T, tr = Gn, Au = oo("Object.prototype.toString"), ao = k(), xe = typeof globalThis > "u" ? Or : globalThis, Ou = $u(), wu = oo("String.prototype.slice"), io = {}, rr = Object.getPrototypeOf;
ao && tr && rr && no(Ou, function(r) {
  if (typeof xe[r] == "function") {
    var t = new xe[r]();
    if (Symbol.toStringTag in t) {
      var e = rr(t), n = tr(e, Symbol.toStringTag);
      if (!n) {
        var o = rr(e);
        n = tr(o, Symbol.toStringTag);
      }
      io[r] = n.get;
    }
  }
});
var Pu = function(t) {
  var e = !1;
  return no(io, function(n, o) {
    if (!e)
      try {
        var a = n.call(t);
        a === o && (e = a);
      } catch {
      }
  }), e;
}, Iu = Jn, Eu = function(t) {
  return Iu(t) ? !ao || !(Symbol.toStringTag in t) ? wu(Au(t), 8, -1) : Pu(t) : !1;
}, ju = T, Be = ju("ArrayBuffer.prototype.byteLength", !0), Tu = Yn, xu = function(t) {
  return Tu(t) ? Be ? Be(t) : t.byteLength : NaN;
}, fo = ua, _ = T, Me = Pa, Bu = C, Z = ki, Mu = Tn, De = Ji, Fe = An, Ce = xn, _e = Yn, We = xf, Le = Ff, Ne = _f, ke = wr, Re = lu, Ue = bu, ze = Eu, Ge = xu, Ve = _("SharedArrayBuffer.prototype.byteLength", !0), qe = _("Date.prototype.getTime"), er = Object.getPrototypeOf, He = _("Object.prototype.toString"), Tt = Bu("%Set%", !0), $r = _("Map.prototype.has", !0), xt = _("Map.prototype.get", !0), Qe = _("Map.prototype.size", !0), Bt = _("Set.prototype.add", !0), uo = _("Set.prototype.delete", !0), Mt = _("Set.prototype.has", !0), bt = _("Set.prototype.size", !0);
function Je(r, t, e, n) {
  for (var o = Z(r), a; (a = o.next()) && !a.done; )
    if (D(t, a.value, e, n))
      return uo(r, a.value), !0;
  return !1;
}
function so(r) {
  if (typeof r > "u")
    return null;
  if (typeof r != "object")
    return typeof r == "symbol" ? !1 : typeof r == "string" || typeof r == "number" ? +r == +r : !0;
}
function Du(r, t, e, n, o, a) {
  var f = so(e);
  if (f != null)
    return f;
  var i = xt(t, f), u = fo({}, o, { strict: !1 });
  return typeof i > "u" && !$r(t, f) || !D(n, i, u, a) ? !1 : !$r(r, f) && D(n, i, u, a);
}
function Fu(r, t, e) {
  var n = so(e);
  return n ?? (Mt(t, n) && !Mt(r, n));
}
function Ke(r, t, e, n, o, a) {
  for (var f = Z(r), i, u; (i = f.next()) && !i.done; )
    if (u = i.value, // eslint-disable-next-line no-use-before-define
    D(e, u, o, a) && D(n, xt(t, u), o, a))
      return uo(r, u), !0;
  return !1;
}
function D(r, t, e, n) {
  var o = e || {};
  if (o.strict ? De(r, t) : r === t)
    return !0;
  var a = Re(r), f = Re(t);
  if (a !== f)
    return !1;
  if (!r || !t || typeof r != "object" && typeof t != "object")
    return o.strict ? De(r, t) : r == t;
  var i = n.has(r), u = n.has(t), c;
  if (i && u) {
    if (n.get(r) === n.get(t))
      return !0;
  } else
    c = {};
  return i || n.set(r, c), u || n.set(t, c), Wu(r, t, o, n);
}
function Ye(r) {
  return !r || typeof r != "object" || typeof r.length != "number" || typeof r.copy != "function" || typeof r.slice != "function" || r.length > 0 && typeof r[0] != "number" ? !1 : !!(r.constructor && r.constructor.isBuffer && r.constructor.isBuffer(r));
}
function Cu(r, t, e, n) {
  if (bt(r) !== bt(t))
    return !1;
  for (var o = Z(r), a = Z(t), f, i, u; (f = o.next()) && !f.done; )
    if (f.value && typeof f.value == "object")
      u || (u = new Tt()), Bt(u, f.value);
    else if (!Mt(t, f.value)) {
      if (e.strict || !Fu(r, t, f.value))
        return !1;
      u || (u = new Tt()), Bt(u, f.value);
    }
  if (u) {
    for (; (i = a.next()) && !i.done; )
      if (i.value && typeof i.value == "object") {
        if (!Je(u, i.value, e.strict, n))
          return !1;
      } else if (!e.strict && !Mt(r, i.value) && !Je(u, i.value, e.strict, n))
        return !1;
    return bt(u) === 0;
  }
  return !0;
}
function _u(r, t, e, n) {
  if (Qe(r) !== Qe(t))
    return !1;
  for (var o = Z(r), a = Z(t), f, i, u, c, y, l; (f = o.next()) && !f.done; )
    if (c = f.value[0], y = f.value[1], c && typeof c == "object")
      u || (u = new Tt()), Bt(u, c);
    else if (l = xt(t, c), typeof l > "u" && !$r(t, c) || !D(y, l, e, n)) {
      if (e.strict || !Du(r, t, c, y, e, n))
        return !1;
      u || (u = new Tt()), Bt(u, c);
    }
  if (u) {
    for (; (i = a.next()) && !i.done; )
      if (c = i.value[0], l = i.value[1], c && typeof c == "object") {
        if (!Ke(u, r, c, l, e, n))
          return !1;
      } else if (!e.strict && (!r.has(c) || !D(xt(r, c), l, e, n)) && !Ke(u, r, c, l, fo({}, e, { strict: !1 }), n))
        return !1;
    return bt(u) === 0;
  }
  return !0;
}
function Wu(r, t, e, n) {
  var o, a;
  if (typeof r != typeof t || r == null || t == null || He(r) !== He(t) || Fe(r) !== Fe(t))
    return !1;
  var f = Ce(r), i = Ce(t);
  if (f !== i)
    return !1;
  var u = r instanceof Error, c = t instanceof Error;
  if (u !== c || (u || c) && (r.name !== t.name || r.message !== t.message))
    return !1;
  var y = Le(r), l = Le(t);
  if (y !== l || (y || l) && (r.source !== t.source || Me(r) !== Me(t)))
    return !1;
  var s = We(r), p = We(t);
  if (s !== p || (s || p) && qe(r) !== qe(t) || e.strict && er && er(r) !== er(t))
    return !1;
  var m = ze(r), S = ze(t);
  if ((m || S) && m !== S)
    return !1;
  var O = Ye(r), $ = Ye(t);
  if (O !== $)
    return !1;
  if (O || $) {
    if (r.length !== t.length)
      return !1;
    for (o = 0; o < r.length; o++)
      if (r[o] !== t[o])
        return !1;
    return !0;
  }
  var b = _e(r), I = _e(t);
  if (b !== I)
    return !1;
  if (b || I)
    return Ge(r) !== Ge(t) ? !1 : typeof Uint8Array == "function" && D(new Uint8Array(r), new Uint8Array(t), e, n);
  var h = Ne(r), g = Ne(t);
  if (h !== g)
    return !1;
  if (h || g)
    return Ve(r) !== Ve(t) ? !1 : typeof Uint8Array == "function" && D(new Uint8Array(r), new Uint8Array(t), e, n);
  if (typeof r != typeof t)
    return !1;
  var d = ke(r), A = ke(t);
  if (d.length !== A.length)
    return !1;
  for (d.sort(), A.sort(), o = d.length - 1; o >= 0; o--)
    if (d[o] != A[o])
      return !1;
  for (o = d.length - 1; o >= 0; o--)
    if (a = d[o], !D(r[a], t[a], e, n))
      return !1;
  var w = Ue(r), E = Ue(t);
  return w !== E ? !1 : w === "Set" || E === "Set" ? Cu(r, t, e, n) : w === "Map" ? _u(r, t, e, n) : !0;
}
var Lu = function(t, e, n) {
  return D(t, e, n, Mu());
};
const Nu = /* @__PURE__ */ po(Lu), ku = "click-drag", Ru = "dragstart", Ar = "dragmove", Uu = "dragend", zu = 100;
function Gu(r) {
  let t = r;
  for (; t.parent; )
    t = t.parent;
  t.updateMatrixWorld(!0);
}
function Vu(r, t) {
  for (; r.attachedToParent; )
    r = r.parentElement, t(r);
}
function qu(r, t) {
  for (; r.attachedToParent; )
    if (r = r.parentElement, t(r))
      return !0;
  return !1;
}
function _r(r, t) {
  t.set(
    r.components.position.data.x,
    r.components.position.data.y,
    r.components.position.data.z
  ), Vu(r, (e) => {
    e.components && e.components.position && t.set(
      t.x + e.components.position.data.x,
      t.y + e.components.position.data.y,
      t.z + e.components.position.data.z
    );
  });
}
function Hu(r, t, e) {
  return Gu(t), t.localToWorld(e);
}
const { unproject: Qu } = function() {
  let t = !1, e;
  function n(o) {
    return e = new o.Matrix4(), !0;
  }
  return {
    // ================================================================================
    unproject(o, a, f) {
      const i = f.components.camera.camera;
      return t = t || n(o), a.applyMatrix4(e.copy(i.projectionMatrix).invert()), Hu(o, i, a);
    }
  };
}(), { screenCoordsToDirection: co } = function() {
  let t = !1, e, n;
  function o(a) {
    return e = new a.Vector3(), n = new a.Vector3(), !0;
  }
  return {
    screenCoordsToDirection(a, f, { x: i, y: u }) {
      t = t || o(a);
      const y = document.querySelector("a-scene").canvas.getBoundingClientRect(), l = i - y.left, s = u - y.top, p = l / y.width * 2 - 1, m = -(s / y.height * 2) + 1;
      e.set(p, m, -1);
      const S = Qu(a, e, f);
      _r(f, n);
      const { x: O, y: $, z: b } = S.sub(n).normalize();
      return { x: O, y: $, z: b };
    }
  };
}();
function Ju(r, t, e) {
  const n = t / r.dot(e);
  return e.multiplyScalar(n);
}
const { directionToWorldCoords: Ku } = function() {
  let t = !1, e, n;
  function o(a) {
    return e = new a.Vector3(), n = new a.Vector3(), !0;
  }
  return {
    /**
     * @param camera Three.js Camera instance
     * @param Object Position of the camera
     * @param Object position of the mouse (scaled to be between -1 to 1)
     * @param depth Depth into the screen to calculate world coordinates for
     */
    directionToWorldCoords(a, f, i, { x: u, y: c, z: y }, l) {
      t = t || o(a), _r(f, n), e.set(u, c, y);
      const s = Ju(
        // ============================================================
        i.getWorldDirection(new a.Vector3()),
        l,
        e
      ), { x: p, y: m, z: S } = s.add(n);
      return { x: p, y: m, z: S };
    }
  };
}(), { selectItem: Yu } = function() {
  let t = !1, e, n, o, a;
  function f(i) {
    return a = new i.Plane(), e = new i.Vector3(), n = new i.Vector3(), o = new i.Raycaster(), o.far = 1 / 0, o.near = 0, !0;
  }
  return {
    selectItem(i, u, c, y, l) {
      t = t || f(i);
      const { x: s, y: p, z: m } = co(
        i,
        c,
        { x: y, y: l }
      );
      _r(c, e), n.set(s, p, m), o.set(e, n);
      const S = Array.from(
        c.sceneEl.querySelectorAll(`[${u}]`)
      ).map((d) => d.object3D), O = !0, $ = o.intersectObjects(S, O).filter((d) => !!d.object.el).filter((d) => d.object.parent.visible)[0];
      if (!$)
        return {};
      const { point: b, object: I } = $;
      a.setFromNormalAndCoplanarPoint(
        // camera.components.camera.camera.getWorldDirection().clone().negate(),
        c.components.camera.camera.getWorldDirection(new i.Vector3()).clone().negate(),
        b.clone().sub(e)
      );
      const h = a.constant, g = b.sub(I.getWorldPosition(new i.Vector3()));
      return { depth: h, offset: g, element: I.el };
    }
  };
}();
function Zu(r, t, e, n, o, a) {
  const f = n.components.camera.camera, i = f.getWorldQuaternion(new r.Quaternion()).invert(), u = t.object3D.getWorldQuaternion(i), c = t.object3D.rotation.order, y = new r.Quaternion(), l = t.object3D.rotation.clone(), s = new r.Vector3(e.x, e.y, e.z);
  let p = a;
  const m = {
    x: r.MathUtils.radToDeg(l.x),
    y: r.MathUtils.radToDeg(l.y),
    z: r.MathUtils.radToDeg(l.z)
  }, S = t.sceneEl.systems.camera.activeCameraEl, O = qu(t, (h) => h === S);
  function $({ clientX: h, clientY: g }) {
    p = { clientX: h, clientY: g };
    const d = co(
      r,
      n,
      { x: h, y: g }
    ), { x: A, y: w, z: E } = Ku(
      r,
      n,
      n.components.camera.camera,
      d,
      o
    );
    let x;
    x = y.copy(i), s.set(e.x, e.y, e.z), x = y.multiply(f.getWorldQuaternion(new r.Quaternion())), s.applyQuaternion(x), O || (x.multiply(u), l.setFromQuaternion(x, c)), m.x = r.MathUtils.radToDeg(l.x), m.y = r.MathUtils.radToDeg(l.y), m.z = r.MathUtils.radToDeg(l.z);
    const B = { x: A - s.x, y: w - s.y, z: E - s.z };
    t.parentEl !== t.sceneEl && (s.set(B.x, B.y, B.z), t.parentEl.object3D.worldToLocal(s), B.x = s.x, B.y = s.y, B.z = s.z), t.emit(Ar, { nextPosition: B, nextRotation: m, clientX: h, clientY: g }), t.setAttribute("position", B), t.setAttribute("rotation", m);
  }
  function b({ changedTouches: [h] }) {
    $(h);
  }
  function I({ detail: h }) {
    (h.name === "position" || h.name === "rotation") && !Nu(h.oldData, h.newData) && $(p);
  }
  return document.addEventListener("mousemove", $), document.addEventListener("touchmove", b), n.addEventListener("componentchanged", I), (h) => {
    document.removeEventListener("mousemove", $), document.removeEventListener("touchmove", b), n.removeEventListener("componentchanged", I);
  };
}
const { didMount: Ze, didUnmount: Xe } = function() {
  let t, e;
  const n = [];
  function o(f, i) {
    const u = document.querySelector("a-scene");
    let c, y, l;
    const s = [];
    function p() {
      const g = performance.now();
      for (; s.length && g - s[0].time > zu; )
        s.shift();
    }
    function m({ detail: { nextPosition: g } }) {
      p(), s.push({
        position: Object.assign({}, g),
        time: performance.now()
      });
    }
    function S({ clientX: g, clientY: d }) {
      const { depth: A, offset: w, element: E } = Yu(f, i, c, g, d);
      if (E) {
        if (E.getAttribute("click-drag").enabled === "false")
          return;
        let x = Zu(
          f,
          E,
          w,
          c,
          A,
          {
            clientX: g,
            clientY: d
          }
        );
        y = E, l = {
          offset: { x: w.x, y: w.y, z: w.z },
          depth: A,
          clientX: g,
          clientY: d
        }, E.addEventListener(Ar, m), e = (B) => {
          E.removeEventListener(Ar, m), x && x(), x = null;
        }, E.emit(Ru, l);
      }
    }
    function O() {
      if (s.length < 2)
        return 0;
      const g = s[s.length - 1], d = s[0], A = 1e3 / (g.time - d.time);
      return {
        x: (g.position.x - d.position.x) * A,
        // m/s
        y: (g.position.y - d.position.y) * A,
        // m/s
        z: (g.position.z - d.position.z) * A
        // m/s
      };
    }
    function $({ clientX: g, clientY: d }) {
      if (!y)
        return;
      p();
      const A = O();
      y.emit(
        Uu,
        Object.assign({}, l, { clientX: g, clientY: d, velocity: A })
      ), e && e(), e = void 0;
    }
    function b({ changedTouches: [g] }) {
      S(g);
    }
    function I({ changedTouches: [g] }) {
      $(g);
    }
    function h() {
      c = u.camera.el, document.addEventListener("mousedown", S), document.addEventListener("mouseup", $), document.addEventListener("touchstart", b), document.addEventListener("touchend", I), t = (g) => {
        document.removeEventListener("mousedown", S), document.removeEventListener("mouseup", $), document.removeEventListener("touchstart", b), document.removeEventListener("touchend", I);
      };
    }
    u.hasLoaded ? h() : u.addEventListener("loaded", h);
  }
  function a() {
    t && t(), t = void 0;
  }
  return {
    didMount(f, i, u) {
      n.length === 0 && o(i, u), n.indexOf(f) === -1 && n.push(f);
    },
    didUnmount(f) {
      const i = n.indexOf(f);
      e && e(), e = void 0, i !== -1 && (n.splice(i, 1), n.length === 0 && a());
    }
  };
}();
function Xu(r, t = ku) {
  const e = r.THREE;
  r.registerComponent(t, {
    schema: {},
    /**
     * Called once when component is attached. Generally for initial setup.
     */
    init() {
      Ze(this, e, t);
    },
    /**
     * Called when component is attached and when component data changes.
     * Generally modifies the entity based on the data.
     *
     * @param oldData
     */
    update() {
    },
    /**
     * Called when a component is removed (e.g., via removeAttribute).
     * Generally undoes all modifications to the entity.
     */
    remove() {
      Xe(this);
    },
    /**
     * Called when entity pauses.
     * Use to stop or remove any dynamic or background behavior such as events.
     */
    pause() {
      Xe(this);
    },
    /**
     * Called when entity resumes.
     * Use to continue or add any dynamic or background behavior such as events.
     */
    play() {
      Ze(this, e, t);
    }
  });
}
export {
  Xu as default
};

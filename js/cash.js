"use strict";
/*! cash-dom 1.2.0, https://github.com/kenwheeler/cash @license MIT */
!function(t, n) {
    "function" == typeof define && define.amd ? define(n) : "undefined" != typeof exports ? module.exports = n() : t.cash = t.$ = n()
}(this, function() {
    function t(t, n) {
        n = n || A;
        var e = $.test(t) ? n.getElementsByClassName(t.slice(1)) : D.test(t) ? n.getElementsByTagName(t) : n.querySelectorAll(t);
        return e
    }
    function n(t) {
        return b = b || A.createDocumentFragment(),
        E = E || b.appendChild(A.createElement("div")),
        E.innerHTML = t,
        E.childNodes
    }
    function e(t) {
        "loading" !== A.readyState ? t() : A.addEventListener("DOMContentLoaded", t)
    }
    function r(r, i) {
        if (!r)
            return this;
        if (r.cash && r !== w)
            return r;
        var o, u = r, s = 0;
        if (R(r))
            u = q.test(r) ? A.getElementById(r.slice(1)) : k.test(r) ? n(r) : t(r, i);
        else if (O(r))
            return e(r),
            this;
        if (!u)
            return this;
        if (u.nodeType || u === w)
            this[0] = u,
            this.length = 1;
        else
            for (o = this.length = u.length; o > s; s++)
                this[s] = u[s];
        return this
    }
    function i(t, n) {
        return new r(t,n)
    }
    function o(t, n) {
        for (var e = t.length, r = 0; e > r && n.call(t[r], t[r], r, t) !== !1; r++)
            ;
    }
    function u(t, n) {
        return (t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector).call(t, n)
    }
    function s(t) {
        return i(S.call(t).filter(function(t, n, e) {
            return e.indexOf(t) === n
        }))
    }
    function c(t) {
        return t[I] = t[I] || {}
    }
    function a(t, n, e) {
        return c(t)[n] = e
    }
    function f(t, n) {
        var e = c(t);
        return void 0 === e[n] && (e[n] = t.dataset ? t.dataset[n] : i(t).attr("data-" + n)),
        e[n]
    }
    function h(t, n) {
        var e = c(t);
        e ? delete e[n] : t.dataset ? delete t.dataset[n] : i(t).removeAttr("data-" + name)
    }
    function l(t, n) {
        return t.classList ? t.classList.contains(n) : new RegExp("(^| )" + n + "( |$)","gi").test(t.className)
    }
    function d(t, n, e) {
        t.classList ? t.classList.add(n) : e.indexOf(" " + n + " ") && (t.className += " " + n)
    }
    function p(t, n) {
        t.classList ? t.classList.remove(n) : t.className = t.className.replace(n, "")
    }
    function v(t, n) {
        return parseInt(w.getComputedStyle(t[0], null)[n], 10) || 0
    }
    function m(t, n, e) {
        var r = f(t, "_cashEvents") || a(t, "_cashEvents", {});
        r[n] = r[n] || [],
        r[n].push(e),
        t.addEventListener(n, e)
    }
    function g(t, n, e) {
        var r = f(t, "_cashEvents")[n];
        e ? t.removeEventListener(n, e) : (o(r, function(e) {
            t.removeEventListener(n, e)
        }),
        r = [])
    }
    function y(t, n) {
        return "&" + encodeURIComponent(t) + "=" + encodeURIComponent(n).replace(/%20/g, "+")
    }
    function x(t) {
        return "radio" === t.type || "checkbox" === t.type
    }
    function C(t, n, e) {
        if (e) {
            var r = t.childNodes[0];
            t.insertBefore(n, r)
        } else
            t.appendChild(n)
    }
    function L(t, n, e) {
        var r = R(n);
        return !r && n.length ? void o(n, function(n) {
            return L(t, n, e)
        }) : void o(t, r ? function(t) {
            return t.insertAdjacentHTML(e ? "afterbegin" : "beforeend", n)
        }
        : function(t, r) {
            return C(t, 0 === r ? n : n.cloneNode(!0), e)
        }
        )
    }
    function N(t, n) {
        return t === n
    }
    var b, E, A = document, w = window, T = Array.prototype, S = T.slice, M = T.filter, B = T.push, H = function() {}, O = function(t) {
        return typeof t == typeof H
    }, R = function(t) {
        return "string" == typeof t
    }, q = /^#[\w-]*$/, $ = /^\.[\w-]*$/, k = /<.+>/, D = /^\w+$/, F = i.fn = i.prototype = r.prototype = {
        constructor: i,
        cash: !0,
        length: 0,
        push: B,
        splice: T.splice,
        map: T.map,
        init: r
    };
    i.parseHTML = n,
    i.noop = H,
    i.isFunction = O,
    i.isString = R,
    i.extend = F.extend = function(t) {
        t = t || {};
        var n = S.call(arguments)
          , e = n.length
          , r = 1;
        for (1 === n.length && (t = this,
        r = 0); e > r; r++)
            if (n[r])
                for (var i in n[r])
                    n[r].hasOwnProperty(i) && (t[i] = n[r][i]);
        return t
    }
    ,
    i.extend({
        merge: function(t, n) {
            for (var e = +n.length, r = t.length, i = 0; e > i; r++,
            i++)
                t[r] = n[i];
            return t.length = r,
            t
        },
        each: o,
        matches: u,
        unique: s,
        isArray: Array.isArray,
        isNumeric: function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        }
    });
    var I = i.uid = "_cash" + Date.now();
    F.extend({
        data: function(t, n) {
            return n ? this.each(function(e) {
                return a(e, t, n)
            }) : f(this[0], t)
        },
        removeData: function(t) {
            return this.each(function(n) {
                return h(n, t)
            })
        }
    });
    var P = /\S+/g;
    F.extend({
        addClass: function(t) {
            var n = t.match(P);
            return this.each(function(t) {
                var e = " " + t.className + " ";
                o(n, function(n) {
                    d(t, n, e)
                })
            })
        },
        attr: function(t, n) {
            if (R(t))
                return void 0 === n ? this[0].getAttribute ? this[0].getAttribute(t) : this[0][t] : this.each(function(e) {
                    e.setAttribute ? e.setAttribute(t, n) : e[t] = n
                });
            for (var e in t)
                this.attr(e, t[e]);
            return this
        },
        hasClass: function(t) {
            var n = !1;
            return this.each(function(e) {
                return n = l(e, t),
                !n
            }),
            n
        },
        prop: function(t, n) {
            if (R(t))
                return void 0 === n ? this[0][t] : this.each(function(e) {
                    e[t] = n
                });
            for (var e in t)
                this.prop(e, t[e]);
            return this
        },
        removeAttr: function(t) {
            return this.each(function(n) {
                n.removeAttribute ? n.removeAttribute(t) : delete n[t]
            })
        },
        removeClass: function(t) {
            var n = t.match(P);
            return this.each(function(t) {
                o(n, function(n) {
                    p(t, n)
                })
            })
        },
        removeProp: function(t) {
            return this.each(function(n) {
                delete n[t]
            })
        },
        toggleClass: function(t, n) {
            if (void 0 !== n)
                return this[n ? "addClass" : "removeClass"](t);
            var e = t.match(P);
            return this.each(function(t) {
                var n = " " + t.className + " ";
                o(e, function(e) {
                    l(t, e) ? p(t, e) : d(t, e, n)
                })
            })
        }
    }),
    F.extend({
        add: function(t, n) {
            return s(i.merge(this, i(t, n)))
        },
        each: function(t) {
            return o(this, t),
            this
        },
        eq: function(t) {
            return i(this.get(t))
        },
        filter: function(t) {
            return M.call(this, R(t) ? function(n) {
                return u(n, t)
            }
            : t)
        },
        first: function() {
            return this.eq(0)
        },
        get: function(t) {
            return void 0 === t ? S.call(this) : 0 > t ? this[t + this.length] : this[t]
        },
        index: function(t) {
            var n = this[0];
            return S.call(t ? i(t) : i(n).parent().children()).indexOf(n)
        },
        last: function() {
            return this.eq(-1)
        }
    });
    var U = function() {
        function t(t) {
            return t.replace(i, function(t, n) {
                return t[0 === n ? "toLowerCase" : "toUpperCase"]()
            }).replace(u, "")
        }
        var n = {}
          , e = A.createElement("div")
          , r = e.style
          , i = /(?:^\w|[A-Z]|\b\w)/g
          , u = /\s+/g;
        return function(e) {
            if (e = t(e),
            n[e])
                return n[e];
            var i = e.charAt(0).toUpperCase() + e.slice(1)
              , u = ["webkit", "moz", "ms", "o"]
              , s = (e + " " + u.join(i + " ") + i).split(" ");
            return o(s, function(t) {
                return t in r ? (n[t] = e = n[e] = t,
                !1) : void 0
            }),
            n[e]
        }
    }();
    F.extend({
        css: function(t, n) {
            if (R(t))
                return t = U(t),
                n ? this.each(function(e) {
                    return e.style[t] = n
                }) : w.getComputedStyle(this[0])[t];
            for (var e in t)
                this.css(e, t[e]);
            return this
        }
    }),
    o(["Width", "Height"], function(t) {
        var n = t.toLowerCase();
        F[n] = function() {
            return this[0].getBoundingClientRect()[n]
        }
        ,
        F["inner" + t] = function() {
            return this[0]["client" + t]
        }
        ,
        F["outer" + t] = function(n) {
            return this[0]["offset" + t] + (n ? v(this, "margin" + ("Width" === t ? "Left" : "Top")) + v(this, "margin" + ("Width" === t ? "Right" : "Bottom")) : 0)
        }
    }),
    F.extend({
        off: function(t, n) {
            return this.each(function(e) {
                return g(e, t, n)
            })
        },
        on: function(t, n, r, i) {
            var o;
            if (!R(t)) {
                for (var s in t)
                    this.on(s, n, t[s]);
                return this
            }
            return O(n) && (r = n,
            n = null),
            "ready" === t ? (e(r),
            this) : (n && (o = r,
            r = function(t) {
                var e = t.target;
                if (u(e, n))
                    o.call(e);
                else {
                    for (; !u(e, n); ) {
                        if (e === this)
                            return e = !1;
                        e = e.parentNode
                    }
                    e && o.call(e)
                }
            }
            ),
            this.each(function(n) {
                var e = r;
                i && (e = function() {
                    r.apply(this, arguments),
                    g(n, t, e)
                }
                ),
                m(n, t, e)
            }))
        },
        one: function(t, n, e) {
            return this.on(t, n, e, !0)
        },
        ready: e,
        trigger: function(t) {
            var n = A.createEvent("HTMLEvents");
            return n.initEvent(t, !0, !1),
            this.each(function(t) {
                return t.dispatchEvent(n)
            })
        }
    });
    var _ = ["file", "reset", "submit", "button"];
    F.extend({
        serialize: function() {
            var t = this[0].elements
              , n = "";
            return o(t, function(t) {
                t.name && _.indexOf(t.type) < 0 && ("select-multiple" === t.type ? o(t.options, function(e) {
                    e.selected && (n += y(t.name, e.value))
                }) : (!x(t) || x(t) && t.checked) && (n += y(t.name, t.value)))
            }),
            n.substr(1)
        },
        val: function(t) {
            return void 0 === t ? this[0].value : this.each(function(n) {
                return n.value = t
            })
        }
    }),
    F.extend({
        after: function(t) {
            return i(t).insertAfter(this),
            this
        },
        append: function(t) {
            return L(this, t),
            this
        },
        appendTo: function(t) {
            return L(i(t), this),
            this
        },
        before: function(t) {
            return i(t).insertBefore(this),
            this
        },
        clone: function() {
            return i(this.map(function(t) {
                return t.cloneNode(!0)
            }))
        },
        empty: function() {
            return this.html(""),
            this
        },
        html: function(t) {
            if (void 0 === t)
                return this[0].innerHTML;
            var n = t.nodeType ? t[0].outerHTML : t;
            return this.each(function(t) {
                return t.innerHTML = n
            })
        },
        insertAfter: function(t) {
            var n = this;
            return i(t).each(function(t, e) {
                var r = t.parentNode
                  , i = t.nextSibling;
                n.each(function(t) {
                    r.insertBefore(0 === e ? t : t.cloneNode(!0), i)
                })
            }),
            this
        },
        insertBefore: function(t) {
            var n = this;
            return i(t).each(function(t, e) {
                var r = t.parentNode;
                n.each(function(n) {
                    r.insertBefore(0 === e ? n : n.cloneNode(!0), t)
                })
            }),
            this
        },
        prepend: function(t) {
            return L(this, t, !0),
            this
        },
        prependTo: function(t) {
            return L(i(t), this, !0),
            this
        },
        remove: function() {
            return this.each(function(t) {
                return t.parentNode.removeChild(t)
            })
        },
        text: function(t) {
            return t ? this.each(function(n) {
                return n.textContent = t
            }) : this[0].textContent
        }
    });
    var z = A.documentElement;
    return F.extend({
        position: function() {
            var t = this[0];
            return {
                left: t.offsetLeft,
                top: t.offsetTop
            }
        },
        offset: function() {
            var t = this[0].getBoundingClientRect();
            return {
                top: t.top + w.pageYOffset - z.clientTop,
                left: t.left + w.pageXOffset - z.clientLeft
            }
        },
        offsetParent: function() {
            return i(this[0].offsetParent)
        }
    }),
    F.extend({
        children: function(t) {
            var n = [];
            return this.each(function(t) {
                B.apply(n, t.children)
            }),
            n = s(n),
            t ? n.filter(function(n) {
                return u(n, t)
            }) : n
        },
        closest: function(t) {
            return !t || u(this[0], t) ? this : this.parent().closest(t)
        },
        is: function(t) {
            if (!t)
                return !1;
            var n = !1
              , e = R(t) ? u : t.cash ? function(n) {
                return t.is(n)
            }
            : N;
            return this.each(function(r, i) {
                return n = e(r, t, i),
                !n
            }),
            n
        },
        find: function(n) {
            if (!n)
                return i();
            var e = [];
            return this.each(function(r) {
                B.apply(e, t(n, r))
            }),
            s(e)
        },
        has: function(t) {
            return M.call(this, function(n) {
                return 0 !== i(n).find(t).length
            })
        },
        next: function() {
            return i(this[0].nextElementSibling)
        },
        not: function(t) {
            return M.call(this, function(n) {
                return !u(n, t)
            })
        },
        parent: function() {
            var t = this.map(function(t) {
                return t.parentElement || A.body.parentNode
            });
            return s(t)
        },
        parents: function(t) {
            var n, e = [];
            return this.each(function(r) {
                for (n = r; n !== A.body.parentNode; )
                    n = n.parentElement,
                    (!t || t && u(n, t)) && e.push(n)
            }),
            s(e)
        },
        prev: function() {
            return i(this[0].previousElementSibling)
        },
        siblings: function() {
            var t = this.parent().children()
              , n = this[0];
            return M.call(t, function(t) {
                return t !== n
            })
        }
    }),
    i
});

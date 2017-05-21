/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
! function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t()
}(this, function() {
    "use strict";
    var e = function() {};
    e.version = "2.0.5", window.addEventListener("mousewheel", function() {});
    var t = "data-scrollmagic-pin-spacer";
    e.Controller = function(r) {
        var o, s, a = "ScrollMagic.Controller",
            l = "FORWARD",
            c = "REVERSE",
            u = "PAUSED",
            f = n.defaults,
            d = this,
            h = i.extend({}, f, r),
            g = [],
            p = !1,
            v = 0,
            m = u,
            w = !0,
            y = 0,
            S = !0,
            b = function() {
                for (var e in h) f.hasOwnProperty(e) || delete h[e];
                if (h.container = i.get.elements(h.container)[0], !h.container) throw a + " init failed.";
                w = h.container === window || h.container === document.body || !document.body.contains(h.container), w && (h.container = window), y = z(), h.container.addEventListener("resize", T), h.container.addEventListener("scroll", T), h.refreshInterval = parseInt(h.refreshInterval) || f.refreshInterval, E()
            },
            E = function() {
                h.refreshInterval > 0 && (s = window.setTimeout(A, h.refreshInterval))
            },
            x = function() {
                return h.vertical ? i.get.scrollTop(h.container) : i.get.scrollLeft(h.container)
            },
            z = function() {
                return h.vertical ? i.get.height(h.container) : i.get.width(h.container)
            },
            C = this._setScrollPos = function(e) {
                h.vertical ? w ? window.scrollTo(i.get.scrollLeft(), e) : h.container.scrollTop = e : w ? window.scrollTo(e, i.get.scrollTop()) : h.container.scrollLeft = e
            },
            F = function() {
                if (S && p) {
                    var e = i.type.Array(p) ? p : g.slice(0);
                    p = !1;
                    var t = v;
                    v = d.scrollPos();
                    var n = v - t;
                    0 !== n && (m = n > 0 ? l : c), m === c && e.reverse(), e.forEach(function(e) {
                        e.update(!0)
                    })
                }
            },
            L = function() {
                o = i.rAF(F)
            },
            T = function(e) {
                "resize" == e.type && (y = z(), m = u), p !== !0 && (p = !0, L())
            },
            A = function() {
                if (!w && y != z()) {
                    var e;
                    try {
                        e = new Event("resize", {
                            bubbles: !1,
                            cancelable: !1
                        })
                    } catch (t) {
                        e = document.createEvent("Event"), e.initEvent("resize", !1, !1)
                    }
                    h.container.dispatchEvent(e)
                }
                g.forEach(function(e) {
                    e.refresh()
                }), E()
            };
        this._options = h;
        var O = function(e) {
            if (e.length <= 1) return e;
            var t = e.slice(0);
            return t.sort(function(e, t) {
                return e.scrollOffset() > t.scrollOffset() ? 1 : -1
            }), t
        };
        return this.addScene = function(t) {
            if (i.type.Array(t)) t.forEach(function(e) {
                d.addScene(e)
            });
            else if (t instanceof e.Scene)
                if (t.controller() !== d) t.addTo(d);
                else if (g.indexOf(t) < 0) {
                g.push(t), g = O(g), t.on("shift.controller_sort", function() {
                    g = O(g)
                });
                for (var n in h.globalSceneOptions) t[n] && t[n].call(t, h.globalSceneOptions[n])
            }
            return d
        }, this.removeScene = function(e) {
            if (i.type.Array(e)) e.forEach(function(e) {
                d.removeScene(e)
            });
            else {
                var t = g.indexOf(e);
                t > -1 && (e.off("shift.controller_sort"), g.splice(t, 1), e.remove())
            }
            return d
        }, this.updateScene = function(t, n) {
            return i.type.Array(t) ? t.forEach(function(e) {
                d.updateScene(e, n)
            }) : n ? t.update(!0) : p !== !0 && t instanceof e.Scene && (p = p || [], -1 == p.indexOf(t) && p.push(t), p = O(p), L()), d
        }, this.update = function(e) {
            return T({
                type: "resize"
            }), e && F(), d
        }, this.scrollTo = function(n, r) {
            if (i.type.Number(n)) C.call(h.container, n, r);
            else if (n instanceof e.Scene) n.controller() === d && d.scrollTo(n.scrollOffset(), r);
            else if (i.type.Function(n)) C = n;
            else {
                var o = i.get.elements(n)[0];
                if (o) {
                    for (; o.parentNode.hasAttribute(t);) o = o.parentNode;
                    var s = h.vertical ? "top" : "left",
                        a = i.get.offset(h.container),
                        l = i.get.offset(o);
                    w || (a[s] -= d.scrollPos()), d.scrollTo(l[s] - a[s], r)
                }
            }
            return d
        }, this.scrollPos = function(e) {
            return arguments.length ? (i.type.Function(e) && (x = e), d) : x.call(d)
        }, this.info = function(e) {
            var t = {
                size: y,
                vertical: h.vertical,
                scrollPos: v,
                scrollDirection: m,
                container: h.container,
                isDocument: w
            };
            return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t
        }, this.loglevel = function() {
            return d
        }, this.enabled = function(e) {
            return arguments.length ? (S != e && (S = !!e, d.updateScene(g, !0)), d) : S
        }, this.destroy = function(e) {
            window.clearTimeout(s);
            for (var t = g.length; t--;) g[t].destroy(e);
            return h.container.removeEventListener("resize", T), h.container.removeEventListener("scroll", T), i.cAF(o), null
        }, b(), d
    };
    var n = {
        defaults: {
            container: window,
            vertical: !0,
            globalSceneOptions: {},
            loglevel: 2,
            refreshInterval: 100
        }
    };
    e.Controller.addOption = function(e, t) {
        n.defaults[e] = t
    }, e.Controller.extend = function(t) {
        var n = this;
        e.Controller = function() {
            return n.apply(this, arguments), this.$super = i.extend({}, this), t.apply(this, arguments) || this
        }, i.extend(e.Controller, n), e.Controller.prototype = n.prototype, e.Controller.prototype.constructor = e.Controller
    }, e.Scene = function(n) {
        var o, s, a = "BEFORE",
            l = "DURING",
            c = "AFTER",
            u = r.defaults,
            f = this,
            d = i.extend({}, u, n),
            h = a,
            g = 0,
            p = {
                start: 0,
                end: 0
            },
            v = 0,
            m = !0,
            w = function() {
                for (var e in d) u.hasOwnProperty(e) || delete d[e];
                for (var t in u) L(t);
                C()
            },
            y = {};
        this.on = function(e, t) {
            return i.type.Function(t) && (e = e.trim().split(" "), e.forEach(function(e) {
                var n = e.split("."),
                    r = n[0],
                    i = n[1];
                "*" != r && (y[r] || (y[r] = []), y[r].push({
                    namespace: i || "",
                    callback: t
                }))
            })), f
        }, this.off = function(e, t) {
            return e ? (e = e.trim().split(" "), e.forEach(function(e) {
                var n = e.split("."),
                    r = n[0],
                    i = n[1] || "",
                    o = "*" === r ? Object.keys(y) : [r];
                o.forEach(function(e) {
                    for (var n = y[e] || [], r = n.length; r--;) {
                        var o = n[r];
                        !o || i !== o.namespace && "*" !== i || t && t != o.callback || n.splice(r, 1)
                    }
                    n.length || delete y[e]
                })
            }), f) : f
        }, this.trigger = function(t, n) {
            if (t) {
                var r = t.trim().split("."),
                    i = r[0],
                    o = r[1],
                    s = y[i];
                s && s.forEach(function(t) {
                    o && o !== t.namespace || t.callback.call(f, new e.Event(i, t.namespace, f, n))
                })
            }
            return f
        }, f.on("change.internal", function(e) {
            "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? E() : "reverse" === e.what && f.update())
        }).on("shift.internal", function() {
            S(), f.update()
        }), this.addTo = function(t) {
            return t instanceof e.Controller && s != t && (s && s.removeScene(f), s = t, C(), b(!0), E(!0), S(), s.info("container").addEventListener("resize", x), t.addScene(f), f.trigger("add", {
                controller: s
            }), f.update()), f
        }, this.enabled = function(e) {
            return arguments.length ? (m != e && (m = !!e, f.update(!0)), f) : m
        }, this.remove = function() {
            if (s) {
                s.info("container").removeEventListener("resize", x);
                var e = s;
                s = void 0, e.removeScene(f), f.trigger("remove")
            }
            return f
        }, this.destroy = function(e) {
            return f.trigger("destroy", {
                reset: e
            }), f.remove(), f.off("*.*"), null
        }, this.update = function(e) {
            if (s)
                if (e)
                    if (s.enabled() && m) {
                        var t, n = s.info("scrollPos");
                        t = d.duration > 0 ? (n - p.start) / (p.end - p.start) : n >= p.start ? 1 : 0, f.trigger("update", {
                            startPos: p.start,
                            endPos: p.end,
                            scrollPos: n
                        }), f.progress(t)
                    } else T && h === l && O(!0);
            else s.updateScene(f, !1);
            return f
        }, this.refresh = function() {
            return b(), E(), f
        }, this.progress = function(e) {
            if (arguments.length) {
                var t = !1,
                    n = h,
                    r = s ? s.info("scrollDirection") : "PAUSED",
                    i = d.reverse || e >= g;
                if (0 === d.duration ? (t = g != e, g = 1 > e && i ? 0 : 1, h = 0 === g ? a : l) : 0 > e && h !== a && i ? (g = 0, h = a, t = !0) : e >= 0 && 1 > e && i ? (g = e, h = l, t = !0) : e >= 1 && h !== c ? (g = 1, h = c, t = !0) : h !== l || i || O(), t) {
                    var o = {
                            progress: g,
                            state: h,
                            scrollDirection: r
                        },
                        u = h != n,
                        p = function(e) {
                            f.trigger(e, o)
                        };
                    u && n !== l && (p("enter"), p(n === a ? "start" : "end")), p("progress"), u && h !== l && (p(h === a ? "start" : "end"), p("leave"))
                }
                return f
            }
            return g
        };
        var S = function() {
                p = {
                    start: v + d.offset
                }, s && d.triggerElement && (p.start -= s.info("size") * d.triggerHook), p.end = p.start + d.duration
            },
            b = function(e) {
                if (o) {
                    var t = "duration";
                    F(t, o.call(f)) && !e && (f.trigger("change", {
                        what: t,
                        newval: d[t]
                    }), f.trigger("shift", {
                        reason: t
                    }))
                }
            },
            E = function(e) {
                var n = 0,
                    r = d.triggerElement;
                if (s && r) {
                    for (var o = s.info(), a = i.get.offset(o.container), l = o.vertical ? "top" : "left"; r.parentNode.hasAttribute(t);) r = r.parentNode;
                    var c = i.get.offset(r);
                    o.isDocument || (a[l] -= s.scrollPos()), n = c[l] - a[l]
                }
                var u = n != v;
                v = n, u && !e && f.trigger("shift", {
                    reason: "triggerElementPosition"
                })
            },
            x = function() {
                d.triggerHook > 0 && f.trigger("shift", {
                    reason: "containerResize"
                })
            },
            z = i.extend(r.validate, {
                duration: function(e) {
                    if (i.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
                        var t = parseFloat(e) / 100;
                        e = function() {
                            return s ? s.info("size") * t : 0
                        }
                    }
                    if (i.type.Function(e)) {
                        o = e;
                        try {
                            e = parseFloat(o())
                        } catch (n) {
                            e = -1
                        }
                    }
                    if (e = parseFloat(e), !i.type.Number(e) || 0 > e) throw o ? (o = void 0, 0) : 0;
                    return e
                }
            }),
            C = function(e) {
                e = arguments.length ? [e] : Object.keys(z), e.forEach(function(e) {
                    var t;
                    if (z[e]) try {
                        t = z[e](d[e])
                    } catch (n) {
                        t = u[e]
                    } finally {
                        d[e] = t
                    }
                })
            },
            F = function(e, t) {
                var n = !1,
                    r = d[e];
                return d[e] != t && (d[e] = t, C(e), n = r != d[e]), n
            },
            L = function(e) {
                f[e] || (f[e] = function(t) {
                    return arguments.length ? ("duration" === e && (o = void 0), F(e, t) && (f.trigger("change", {
                        what: e,
                        newval: d[e]
                    }), r.shifts.indexOf(e) > -1 && f.trigger("shift", {
                        reason: e
                    })), f) : d[e]
                })
            };
        this.controller = function() {
            return s
        }, this.state = function() {
            return h
        }, this.scrollOffset = function() {
            return p.start
        }, this.triggerPosition = function() {
            var e = d.offset;
            return s && (e += d.triggerElement ? v : s.info("size") * f.triggerHook()), e
        };
        var T, A;
        f.on("shift.internal", function(e) {
            var t = "duration" === e.reason;
            (h === c && t || h === l && 0 === d.duration) && O(), t && _()
        }).on("progress.internal", function() {
            O()
        }).on("add.internal", function() {
            _()
        }).on("destroy.internal", function(e) {
            f.removePin(e.reset)
        });
        var O = function(e) {
                if (T && s) {
                    var t = s.info(),
                        n = A.spacer.firstChild;
                    if (e || h !== l) {
                        var r = {
                                position: A.inFlow ? "relative" : "absolute",
                                top: 0,
                                left: 0
                            },
                            o = i.css(n, "position") != r.position;
                        A.pushFollowers ? d.duration > 0 && (h === c && 0 === parseFloat(i.css(A.spacer, "padding-top")) ? o = !0 : h === a && 0 === parseFloat(i.css(A.spacer, "padding-bottom")) && (o = !0)) : r[t.vertical ? "top" : "left"] = d.duration * g, i.css(n, r), o && _()
                    } else {
                        "fixed" != i.css(n, "position") && (i.css(n, {
                            position: "fixed"
                        }), _());
                        var u = i.get.offset(A.spacer, !0),
                            f = d.reverse || 0 === d.duration ? t.scrollPos - p.start : Math.round(g * d.duration * 10) / 10;
                        u[t.vertical ? "top" : "left"] += f, i.css(A.spacer.firstChild, {
                            top: u.top,
                            left: u.left
                        })
                    }
                }
            },
            _ = function() {
                if (T && s && A.inFlow) {
                    var e = h === l,
                        t = s.info("vertical"),
                        n = A.spacer.firstChild,
                        r = i.isMarginCollapseType(i.css(A.spacer, "display")),
                        o = {};
                    A.relSize.width || A.relSize.autoFullWidth ? e ? i.css(T, {
                        width: i.get.width(A.spacer)
                    }) : i.css(T, {
                        width: "100%"
                    }) : (o["min-width"] = i.get.width(t ? T : n, !0, !0), o.width = e ? o["min-width"] : "auto"), A.relSize.height ? e ? i.css(T, {
                        height: i.get.height(A.spacer) - (A.pushFollowers ? d.duration : 0)
                    }) : i.css(T, {
                        height: "100%"
                    }) : (o["min-height"] = i.get.height(t ? n : T, !0, !r), o.height = e ? o["min-height"] : "auto"), A.pushFollowers && (o["padding" + (t ? "Top" : "Left")] = d.duration * g, o["padding" + (t ? "Bottom" : "Right")] = d.duration * (1 - g)), i.css(A.spacer, o)
                }
            },
            N = function() {
                s && T && h === l && !s.info("isDocument") && O()
            },
            P = function() {
                s && T && h === l && ((A.relSize.width || A.relSize.autoFullWidth) && i.get.width(window) != i.get.width(A.spacer.parentNode) || A.relSize.height && i.get.height(window) != i.get.height(A.spacer.parentNode)) && _()
            },
            D = function(e) {
                s && T && h === l && !s.info("isDocument") && (e.preventDefault(), s._setScrollPos(s.info("scrollPos") - ((e.wheelDelta || e[s.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)))
            };
        this.setPin = function(e, n) {
            var r = {
                pushFollowers: !0,
                spacerClass: "scrollmagic-pin-spacer"
            };
            if (n = i.extend({}, r, n), e = i.get.elements(e)[0], !e) return f;
            if ("fixed" === i.css(e, "position")) return f;
            if (T) {
                if (T === e) return f;
                f.removePin()
            }
            T = e;
            var o = T.parentNode.style.display,
                s = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            T.parentNode.style.display = "none";
            var a = "absolute" != i.css(T, "position"),
                l = i.css(T, s.concat(["display"])),
                c = i.css(T, ["width", "height"]);
            T.parentNode.style.display = o, !a && n.pushFollowers && (n.pushFollowers = !1);
            var u = T.parentNode.insertBefore(document.createElement("div"), T),
                d = i.extend(l, {
                    position: a ? "relative" : "absolute",
                    boxSizing: "content-box",
                    mozBoxSizing: "content-box",
                    webkitBoxSizing: "content-box"
                });
            if (a || i.extend(d, i.css(T, ["width", "height"])), i.css(u, d), u.setAttribute(t, ""), i.addClass(u, n.spacerClass), A = {
                    spacer: u,
                    relSize: {
                        width: "%" === c.width.slice(-1),
                        height: "%" === c.height.slice(-1),
                        autoFullWidth: "auto" === c.width && a && i.isMarginCollapseType(l.display)
                    },
                    pushFollowers: n.pushFollowers,
                    inFlow: a
                }, !T.___origStyle) {
                T.___origStyle = {};
                var h = T.style,
                    g = s.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                g.forEach(function(e) {
                    T.___origStyle[e] = h[e] || ""
                })
            }
            return A.relSize.width && i.css(u, {
                width: c.width
            }), A.relSize.height && i.css(u, {
                height: c.height
            }), u.appendChild(T), i.css(T, {
                position: a ? "relative" : "absolute",
                margin: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }), (A.relSize.width || A.relSize.autoFullWidth) && i.css(T, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            }), window.addEventListener("scroll", N), window.addEventListener("resize", N), window.addEventListener("resize", P), T.addEventListener("mousewheel", D), T.addEventListener("DOMMouseScroll", D), O(), f
        }, this.removePin = function(e) {
            if (T) {
                if (h === l && O(!0), e || !s) {
                    var n = A.spacer.firstChild;
                    if (n.hasAttribute(t)) {
                        var r = A.spacer.style,
                            o = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                        margins = {}, o.forEach(function(e) {
                            margins[e] = r[e] || ""
                        }), i.css(n, margins)
                    }
                    A.spacer.parentNode.insertBefore(n, A.spacer), A.spacer.parentNode.removeChild(A.spacer), T.parentNode.hasAttribute(t) || (i.css(T, T.___origStyle), delete T.___origStyle)
                }
                window.removeEventListener("scroll", N), window.removeEventListener("resize", N), window.removeEventListener("resize", P), T.removeEventListener("mousewheel", D), T.removeEventListener("DOMMouseScroll", D), T = void 0
            }
            return f
        };
        var R, k = [];
        return f.on("destroy.internal", function(e) {
            f.removeClassToggle(e.reset)
        }), this.setClassToggle = function(e, t) {
            var n = i.get.elements(e);
            return 0 !== n.length && i.type.String(t) ? (k.length > 0 && f.removeClassToggle(), R = t, k = n, f.on("enter.internal_class leave.internal_class", function(e) {
                var t = "enter" === e.type ? i.addClass : i.removeClass;
                k.forEach(function(e) {
                    t(e, R)
                })
            }), f) : f
        }, this.removeClassToggle = function(e) {
            return e && k.forEach(function(e) {
                i.removeClass(e, R)
            }), f.off("start.internal_class end.internal_class"), R = void 0, k = [], f
        }, w(), f
    };
    var r = {
        defaults: {
            duration: 0,
            offset: 0,
            triggerElement: void 0,
            triggerHook: .5,
            reverse: !0,
            loglevel: 2
        },
        validate: {
            offset: function(e) {
                if (e = parseFloat(e), !i.type.Number(e)) throw 0;
                return e
            },
            triggerElement: function(e) {
                if (e = e || void 0) {
                    var t = i.get.elements(e)[0];
                    if (!t) throw 0;
                    e = t
                }
                return e
            },
            triggerHook: function(e) {
                var t = {
                    onCenter: .5,
                    onEnter: 1,
                    onLeave: 0
                };
                if (i.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
                else {
                    if (!(e in t)) throw 0;
                    e = t[e]
                }
                return e
            },
            reverse: function(e) {
                return !!e
            }
        },
        shifts: ["duration", "offset", "triggerHook"]
    };
    e.Scene.addOption = function(e, t, n, i) {
        e in r.defaults || (r.defaults[e] = t, r.validate[e] = n, i && r.shifts.push(e))
    }, e.Scene.extend = function(t) {
        var n = this;
        e.Scene = function() {
            return n.apply(this, arguments), this.$super = i.extend({}, this), t.apply(this, arguments) || this
        }, i.extend(e.Scene, n), e.Scene.prototype = n.prototype, e.Scene.prototype.constructor = e.Scene
    }, e.Event = function(e, t, n, r) {
        r = r || {};
        for (var i in r) this[i] = r[i];
        return this.type = e, this.target = this.currentTarget = n, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this
    };
    var i = e._util = function(e) {
        var t, n = {},
            r = function(e) {
                return parseFloat(e) || 0
            },
            i = function(t) {
                return t.currentStyle ? t.currentStyle : e.getComputedStyle(t)
            },
            o = function(t, n, o, s) {
                if (n = n === document ? e : n, n === e) s = !1;
                else if (!f.DomElement(n)) return 0;
                t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
                var a = (o ? n["offset" + t] || n["outer" + t] : n["client" + t] || n["inner" + t]) || 0;
                if (o && s) {
                    var l = i(n);
                    a += "Height" === t ? r(l.marginTop) + r(l.marginBottom) : r(l.marginLeft) + r(l.marginRight)
                }
                return a
            },
            s = function(e) {
                return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(e) {
                    return e[1].toUpperCase()
                })
            };
        n.extend = function(e) {
            for (e = e || {}, t = 1; t < arguments.length; t++)
                if (arguments[t])
                    for (var n in arguments[t]) arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
            return e
        }, n.isMarginCollapseType = function(e) {
            return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e) > -1
        };
        var a = 0,
            l = ["ms", "moz", "webkit", "o"],
            c = e.requestAnimationFrame,
            u = e.cancelAnimationFrame;
        for (t = 0; !c && t < l.length; ++t) c = e[l[t] + "RequestAnimationFrame"], u = e[l[t] + "CancelAnimationFrame"] || e[l[t] + "CancelRequestAnimationFrame"];
        c || (c = function(t) {
            var n = (new Date).getTime(),
                r = Math.max(0, 16 - (n - a)),
                i = e.setTimeout(function() {
                    t(n + r)
                }, r);
            return a = n + r, i
        }), u || (u = function(t) {
            e.clearTimeout(t)
        }), n.rAF = c.bind(e), n.cAF = u.bind(e);
        var f = n.type = function(e) {
            return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
        };
        f.String = function(e) {
            return "string" === f(e)
        }, f.Function = function(e) {
            return "function" === f(e)
        }, f.Array = function(e) {
            return Array.isArray(e)
        }, f.Number = function(e) {
            return !f.Array(e) && e - parseFloat(e) + 1 >= 0
        }, f.DomElement = function(e) {
            return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
        };
        var d = n.get = {};
        return d.elements = function(t) {
            var n = [];
            if (f.String(t)) try {
                t = document.querySelectorAll(t)
            } catch (r) {
                return n
            }
            if ("nodelist" === f(t) || f.Array(t))
                for (var i = 0, o = n.length = t.length; o > i; i++) {
                    var s = t[i];
                    n[i] = f.DomElement(s) ? s : d.elements(s)
                } else(f.DomElement(t) || t === document || t === e) && (n = [t]);
            return n
        }, d.scrollTop = function(t) {
            return t && "number" == typeof t.scrollTop ? t.scrollTop : e.pageYOffset || 0
        }, d.scrollLeft = function(t) {
            return t && "number" == typeof t.scrollLeft ? t.scrollLeft : e.pageXOffset || 0
        }, d.width = function(e, t, n) {
            return o("width", e, t, n)
        }, d.height = function(e, t, n) {
            return o("height", e, t, n)
        }, d.offset = function(e, t) {
            var n = {
                top: 0,
                left: 0
            };
            if (e && e.getBoundingClientRect) {
                var r = e.getBoundingClientRect();
                n.top = r.top, n.left = r.left, t || (n.top += d.scrollTop(), n.left += d.scrollLeft())
            }
            return n
        }, n.addClass = function(e, t) {
            t && (e.classList ? e.classList.add(t) : e.className += " " + t)
        }, n.removeClass = function(e, t) {
            t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
        }, n.css = function(e, t) {
            if (f.String(t)) return i(e)[s(t)];
            if (f.Array(t)) {
                var n = {},
                    r = i(e);
                return t.forEach(function(e) {
                    n[e] = r[s(e)]
                }), n
            }
            for (var o in t) {
                var a = t[o];
                a == parseFloat(a) && (a += "px"), e.style[s(o)] = a
            }
        }, n
    }(window || {});
    return e
});
/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
! function(e, n) {
    "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], n) : "object" == typeof exports ? (require("gsap"), n(require("scrollmagic"), TweenMax, TimelineMax)) : n(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.TweenMax || e.TweenLite, e.TimelineMax || e.TimelineLite)
}(this, function(e, n, r) {
    "use strict";
    e.Scene.addOption("tweenChanges", !1, function(e) {
        return !!e
    }), e.Scene.extend(function() {
        var e, t = this;
        t.on("progress.plugin_gsap", function() {
            i()
        }), t.on("destroy.plugin_gsap", function(e) {
            t.removeTween(e.reset)
        });
        var i = function() {
            if (e) {
                var n = t.progress(),
                    r = t.state();
                e.repeat && -1 === e.repeat() ? "DURING" === r && e.paused() ? e.play() : "DURING" === r || e.paused() || e.pause() : n != e.progress() && (0 === t.duration() ? n > 0 ? e.play() : e.reverse() : t.tweenChanges() && e.tweenTo ? e.tweenTo(n * e.duration()) : e.progress(n).pause())
            }
        };
        t.setTween = function(o, a, s) {
            var u;
            arguments.length > 1 && (arguments.length < 3 && (s = a, a = 1), o = n.to(o, a, s));
            try {
                u = r ? new r({
                    smoothChildTiming: !0
                }).add(o) : o, u.pause()
            } catch (p) {
                return t
            }
            return e && t.removeTween(), e = u, o.repeat && -1 === o.repeat() && (e.repeat(-1), e.yoyo(o.yoyo())), i(), t
        }, t.removeTween = function(n) {
            return e && (n && e.progress(0).pause(), e.kill(), e = void 0), t
        }
    })
});
/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
! function(e, r) {
    "function" == typeof define && define.amd ? define(["ScrollMagic"], r) : r("object" == typeof exports ? require("scrollmagic") : e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic)
}(this, function(e) {
    "use strict";
    var r = "0.85em",
        t = "9999",
        i = 15,
        o = e._util,
        n = 0;
    e.Scene.extend(function() {
        var e, r = this;
        r.addIndicators = function(t) {
            if (!e) {
                var i = {
                    name: "",
                    indent: 0,
                    parent: void 0,
                    colorStart: "green",
                    colorEnd: "red",
                    colorTrigger: "blue"
                };
                t = o.extend({}, i, t), n++, e = new s(r, t), r.on("add.plugin_addIndicators", e.add), r.on("remove.plugin_addIndicators", e.remove), r.on("destroy.plugin_addIndicators", r.removeIndicators), r.controller() && e.add()
            }
            return r
        }, r.removeIndicators = function() {
            return e && (e.remove(), this.off("*.plugin_addIndicators"), e = void 0), r
        }
    }), e.Controller.addOption("addIndicators", !1), e.Controller.extend(function() {
        var r = this,
            t = r.info(),
            n = t.container,
            s = t.isDocument,
            d = t.vertical,
            a = {
                groups: []
            };
        this._indicators = a;
        var g = function() {
                a.updateBoundsPositions()
            },
            p = function() {
                a.updateTriggerGroupPositions()
            };
        return n.addEventListener("resize", p), s || (window.addEventListener("resize", p), window.addEventListener("scroll", p)), n.addEventListener("resize", g), n.addEventListener("scroll", g), this._indicators.updateBoundsPositions = function(e) {
            for (var r, t, s, g = e ? [o.extend({}, e.triggerGroup, {
                    members: [e]
                })] : a.groups, p = g.length, u = {}, c = d ? "left" : "top", l = d ? "width" : "height", f = d ? o.get.scrollLeft(n) + o.get.width(n) - i : o.get.scrollTop(n) + o.get.height(n) - i; p--;)
                for (s = g[p], r = s.members.length, t = o.get[l](s.element.firstChild); r--;) u[c] = f - t, o.css(s.members[r].bounds, u)
        }, this._indicators.updateTriggerGroupPositions = function(e) {
            for (var t, g, p, u, c, l = e ? [e] : a.groups, f = l.length, m = s ? document.body : n, h = s ? {
                    top: 0,
                    left: 0
                } : o.get.offset(m, !0), v = d ? o.get.width(n) - i : o.get.height(n) - i, b = d ? "width" : "height", G = d ? "Y" : "X"; f--;) t = l[f], g = t.element, p = t.triggerHook * r.info("size"), u = o.get[b](g.firstChild.firstChild), c = p > u ? "translate" + G + "(-100%)" : "", o.css(g, {
                top: h.top + (d ? p : v - t.members[0].options.indent),
                left: h.left + (d ? v - t.members[0].options.indent : p)
            }), o.css(g.firstChild.firstChild, {
                "-ms-transform": c,
                "-webkit-transform": c,
                transform: c
            })
        }, this._indicators.updateTriggerGroupLabel = function(e) {
            var r = "trigger" + (e.members.length > 1 ? "" : " " + e.members[0].options.name),
                t = e.element.firstChild.firstChild,
                i = t.textContent !== r;
            i && (t.textContent = r, d && a.updateBoundsPositions())
        }, this.addScene = function(t) {
            this._options.addIndicators && t instanceof e.Scene && t.controller() === r && t.addIndicators(), this.$super.addScene.apply(this, arguments)
        }, this.destroy = function() {
            n.removeEventListener("resize", p), s || (window.removeEventListener("resize", p), window.removeEventListener("scroll", p)), n.removeEventListener("resize", g), n.removeEventListener("scroll", g), this.$super.destroy.apply(this, arguments)
        }, r
    });
    var s = function(e, r) {
            var t, i, s = this,
                a = d.bounds(),
                g = d.start(r.colorStart),
                p = d.end(r.colorEnd),
                u = r.parent && o.get.elements(r.parent)[0];
            r.name = r.name || n, g.firstChild.textContent += " " + r.name, p.textContent += " " + r.name, a.appendChild(g), a.appendChild(p), s.options = r, s.bounds = a, s.triggerGroup = void 0, this.add = function() {
                i = e.controller(), t = i.info("vertical");
                var r = i.info("isDocument");
                u || (u = r ? document.body : i.info("container")), r || "static" !== o.css(u, "position") || o.css(u, {
                    position: "relative"
                }), e.on("change.plugin_addIndicators", l), e.on("shift.plugin_addIndicators", c), G(), h(), setTimeout(function() {
                    i._indicators.updateBoundsPositions(s)
                }, 0)
            }, this.remove = function() {
                if (s.triggerGroup) {
                    if (e.off("change.plugin_addIndicators", l), e.off("shift.plugin_addIndicators", c), s.triggerGroup.members.length > 1) {
                        var r = s.triggerGroup;
                        r.members.splice(r.members.indexOf(s), 1), i._indicators.updateTriggerGroupLabel(r), i._indicators.updateTriggerGroupPositions(r), s.triggerGroup = void 0
                    } else b();
                    m()
                }
            };
            var c = function() {
                    h()
                },
                l = function(e) {
                    "triggerHook" === e.what && G()
                },
                f = function() {
                    var e = i.info("vertical");
                    o.css(g.firstChild, {
                        "border-bottom-width": e ? 1 : 0,
                        "border-right-width": e ? 0 : 1,
                        bottom: e ? -1 : r.indent,
                        right: e ? r.indent : -1,
                        padding: e ? "0 8px" : "2px 4px"
                    }), o.css(p, {
                        "border-top-width": e ? 1 : 0,
                        "border-left-width": e ? 0 : 1,
                        top: e ? "100%" : "",
                        right: e ? r.indent : "",
                        bottom: e ? "" : r.indent,
                        left: e ? "" : "100%",
                        padding: e ? "0 8px" : "2px 4px"
                    }), u.appendChild(a)
                },
                m = function() {
                    a.parentNode.removeChild(a)
                },
                h = function() {
                    a.parentNode !== u && f();
                    var r = {};
                    r[t ? "top" : "left"] = e.triggerPosition(), r[t ? "height" : "width"] = e.duration(), o.css(a, r), o.css(p, {
                        display: e.duration() > 0 ? "" : "none"
                    })
                },
                v = function() {
                    var n = d.trigger(r.colorTrigger),
                        a = {};
                    a[t ? "right" : "bottom"] = 0, a[t ? "border-top-width" : "border-left-width"] = 1, o.css(n.firstChild, a), o.css(n.firstChild.firstChild, {
                        padding: t ? "0 8px 3px 8px" : "3px 4px"
                    }), document.body.appendChild(n);
                    var g = {
                        triggerHook: e.triggerHook(),
                        element: n,
                        members: [s]
                    };
                    i._indicators.groups.push(g), s.triggerGroup = g, i._indicators.updateTriggerGroupLabel(g), i._indicators.updateTriggerGroupPositions(g)
                },
                b = function() {
                    i._indicators.groups.splice(i._indicators.groups.indexOf(s.triggerGroup), 1), s.triggerGroup.element.parentNode.removeChild(s.triggerGroup.element), s.triggerGroup = void 0
                },
                G = function() {
                    var r = e.triggerHook(),
                        t = 1e-4;
                    if (!(s.triggerGroup && Math.abs(s.triggerGroup.triggerHook - r) < t)) {
                        for (var o, n = i._indicators.groups, d = n.length; d--;)
                            if (o = n[d], Math.abs(o.triggerHook - r) < t) return s.triggerGroup && (1 === s.triggerGroup.members.length ? b() : (s.triggerGroup.members.splice(s.triggerGroup.members.indexOf(s), 1), i._indicators.updateTriggerGroupLabel(s.triggerGroup), i._indicators.updateTriggerGroupPositions(s.triggerGroup))), o.members.push(s), s.triggerGroup = o, void i._indicators.updateTriggerGroupLabel(o);
                        if (s.triggerGroup) {
                            if (1 === s.triggerGroup.members.length) return s.triggerGroup.triggerHook = r, void i._indicators.updateTriggerGroupPositions(s.triggerGroup);
                            s.triggerGroup.members.splice(s.triggerGroup.members.indexOf(s), 1), i._indicators.updateTriggerGroupLabel(s.triggerGroup), i._indicators.updateTriggerGroupPositions(s.triggerGroup), s.triggerGroup = void 0
                        }
                        v()
                    }
                }
        },
        d = {
            start: function(e) {
                var r = document.createElement("div");
                r.textContent = "start", o.css(r, {
                    position: "absolute",
                    overflow: "visible",
                    "border-width": 0,
                    "border-style": "solid",
                    color: e,
                    "border-color": e
                });
                var t = document.createElement("div");
                return o.css(t, {
                    position: "absolute",
                    overflow: "visible",
                    width: 0,
                    height: 0
                }), t.appendChild(r), t
            },
            end: function(e) {
                var r = document.createElement("div");
                return r.textContent = "end", o.css(r, {
                    position: "absolute",
                    overflow: "visible",
                    "border-width": 0,
                    "border-style": "solid",
                    color: e,
                    "border-color": e
                }), r
            },
            bounds: function() {
                var e = document.createElement("div");
                return o.css(e, {
                    position: "absolute",
                    overflow: "visible",
                    "white-space": "nowrap",
                    "pointer-events": "none",
                    "font-size": r
                }), e.style.zIndex = t, e
            },
            trigger: function(e) {
                var i = document.createElement("div");
                i.textContent = "trigger", o.css(i, {
                    position: "relative"
                });
                var n = document.createElement("div");
                o.css(n, {
                    position: "absolute",
                    overflow: "visible",
                    "border-width": 0,
                    "border-style": "solid",
                    color: e,
                    "border-color": e
                }), n.appendChild(i);
                var s = document.createElement("div");
                return o.css(s, {
                    position: "fixed",
                    overflow: "visible",
                    "white-space": "nowrap",
                    "pointer-events": "none",
                    "font-size": r
                }), s.style.zIndex = t, s.appendChild(n), s
            }
        }
});

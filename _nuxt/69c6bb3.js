(window.webpackJsonp = window.webpackJsonp || []).push([
    [1, 17], {
        422: function(t, e, o) {
            var content = o(453);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(54).default)("a1ea0660", content, !0, {
                sourceMap: !1
            })
        },
        451: function(t, e, o) {
            "use strict";
            var r = o(24),
                n = o(10),
                f = o(100),
                l = o(37),
                c = o(28),
                m = o(72),
                w = o(167),
                d = o(99),
                h = o(267),
                v = o(8),
                y = o(64),
                F = o(82).f,
                R = o(63).f,
                O = o(31).f,
                x = o(268).trim,
                W = "Number",
                _ = n.Number,
                z = _.prototype,
                $ = m(y(z)) == W,
                I = function(t) {
                    if (d(t)) throw TypeError("Cannot convert a Symbol value to a number");
                    var e, o, r, n, f, l, c, code, m = h(t, "number");
                    if ("string" == typeof m && m.length > 2)
                        if (43 === (e = (m = x(m)).charCodeAt(0)) || 45 === e) {
                            if (88 === (o = m.charCodeAt(2)) || 120 === o) return NaN
                        } else if (48 === e) {
                        switch (m.charCodeAt(1)) {
                            case 66:
                            case 98:
                                r = 2, n = 49;
                                break;
                            case 79:
                            case 111:
                                r = 8, n = 55;
                                break;
                            default:
                                return +m
                        }
                        for (l = (f = m.slice(2)).length, c = 0; c < l; c++)
                            if ((code = f.charCodeAt(c)) < 48 || code > n) return NaN;
                        return parseInt(f, r)
                    }
                    return +m
                };
            if (f(W, !_(" 0o1") || !_("0b1") || _("+0x1"))) {
                for (var L, M = function(t) {
                        var e = arguments.length < 1 ? 0 : t,
                            o = this;
                        return o instanceof M && ($ ? v((function() {
                            z.valueOf.call(o)
                        })) : m(o) != W) ? w(new _(I(e)), o, M) : I(e)
                    }, k = r ? F(_) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","), E = 0; k.length > E; E++) c(_, L = k[E]) && !c(M, L) && O(M, L, R(_, L));
                M.prototype = z, z.constructor = M, l(n, W, M)
            }
        },
        452: function(t, e, o) {
            "use strict";
            o(422)
        },
        453: function(t, e, o) {
            var r = o(53)(!1);
            r.push([t.i, '@font-face{font-family:"Roobert";font-style:normal;font-weight:300;src:url(/fonts/WOFF2/Roobert-Light.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Light.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:300;src:url(/fonts/WOFF2/Roobert-LightItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-LightItalic.woff) format("woff")}@font-face{font-family:"Raleway";font-style:normal;font-weight:300;src:url(/fonts/WOFF2/Raleway-Light.woff2) format("woff2"),url(/fonts/WOFF/Raleway-Light.woff) format("woff")}@font-face{font-family:"Raleway";font-style:italic;font-weight:300;src:url(/fonts/WOFF2/Raleway-LightItalic.woff2) format("woff2"),url(/fonts/WOFF/Raleway-LightItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:400;src:url(/fonts/WOFF2/Roobert-Regular.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Regular.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:400;src:url(/fonts/WOFF2/Roobert-RegularItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-RegularItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:500;src:url(/fonts/WOFF2/Roobert-Medium.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Medium.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:500;src:url(/fonts/WOFF2/Roobert-MediumItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-MediumItalic.woff) format("woff")}@font-face{font-family:"Raleway";font-style:normal;font-weight:500;src:url(/fonts/WOFF2/Raleway-Medium.woff2) format("woff2"),url(/fonts/WOFF/Raleway-Medium.woff) format("woff")}@font-face{font-family:"Raleway";font-style:italic;font-weight:500;src:url(/fonts/WOFF2/Raleway-MediumItalic.woff2) format("woff2"),url(/fonts/WOFF/Raleway-MediumItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:700;src:url(/fonts/WOFF2/Roobert-SemiBold.woff2) format("woff2"),url(/fonts/WOFF/Roobert-SemiBold.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:700;src:url(/fonts/WOFF2/Roobert-SemiBoldItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-SemiBoldItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:700;src:url(/fonts/WOFF2/Roobert-Bold.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Bold.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:700;src:url(/fonts/WOFF2/Roobert-BoldItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-BoldItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:900;src:url(/fonts/WOFF2/Roobert-Heavy.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Heavy.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:900;src:url(/fonts/WOFF2/Roobert-HeavyItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-HeavyItalic.woff) format("woff")}.team-member[data-v-5cb8886c]{opacity:0;transition:opacity .8s linear,transform .8s cubic-bezier(.19,1,.22,1);transform:translate3d(0,30%,0);border-bottom:1px solid #2d2d2d;margin-top:24vw;will-change:transform,opacity}@media(min-width:1024px){.team-member[data-v-5cb8886c]{display:inline-block;margin-top:0;padding-bottom:0;border-bottom:none}}.team-member .role[data-v-5cb8886c]{transition:color 1.25s cubic-bezier(.19,1,.22,1);display:block;text-transform:uppercase;font-size:2.67vw;line-height:3.73vw}@media(min-width:1024px){.team-member .role[data-v-5cb8886c]{font-size:.73vw;line-height:.99vw}}.white-bg .team-member .role[data-v-5cb8886c]{color:#010101}.team-member .picture-container[data-v-5cb8886c]{position:relative;pointer-events:none;z-index:1;margin-top:6.67vw;width:86.67vw;height:117.87vw}@media(min-width:1024px){.team-member .picture-container[data-v-5cb8886c]{margin-top:.94vw;width:24.38vw;height:34.69vw}}.team-member .picture-container .img-wrapper[data-v-5cb8886c]{position:relative;overflow:hidden;width:86.67vw;height:100%}@media(min-width:1024px){.team-member .picture-container .img-wrapper[data-v-5cb8886c]{width:24.38vw;height:34.69vw}}.team-member .picture-container .img-wrapper .img-container[data-v-5cb8886c]{height:100%}.team-member .picture-container .img-wrapper .img-container img[data-v-5cb8886c]{width:100%;height:100%;position:absolute;top:50%;left:50%;transform:translate3d(-50%,-50%,0) scale(1);-o-object-fit:cover;object-fit:cover;transition:transform .8s cubic-bezier(.19,1,.22,1)}.team-member .details[data-v-5cb8886c]{transition:color 1.25s cubic-bezier(.19,1,.22,1),height .65s cubic-bezier(1,0,0,1);height:0;overflow:hidden;font-size:4.27vw;line-height:8vw;margin-top:8vw}@media(min-width:1024px){.team-member .details[data-v-5cb8886c]{display:block;position:absolute;margin-top:0;height:auto;overflow:visible;overflow:initial;left:31.25vw;top:25.1vw;width:18.65vw;font-size:.83vw;line-height:1.51vw}}.white-bg .team-member .details[data-v-5cb8886c]{color:#010101}.team-member .details .container-text[data-v-5cb8886c]{display:block;opacity:.6;pointer-events:none}@media(min-width:1024px){.team-member .details .container-text[data-v-5cb8886c]{opacity:0}}.team-member .socials[data-v-5cb8886c]{display:block;margin-top:8.53vw;padding-bottom:24vw;font-size:4.27vw;line-height:5.07vw}@media(min-width:1024px){.team-member .socials[data-v-5cb8886c]{opacity:0;padding-bottom:0;margin-top:1.67vw}}.team-member .socials a[data-v-5cb8886c]{display:inline-block;opacity:1;transition:color 1.25s cubic-bezier(.19,1,.22,1),opacity .4s linear}.white-bg .team-member .socials a[data-v-5cb8886c]{color:#010101}.team-member .socials a[data-v-5cb8886c]:before{display:none}.notouch .team-member .socials a[data-v-5cb8886c]:hover{opacity:.4}.team-member .socials a+a[data-v-5cb8886c]{margin-left:4vw}@media(min-width:1024px){.team-member .socials a+a[data-v-5cb8886c]{margin-left:1.88vw}}@media(min-width:1024px){.team-member .socials[data-v-5cb8886c]{font-size:.83vw;line-height:.99vw}}.team-member .row[data-v-5cb8886c]{display:flex;flex-direction:row;justify-content:space-between}.team-member .row .name[data-v-5cb8886c]{display:inline-block;vertical-align:middle;transition:color 1.25s cubic-bezier(.19,1,.22,1);font-size:5.87vw;line-height:7.47vw;margin-top:6.13vw}@media(min-width:1024px){.team-member .row .name[data-v-5cb8886c]{display:inline-block;position:absolute;z-index:2;margin:0;top:calc(50% - 6vw);left:22.45vw;width:20.83vw;font-size:3.13vw;line-height:3.59vw}}.team-member .row .container-btn[data-v-5cb8886c]{width:11.73vw;height:11.73vw;margin-top:6.13vw}@media(min-width:1024px){.team-member .row .container-btn[data-v-5cb8886c]{display:inline-block;vertical-align:middle;position:absolute;z-index:2;margin:0;top:22.5vw;left:22.45vw;width:5.21vw;height:5.21vw}}.team-member .row .container-btn .more[data-v-5cb8886c]{background:transparent;border:1px solid hsla(0,0%,100%,.3);transition:border 1.25s cubic-bezier(.19,1,.22,1);width:100%;height:100%;border-radius:26.67vw}@media(min-width:1024px){.team-member .row .container-btn .more[data-v-5cb8886c]{border-radius:5.21vw}}.team-member .row .container-btn .more .sign[data-v-5cb8886c]{position:relative;width:100%;height:100%;display:block}.team-member .row .container-btn .more .sign[data-v-5cb8886c]:after,.team-member .row .container-btn .more .sign[data-v-5cb8886c]:before{content:"";position:absolute;left:50%;background:#fff;transition:background 1.25s cubic-bezier(.19,1,.22,1),opacity .4s linear,transform .8s cubic-bezier(.19,1,.22,1);width:1px;top:calc(50% - 1.065vw);height:2.13vw}@media(min-width:1024px){.team-member .row .container-btn .more .sign[data-v-5cb8886c]:after,.team-member .row .container-btn .more .sign[data-v-5cb8886c]:before{height:1.15vw;top:calc(50% - .57vw)}}.team-member .row .container-btn .more .sign[data-v-5cb8886c]:after{transform:rotate(-90deg)}.team-member .row .container-btn.open .sign[data-v-5cb8886c]:before{transform:rotate(90deg);opacity:1}.team-member .row .container-btn.open .sign[data-v-5cb8886c]:after{opacity:0;transform:rotate(0deg)}.white-bg .team-member .row .name[data-v-5cb8886c]{color:#181818}.white-bg .team-member .row .container-btn .more[data-v-5cb8886c]{border:1px solid rgba(0,0,0,.3)}.white-bg .team-member .row .container-btn .more .sign[data-v-5cb8886c]:after,.white-bg .team-member .row .container-btn .more .sign[data-v-5cb8886c]:before{background:#181818}.team-member .number[data-v-5cb8886c]{display:none;transition:color 1.25s cubic-bezier(.19,1,.22,1)}@media(min-width:1024px){.team-member .number[data-v-5cb8886c]{display:block;margin-top:.83vw;font-size:.73vw;line-height:.99vw}}.white-bg .team-member .number[data-v-5cb8886c]{color:#010101}.notouch .team-member .container-btn .more[data-v-5cb8886c]:hover{cursor:pointer}.team-member.is-inview[data-v-5cb8886c]{opacity:1;transform:translateZ(0);-webkit-transform:translateZ(0);-moz-transform:translateZ(0)}.team-member.is-inview .picture-container .img-wrapper .img-container img[data-v-5cb8886c]{opacity:1;transform:translate3d(-50%,-50%,0) scale(1.3)}', ""]), t.exports = r
        },
        468: function(t, e, o) {
            var content = o(491);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(54).default)("89785e1a", content, !0, {
                sourceMap: !1
            })
        },
        478: function(t, e, o) {
            "use strict";
            o.r(e);
            o(451), o(81), o(45);
            var r = o(6),
                n = o(0),
                f = o(41),
                l = {
                    name: "TeamMember",
                    props: {
                        role: {
                            type: String,
                            default: function() {
                                return ""
                            }
                        },
                        firstName: {
                            type: String,
                            default: function() {
                                return ""
                            }
                        },
                        instagram: {
                            type: String,
                            default: function() {
                                return ""
                            }
                        },
                        twitter: {
                            type: String,
                            default: function() {
                                return ""
                            }
                        },
                        website: {
                            type: String,
                            default: function() {
                                return ""
                            }
                        },
                        lastName: {
                            type: String,
                            default: function() {
                                return ""
                            }
                        },
                        details: {
                            type: String,
                            default: function() {
                                return ""
                            }
                        },
                        pic: {
                            type: String,
                            default: function() {
                                return ""
                            }
                        },
                        index: {
                            type: Number,
                            default: 0
                        },
                        isDetailsShow: {
                            type: Boolean,
                            default: function() {
                                return !1
                            }
                        }
                    },
                    data: function() {
                        return {
                            isShow: !1,
                            options: {
                                ease: .1,
                                magneticForce: .6
                            },
                            pos: {
                                cx: 0,
                                cy: 0,
                                tx: 0,
                                ty: 0,
                                x: 0,
                                y: 0
                            },
                            mouse: {
                                x: 0,
                                y: 0
                            }
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.$nextTick((function() {
                            if (window.innerWidth >= 1024) t.init(), t.attach(), t.onResize(), t.update(), setTimeout((function() {
                                t.$nuxt.$emit("update-scroll")
                            }), 200);
                            else {
                                var button = t.$el.querySelector("[data-accordion-button]"),
                                    content = t.$el.querySelector("[data-accordion-content]");
                                window.addEventListener("resize", (function() {
                                    if ("open" === content.getAttribute("data-accordion-content")) {
                                        content.style.height = "auto";
                                        var t = content.scrollHeight;
                                        content.style.height = "".concat(t, "px")
                                    }
                                })), button.addEventListener("click", (function() {
                                    if ("open" !== content.getAttribute("data-accordion-content")) {
                                        var e = content.scrollHeight;
                                        t.$el.querySelector(".container-btn").classList.add("open"), content.setAttribute("data-accordion-content", "open"), content.style.height = "".concat(e, "px")
                                    } else t.$el.querySelector(".container-btn").classList.remove("open"), content.setAttribute("data-accordion-content", "closed"), content.style.height = "0";
                                    setTimeout((function() {
                                        t.$nuxt.$emit("update-scroll")
                                    }), 700)
                                }))
                            }
                        }))
                    },
                    methods: {
                        init: function() {
                            this.$btn = this.$el.querySelector(".container-btn"), this.$btnMore = this.$btn.querySelector(".more"), this.sizes = this.$btn.getBoundingClientRect()
                        },
                        onClick: function() {
                            var t = this;
                            this.tl && this.tl.kill(), this.tl = r.b.timeline();
                            var e = this.$el.querySelector(".details .container-text"),
                                o = this.$el.querySelector(".details .socials");
                            this.isShow ? (this.tl.to([e, o], {
                                opacity: 0,
                                duration: .375,
                                ease: n.c.easeNone
                            }, 0), this.tl.to([e, o], {
                                x: "-10%",
                                duration: .75,
                                force3D: !0,
                                ease: n.a.easeOut
                            }, 0), this.tl.add((function() {
                                t.isShow = !1, t.$btn.classList.remove("open")
                            }), 0)) : (this.tl.add((function() {
                                t.isShow = !0, t.$btn.classList.add("open")
                            }), 0), this.tl.fromTo(e, {
                                opacity: 0
                            }, {
                                opacity: .6,
                                duration: .375,
                                ease: n.c.easeNone
                            }, 0), this.tl.fromTo(o, {
                                opacity: 0
                            }, {
                                opacity: 1,
                                duration: .375,
                                ease: n.c.easeNone
                            }, 0), this.tl.fromTo([e, o], {
                                x: "-10%"
                            }, {
                                x: "0",
                                duration: .75,
                                force3D: !0,
                                ease: n.a.easeOut
                            }, 0)), this.tl.play()
                        },
                        onEnter: function() {
                            this.sizes = this.$btn.getBoundingClientRect()
                        },
                        onMove: function(t) {
                            this.mouse.x = t.pageX, this.mouse.y = t.pageY, this.pos.cx = this.sizes.left + this.sizes.width / 2, this.pos.cy = this.sizes.top + this.sizes.height / 2;
                            var e = this.mouse.x - this.sizes.left - this.sizes.width / 2,
                                o = this.mouse.y - this.sizes.top - this.sizes.height / 2;
                            this.pos.tx = e - e * (1 - this.options.magneticForce), this.pos.ty = o - o * (1 - this.options.magneticForce)
                        },
                        onLeave: function() {
                            this.pos.tx = 0, this.pos.ty = 0, this.sizes = this.$btn.getBoundingClientRect()
                        },
                        onResize: function() {
                            this.sizes = this.$btn.getBoundingClientRect()
                        },
                        update: function() {
                            this.pos.x += (this.pos.tx - this.pos.x) * this.options.ease, this.pos.y += (this.pos.ty - this.pos.y) * this.options.ease;
                            var t = "translate3d(".concat(this.pos.x, "px, ").concat(this.pos.y, "px, 0)");
                            this.$btnMore.style.webkitTransform = t, this.$btnMore.style.MozTransform = t, this.$btnMore.style.msTransform = t, this.$btnMore.style.OTransform = t, this.$btnMore.style.transform = t, window.requestAnimationFrame(this.update)
                        },
                        attach: function() {
                            window.addEventListener("resize", this.onResize, !1), f.a.device.touch ? this.$btn.addEventListener("touchstart", this.onClick) : this.$btn.addEventListener("click", this.onClick), this.$btn.addEventListener("mouseenter", this.onEnter, !1), this.$btn.addEventListener("mousemove", this.onMove, !1), this.$btn.addEventListener("mouseleave", this.onLeave, !1)
                        },
                        detach: function() {
                            window.removeEventListener("resize", this.onResize, !1), f.a.device.touch ? this.$btn.removeEventListener("touchstart", this.onClick) : this.$btn.removeEventListener("click", this.onClick), this.$btn.removeEventListener("mouseenter", this.onEnter, !1), this.$btn.removeEventListener("mousemove", this.onMove, !1), this.$btn.removeEventListener("mouseleave", this.onLeave, !1)
                        }
                    }
                },
                c = (o(452), o(21)),
                component = Object(c.a)(l, (function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "team-member",
                        attrs: {
                            "data-scroll": ""
                        }
                    }, [o("span", {
                        staticClass: "role",
                        attrs: {
                            "data-scroll": ""
                        }
                    }, [t._v(" " + t._s(t.$props.role) + " ")]), t._v(" "), o("div", {
                        staticClass: "picture-container",
                        attrs: {
                            "data-scroll": ""
                        }
                    }, [o("div", {
                        staticClass: "img-wrapper"
                    }, [o("div", {
                        staticClass: "img-container",
                        attrs: {
                            "data-scroll": "",
                            "data-scroll-target": "#team",
                            "data-scroll-speed": ".5"
                        }
                    }, [o("picture", [o("img", {
                        attrs: {
                            src: t.$props.pic,
                            alt: ""
                        }
                    })])])])]), t._v(" "), o("div", {
                        staticClass: "row",
                        attrs: {
                            "data-scroll": "",
                            "data-scroll-target": "#team"
                        }
                    }, [o("span", {
                        staticClass: "name",
                        attrs: {
                            "data-scroll-speed": "-2"
                        }
                    }, [t._v(t._s(t.$props.firstName)), o("br"), t._v(t._s(t.$props.lastName))]), t._v(" "), t._m(0)]), t._v(" "), o("p", {
                        staticClass: "details",
                        attrs: {
                            "data-scroll": "",
                            "data-scroll-target": "#team",
                            "data-accordion-content": ""
                        }
                    }, [o("span", {
                        staticClass: "container-text"
                    }, [t._v("\n      " + t._s(t.$props.details) + "\n    ")]), t._v(" "), o("ul", {
                        staticClass: "socials"
                    }, [o("li", ["" != t.$props.instagram ? o("a", {
                        attrs: {
                            href: t.$props.instagram,
                            target: "_blank"
                        }
                    }, [t._v("Ig")]) : t._e(), t._v(" "), "" != t.$props.twitter ? o("a", {
                        attrs: {
                            href: t.$props.twitter,
                            target: "_blank"
                        }
                    }, [t._v("Tw")]) : t._e(), t._v(" "), "" != t.$props.website ? o("a", {
                        attrs: {
                            href: t.$props.website,
                            target: "_blank"
                        }
                    }, [t._v("Web")]) : t._e()])])]), t._v(" "), o("span", {
                        staticClass: "number",
                        attrs: {
                            "data-scroll": ""
                        }
                    }, [t._v("(" + t._s(" " + (t.$props.index + 1) + " ") + ")")])])
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "container-btn",
                        attrs: {
                            "data-accordion-button": ""
                        }
                    }, [e("button", {
                        staticClass: "more"
                    }, [e("span", {
                        staticClass: "sign"
                    })])])
                }], !1, null, "5cb8886c", null);
            e.default = component.exports
        },
        488: function(t, e, o) {
            t.exports = o.p + "img/bg-light-team-dk.4c3226f.jpg"
        },
        489: function(t, e, o) {
            t.exports = o.p + "img/bg-light-team-mb.2c36de5.jpg"
        },
        490: function(t, e, o) {
            "use strict";
            o(468)
        },
        491: function(t, e, o) {
            var r = o(53)(!1);
            r.push([t.i, '@font-face{font-family:"Roobert";font-style:normal;font-weight:300;src:url(/fonts/WOFF2/Roobert-Light.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Light.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:300;src:url(/fonts/WOFF2/Roobert-LightItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-LightItalic.woff) format("woff")}@font-face{font-family:"Raleway";font-style:normal;font-weight:300;src:url(/fonts/WOFF2/Raleway-Light.woff2) format("woff2"),url(/fonts/WOFF/Raleway-Light.woff) format("woff")}@font-face{font-family:"Raleway";font-style:italic;font-weight:300;src:url(/fonts/WOFF2/Raleway-LightItalic.woff2) format("woff2"),url(/fonts/WOFF/Raleway-LightItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:400;src:url(/fonts/WOFF2/Roobert-Regular.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Regular.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:400;src:url(/fonts/WOFF2/Roobert-RegularItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-RegularItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:500;src:url(/fonts/WOFF2/Roobert-Medium.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Medium.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:500;src:url(/fonts/WOFF2/Roobert-MediumItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-MediumItalic.woff) format("woff")}@font-face{font-family:"Raleway";font-style:normal;font-weight:500;src:url(/fonts/WOFF2/Raleway-Medium.woff2) format("woff2"),url(/fonts/WOFF/Raleway-Medium.woff) format("woff")}@font-face{font-family:"Raleway";font-style:italic;font-weight:500;src:url(/fonts/WOFF2/Raleway-MediumItalic.woff2) format("woff2"),url(/fonts/WOFF/Raleway-MediumItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:700;src:url(/fonts/WOFF2/Roobert-SemiBold.woff2) format("woff2"),url(/fonts/WOFF/Roobert-SemiBold.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:700;src:url(/fonts/WOFF2/Roobert-SemiBoldItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-SemiBoldItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:700;src:url(/fonts/WOFF2/Roobert-Bold.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Bold.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:700;src:url(/fonts/WOFF2/Roobert-BoldItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-BoldItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:900;src:url(/fonts/WOFF2/Roobert-Heavy.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Heavy.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:900;src:url(/fonts/WOFF2/Roobert-HeavyItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-HeavyItalic.woff) format("woff")}#team[data-v-426b387b]{position:relative;padding-top:12vw;margin-top:12vw;margin-bottom:24vw}@media(min-width:1024px){#team[data-v-426b387b]{margin-top:6.77vw;padding-top:6.77vw;margin-bottom:10.42vw}}#team .bg-light[data-v-426b387b]{width:100vw;height:100%;position:absolute;top:0;left:0;z-index:-1;display:block;height:183.47vw;left:-6.67vw;top:26.67vw}@media(min-width:768px){#team .bg-light[data-v-426b387b]{height:154.43vw;left:-6.51vw;top:39.06vw}}@media(min-width:1024px){#team .bg-light[data-v-426b387b]{left:-12.6vw;top:-5.21vw;height:61.77vw}}#team .bg-light img[data-v-426b387b]{width:100%;height:100%;position:absolute;top:50%;left:50%;-o-object-fit:cover;object-fit:cover;transform:translate3d(-50%,-50%,0);transition:transform .8s cubic-bezier(.19,1,.22,1);z-index:5}#team .intro[data-v-426b387b]{opacity:0;transform:translate3d(0,20%,0);-webkit-transform:translate3d(0,20%,0);-moz-transform:translate3d(0,20%,0);transition:opacity .4s linear,transform .8s cubic-bezier(.19,1,.22,1);transition-delay:.1s;will-change:transform,opacity;margin-top:10.4vw;font-size:10.67vw;line-height:12.8vw}#team .intro.is-inview[data-v-426b387b]{opacity:1;transform:translateZ(0);-webkit-transform:translateZ(0);-moz-transform:translateZ(0)}@media(min-width:1024px){#team .intro[data-v-426b387b]{margin-top:4.06vw;font-size:5.42vw;line-height:5.94vw;font-weight:300}}@media(min-width:1024px){.lang-vn #team .intro[data-v-426b387b]{font-weight:400;width:56.25vw}}@media(min-width:1024px){#team .members[data-v-426b387b]{margin-top:11.72vw}}#team .members .member[data-v-426b387b]{margin-bottom:12.53vw}@media(min-width:1024px){#team .members .member[data-v-426b387b]{margin-bottom:13.02vw}}#team .members .member[data-v-426b387b]:last-child{margin-bottom:0}@media(min-width:1024px){#team .members .member[data-v-426b387b]:nth-child(odd){margin-left:26.04vw}}', ""]), t.exports = r
        },
        512: function(t, e, o) {
            "use strict";
            o.r(e);
            var r = {
                    name: "Team",
                    props: {
                        data: {
                            type: Object,
                            default: function() {}
                        }
                    },
                    data: function() {
                        return {
                            isMobile: innerWidth < 1024
                        }
                    },
                    destroyed: function() {
                        this.detach()
                    },
                    mounted: function() {
                        this.attach()
                    },
                    methods: {
                        onResize: function() {
                            this.isMobile = innerWidth < 1024
                        },
                        attach: function() {
                            window.addEventListener("resize", this.onResize)
                        },
                        detach: function() {
                            window.removeEventListener("resize", this.onResize)
                        }
                    }
                },
                n = (o(490), o(21)),
                component = Object(n.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return t.$props.data ? r("section", {
                        attrs: {
                            id: "team",
                            "data-scroll": "",
                            "data-scroll-repeat": "true",
                            "data-scroll-call": "SET_CURRENT_SECTION"
                        }
                    }, [r("div", {
                        staticClass: "bg-light"
                    }, [r("picture", [t.isMobile ? r("img", {
                        attrs: {
                            src: o(489),
                            alt: ""
                        }
                    }) : r("img", {
                        attrs: {
                            src: o(488),
                            alt: ""
                        }
                    })])]), t._v(" "), r("span", {
                        staticClass: "title"
                    }, [t._v("Team")]), t._v(" "), r("p", {
                        staticClass: "intro",
                        attrs: {
                            "data-scroll": ""
                        },
                        domProps: {
                            innerHTML: t._s(t.$props.data.title)
                        }
                    }, [t._v("\n    " + t._s(t.$props.data.title) + "\n  ")]), t._v(" "), r("ul", {
                        staticClass: "members"
                    }, t._l(t.$props.data.team_members, (function(t, e) {
                        return r("li", {
                            key: "team_member_" + e,
                            staticClass: "member"
                        }, [r("TeamMember", {
                            attrs: {
                                "first-name": t.firstName,
                                "last-name": t.lastName,
                                pic: t.pic,
                                role: t.role,
                                "is-details-show": !1,
                                details: t.bio,
                                instagram: t.instagram,
                                twitter: t.twitter,
                                website: t.website,
                                index: e
                            }
                        })], 1)
                    })), 0)]) : t._e()
                }), [], !1, null, "426b387b", null);
            e.default = component.exports;
            installComponents(component, {
                TeamMember: o(478).default
            })
        }
    }
]);
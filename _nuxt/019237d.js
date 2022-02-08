(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        469: function(t, o, e) {
            var content = e(500);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, e(54).default)("5ec9e21a", content, !0, {
                sourceMap: !1
            })
        },
        479: function(t, o, e) {
            "use strict";
            e.r(o);
            e(55), e(27);
            var r = e(6),
                n = e(0),
                f = e(492),
                c = e.n(f),
                l = e(493),
                w = e.n(l),
                d = e(494),
                h = e.n(d),
                v = e(495),
                m = e.n(v),
                y = e(496),
                O = e.n(y),
                j = e(497),
                _ = e.n(j),
                x = e(498),
                F = e.n(x),
                k = {
                    name: "Footer",
                    components: {
                        CirclesSVG: c.a,
                        ArrowRightSVG: w.a,
                        SaigonTimeSVG: O.a,
                        TokyoTimeSVG: m.a,
                        LondonTimeSVG: _.a,
                        NewYorkTimeSVG: F.a,
                        ArrowRightBlackLongSVG: h.a
                    },
                    props: {
                        title: {
                            type: String,
                            default: function() {
                                return ""
                            }
                        },
                        data: {
                            type: Object,
                            default: function() {}
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.$nextTick((function() {
                            t.init(), t.attach()
                        }))
                    },
                    methods: {
                        init: function() {
                            this.$contact = this.$el.querySelector(".contact a")
                        },
                        scrollTop: function() {
                            this.$nuxt.$emit("scroll-top")
                        },
                        onEnter: function() {
                            var t = this,
                                o = this.$contact.querySelectorAll("span");
                            this.shuffledArray = Array.from(o), this.shuffleArray(this.shuffledArray), this.tlEnter = r.b.timeline({
                                paused: !0
                            }), this.tlEnter.to(this.shuffledArray, {
                                duration: .0075,
                                opacity: 0,
                                stagger: .0075,
                                ease: n.c.easeNone
                            }, 0), this.tlEnter.to(this.shuffledArray, {
                                duration: .0075,
                                opacity: 1,
                                stagger: .0075,
                                ease: n.c.easeNone
                            }, this.tlEnter.duration()), this.tlEnter.add((function() {
                                t.shuffledArray = Array.from(o), t.shuffleArray(t.shuffledArray), t.tlEnter.to(t.shuffledArray, {
                                    duration: .0075,
                                    opacity: 0,
                                    stagger: .0075,
                                    ease: n.c.easeNone
                                }, t.tlEnter.duration()), t.tlEnter.to(t.shuffledArray, {
                                    duration: .0075,
                                    opacity: 1,
                                    stagger: .0075,
                                    ease: n.c.easeNone
                                }, t.tlEnter.duration())
                            }), this.tlEnter.duration()), this.tlEnter.play()
                        },
                        onLeave: function() {},
                        attach: function() {
                            this.$contact.addEventListener("mouseenter", this.onEnter), this.$contact.addEventListener("mouseleave", this.onLeave)
                        },
                        detach: function() {
                            this.$contact.removeEventListener("mouseenter", this.onEnter), this.$contact.removeEventListener("mouseleave", this.onLeave)
                        },
                        shuffleArray: function(t) {
                            for (var i = t.length - 1; i > 0; i--) {
                                var o = Math.floor(Math.random() * (i + 1)),
                                    e = t[i];
                                t[i] = t[o], t[o] = e
                            }
                        }
                    }
                },
                R = (e(499), e(21)),
                component = Object(R.a)(k, (function() {
                    var t = this,
                        o = t.$createElement,
                        r = t._self._c || o;
                    return r("footer", {
                        attrs: {
                            id: "contact",
                            "data-scroll": "",
                            "data-scroll-id": "contact",
                            "data-scroll-repeat": "true",
                            "data-scroll-call": "SET_CURRENT_SECTION"
                        }
                    }, [r("section", {
                        staticClass: "container no-margin lg",
                        attrs: {
                            "data-scroll": "",
                            "data-scroll-repeat": "true",
                            "data-scroll-call": "SET_BACKGROUND"
                        }
                    }, [r("span", {
                        staticClass: "title black"
                    }, [t._v(t._s(t.title))]), t._v(" "), r("div", {
                        staticClass: "grid"
                    }, [r("div", {
                        staticClass: "column-xs-12 column-sm-12 column-md-12 column-lg-7 colun-xl-7"
                    }, [r("div", {
                        class: "intro " + t.$i18n.locale
                    }, [r("span", [t._v(t._s(t.data.big_catchphrase))]), t._v(" "), r("CirclesSVG")], 1), t._v(" "), r("div", {
                        staticClass: "contact"
                    }, [r("span", [t._v(t._s(t.data.small_catchphrase))]), t._v(" "), r("a", {
                        attrs: {
                            href: "mailto:" + t.data.contact_mail
                        }
                    }, [r("span", [t._v(t._s(t.data.contact_mail))])])]), t._v(" "), r("hr", {
                        staticClass: "separator"
                    }), t._v(" "), r("ul", {
                        staticClass: "offices"
                    }, [r("span", {
                        staticClass: "sentence"
                    }, [t._v(t._s(t.data.our_offices))]), t._v(" "), t._l(t.data.list_offices, (function(o, i) {
                        return r("div", {
                            key: "list_office_" + i,
                            staticClass: "row"
                        }, [t._l(o.office_row, (function(o, e) {
                            return r("li", {
                                key: "row_office_" + e,
                                staticClass: "office"
                            }, [r("div", {
                                staticClass: "head"
                            }, [r("span", {
                                staticClass: "location"
                            }, [t._v(t._s(o.city))]), t._v(" "), "Saigon" === o.city ? r("SaigonTimeSVG") : "Tokyo HQ" === o.city ? r("TokyoTimeSVG") : "London" === o.city ? r("LondonTimeSVG") : "New York" === o.city ? r("NewYorkTimeSVG") : t._e()], 1), t._v(" "), r("p", {
                                staticClass: "address",
                                domProps: {
                                    innerHTML: t._s(o.address)
                                }
                            }, [t._v("\n                " + t._s(o.address) + "\n              ")]), t._v(" "), r("a", {
                                staticClass: "black text-link office-button",
                                attrs: {
                                    href: o.url,
                                    target: "_blank"
                                }
                            }, [r("ArrowRightBlackLongSVG"), r("span", [t._v(t._s(o.label))])], 1)])
                        })), t._v(" "), r("hr", {
                            staticClass: "separator"
                        })], 2)
                    }))], 2)]), t._v(" "), r("div", {
                        staticClass: "column-xs-12 column-sm-12 column-md-12 column-lg-5 colun-xl-5"
                    }, [r("ul", {
                        staticClass: "socials"
                    }, [t.data && t.data.social.social_phrase ? r("span", {
                        staticClass: "sentence"
                    }, [t._v(t._s(t.data.social.social_phrase))]) : t._e(), t._v(" "), t._l(t.data.social.social_network_list, (function(o, e) {
                        return r("li", {
                            key: "social_" + e
                        }, [r("a", {
                            staticClass: "black",
                            attrs: {
                                href: o.url,
                                target: "_blank"
                            }
                        }, [r("span", [t._v(t._s(o.name))]), r("ArrowRightSVG")], 1)])
                    }))], 2)])])]), t._v(" "), r("button", {
                        staticClass: "btn-to-top",
                        on: {
                            click: t.scrollTop
                        }
                    }, [r("img", {
                        attrs: {
                            src: e(124),
                            alt: ""
                        }
                    })])])
                }), [], !1, null, null, null);
            o.default = component.exports;
            installComponents(component, {
                Footer: e(479).default
            })
        },
        492: function(t, o, e) {
            e(23), e(19), e(36), e(46), e(22), e(47);
            var r = e(165),
                n = e(166),
                f = ["class", "staticClass", "style", "staticStyle", "attrs"];

            function c(object, t) {
                var o = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(object);
                    t && (e = e.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), o.push.apply(o, e)
                }
                return o
            }
            e(45), t.exports = {
                functional: !0,
                render: function(t, o) {
                    var e = o._c,
                        data = (o._v, o.data),
                        l = o.children,
                        w = void 0 === l ? [] : l,
                        d = data.class,
                        h = data.staticClass,
                        style = data.style,
                        v = data.staticStyle,
                        m = data.attrs,
                        y = void 0 === m ? {} : m,
                        O = n(data, f);
                    return e("svg", function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? c(Object(source), !0).forEach((function(o) {
                                r(t, o, source[o])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(o) {
                                Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(source, o))
                            }))
                        }
                        return t
                    }({
                        class: [d, h],
                        style: [style, v],
                        attrs: Object.assign({
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 58 39"
                        }, y)
                    }, O), w.concat([e("circle", {
                        attrs: {
                            cx: "38.344",
                            cy: "19.172",
                            r: "17.922",
                            stroke: "#000",
                            "stroke-width": "2.5"
                        }
                    }), e("circle", {
                        attrs: {
                            cx: "19.172",
                            cy: "19.172",
                            r: "17.922",
                            stroke: "#000",
                            "stroke-width": "2.5"
                        }
                    })]))
                }
            }
        },
        493: function(t, o, e) {
            e(23), e(19), e(36), e(46), e(22), e(47);
            var r = e(165),
                n = e(166),
                f = ["class", "staticClass", "style", "staticStyle", "attrs"];

            function c(object, t) {
                var o = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(object);
                    t && (e = e.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), o.push.apply(o, e)
                }
                return o
            }
            e(45), t.exports = {
                functional: !0,
                render: function(t, o) {
                    var e = o._c,
                        data = (o._v, o.data),
                        l = o.children,
                        w = void 0 === l ? [] : l,
                        d = data.class,
                        h = data.staticClass,
                        style = data.style,
                        v = data.staticStyle,
                        m = data.attrs,
                        y = void 0 === m ? {} : m,
                        O = n(data, f);
                    return e("svg", function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? c(Object(source), !0).forEach((function(o) {
                                r(t, o, source[o])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(o) {
                                Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(source, o))
                            }))
                        }
                        return t
                    }({
                        class: [d, h],
                        style: [style, v],
                        attrs: Object.assign({
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 12 12"
                        }, y)
                    }, O), w.concat([e("path", {
                        attrs: {
                            d: "M11.232 5.232L5.476 10.99l.767.768L12 6l-.768-.768z",
                            fill: "#000"
                        }
                    }), e("path", {
                        attrs: {
                            d: "M6.242.243l-.767.768 5.758 5.758L12 6 6.242.243z",
                            fill: "#000"
                        }
                    }), e("path", {
                        attrs: {
                            d: "M.543 5.458v1.086H11.4V5.458H.543z",
                            fill: "#000"
                        }
                    })]))
                }
            }
        },
        494: function(t, o, e) {
            e(23), e(19), e(36), e(46), e(22), e(47);
            var r = e(165),
                n = e(166),
                f = ["class", "staticClass", "style", "staticStyle", "attrs"];

            function c(object, t) {
                var o = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(object);
                    t && (e = e.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), o.push.apply(o, e)
                }
                return o
            }
            e(45), t.exports = {
                functional: !0,
                render: function(t, o) {
                    var e = o._c,
                        data = (o._v, o.data),
                        l = o.children,
                        w = void 0 === l ? [] : l,
                        d = data.class,
                        h = data.staticClass,
                        style = data.style,
                        v = data.staticStyle,
                        m = data.attrs,
                        y = void 0 === m ? {} : m,
                        O = n(data, f);
                    return e("svg", function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? c(Object(source), !0).forEach((function(o) {
                                r(t, o, source[o])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(o) {
                                Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(source, o))
                            }))
                        }
                        return t
                    }({
                        class: [d, h],
                        style: [style, v],
                        attrs: Object.assign({
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 30 29"
                        }, y)
                    }, O), w.concat([e("path", {
                        attrs: {
                            d: "m28.32 13.75-6.024 6.024.803.804 6.024-6.024-.803-.803Z",
                            fill: "#000"
                        }
                    }), e("path", {
                        attrs: {
                            d: "m23.1 8.53-.803.804 6.023 6.023.804-.803L23.1 8.53Z",
                            fill: "#000"
                        }
                    }), e("path", {
                        attrs: {
                            d: "M1 14v1h27v-1H1Z",
                            fill: "#000"
                        }
                    })]))
                }
            }
        },
        495: function(t, o, e) {
            e(23), e(19), e(36), e(46), e(22), e(47);
            var r = e(165),
                n = e(166),
                f = ["class", "staticClass", "style", "staticStyle", "attrs"];

            function c(object, t) {
                var o = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(object);
                    t && (e = e.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), o.push.apply(o, e)
                }
                return o
            }
            e(45), t.exports = {
                functional: !0,
                render: function(t, o) {
                    var e = o._c,
                        data = (o._v, o.data),
                        l = o.children,
                        w = void 0 === l ? [] : l,
                        d = data.class,
                        h = data.staticClass,
                        style = data.style,
                        v = data.staticStyle,
                        m = data.attrs,
                        y = void 0 === m ? {} : m,
                        O = n(data, f);
                    return e("svg", function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? c(Object(source), !0).forEach((function(o) {
                                r(t, o, source[o])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(o) {
                                Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(source, o))
                            }))
                        }
                        return t
                    }({
                        class: [d, h],
                        style: [style, v],
                        attrs: Object.assign({
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 17 17"
                        }, y)
                    }, O), w.concat([e("circle", {
                        attrs: {
                            cx: "8.5",
                            cy: "8.5",
                            r: "8",
                            stroke: "#000"
                        }
                    }), e("path", {
                        attrs: {
                            stroke: "#000",
                            d: "M8.607 7.382l3.817 3.23M6.382 10.783l2.929-3.46"
                        }
                    })]))
                }
            }
        },
        496: function(t, o, e) {
            e(23), e(19), e(36), e(46), e(22), e(47);
            var r = e(165),
                n = e(166),
                f = ["class", "staticClass", "style", "staticStyle", "attrs"];

            function c(object, t) {
                var o = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(object);
                    t && (e = e.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), o.push.apply(o, e)
                }
                return o
            }
            e(45), t.exports = {
                functional: !0,
                render: function(t, o) {
                    var e = o._c,
                        data = (o._v, o.data),
                        l = o.children,
                        w = void 0 === l ? [] : l,
                        d = data.class,
                        h = data.staticClass,
                        style = data.style,
                        v = data.staticStyle,
                        m = data.attrs,
                        y = void 0 === m ? {} : m,
                        O = n(data, f);
                    return e("svg", function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? c(Object(source), !0).forEach((function(o) {
                                r(t, o, source[o])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(o) {
                                Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(source, o))
                            }))
                        }
                        return t
                    }({
                        class: [d, h],
                        style: [style, v],
                        attrs: Object.assign({
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 17 17"
                        }, y)
                    }, O), w.concat([e("circle", {
                        attrs: {
                            cx: "8.5",
                            cy: "8.5",
                            r: "8",
                            stroke: "#000"
                        }
                    }), e("path", {
                        attrs: {
                            stroke: "#000",
                            d: "M8.5 10V5M8.533 9.5H4"
                        }
                    })]))
                }
            }
        },
        497: function(t, o, e) {
            e(23), e(19), e(36), e(46), e(22), e(47);
            var r = e(165),
                n = e(166),
                f = ["class", "staticClass", "style", "staticStyle", "attrs"];

            function c(object, t) {
                var o = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(object);
                    t && (e = e.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), o.push.apply(o, e)
                }
                return o
            }
            e(45), t.exports = {
                functional: !0,
                render: function(t, o) {
                    var e = o._c,
                        data = (o._v, o.data),
                        l = o.children,
                        w = void 0 === l ? [] : l,
                        d = data.class,
                        h = data.staticClass,
                        style = data.style,
                        v = data.staticStyle,
                        m = data.attrs,
                        y = void 0 === m ? {} : m,
                        O = n(data, f);
                    return e("svg", function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? c(Object(source), !0).forEach((function(o) {
                                r(t, o, source[o])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(o) {
                                Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(source, o))
                            }))
                        }
                        return t
                    }({
                        class: [d, h],
                        style: [style, v],
                        attrs: Object.assign({
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 17 17"
                        }, y)
                    }, O), w.concat([e("circle", {
                        attrs: {
                            cx: "8.5",
                            cy: "8.5",
                            r: "8",
                            stroke: "#000"
                        }
                    }), e("path", {
                        attrs: {
                            stroke: "#000",
                            d: "M8.5 10V5M12.533 9.5H8"
                        }
                    })]))
                }
            }
        },
        498: function(t, o, e) {
            e(23), e(19), e(36), e(46), e(22), e(47);
            var r = e(165),
                n = e(166),
                f = ["class", "staticClass", "style", "staticStyle", "attrs"];

            function c(object, t) {
                var o = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(object);
                    t && (e = e.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), o.push.apply(o, e)
                }
                return o
            }
            e(45), t.exports = {
                functional: !0,
                render: function(t, o) {
                    var e = o._c,
                        data = (o._v, o.data),
                        l = o.children,
                        w = void 0 === l ? [] : l,
                        d = data.class,
                        h = data.staticClass,
                        style = data.style,
                        v = data.staticStyle,
                        m = data.attrs,
                        y = void 0 === m ? {} : m,
                        O = n(data, f);
                    return e("svg", function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? c(Object(source), !0).forEach((function(o) {
                                r(t, o, source[o])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(o) {
                                Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(source, o))
                            }))
                        }
                        return t
                    }({
                        class: [d, h],
                        style: [style, v],
                        attrs: Object.assign({
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 17 17"
                        }, y)
                    }, O), w.concat([e("circle", {
                        attrs: {
                            cx: "8.5",
                            cy: "8.5",
                            r: "8",
                            stroke: "#000"
                        }
                    }), e("path", {
                        attrs: {
                            stroke: "#000",
                            d: "M9.182 8.889L5.646 5.353M6.567 13.08l2.5-4.33"
                        }
                    })]))
                }
            }
        },
        499: function(t, o, e) {
            "use strict";
            e(469)
        },
        500: function(t, o, e) {
            var r = e(53)(!1);
            r.push([t.i, '@font-face{font-family:"Roobert";font-style:normal;font-weight:300;src:url(/fonts/WOFF2/Roobert-Light.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Light.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:300;src:url(/fonts/WOFF2/Roobert-LightItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-LightItalic.woff) format("woff")}@font-face{font-family:"Raleway";font-style:normal;font-weight:300;src:url(/fonts/WOFF2/Raleway-Light.woff2) format("woff2"),url(/fonts/WOFF/Raleway-Light.woff) format("woff")}@font-face{font-family:"Raleway";font-style:italic;font-weight:300;src:url(/fonts/WOFF2/Raleway-LightItalic.woff2) format("woff2"),url(/fonts/WOFF/Raleway-LightItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:400;src:url(/fonts/WOFF2/Roobert-Regular.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Regular.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:400;src:url(/fonts/WOFF2/Roobert-RegularItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-RegularItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:500;src:url(/fonts/WOFF2/Roobert-Medium.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Medium.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:500;src:url(/fonts/WOFF2/Roobert-MediumItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-MediumItalic.woff) format("woff")}@font-face{font-family:"Raleway";font-style:normal;font-weight:500;src:url(/fonts/WOFF2/Raleway-Medium.woff2) format("woff2"),url(/fonts/WOFF/Raleway-Medium.woff) format("woff")}@font-face{font-family:"Raleway";font-style:italic;font-weight:500;src:url(/fonts/WOFF2/Raleway-MediumItalic.woff2) format("woff2"),url(/fonts/WOFF/Raleway-MediumItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:700;src:url(/fonts/WOFF2/Roobert-SemiBold.woff2) format("woff2"),url(/fonts/WOFF/Roobert-SemiBold.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:700;src:url(/fonts/WOFF2/Roobert-SemiBoldItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-SemiBoldItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:700;src:url(/fonts/WOFF2/Roobert-Bold.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Bold.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:700;src:url(/fonts/WOFF2/Roobert-BoldItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-BoldItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:900;src:url(/fonts/WOFF2/Roobert-Heavy.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Heavy.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:900;src:url(/fonts/WOFF2/Roobert-HeavyItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-HeavyItalic.woff) format("woff")}footer{position:relative;color:#181818;padding-top:18.67vw;padding-bottom:42.67vw}@media(min-width:1024px){footer{padding-top:5.21vw;padding-bottom:8.75vw}}footer .intro{margin-top:12.8vw;font-size:10.67vw;line-height:13.33vw}@media(min-width:1024px){footer .intro{margin-top:0;font-weight:300;font-size:5.42vw;line-height:6.72vw}}footer .intro.vn{font-weight:400;font-size:4.17vw}footer .intro span,footer .intro svg{display:inline-block;vertical-align:middle}footer .intro svg{display:none}@media(min-width:1024px){footer .intro svg{display:inline-block;margin-top:1.04vw;height:1.98vw}}footer .contact{margin-top:12.8vw}@media(min-width:1024px){footer .contact{margin-top:4.69vw}}footer .contact span{display:block;color:#6d6d6d;font-size:3.73vw;line-height:5.07vw}@media(min-width:1024px){footer .contact span{font-size:.73vw;line-height:.99vw}}footer .contact a{position:relative;display:inline-block;color:rgba(0,0,0,.0001);overflow:hidden;background:linear-gradient(90deg,#a0e0ab,#ffac2e 50%,#a52d25);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:rgba(0,0,0,.0001);transition:opacity .2s linear;opacity:1;font-size:0;margin-top:3.2vw}@media(min-width:1024px){footer .contact a{margin-top:.99vw;padding-bottom:.99vw}}footer .contact a span{display:inline;font-size:6.93vw;line-height:9.33vw;margin-top:3.2vw}@media(min-width:1024px){footer .contact a span{font-size:2.08vw;line-height:1.46vw;margin-top:.99vw}}.notouch footer .contact a:hover{opacity:.6}.notouch footer .contact a:hover:before{transform:translateZ(0)}.notouch footer .contact a:hover:after{transform:translate3d(105%,0,0)}footer .contact a:after,footer .contact a:before{content:"";height:1px;width:100%;position:absolute;bottom:0;left:0;transition:transform .85s cubic-bezier(1,0,0,1),background 1.5s cubic-bezier(.16,.77,.33,.97);background:linear-gradient(90deg,#a0e0ab,#ffac2e 50%,#a52d25)}footer .contact a:before{transform:translate3d(-105%,0,0)}footer .contact a:after{transform:translateZ(0)}footer .separator{background:#cbcbcb;height:1px;border:none;opacity:.5;margin:18.93vw -6.67vw 12vw}@media(min-width:1024px){footer .separator{display:none}}footer .sentence{color:#6d6d6d;display:block;font-size:3.73vw;line-height:5.07vw;margin-bottom:10.93vw}@media(min-width:1024px){footer .sentence{font-size:.73vw;line-height:.99vw;margin-bottom:1.56vw}}@media(min-width:1024px){footer .socials{padding-top:21.09vw;padding-left:14.74vw}}footer .socials li{display:block;font-size:6.4vw;line-height:8.8vw}@media(min-width:1024px){footer .socials li{font-size:1.25vw;line-height:1.51vw}}footer .socials li+li{margin-top:9.6vw}@media(min-width:1024px){footer .socials li+li{margin-top:.89vw}}footer .socials a{display:block}@media(min-width:1024px){footer .socials a:before{content:none}}footer .socials a span{display:inline-block;vertical-align:middle;overflow:hidden;position:relative;transition:opacity .4s linear}@media(min-width:1024px){footer .socials a span:before{transition:transform .85s cubic-bezier(1,0,0,1);content:"";height:1px;width:100%;background:#000;position:absolute;transform:translate3d(-103%,0,0);bottom:0;left:0}}footer .socials a svg{display:inline-block;vertical-align:middle;transform:rotate(-45deg);width:4.27vw;height:4.27vw;margin-left:4.27vw}@media(min-width:1024px){footer .socials a svg{display:none}}.notouch footer .socials li:hover a span{opacity:.6}@media(min-width:1024px){footer .offices{margin-top:4.69vw}}@media(min-width:1024px){footer .offices .row{display:flex;justify-content:space-between}}@media(min-width:1024px){footer .offices .row+.row{margin-top:3.39vw}}footer .offices .office{position:relative}@media(min-width:1024px){footer .offices .office{width:14.58vw}}footer .offices .office .head .location{display:inline-block;vertical-align:middle;font-size:6.4vw;line-height:7.73vw}@media(min-width:1024px){footer .offices .office .head .location{font-size:1.25vw;line-height:1.51vw}}footer .offices .office .head svg{display:inline-block;vertical-align:middle;height:4.53vw;width:4.53vw;margin-left:4vw}@media(min-width:1024px){footer .offices .office .head svg{height:.89vw;width:.89vw;margin-left:.78vw}}footer .offices .office .address{color:#6d6d6d;font-size:3.73vw;line-height:5.07vw;margin-top:3.2vw;margin-bottom:8.53vw;width:74.67vw}@media(min-width:1024px){footer .offices .office .address{width:auto;font-size:.73vw;line-height:.99vw;margin-top:.57vw;margin-bottom:1.56vw}}footer .offices .office .office-button{overflow:hidden;display:inline-block}footer .offices .office .office-button svg{width:auto;transform:translateZ(0);height:5.87vw}@media(min-width:1024px){footer .offices .office .office-button svg{transform:translate3d(-40%,0,0);height:1.15vw}}footer .offices .office+.office{border-top:1px solid hsla(0,0%,79.6%,.5);margin:10.67vw -6.67vw 12vw;padding-left:6.67vw;padding-right:6.67vw;padding-top:18.93vw}@media(min-width:1024px){footer .offices .office+.office{padding:0;border:none;margin:0}}footer .btn-to-top{position:absolute;background:transparent;width:15.47vw;height:15.47vw;bottom:37.33vw;right:12vw}.notouch footer .btn-to-top:hover{cursor:pointer}.notouch footer .btn-to-top:hover:before{transform:scale(1.2)}.notouch footer .btn-to-top:hover img{transform:translate3d(0,-50%,0) rotate(-90deg)}footer .btn-to-top:before{content:"";position:absolute;top:0;left:0;transition:transform .6s cubic-bezier(.19,1,.22,1);width:100%;height:100%;border:1px solid #000;border-radius:100%}@media(min-width:1024px){footer .btn-to-top{bottom:8.33vw;right:8.33vw;width:3.85vw;height:3.85vw}}footer .btn-to-top img{transform:translateZ(0) rotate(-90deg);transition:transform .6s cubic-bezier(.19,1,.22,1);width:2.93vw;height:2.93vw}@media(min-width:1024px){footer .btn-to-top img{width:.68vw;height:.68vw}}', ""]), t.exports = r
        }
    }
]);
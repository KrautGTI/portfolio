(window.webpackJsonp = window.webpackJsonp || []).push([
    [3], {
        120: function(t, e, o) {
            o(23), o(19), o(36), o(46), o(22), o(47);
            var n = o(165),
                r = o(166),
                l = ["class", "staticClass", "style", "staticStyle", "attrs"];

            function f(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(object);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, o)
                }
                return e
            }
            o(45), t.exports = {
                functional: !0,
                render: function(t, e) {
                    var o = e._c,
                        data = (e._v, e.data),
                        c = e.children,
                        d = void 0 === c ? [] : c,
                        m = data.class,
                        h = data.staticClass,
                        style = data.style,
                        w = data.staticStyle,
                        v = data.attrs,
                        y = void 0 === v ? {} : v,
                        x = r(data, l);
                    return o("svg", function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? f(Object(source), !0).forEach((function(e) {
                                n(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : f(Object(source)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({
                        class: [m, h],
                        style: [style, w],
                        attrs: Object.assign({
                            width: "134",
                            height: "14",
                            viewBox: "0 0 134 14",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, y)
                    }, x), d.concat([o("path", {
                        attrs: {
                            d: "M93.318 11.112C94.97 11.112 96.048 10.244 96.048 8.914C96.048 5.722 92.128 7.402 92.128 5.876C92.128 5.4 92.534 5.12 93.15 5.12C93.696 5.12 94.298 5.456 94.396 6.114H95.964C95.894 4.742 94.76 3.832 93.108 3.832C91.652 3.832 90.574 4.7 90.574 5.932C90.574 8.914 94.438 7.416 94.438 8.984C94.438 9.404 93.99 9.74 93.318 9.74C92.548 9.74 92.03 9.32 91.96 8.648H90.392C90.476 10.16 91.61 11.112 93.318 11.112ZM100.4 3.832C98.5665 3.832 97.3765 4.924 97.2925 6.324H98.8325C98.8605 5.694 99.4065 5.12 100.316 5.12C101.226 5.12 101.758 5.61 101.758 6.296C101.758 6.576 101.59 6.772 101.24 6.772H99.9385C98.3565 6.772 97.2925 7.626 97.2925 8.998C97.2925 10.216 98.2445 11.112 99.6445 11.112C100.652 11.112 101.464 10.65 101.758 9.95V11H103.452V6.464C103.452 4.868 102.192 3.832 100.4 3.832ZM100.05 9.838C99.4065 9.838 98.9585 9.474 98.9585 8.928C98.9585 8.312 99.4485 7.906 100.176 7.906H101.758V8.018C101.758 9.082 101.128 9.838 100.05 9.838ZM105.082 2.838H106.986V0.877999H105.082V2.838ZM106.888 11V3.944H105.166V11H106.888ZM113.824 4.742C113.418 4.196 112.648 3.832 111.766 3.832C109.666 3.832 108.434 5.316 108.434 7.472C108.434 9.628 109.666 11.112 111.794 11.112C112.676 11.112 113.488 10.762 113.838 10.216V11.224C113.838 11.966 113.348 12.484 112.662 12.484H109.414V13.856H112.9C114.482 13.856 115.546 12.862 115.546 11.392V3.944H113.824V4.742ZM112.032 9.628C110.884 9.628 110.142 8.774 110.142 7.472C110.142 6.17 110.884 5.316 112.032 5.316C113.194 5.316 113.95 6.17 113.95 7.472C113.95 8.774 113.194 9.628 112.032 9.628ZM120.788 11.112C122.93 11.112 124.47 9.572 124.47 7.472C124.47 5.372 122.93 3.832 120.788 3.832C118.632 3.832 117.092 5.372 117.092 7.472C117.092 9.572 118.632 11.112 120.788 11.112ZM120.788 9.628C119.612 9.628 118.828 8.746 118.828 7.472C118.828 6.198 119.612 5.316 120.788 5.316C121.95 5.316 122.734 6.198 122.734 7.472C122.734 8.746 121.95 9.628 120.788 9.628ZM127.634 11V7.15C127.634 6.114 128.306 5.358 129.272 5.358C130.154 5.358 130.742 6.03 130.742 6.996V11H132.464V6.632C132.464 4.98 131.428 3.832 129.832 3.832C128.824 3.832 128.026 4.266 127.634 5.036V3.944H125.912V11H127.634Z",
                            fill: "white"
                        }
                    }), o("g", {
                        attrs: {
                            "clip-path": "url(#clip0)"
                        }
                    }, [o("path", {
                        attrs: {
                            d: "M11.0702 1.12988C9.97935 1.12988 8.91227 1.57188 7.89616 2.44613C7.16891 1.57188 6.16809 1.12988 4.91069 1.12988C4.13432 1.1505 3.37959 1.37908 2.73234 1.78963V1.62713C2.73279 1.5777 2.72303 1.52867 2.70361 1.48286C2.68419 1.43705 2.6555 1.39535 2.61919 1.36017C2.58287 1.32499 2.53965 1.29702 2.49201 1.27786C2.44436 1.25869 2.39322 1.24872 2.34153 1.24851H0.394269C0.341923 1.2485 0.290101 1.25846 0.241824 1.27781C0.193548 1.29717 0.149785 1.32552 0.113089 1.36122C0.0763932 1.39692 0.047499 1.43925 0.0280926 1.48574C0.00868611 1.53223 -0.000843905 1.58196 5.86012e-05 1.63201V11.0473C-0.000165156 11.0969 0.00986625 11.1461 0.029577 11.192C0.0492877 11.238 0.0782895 11.2797 0.114918 11.3149C0.151546 11.3501 0.195079 11.378 0.243018 11.397C0.290956 11.4161 0.342357 11.4259 0.394269 11.4259H2.34153C2.39322 11.4257 2.44436 11.4157 2.49201 11.3965C2.53965 11.3774 2.58287 11.3494 2.61919 11.3142C2.6555 11.279 2.68419 11.2373 2.70361 11.1915C2.72303 11.1457 2.73279 11.0967 2.73234 11.0473V5.03476C2.73234 4.83326 3.26759 4.24338 3.50717 4.11013C3.80283 3.94763 4.01692 3.74613 4.67111 3.74613C4.91919 3.74613 6.04575 3.74613 6.04575 5.33701V11.0473C6.04552 11.0969 6.05555 11.1461 6.07527 11.192C6.09498 11.238 6.12398 11.2797 6.16061 11.3149C6.19723 11.3501 6.24077 11.378 6.28871 11.397C6.33664 11.4161 6.38805 11.4259 6.43996 11.4259H8.38722C8.43913 11.4259 8.49053 11.4161 8.53847 11.397C8.58641 11.378 8.62994 11.3501 8.66657 11.3149C8.7032 11.2797 8.7322 11.238 8.75191 11.192C8.77162 11.1461 8.78165 11.0969 8.78143 11.0473V5.03476C8.78143 4.83326 9.30648 4.24013 9.55626 4.11013C9.8757 3.94763 10.066 3.74613 10.7202 3.74613C10.9683 3.74613 12.1883 3.74613 12.1883 5.24601V11.0473C12.1881 11.0969 12.1981 11.1461 12.2178 11.192C12.2375 11.238 12.2665 11.2797 12.3031 11.3149C12.3398 11.3501 12.3833 11.378 12.4312 11.397C12.4792 11.4161 12.5306 11.4259 12.5825 11.4259H14.5298C14.5817 11.4259 14.6331 11.4161 14.681 11.397C14.729 11.378 14.7725 11.3501 14.8091 11.3149C14.8457 11.2797 14.8747 11.238 14.8945 11.192C14.9142 11.1461 14.9242 11.0969 14.924 11.0473V5.33538C14.924 4.15401 14.6453 3.18388 14.0914 2.45426C13.4117 1.57188 12.3939 1.12988 11.0702 1.12988Z",
                            fill: "white"
                        }
                    }), o("path", {
                        attrs: {
                            d: "M36.6623 1.14258C35.7125 1.14757 34.785 1.41875 33.9946 1.92258V1.66745C33.9941 1.5676 33.9525 1.47195 33.8786 1.40135C33.8048 1.33074 33.7048 1.29088 33.6004 1.29045H31.6735C31.569 1.29045 31.4687 1.33017 31.3948 1.40087C31.3208 1.47157 31.2793 1.56747 31.2793 1.66745V11.047C31.2791 11.0966 31.2891 11.1458 31.3088 11.1917C31.3285 11.2376 31.3575 11.2794 31.3942 11.3146C31.4308 11.3498 31.4743 11.3777 31.5223 11.3967C31.5702 11.4158 31.6216 11.4256 31.6735 11.4256H33.6004C33.7049 11.4247 33.805 11.3845 33.8787 11.3136C33.9525 11.2428 33.9941 11.147 33.9946 11.047V5.03445C34.6743 4.0952 35.5069 3.7442 36.5281 3.7442C37.1415 3.7442 37.5884 3.7832 37.85 4.06108C38.1287 4.37308 38.2697 4.74358 38.2697 5.7137V11.047C38.2697 11.1474 38.3114 11.2437 38.3857 11.3147C38.4599 11.3857 38.5606 11.4256 38.6656 11.4256H40.5891C40.6412 11.4258 40.6929 11.4162 40.7411 11.3972C40.7894 11.3783 40.8332 11.3504 40.8702 11.3153C40.9071 11.2801 40.9364 11.2383 40.9564 11.1922C40.9764 11.1462 40.9867 11.0968 40.9867 11.047V5.71208C40.9867 1.93558 38.6317 1.14258 36.6623 1.14258Z",
                            fill: "white"
                        }
                    }), o("path", {
                        attrs: {
                            d: "M23.005 1.00024C21.9123 0.990257 20.8411 1.29101 19.9275 1.86433C19.0138 2.43765 18.2989 3.25766 17.8735 4.22028C17.4481 5.18289 17.3313 6.24469 17.5381 7.27087C17.7448 8.29706 18.2658 9.24134 19.0348 9.98385C19.8038 10.7264 20.7861 11.2336 21.8571 11.4412C22.9281 11.6488 24.0394 11.5473 25.05 11.1497C26.0606 10.7521 26.9249 10.0763 27.5331 9.20812C28.1414 8.33991 28.4661 7.31843 28.4662 6.27337C28.4729 4.88159 27.9014 3.54421 26.8773 2.55536C25.8532 1.5665 24.4603 1.00712 23.005 1.00024ZM23.005 9.07974C21.5029 9.07974 20.2863 7.82362 20.2863 6.27337C20.2863 4.72312 21.5046 3.46537 23.005 3.46537C24.5054 3.46537 25.7237 4.72149 25.7237 6.27337C25.7237 7.82524 24.5071 9.07974 23.005 9.07974Z",
                            fill: "white"
                        }
                    }), o("path", {
                        attrs: {
                            d: "M49.1427 1.00024C48.05 0.990257 46.9788 1.29101 46.0651 1.86433C45.1515 2.43765 44.4366 3.25766 44.0112 4.22028C43.5857 5.18289 43.469 6.24469 43.6758 7.27087C43.8825 8.29706 44.4035 9.24134 45.1725 9.98385C45.9415 10.7264 46.9238 11.2336 47.9948 11.4412C49.0658 11.6488 50.1771 11.5473 51.1877 11.1497C52.1983 10.7521 53.0626 10.0763 53.6708 9.20812C54.2791 8.33991 54.6038 7.31843 54.6039 6.27337C54.6106 4.88159 54.0391 3.54421 53.015 2.55536C51.9909 1.5665 50.598 1.00712 49.1427 1.00024ZM49.1427 9.07974C47.6406 9.07974 46.424 7.82362 46.424 6.27337C46.424 4.72312 47.6423 3.46537 49.1427 3.46537C50.6431 3.46537 51.8614 4.72149 51.8614 6.27337C51.8614 7.82524 50.6448 9.07974 49.1427 9.07974Z",
                            fill: "white"
                        }
                    }), o("path", {
                        attrs: {
                            d: "M75.5392 1.00024C74.4465 0.990257 73.3753 1.29101 72.4616 1.86433C71.548 2.43765 70.8331 3.25766 70.4077 4.22028C69.9822 5.18289 69.8655 6.24469 70.0723 7.27087C70.279 8.29706 70.8 9.24134 71.569 9.98385C72.338 10.7264 73.3203 11.2336 74.3913 11.4412C75.4623 11.6488 76.5736 11.5473 77.5842 11.1497C78.5948 10.7521 79.4591 10.0763 80.0673 9.20812C80.6756 8.33991 81.0003 7.31843 81.0004 6.27337C81.0072 4.88159 80.4356 3.54421 79.4115 2.55536C78.3874 1.5665 76.9945 1.00712 75.5392 1.00024ZM75.5392 9.07974C74.0371 9.07974 72.8205 7.82362 72.8205 6.27337C72.8205 4.72312 74.0388 3.46537 75.5392 3.46537C77.0396 3.46537 78.2579 4.72149 78.2579 6.27337C78.2579 7.82524 77.0413 9.07974 75.5392 9.07974Z",
                            fill: "white"
                        }
                    }), o("path", {
                        attrs: {
                            d: "M62.8352 1.02734C61.8537 1.02851 60.8921 1.29191 60.0588 1.78784V1.64972C60.0583 1.55073 60.017 1.45591 59.9438 1.38591C59.8706 1.31591 59.7715 1.2764 59.668 1.27597H57.719C57.6681 1.27639 57.6178 1.2864 57.571 1.30541C57.5242 1.32442 57.4817 1.35207 57.446 1.38678C57.4104 1.42149 57.3822 1.46257 57.3632 1.50769C57.3441 1.5528 57.3345 1.60106 57.335 1.64972V13.6227C57.3341 13.7213 57.3739 13.8162 57.4458 13.8868C57.5178 13.9574 57.6159 13.998 57.719 13.9997H59.668C59.7718 13.9984 59.8709 13.9582 59.944 13.8877C60.0171 13.8172 60.0583 13.722 60.0588 13.6227V10.5872C60.8919 11.0837 61.8536 11.3477 62.8352 11.3493C65.7459 11.3493 67.8376 9.27584 67.8376 6.18509C67.8376 3.17072 65.7459 1.02734 62.8352 1.02734ZM62.8522 8.90372C61.2788 8.90372 60.1335 7.86859 60.1335 6.18997C60.1335 4.51134 61.2958 3.47622 62.8522 3.47622C64.2116 3.47622 65.299 4.69172 65.299 6.18997C65.299 7.68822 64.2031 8.90372 62.8522 8.90372Z",
                            fill: "white"
                        }
                    })]), o("defs", [o("clipPath", {
                        attrs: {
                            id: "clip0"
                        }
                    }, [o("rect", {
                        attrs: {
                            width: "81",
                            height: "13",
                            fill: "white",
                            transform: "translate(0 1)"
                        }
                    })])])]))
                }
            }
        },
        124: function(t, e, o) {
            t.exports = o.p + "b4cd8ef9cb4bb3b7ec01ea962ee268cc.svg"
        },
        157: function(t, e, o) {
            "use strict";
            o.r(e);
            e.default = {
                vertexShader: "\n\t\tuniform float mRefractionRatio;\n\t\tuniform float mFresnelBias;\n\t\tuniform float mFresnelScale;\n\t\tuniform float mFresnelPower;\n\n\t\tvarying vec3 vReflect;\n\t\tvarying vec3 vRefract[3];\n\t\tvarying float vReflectionFactor;\n\n\t\tvoid main() {\n\n\t\t\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\t\t\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\n\t\t\tvec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\n\n\t\t\tvec3 I = worldPosition.xyz - cameraPosition;\n\n\t\t\tvReflect = reflect( I, worldNormal );\n\t\t\tvRefract[0] = refract( normalize( I ), worldNormal, mRefractionRatio );\n\t\t\tvRefract[1] = refract( normalize( I ), worldNormal, mRefractionRatio * 0.99 );\n\t\t\tvRefract[2] = refract( normalize( I ), worldNormal, mRefractionRatio * 0.98 );\n\t\t\tvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), worldNormal ), mFresnelPower );\n\n\t\t\tgl_Position = projectionMatrix * mvPosition;\n\n\t\t}\n\t",
                fragmentShader: "\n\t\tuniform samplerCube tCube;\n\t\tuniform float uSphereAlpha;\n\t\tuniform float uRefractionPower;\n\n\t\tvarying vec3 vReflect;\n\t\tvarying vec3 vRefract[3];\n\t\tvarying float vReflectionFactor;\n\n\t\tvoid main() {\n\n\t\t\tvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\n\t\t\tvec4 refractedColor = vec4( 1.0 );\n\n\t\t\trefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\n\t\t\trefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\n\t\t\trefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\n\t\t\trefractedColor.a = uRefractionPower;\n\n\t\t\tgl_FragColor = mix( vec4(vec3(refractedColor.rgb), refractedColor.a), reflectedColor * uSphereAlpha, clamp( vReflectionFactor, 0.0, 1.0 ) );\n\n\t\t}\n\t"
            }
        },
        16: function(t, e, o) {
            "use strict";
            o.r(e);
            var n = o(29),
                r = o(30),
                l = (o(20), o(22), o(2)),
                f = o(265),
                c = o(251),
                d = o(96),
                m = function() {
                    function t() {
                        Object(n.a)(this, t), this.scene = null, this.camera = null, this.renderer = null, this.size = {
                            windowW: null,
                            windowH: null
                        }, this.clock = null, this.time = {
                            total: null,
                            delta: null
                        }, this.folderNames = []
                    }
                    return Object(r.a)(t, [{
                        key: "init",
                        value: function(t) {
                            this.setSize(), this.scene = new l.q, this.camera = new l.l(45, this.size.windowW / this.size.windowH, .1, 20), this.camera.position.set(0, 0, -4), this.camera.lookAt(this.scene.position), this.renderer = new l.A({
                                canvas: t,
                                precision: "highp",
                                powerPreference: "high-performance"
                            }), this.renderer.setPixelRatio(window.devicePixelRatio), this.renderer.setClearColor(0), this.renderer.setSize(this.size.windowW, this.size.windowH), this.clock = new l.c, this.clock.start(), this.composer = new f.a(this.renderer), this.renderPass = new c.a(this.scene, this.camera), this.composer.addPass(this.renderPass);
                            var e = {
                                    uniforms: {
                                        tDiffuse: {
                                            value: null
                                        },
                                        amount: {
                                            value: 0
                                        }
                                    },
                                    vertexShader: "varying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix\n    * modelViewMatrix\n    * vec4( position, 1.0 );\n}\n",
                                    fragmentShader: "uniform float amount;\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\n\nfloat random( vec2 p )\n{\n  vec2 K1 = vec2(\n    23.14069263277926, // e^pi (Gelfond's constant)\n    2.665144142690225 // 2^sqrt(2) (Gelfondâ€“Schneider constant)\n  );\n  return fract( cos( dot(p,K1) ) * 12345.6789 );\n}\n\nvoid main() {\n\n  vec4 color = texture2D( tDiffuse, vUv );\n  vec2 uvRandom = vUv;\n  uvRandom.y *= random(vec2(uvRandom.y,amount));\n  color.rgb += random(uvRandom)*0.075;\n  gl_FragColor = vec4( color  );\n}\n"
                                },
                                o = new d.a(e);
                            o.renderToScreen = !0, this.composer.addPass(o)
                        }
                    }, {
                        key: "createGUIFolderFromElement",
                        value: function(t, element) {
                            var e = this;
                            if (element.attributes.length > 0 || element.children.length > 0) {
                                var o = t.addFolder(element.name);
                                this.folderNames.push(element.name), element.attributes.forEach((function(t) {
                                    switch (t.type) {
                                        case "number":
                                            o.add(element, t.label, t.min, t.max, t.step);
                                            break;
                                        case "color":
                                            o.addColor(element, t.label)
                                    }
                                })), o.open(), element.children && element.children.length > 0 && element.children.forEach((function(t) {
                                    e.createGUIFolderFromElement(o, t)
                                }))
                            }
                        }
                    }, {
                        key: "setSize",
                        value: function() {
                            this.size = {
                                windowW: window.innerWidth,
                                windowH: window.innerHeight
                            }
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            this.setSize(), this.camera.aspect = this.size.windowW / this.size.windowH, this.camera.updateProjectionMatrix(), this.renderer.setSize(this.size.windowW, this.size.windowH), this.composer.setSize(this.size.windowW, this.size.windowH)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            this.time.delta = this.clock.getDelta(), this.time.total += this.delta, this.composer.render()
                        }
                    }]), t
                }();
            e.default = new m
        },
        162: function(t, e, o) {
            "use strict";
            var n = o(1),
                r = o(258);
            n.a.use(r.a)
        },
        163: function(t, e, o) {
            "use strict";
            var n = o(1),
                r = o(261);
            Object.defineProperty(n.a.prototype, "LocomotiveScroll", {
                value: r.a
            })
        },
        169: function(t, e, o) {
            o(23), o(19), o(36), o(46), o(22), o(47);
            var n = o(165),
                r = o(166),
                l = ["class", "staticClass", "style", "staticStyle", "attrs"];

            function f(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(object);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, o)
                }
                return e
            }
            o(45), t.exports = {
                functional: !0,
                render: function(t, e) {
                    var o = e._c,
                        data = (e._v, e.data),
                        c = e.children,
                        d = void 0 === c ? [] : c,
                        m = data.class,
                        h = data.staticClass,
                        style = data.style,
                        w = data.staticStyle,
                        v = data.attrs,
                        y = void 0 === v ? {} : v,
                        x = r(data, l);
                    return o("svg", function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? f(Object(source), !0).forEach((function(e) {
                                n(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : f(Object(source)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({
                        class: [m, h],
                        style: [style, w],
                        attrs: Object.assign({
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 75 75"
                        }, y)
                    }, x), d.concat([o("path", {
                        attrs: {
                            d: "m33.58 68.095-.177.177.177.176 4.734 4.734.177.177.177-.177 35.504-35.505.177-.176-.177-.177-4.734-4.734-.176-.177-.177.177L33.58 68.095Z",
                            fill: "#fff",
                            stroke: "#fff",
                            "stroke-width": ".5"
                        }
                    }), o("path", {
                        attrs: {
                            d: "m33.58 6.554-.177.176.177.177 35.505 35.505.177.177.176-.177 4.734-4.734.177-.177-.177-.176L38.668 1.82l-.177-.177-.177.177-4.734 4.734Z",
                            fill: "#fff",
                            stroke: "#fff",
                            "stroke-width": ".5"
                        }
                    }), o("path", {
                        attrs: {
                            d: "M3.098 40.852v.25h67.448v-7.195H3.098v6.945Z",
                            fill: "#fff",
                            stroke: "#fff",
                            "stroke-width": ".5"
                        }
                    })]))
                }
            }
        },
        203: function(t, e, o) {
            var content = o(301);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(54).default)("1c274c26", content, !0, {
                sourceMap: !1
            })
        },
        204: function(t, e, o) {
            var content = o(305);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(54).default)("526767f5", content, !0, {
                sourceMap: !1
            })
        },
        222: function(t, e, o) {
            var content = o(321);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(54).default)("5c346d62", content, !0, {
                sourceMap: !1
            })
        },
        223: function(t, e, o) {
            var content = o(325);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(54).default)("9dd68afc", content, !0, {
                sourceMap: !1
            })
        },
        224: function(t, e, o) {
            var content = o(327);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(54).default)("495d8561", content, !0, {
                sourceMap: !1
            })
        },
        225: function(t, e, o) {
            var content = o(329);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(54).default)("a4708b42", content, !0, {
                sourceMap: !1
            })
        },
        226: function(t, e, o) {
            var content = o(331);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(54).default)("608360e4", content, !0, {
                sourceMap: !1
            })
        },
        227: function(t, e, o) {
            var content = o(334);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(54).default)("3994c653", content, !0, {
                sourceMap: !1
            })
        },
        247: function(t, e, o) {
            "use strict";
            o.r(e);
            var n = [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "bg-light"
                    }, [e("picture", [e("img", {
                        attrs: {
                            src: o(332),
                            alt: ""
                        }
                    })])])
                }],
                r = (o(20), o(6)),
                l = o(0),
                f = o(120),
                c = o.n(f),
                d = o(169),
                m = o.n(d),
                h = {
                    name: "Header",
                    components: {
                        LogoSVG: c.a,
                        ArrowRightSVG: m.a
                    },
                    props: {
                        scroll: {
                            type: Object,
                            default: function() {}
                        }
                    },
                    data: function() {
                        return {
                            currentSection: "intro"
                        }
                    },
                    mounted: function() {
                        this.$nuxt.$on("set-current-section", this.setCurrentSection), this.$nav = this.$el.querySelector(".nav"), this.$navContainer = this.$nav.querySelector(".container"), this.$navLanguages = this.$navContainer.querySelectorAll(".languages"), this.$navPageLinks = this.$navContainer.querySelectorAll(".sections-anchors li"), this.$navContactLink = this.$navContainer.querySelectorAll(".contact-mail a"), this.$navContactLinkArrow = this.$navContainer.querySelectorAll(".contact-mail svg")
                    },
                    methods: {
                        closeNav: function(t) {
                            var e = this;
                            this.tlOpen && this.tlOpen.kill(), this.tlClose = r.b.timeline({
                                paused: !0
                            }), this.tlClose.to([this.$navContactLink, this.$navPageLinks, this.$navLanguages, this.$navContactLinkArrow], {
                                duration: .6,
                                opacity: 0,
                                ease: l.c.easeNone,
                                onStart: function() {
                                    void 0 !== t && e.$nuxt.$route.name !== e.lastPageName || e.$nuxt.$emit("transition-in")
                                }
                            }, 0).to(this.$nav, {
                                x: "-100%",
                                force3D: !0,
                                duration: .75,
                                ease: l.a.easeInOut
                            }, .3).add((function() {
                                var t = e.$el.querySelector(".burger");
                                e.$el.classList.remove("open"), t.classList.remove("open")
                            }), .3).add((function() {
                                document.body.style.removeProperty("overflow", "hidden")
                            })), this.tlClose.play()
                        },
                        openNav: function() {
                            this.tlClose && this.tlClose.kill(), this.tlOpen = r.b.timeline({
                                paused: !0
                            }), this.tlOpen.to(this.$nav, {
                                x: "0%",
                                force3D: !0,
                                duration: .75,
                                ease: l.a.easeInOut,
                                onStart: function() {
                                    document.body.style.setProperty("overflow", "hidden")
                                }
                            }, 0).set(this.$nav, {
                                display: "block"
                            }, .35).to(this.$navLanguages, {
                                duration: .45,
                                opacity: 1,
                                ease: l.c.easeNone
                            }, .35).to(this.$navPageLinks, {
                                duration: .45,
                                opacity: 1,
                                ease: l.c.easeNone,
                                stagger: .1
                            }, .35).fromTo(this.$navPageLinks, {
                                x: "-30%"
                            }, {
                                x: "0%",
                                duration: .6,
                                y: 1,
                                ease: l.a.easeOut,
                                stagger: .1
                            }, .35).fromTo(this.$navContactLinkArrow, {
                                opacity: 0,
                                x: "-100%"
                            }, {
                                duration: .45,
                                opacity: 1,
                                x: "0%",
                                ease: l.c.easeNone
                            }, .9).to([this.$navContactLink], {
                                duration: .45,
                                opacity: 1,
                                ease: l.c.easeNone,
                                stagger: .1
                            }, .9), this.tlOpen.play()
                        },
                        onClickBurger: function() {
                            var t = this.$el.querySelector(".burger"),
                                e = this.$el;
                            t.classList.contains("open") ? (e.classList.remove("open"), t.classList.remove("open"), this.closeNav()) : (e.classList.add("open"), t.classList.add("open"), this.openNav())
                        },
                        setCurrentSection: function(data) {
                            this.currentSection = data.section
                        },
                        scrollToSection: function(t) {
                            this.closeNav(), this.scroll.scrollTo(document.querySelector("#".concat(t)), {
                                duration: 850,
                                disableLerp: !0,
                                easing: [.87, 0, .13, 1]
                            })
                        }
                    }
                },
                w = (o(333), o(21)),
                component = Object(w.a)(h, (function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("header", {
                        attrs: {
                            id: "header"
                        }
                    }, [o("div", {
                        staticClass: "container no-margin lg"
                    }, [o("div", {
                        staticClass: "grid"
                    }, [o("div", {
                        staticClass: "column-xs-6 column-sm-6 column-md-6 column-lg-6 colun-xl-6"
                    }, [o("div", {
                        staticClass: "logo"
                    }, [o("LogoSVG")], 1)]), t._v(" "), o("div", {
                        staticClass: "\n          right\n          column-xs-6 column-sm-6 column-md-6 column-lg-6\n          colun-xl-6\n        "
                    }, [o("div", {
                        staticClass: "menu mb",
                        on: {
                            click: t.onClickBurger
                        }
                    }, [o("div", {
                        staticClass: "burger"
                    })]), t._v(" "), o("div", {
                        staticClass: "content-right"
                    }, [o("div", {
                        staticClass: "languages"
                    }, [o("ul", [o("li", {
                        class: "en" !== t.$i18n.locale ? "" : "active"
                    }, [o("nuxt-link", {
                        attrs: {
                            to: "/"
                        }
                    }, [t._v(" EN ")])], 1), t._v(" "), o("li", {
                        class: "vn" !== t.$i18n.locale ? "" : "active"
                    }, [o("nuxt-link", {
                        attrs: {
                            to: "/vn"
                        }
                    }, [t._v(" VN ")])], 1), t._v(" "), o("li", {
                        class: "zh" !== t.$i18n.locale ? "" : "active"
                    }, [o("nuxt-link", {
                        attrs: {
                            to: "/zh"
                        }
                    }, [t._v(" 中文 ")])], 1)])]), t._v(" "), o("div", {
                        staticClass: "anchors"
                    }, [o("ul", [o("li", {
                        class: "works" === t.currentSection ? "active" : "",
                        on: {
                            click: function(e) {
                                return t.scrollToSection("works")
                            }
                        }
                    }, [o("nuxt-link", {
                        attrs: {
                            to: "#"
                        }
                    }, [t._v("w"), o("i", [t._v("o")]), t._v("rk")])], 1), t._v(" "), o("li", {
                        class: "manifesto" === t.currentSection ? "active" : "",
                        on: {
                            click: function(e) {
                                return t.scrollToSection("manifesto")
                            }
                        }
                    }, [o("nuxt-link", {
                        attrs: {
                            to: "#"
                        }
                    }, [t._v("manifest"), o("i", [t._v("o")])])], 1), t._v(" "), o("li", {
                        class: "saigon-soul" === t.currentSection ? "active" : "",
                        on: {
                            click: function(e) {
                                return t.scrollToSection("saigon-soul")
                            }
                        }
                    }, [o("nuxt-link", {
                        attrs: {
                            to: "#"
                        }
                    }, [t._v("saig"), o("i", [t._v("o")]), t._v("n soul")])], 1), t._v(" "), o("li", {
                        class: "team" === t.currentSection ? "active" : "",
                        on: {
                            click: function(e) {
                                return t.scrollToSection("team")
                            }
                        }
                    }, [o("nuxt-link", {
                        attrs: {
                            to: "#"
                        }
                    }, [t._v("team")])], 1), t._v(" "), o("li", {
                        class: "contact" === t.currentSection ? "active" : "",
                        on: {
                            click: function(e) {
                                return t.scrollToSection("contact")
                            }
                        }
                    }, [o("nuxt-link", {
                        attrs: {
                            to: "#"
                        }
                    }, [t._v("contact")])], 1)])])])])]), t._v(" "), o("div", {
                        staticClass: "nav"
                    }, [t._m(0), t._v(" "), o("div", {
                        staticClass: "container"
                    }, [o("div", {
                        staticClass: "languages"
                    }, [o("ul", [o("li", {
                        class: "en" !== t.$i18n.locale ? "" : "active"
                    }, [o("nuxt-link", {
                        attrs: {
                            to: "/"
                        }
                    }, [t._v(" EN ")])], 1), t._v(" "), o("li", {
                        class: "vn" !== t.$i18n.locale ? "" : "active"
                    }, [o("nuxt-link", {
                        attrs: {
                            to: "/vn"
                        }
                    }, [t._v(" VN ")])], 1), t._v(" "), o("li", {
                        class: "zh" !== t.$i18n.locale ? "" : "active"
                    }, [o("nuxt-link", {
                        attrs: {
                            to: "/zh"
                        }
                    }, [t._v(" 中文 ")])], 1)])]), t._v(" "), o("ul", {
                        staticClass: "sections-anchors"
                    }, [o("ul", [o("li", {
                        on: {
                            click: function(e) {
                                return t.scrollToSection("works")
                            }
                        }
                    }, [o("nuxt-link", {
                        attrs: {
                            to: "#"
                        }
                    }, [t._v("w"), o("i", [t._v("o")]), t._v("rk")])], 1), t._v(" "), o("li", {
                        on: {
                            click: function(e) {
                                return t.scrollToSection("manifesto")
                            }
                        }
                    }, [o("nuxt-link", {
                        attrs: {
                            to: "#"
                        }
                    }, [t._v("manifest"), o("i", [t._v("o")])])], 1), t._v(" "), o("li", {
                        on: {
                            click: function(e) {
                                return t.scrollToSection("saigon-soul")
                            }
                        }
                    }, [o("nuxt-link", {
                        attrs: {
                            to: "#"
                        }
                    }, [t._v("saig"), o("i", [t._v("o")]), t._v("n soul")])], 1), t._v(" "), o("li", {
                        on: {
                            click: function(e) {
                                return t.scrollToSection("team")
                            }
                        }
                    }, [o("nuxt-link", {
                        attrs: {
                            to: "#"
                        }
                    }, [t._v("team")])], 1), t._v(" "), o("li", {
                        on: {
                            click: function(e) {
                                return t.scrollToSection("contact")
                            }
                        }
                    }, [o("nuxt-link", {
                        attrs: {
                            to: "#"
                        }
                    }, [t._v("contact")])], 1)])]), t._v(" "), o("div", {
                        staticClass: "contact-mail"
                    }, [o("ArrowRightSVG"), t._v(" "), o("a", {
                        attrs: {
                            href: "mailto:contact@monopo.vn"
                        }
                    }, [t._v("contact@monopo.vn")])], 1)])])])])
                }), n, !1, null, "db53f10c", null);
            e.default = component.exports;
            installComponents(component, {
                Header: o(247).default
            })
        },
        250: function(t, e, o) {
            "use strict";
            o.r(e), o.d(e, "default", (function() {
                return F
            }));
            var n = o(7),
                r = o(25),
                l = o(29),
                f = o(30),
                c = (o(48), o(23), o(42), o(15), o(20), o(55), o(27), o(19), o(56), o(57), o(32), o(6)),
                d = o(0),
                m = o(16),
                h = o(264),
                w = o(252),
                v = o(41);

            function y(t, e) {
                var o = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!o) {
                    if (Array.isArray(t) || (o = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return x(t, e);
                            var o = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === o && t.constructor && (o = t.constructor.name);
                            if ("Map" === o || "Set" === o) return Array.from(t);
                            if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return x(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        o && (t = o);
                        var i = 0,
                            n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var r, l = !0,
                    f = !1;
                return {
                    s: function() {
                        o = o.call(t)
                    },
                    n: function() {
                        var t = o.next();
                        return l = t.done, t
                    },
                    e: function(t) {
                        f = !0, r = t
                    },
                    f: function() {
                        try {
                            l || null == o.return || o.return()
                        } finally {
                            if (f) throw r
                        }
                    }
                }
            }

            function x(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, o = new Array(e); i < e; i++) o[i] = t[i];
                return o
            }
            var F = function() {
                function t(e) {
                    Object(l.a)(this, t), this.cleanMaterial = function(t) {
                        t.dispose();
                        for (var e = 0, o = Object.keys(t); e < o.length; e++) {
                            var n = t[o[e]];
                            n && "object" === Object(r.a)(n) && "minFilter" in n && n.dispose()
                        }
                    }, this.props = e, this.MAX_FPS = 60, this.FPS_INTERVAL = 1e3 / this.MAX_FPS, this.lastDate = Date.now(), this.dt = 0, this.now = 0, this.init()
                }
                var e;
                return Object(f.a)(t, [{
                    key: "init",
                    value: (e = Object(n.a)(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, m.default.init(this.props.$canvas);
                                case 2:
                                    this.background = new h.default, this.lens = new w.default({
                                        mouse: this.props.mouse
                                    }), this.attach(), this.loop(), "error-page" === document.querySelector("main").children[0].id ? (document.querySelector("header .anchors").style.opacity = 0, document.querySelector("header .languages").style.opacity = 0, this.revealHome()) : this.props.$nuxt.$store.state.isSceneLoaded ? (document.querySelector("header .anchors").style.opacity = 1, this.revealHome()) : (document.querySelector("header .anchors").style.opacity = 1, this.props.$nuxt.$emit("on-scene-load"));
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() {
                        return e.apply(this, arguments)
                    })
                }, {
                    key: "revealHome",
                    value: function() {
                        var t = this;
                        this.header = document.querySelector("header .container"), this.$anchors = document.querySelectorAll("header .container .anchors ul li"), this.$sentencesContainer = document.querySelectorAll("#home .sentences"), this.$sentences = document.querySelectorAll("#home .sentences ul .active .container--word"), this.$scrollLogo = document.querySelectorAll("#home .scroll-logo"), this.$gradientBot = document.querySelectorAll("#home .gradient"), this.$home = document.querySelector("#home");
                        var e = c.b.timeline();
                        e.add((function() {
                            e.fromTo(t.background, {
                                opacityBackground: 0
                            }, {
                                opacityBackground: .8,
                                ease: d.a.easeInOut,
                                duration: 1
                            }, 0), e.fromTo(t.background, {
                                bgProgress: 0
                            }, {
                                bgProgress: 1,
                                ease: d.a.easeInOut,
                                duration: 1
                            }, 0), e.from(t.background, {
                                speed: 100
                            }, {
                                speed: 30,
                                ease: d.a.easeInOut,
                                duration: 1
                            }, 0)
                        }), 0).add((function() {
                            t.lens.show.bind(t.lens)()
                        }), .55).fromTo(this.$gradientBot, {
                            opacity: 0
                        }, {
                            opacity: 1
                        }, .6).fromTo(this.header, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: 1,
                            ease: d.a.easeOut
                        }, .6), v.a.device.mobile || e.fromTo(this.header, {
                            y: "-100%"
                        }, {
                            y: "0%",
                            force3D: !0,
                            duration: 1,
                            ease: d.a.easeOut
                        }, .6), e.fromTo(this.$anchors, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: 1,
                            stagger: .075,
                            ease: d.a.easeOut
                        }, .6).fromTo(this.$anchors, {
                            x: "100%"
                        }, {
                            x: "0%",
                            force3D: !0,
                            duration: 1,
                            stagger: .075,
                            ease: d.a.easeOut
                        }, .6).to(this.$sentencesContainer, {
                            opacity: 1,
                            duration: 1,
                            stagger: .075,
                            onStart: function() {
                                t.props.$nuxt.$emit("animate-sentences")
                            },
                            ease: d.a.easeOut
                        }, .9).fromTo(this.$sentences[0], {
                            y: "60%"
                        }, {
                            y: "0%",
                            ease: d.a.easeOut,
                            force3D: !0,
                            duration: 1.2
                        }, .91).fromTo(this.$sentences[0], {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: 1,
                            stagger: .075,
                            ease: d.a.easeOut
                        }, .91).fromTo(this.$sentences[1], {
                            y: "60%"
                        }, {
                            y: "0%",
                            ease: d.a.easeOut,
                            force3D: !0,
                            duration: 1.2
                        }, .92).fromTo(this.$sentences[1], {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: 1,
                            stagger: .075,
                            ease: d.a.easeOut
                        }, .92).to(this.$scrollLogo, {
                            opacity: 1,
                            duration: 1,
                            ease: d.a.easeOut
                        }, .96), e.play()
                    }
                }, {
                    key: "resize",
                    value: function() {
                        m.default.resize(), this.background.resize()
                    }
                }, {
                    key: "attach",
                    value: function() {
                        window.addEventListener("resize", this.resize.bind(this)), this.props.$nuxt.$on("pre-show-background", this.background.preShow.bind(this.background)), this.props.$nuxt.$on("show-background", this.background.show.bind(this.background)), this.props.$nuxt.$on("show-lens", this.lens.show.bind(this.lens))
                    }
                }, {
                    key: "detach",
                    value: function() {
                        var t = this;
                        this.props.$nuxt.$off("pre-show-background", this.background.preShow.bind(this.background)), this.props.$nuxt.$off("show-background", this.background.show.bind(this.background)), this.props.$nuxt.$off("show-lens", this.lens.show.bind(this.lens)), m.default.renderer.dispose(), cancelAnimationFrame(this.raf), m.default.scene.traverse((function(object) {
                            if (object.isMesh)
                                if (object.geometry.dispose(), object.material.isMaterial) t.cleanMaterial(object.material);
                                else {
                                    var e, o = y(object.material);
                                    try {
                                        for (o.s(); !(e = o.n()).done;) {
                                            var n = e.value;
                                            t.cleanMaterial(n)
                                        }
                                    } catch (t) {
                                        o.e(t)
                                    } finally {
                                        o.f()
                                    }
                                }
                        })), window.removeEventListener("resize", this.resize.bind(this))
                    }
                }, {
                    key: "loop",
                    value: function() {
                        this.raf = requestAnimationFrame(this.loop.bind(this)), this.now = Date.now(), this.dt = this.now - this.lastDate, this.dt > this.FPS_INTERVAL && (this.render(), this.background.update(), this.lens.update())
                    }
                }, {
                    key: "render",
                    value: function() {
                        m.default.render()
                    }
                }]), t
            }()
        },
        252: function(t, e, o) {
            "use strict";
            o.r(e), o.d(e, "default", (function() {
                return h
            }));
            var n = o(29),
                r = o(30),
                l = o(2),
                f = o(6),
                c = o(0),
                d = o(16),
                m = o(157),
                h = function() {
                    function t(e) {
                        Object(n.a)(this, t), this.opts = e, this.attributes = [{
                            label: "mRefractionRatio",
                            type: "number",
                            min: -10,
                            max: 10,
                            step: .001
                        }, {
                            label: "mFresnelBias",
                            type: "number",
                            min: -10,
                            max: 10,
                            step: .001
                        }, {
                            label: "mFresnelPower",
                            type: "number",
                            min: -10,
                            max: 10,
                            step: .001
                        }, {
                            label: "mFresnelScale",
                            type: "number",
                            min: -10,
                            max: 10,
                            step: .001
                        }, {
                            label: "sphereAlpha",
                            type: "number",
                            min: 0,
                            max: 1,
                            step: .001
                        }, {
                            label: "refractionPower",
                            type: "number",
                            min: 0,
                            max: 1,
                            step: .001
                        }], this.mRefractionRatio = .016, this.mFresnelBias = .016, this.mFresnelPower = 4.206, this.mFresnelScale = 2.442, this.sphereAlpha = 0, this.refractionPower = 0, this.uniforms = {
                            resolution: {
                                value: new l.x
                            }
                        }, this.direction = new l.v(0, 0), this.cameraPosition = new l.v(0, 0), this.mouseVec = new l.v(0, 0), this.cameraEasing = {
                            x: .6,
                            y: .3
                        }, this.init()
                    }
                    return Object(r.a)(t, [{
                        key: "init",
                        value: function() {
                            this.cubeRenderTarget = new l.y(256, {
                                format: l.p,
                                generateMipmaps: !0,
                                minFilter: l.i,
                                encoding: l.B
                            }), this.refractSphereCamera = new l.e(.1, 10, this.cubeRenderTarget), this.fresnelUniforms = {
                                mRefractionRatio: {
                                    type: "f",
                                    value: this.mRefractionRatio
                                },
                                mFresnelBias: {
                                    type: "f",
                                    value: this.mFresnelBias
                                },
                                mFresnelPower: {
                                    type: "f",
                                    value: this.mFresnelPower
                                },
                                mFresnelScale: {
                                    type: "f",
                                    value: this.mFresnelScale
                                },
                                uSphereAlpha: {
                                    type: "f",
                                    value: this.sphereAlpha
                                },
                                uRefractionPower: {
                                    type: "f",
                                    value: this.refractionPower
                                },
                                tCube: {
                                    type: "t",
                                    value: this.refractSphereCamera.renderTarget.texture
                                }
                            }, this.customMaterial = new l.r({
                                uniforms: this.fresnelUniforms,
                                vertexShader: m.default.vertexShader,
                                fragmentShader: m.default.fragmentShader,
                                transparent: !0,
                                side: l.g
                            }), this.sphereGeometry = new l.t(.4, 64, 64), this.sphere = new l.j(this.sphereGeometry, this.customMaterial), this.sphere.scale.set(3, 3, 3), this.sphere.position.set(-1.25, .75, -1.5), d.default.scene.add(this.sphere), this.refractSphereCamera.position.copy(this.sphere.position)
                        }
                    }, {
                        key: "show",
                        value: function() {
                            f.b.to(this, {
                                sphereAlpha: 1,
                                refractionPower: .75,
                                ease: c.a.easeOut,
                                duration: 1
                            }), f.b.to(this.sphere.scale, {
                                x: 3.5,
                                y: 3.5,
                                z: 3.5,
                                ease: c.a.easeOut,
                                duration: 2
                            }), f.b.to(this.sphere.position, {
                                x: -1,
                                ease: c.a.easeOut,
                                duration: 2
                            })
                        }
                    }, {
                        key: "update",
                        value: function() {
                            this.fresnelUniforms.mRefractionRatio.value = this.mRefractionRatio, this.fresnelUniforms.mFresnelBias.value = this.mFresnelBias, this.fresnelUniforms.mFresnelPower.value = this.mFresnelPower, this.fresnelUniforms.mFresnelScale.value = this.mFresnelScale, this.fresnelUniforms.uSphereAlpha.value = this.sphereAlpha, this.fresnelUniforms.uRefractionPower.value = this.refractionPower, this.mouseVec.x = this.opts.mouse.x, this.mouseVec.y = this.opts.mouse.y, this.direction.subVectors(this.mouseVec, this.cameraPosition), this.direction.multiplyScalar(.06), this.cameraPosition.addVectors(this.cameraPosition, this.direction), d.default.camera.position.x = this.cameraPosition.x * this.cameraEasing.x * -1, d.default.camera.position.y = -this.cameraPosition.y * this.cameraEasing.y * 1, d.default.camera.lookAt(new l.w(0, 0, 0)), this.sphere.visible = !1, this.refractSphereCamera.update(d.default.renderer, d.default.scene), this.sphere.visible = !0
                        }
                    }]), t
                }()
        },
        263: function(t, e, o) {
            "use strict";
            o(50), o(58), o(81), o(23), o(84), o(312);
            var n = o(6),
                r = o(0),
                l = (o(313), o(29)),
                f = o(30),
                c = o(79),
                d = o(164),
                m = o(253),
                h = o(158),
                w = (o(207), o(15), o(27), o(209), o(210), o(211), o(212), o(213), o(214), o(215), o(216), o(217), o(218), o(219), o(220), o(221), o(32), o(22), o(43), o(20), o(159));

            function v(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var o, n = Object(h.a)(t);
                    if (e) {
                        var r = Object(h.a)(this).constructor;
                        o = Reflect.construct(n, arguments, r)
                    } else o = n.apply(this, arguments);
                    return Object(m.a)(this, o)
                }
            }
            var y = function(t) {
                    Object(d.a)(o, t);
                    var e = v(o);

                    function o() {
                        var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = n.sizer,
                            f = void 0 === r ? window : r,
                            d = n.selector,
                            m = void 0 === d ? "html" : d;
                        return Object(l.a)(this, o), (t = e.call(this)).element = document.querySelector(m), t.sizer = f, t.width = 1, t.height = 1, t.minWidth = 0, t.minHeight = 0, t.viewportWidth = 0, t.viewportHeight = 0, t.widthOnly = !1, t.orientation = null, t._medias = new Map, t.medias = {}, t.onResize = t.onResize.bind(Object(c.a)(t)), t.mediaDisabled = t.mediaDisabled.bind(Object(c.a)(t)), t.mediaEnabled = t.mediaEnabled.bind(Object(c.a)(t)), t.attach(), t.resize(), t
                    }
                    return Object(f.a)(o, [{
                        key: "attach",
                        value: function() {
                            window.addEventListener("resize", this.onResize), window.addEventListener("orientationchange", this.onResize)
                        }
                    }, {
                        key: "detach",
                        value: function() {
                            window.removeEventListener("resize", this.onResize), window.removeEventListener("orientationchange", this.onResize)
                        }
                    }, {
                        key: "onResize",
                        value: function(t) {
                            this.computeResize()
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            this.computeResize(!0)
                        }
                    }, {
                        key: "computeResize",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                e = this.width,
                                o = this.height;
                            this.sizer == window ? (this.innerWidth = document.documentElement.clientWidth, this.outerWidth = window.innerWidth, this.innerHeight = document.documentElement.clientHeight, this.outerHeight = window.innerHeight) : (this.innerWidth = this.outerWidth = this.sizer.offsetWidth, this.innerHeight = this.outerHeight = this.sizer.offsetHeight), this.viewportWidth = Math.min(this.innerWidth, this.outerWidth), this.viewportHeight = Math.min(this.innerHeight, this.outerHeight), this.width = this.viewportWidth < this.minWidth ? this.minWidth : this.viewportWidth, this.height = this.viewportHeight < this.minHeight ? this.minHeight : this.viewportHeight, this.orientation = this.width < this.height ? "portrait" : "landscape";
                            var n = [];
                            this._medias.forEach((function(t, e) {
                                t.update() && n.push(t)
                            })), (!this.widthOnly && (e != this.width || o != this.height) || this.widthOnly && e != this.width || t) && (this.computeResize(), this.emit("pre-resize"), this.emit("resize"), this.emit("post-resize")), n.length && this.emit("media", n.map((function(t) {
                                return t.name
                            })), n)
                        }
                    }, {
                        key: "add",
                        value: function(t) {
                            t.viewport = this;
                            var e = new x(t);
                            return e.on("disable", this.mediaDisabled), e.on("enable", this.mediaEnabled), this._medias.set(e.name, e), this.medias[e.name] = !1, e.update(), e
                        }
                    }, {
                        key: "remove",
                        value: function(t) {
                            delete this.medias[t.name], this._medias.delete(t.name), t.off("disable", this.mediaDisabled), t.off("enable", this.mediaEnabled)
                        }
                    }, {
                        key: "get",
                        value: function(t) {
                            return this._medias.get(t)
                        }
                    }, {
                        key: "mediaDisabled",
                        value: function(t) {
                            this.medias[t.name] = !1, t.addClass && this.element.classList.remove(t.classPrefix + t.name)
                        }
                    }, {
                        key: "mediaEnabled",
                        value: function(t) {
                            this.medias[t.name] = !0, t.addClass && this.element.classList.add(t.classPrefix + t.name)
                        }
                    }]), o
                }(w.EventEmitter),
                x = function(t) {
                    Object(d.a)(o, t);
                    var e = v(o);

                    function o() {
                        var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = n.viewport,
                            f = void 0 === r ? new y : r,
                            c = n.name,
                            d = void 0 === c ? "" : c,
                            m = n.minWidth,
                            h = void 0 === m ? -1 / 0 : m,
                            w = n.minHeight,
                            v = void 0 === w ? -1 / 0 : w,
                            x = n.maxWidth,
                            F = void 0 === x ? 1 / 0 : x,
                            R = n.maxHeight,
                            O = void 0 === R ? 1 / 0 : R,
                            k = n.addClass,
                            C = void 0 === k || k,
                            W = n.classPrefix,
                            $ = void 0 === W ? "" : W,
                            S = n.condition,
                            L = void 0 === S ? null : S,
                            z = n.meta,
                            meta = void 0 === z ? null : z,
                            _ = n.media,
                            P = void 0 === _ ? null : _;
                        return Object(l.a)(this, o), (t = e.call(this)).viewport = f, t.name = d, t.minWidth = h, t.minHeight = v, t.maxWidth = F, t.maxHeight = O, t.addClass = C, t.classPrefix = $, t.condition = L, t.meta = meta, t.media = P, t.active = !1, t
                    }
                    return Object(f.a)(o, [{
                        key: "update",
                        value: function() {
                            var t = this.viewport.width >= this.minWidth && this.viewport.width < this.maxWidth && this.viewport.height >= this.minHeight && this.viewport.height < this.maxHeight && (!this.media || window.matchMedia(this.media).matches);
                            return "function" == typeof this.condition && (t = this.condition(t)), this.active && !t ? (this.active = !1, this.emit("disable", this), !0) : !(this.active || !t) && (this.active = !0, this.emit("enable", this), !0)
                        }
                    }]), o
                }(w.EventEmitter),
                F = new y,
                R = o(41),
                O = {
                    name: "DefaultLayout",
                    data: function() {
                        return {
                            locoScroll: null
                        }
                    },
                    mounted: function() {
                        this.$nextTick((function() {
                            this.onResize(), this.init(), this.getWindowWidth(), this.getWindowHeight(), this.attach()
                        }))
                    },
                    destroyed: function() {
                        this.detach()
                    },
                    methods: {
                        updateScroll: function() {
                            this.locoScroll.update()
                        },
                        stopScroll: function() {
                            this.locoScroll.stop()
                        },
                        startScroll: function() {
                            this.locoScroll.start()
                        },
                        setScrollTop: function() {
                            this.locoScroll.setScroll(0, 0)
                        },
                        scrollTop: function() {
                            this.locoScroll.update(), this.locoScroll.scrollTo("top", {
                                duration: 700,
                                easing: [.87, 0, .13, 1]
                            })
                        },
                        onKeyDown: function(t) {
                            if (9 === t.which) return t.preventDefault(), !1
                        },
                        attach: function() {
                            var t = this;
                            window.addEventListener("resize", this.onResize), window.addEventListener("keydown", this.onKeyDown), this.$nuxt.$on("remove-mousemove-emit", (function() {
                                document.removeEventListener("mousemove", t.tMouseMove)
                            })), this.$nuxt.$on("update-scroll", this.updateScroll), this.$nuxt.$on("stop-scroll", this.stopScroll), this.$nuxt.$on("start-scroll", this.startScroll), this.$nuxt.$on("scroll-top", this.scrollTop), this.$nuxt.$on("set-scroll-top", this.setScrollTop), F.attach()
                        },
                        detach: function() {
                            window.removeEventListener("resize", this.onResize), this.$nuxt.$off("update-scroll", this.updateScroll), this.$nuxt.$off("stop-scroll", this.stopScroll), this.$nuxt.$off("start-scroll", this.startScroll), this.$nuxt.$off("scroll-top", this.scrollTop), this.$nuxt.$off("set-scroll-top", this.setScrollTop), F.detach()
                        },
                        init: function() {
                            this.initScroll(), this.initBreakpoints()
                        },
                        clamp: function(t, e, o) {
                            return t > o ? o : t < e ? e : t
                        },
                        initScroll: function() {
                            var t = this;
                            this.locoScroll = new this.LocomotiveScroll({
                                el: this.$el.querySelector("[data-scroll-container]"),
                                smooth: !0,
                                smoothMobile: .5,
                                touchMultiplier: 3.5,
                                useKeyboard: !0,
                                mobile: {
                                    smooth: !0
                                },
                                tablet: {
                                    smooth: !0
                                },
                                smartphone: {
                                    smooth: !0,
                                    horizontalGesture: !0
                                }
                            }), this.locoScroll.on("call", (function(e, o, l) {
                                if ("enter" === o) {
                                    if ("SET_CURRENT_SECTION" === e && t.$nuxt.$emit("set-current-section", {
                                            section: l.el.id
                                        }), "SET_BACKGROUND" === e && ("/" === t.$nuxt.$route.path || t.$nuxt.$route.path.includes("/vn") || t.$nuxt.$route.path.includes("/zh")) && t.$el.classList.add("white-bg"), "ANIMATE_BG_LIGHT" === e) {
                                        var video = l.el.querySelector("video");
                                        setTimeout((function() {
                                            video.play()
                                        }), 250)
                                    }
                                    if ("ANIMATE_BRAND_WORDS" === e) {
                                        var f = n.b.timeline(),
                                            c = t.$el.querySelectorAll("#partners .brands .word");
                                        f.fromTo(c, {
                                            y: "20%"
                                        }, {
                                            y: 0,
                                            duration: .85,
                                            ease: r.a.easeOut,
                                            force3D: !0,
                                            stagger: .05
                                        }, 0), f.to(c, {
                                            opacity: 1,
                                            duration: .425,
                                            ease: r.c.easeNone,
                                            stagger: .05
                                        }, 0), f.play()
                                    }
                                }
                                "exit" === o && "SET_BACKGROUND" === e && t.$el.classList.remove("white-bg")
                            }));
                            var e = 0;
                            this.locoScroll.on("scroll", (function(o) {
                                o.scroll.y > e ? (t.$el.classList.add("sc-down"), t.$el.classList.remove("sc-up")) : (t.$el.classList.add("sc-up"), t.$el.classList.remove("sc-down")), e = o.scroll.y <= 0 ? 0 : o.scroll.y;
                                var l = window.innerHeight,
                                    f = o.scroll.y;
                                if (Object.keys(o.currentElements).length > 0 && void 0 !== Object.values(o.currentElements).find((function(t) {
                                        return "manifestoLine" === t.class
                                    })))
                                    for (var i = 0; i < Object.keys(o.currentElements).length; i++) {
                                        var c = Object.keys(o.currentElements)[i];
                                        if (o.currentElements[c].el && o.currentElements[c].el.classList.contains("manifestoLine")) {
                                            var mask = o.currentElements[c].el.querySelector(".mask");
                                            if (mask) {
                                                var d = o.currentElements[c].top,
                                                    m = o.currentElements[c].el.offsetHeight,
                                                    h = f + l - d - m,
                                                    w = Math.round(4 * h / ((l + m) / 100));
                                                n.b.to(mask, {
                                                    duration: .25,
                                                    x: "".concat(Math.min(100, Math.max(0, w)), "%"),
                                                    force3D: !0,
                                                    ease: r.c.easeNone
                                                })
                                            }
                                        }
                                    }
                            })), this.$nuxt.locoScroll = this.locoScroll
                        },
                        initBreakpoints: function() {
                            var t = 768,
                                e = 1024,
                                o = 1280;
                            F.add({
                                addClass: !0,
                                name: "mobile"
                            }), F.add({
                                addClass: !0,
                                name: "tablet",
                                media: "(min-width: ".concat(t, "px)")
                            }), F.add({
                                addClass: !0,
                                name: "tablet-large",
                                media: "(min-width: ".concat(e, "px)")
                            }), F.add({
                                addClass: !0,
                                name: "desktop",
                                media: "(min-width: ".concat(o, "px)")
                            }), F.add({
                                addClaass: !0,
                                name: "small-height",
                                media: "(max-height: 749px)"
                            }), R.a.device.touch || document.querySelector("html").classList.add("notouch")
                        },
                        onResize: function() {
                            this.getWindowWidth(), this.getWindowHeight(), R.a.device.mobile && !R.a.device.tablet || (this.$el.querySelector("header .container").style.transform = "")
                        },
                        getWindowWidth: function(t) {
                            this.windowWidth = window.innerWidth
                        },
                        getWindowHeight: function(t) {
                            this.windowHeight = window.innerHeight;
                            var e = .01 * this.windowHeight;
                            document.documentElement.style.setProperty("--vh", "".concat(e, "px"))
                        }
                    }
                },
                k = (o(320), o(21)),
                component = Object(k.a)(O, (function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        attrs: {
                            id: "app"
                        }
                    }, [o("Loader"), t._v(" "), o("client-only", [o("DotCursor"), t._v(" "), o("Overlay"), t._v(" "), o("CookiesBanner")], 1), t._v(" "), o("div", {
                        staticClass: "app-content"
                    }, [o("Header", {
                        attrs: {
                            scroll: t.locoScroll
                        }
                    }), t._v(" "), o("main", {
                        attrs: {
                            "data-scroll-container": ""
                        }
                    }, [o("Nuxt")], 1)], 1)], 1)
                }), [], !1, null, null, null);
            e.a = component.exports;
            installComponents(component, {
                Loader: o(406).default,
                DotCursor: o(405).default,
                Overlay: o(407).default,
                CookiesBanner: o(408).default,
                Header: o(247).default
            })
        },
        264: function(t, e, o) {
            "use strict";
            o.r(e), o.d(e, "default", (function() {
                return v
            }));
            var n = o(29),
                r = o(30),
                l = (o(20), o(302), o(2)),
                f = o(6),
                c = o(0),
                d = o(16),
                m = o(71),
                h = function(t) {
                    return new l.w(t[0] / 255, t[1] / 255, t[2] / 255)
                },
                w = o(41),
                v = function() {
                    function t(e) {
                        Object(n.a)(this, t), this.opts = e, this.name = "Background", this.attributes = [{
                            label: "baseFirstColor",
                            type: "color"
                        }, {
                            label: "baseSecondColor",
                            type: "color"
                        }, {
                            label: "baseThirdColor",
                            type: "color"
                        }, {
                            label: "baseFrequency",
                            type: "number",
                            min: 1,
                            max: 10,
                            step: .1
                        }, {
                            label: "accentColor",
                            type: "color"
                        }, {
                            label: "accentOpacity",
                            type: "number",
                            min: 0,
                            max: 1,
                            step: .01
                        }, {
                            label: "bgProgress",
                            type: "number",
                            min: 0,
                            max: 1,
                            step: .01
                        }, {
                            label: "speed",
                            type: "number",
                            min: 0,
                            max: 100,
                            step: 1
                        }, {
                            label: "zoom",
                            type: "number",
                            min: 0,
                            max: 10,
                            step: .001
                        }, {
                            label: "opacityBackground",
                            type: "number",
                            min: 0,
                            max: 1,
                            step: .001
                        }, {
                            label: "noiseIntensity",
                            type: "number",
                            min: 0,
                            max: 1,
                            step: .001
                        }], this.baseFirstColor = m.PALETTE.baseFirst, this.baseSecondColor = m.PALETTE.baseSecond, this.baseThirdColor = m.PALETTE.baseThird, this.baseLightColor = m.PALETTE.baseLight, this.accentColor = m.PALETTE.accent, this.accentLightColor = m.PALETTE.accentLight, this.baseFrequency = 2.6, this.zoom = w.a.device.mobile ? .1 : .2, this.accentOpacity = 1, this.accentFrequency = 2.2, this.noiseIntensity = 0, this.opacityBackground = 0, this.bgProgress = 0, this.speed = 100, this.uniforms = {
                            uTime: {
                                value: 0
                            },
                            uBaseFirstColor: {
                                type: "vec3",
                                value: h(this.baseFirstColor)
                            },
                            uBaseSecondColor: {
                                type: "vec3",
                                value: h(this.baseSecondColor)
                            },
                            uBaseThirdColor: {
                                type: "vec3",
                                value: h(this.baseThirdColor)
                            },
                            uZoom: {
                                type: "1f",
                                value: this.zoom
                            },
                            uBaseFrequency: {
                                type: "1f",
                                value: this.baseFrequency
                            },
                            uAccentColor: {
                                type: "vec3",
                                value: h(this.accentColor)
                            },
                            uAccentOpacity: {
                                type: "float",
                                value: this.accentOpacity
                            },
                            uAccentFrequency: {
                                type: "1f",
                                value: this.accentFrequency
                            },
                            uNoiseIntensity: {
                                type: "1f",
                                value: this.noiseIntensity
                            },
                            uOpacityBackground: {
                                type: "1f",
                                value: this.opacityBackground
                            },
                            uBgProgress: {
                                type: "1f",
                                value: this.bgProgress
                            },
                            u_res: {
                                value: new l.v(window.innerWidth, window.innerHeight)
                            }
                        }, this.init()
                    }
                    return Object(r.a)(t, [{
                        key: "init",
                        value: function() {
                            var t = d.default.camera.fov * Math.PI / 180;
                            this.fovY = d.default.camera.position.z * Math.tan(t / 2) * 2, this.geometry = new l.s(1, 32, 32), this.material = new l.r({
                                uniforms: this.uniforms,
                                vertexShader: "varying vec3 vUv; \n\nvoid main() {\n    vUv = position; \n\n    vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);\n    gl_Position = projectionMatrix * modelViewPosition; \n}",
                                fragmentShader: "varying vec3 vUv;\n\nuniform vec3 uBaseFirstColor;\nuniform vec3 uBaseSecondColor;\nuniform vec3 uAccentColor;\nuniform float uBgProgress;\nuniform float uAccentOpacity;\nuniform float uBaseFrequency;\nuniform float uAccentFrequency;\nuniform float uNoiseIntensity;\nuniform float uOpacityBackground;\nuniform float uTime;\nuniform float uZoom;\n\nuniform vec2 u_res;\n\nvec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\nvec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}\n\nfloat random (in vec2 st) {\n    return fract(sin(dot(st.xy,\n                         vec2(12.9898,78.233)))\n                * 43758.5453123);\n}\nfloat mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}\nvec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}\nvec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}\n\nfloat noise(vec3 p){\n    vec3 a = floor(p);\n    vec3 d = p - a;\n    d = d * d * (3.0 - 2.0 * d);\n\n    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);\n    vec4 k1 = perm(b.xyxy);\n    vec4 k2 = perm(k1.xyxy + b.zzww);\n\n    vec4 c = k2 + a.zzzz;\n    vec4 k3 = perm(c);\n    vec4 k4 = perm(c + 1.0);\n\n    vec4 o1 = fract(k3 * (1.0 / 41.0));\n    vec4 o2 = fract(k4 * (1.0 / 41.0));\n\n    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);\n    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);\n\n    return o4.y * d.y + o4.x * (1.0 - d.y);\n}\n\nfloat snoise3(vec3 v){ \n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //  x0 = x0 - 0. + 0.0 * C \n  vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n  vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n  vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n\n// Permutations\n  i = mod(i, 289.0 ); \n  vec4 p = permute( permute( permute( \n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients\n// ( N*N points uniformly over a square, mapped onto an octahedron.)\n  float n_ = 1.0/7.0; // N=7\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), \n                                dot(p2,x2), dot(p3,x3) ) );\n}\n\n\nmat2 rotate2d(float angle){\n    return mat2(cos(angle),-sin(angle),\n                sin(angle),cos(angle));\n}\n\nfloat lines(in vec2 pos, float b){\n    float scale = 10.0;\n    pos *= scale;\n    return smoothstep(0.0,\n                    .5+b*.5,\n                    abs((sin(pos.x*3.1415)+b*2.0))*.5);\n}\n\n\nfloat circle(in vec2 _st, in float _radius, in float blurriness){\n    vec2 dist = _st;\n\t  return 1. - smoothstep(_radius-(_radius*blurriness), _radius+(_radius*blurriness), dot(dist,dist)*4.0);\n}\n\nfloat dist(vec2 p0, vec2 pf){return sqrt((pf.x-p0.x)*(pf.x-p0.x)+(pf.y-p0.y)*(pf.y-p0.y));}\n\nvoid main() {\n    vec2 resolution = u_res * PR;\n    vec3 uv = vUv.xyz;\n\n\n    float progress = uBgProgress;\n  \n    // base\n    float baseNoise = noise(uBaseFrequency * uv + uTime);\n    vec2 basePos = rotate2d( baseNoise ) * uv.xy * uZoom;\n    float basePattern = basePos.x;\n    basePattern = lines(basePos,.5);\n\n\n    vec2 st = gl_FragCoord.xy / resolution.xy - vec2(.5);\n    st.y *= resolution.y / resolution.x;\n    float c = circle(st, .2 + progress * 10.0, 2.);\n    float offX = uv.x + sin(uv.y + uTime * 2.);\n    float offY = uv.y - uTime * .2 - cos(uTime * 2.) * 0.1;\n\n    float nc = (snoise3(vec3(offX, offY, uTime * 5.) * 2.)) * .03;\n    float d = dist(resolution.xy*0.5,gl_FragCoord.xy)*(1.0-progress)*0.003;\n\n    vec2 accentPos = rotate2d( baseNoise ) * uv.xy * uZoom;\n    float accentPattern = accentPos.x;\n    accentPattern = lines(accentPos,.1);\n\n    vec3 baseMix = mix(uBaseFirstColor, uBaseSecondColor, basePattern);\n    vec3 accentMix = mix(baseMix, uAccentColor, accentPattern - (1. - uAccentOpacity));\n    \n    float finalMask = smoothstep(1., 1., pow(c, 6.) * 10. + nc * (1. - progress)); \n    vec4 finalImage = mix(vec4(finalMask), vec4(accentMix, 1.0), clamp((finalMask + progress), 0., 1.)) * (1.0 - d);\n\n    gl_FragColor = vec4(vec3(finalImage), uOpacityBackground);\n}",
                                side: l.a,
                                transparent: !0,
                                defines: {
                                    PI: Math.PI,
                                    PR: window.devicePixelRatio.toFixed(1)
                                }
                            }), this.mesh = new l.j(this.geometry, this.material), this.mesh.scale.y = this.fovY, this.mesh.scale.z = this.fovY, this.mesh.scale.x = this.fovY, this.mesh.lookAt(d.default.camera.position), d.default.scene.add(this.mesh)
                        }
                    }, {
                        key: "preShow",
                        value: function() {
                            var t = f.b.timeline({
                                paused: !0
                            });
                            t.fromTo(this, {
                                opacityBackground: 0
                            }, {
                                opacityBackground: .8,
                                ease: c.a.easeInOut,
                                duration: 2
                            }, 0), t.fromTo(this, {
                                bgProgress: 0
                            }, {
                                bgProgress: .25,
                                ease: c.a.easeInOut,
                                duration: 2
                            }, 0), t.play()
                        }
                    }, {
                        key: "show",
                        value: function() {
                            var t = f.b.timeline({
                                paused: !0
                            });
                            t.fromTo(this, {
                                bgProgress: .25
                            }, {
                                bgProgress: 1,
                                ease: c.a.easeInOut,
                                duration: 2
                            }, 0), t.from(this, {
                                speed: 100
                            }, {
                                speed: 30,
                                ease: c.a.easeInOut,
                                duration: 2
                            }, 0), t.play()
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            this.uniforms.u_res.value.set(window.innerWidth, window.innerHeight)
                        }
                    }, {
                        key: "update",
                        value: function() {
                            this.material.uniforms.uTime.value += 7e-5 * this.speed, this.mesh.scale.x = Math.abs(this.fovY * d.default.camera.aspect), this.mesh.scale.y = Math.abs(this.fovY), this.uniforms.uAccentFrequency.value = this.accentFrequency, this.uniforms.uNoiseIntensity.value = this.noiseIntensity, this.uniforms.uOpacityBackground.value = this.opacityBackground, this.uniforms.uBgProgress.value = this.bgProgress
                        }
                    }]), t
                }()
        },
        269: function(t, e, o) {
            "use strict";
            o.r(e);
            var n = o(250),
                r = o(41),
                l = {
                    name: "LensScene",
                    data: function() {
                        return {
                            canvasW: null,
                            canvasH: null,
                            mouse: {
                                x: 0,
                                y: 0
                            }
                        }
                    },
                    destroyed: function() {
                        this.detach(), clearTimeout(this.timer)
                    },
                    mounted: function() {
                        var t = this;
                        this.$nextTick((function() {
                            t.artworkGL || (t.artworkGL = new n.default({
                                $canvas: t.$refs.canvas,
                                mouse: t.mouse,
                                $nuxt: t.$nuxt
                            })), t.canvasW = t.$el.getBoundingClientRect().width, t.canvasH = t.$el.getBoundingClientRect().height, t.attach()
                        }))
                    },
                    beforeDestroy: function() {},
                    methods: {
                        onMove: function(t) {
                            this.mouse.x = 2 * (t.clientX / this.canvasW - .5), this.mouse.y = 2 * (t.clientY / this.canvasH - .5)
                        },
                        attach: function() {
                            r.a.device.touch || this.$el.addEventListener("mousemove", this.onMove)
                        },
                        detach: function() {
                            this.artworkGL.detach(), r.a.device.touch || this.$el.removeEventListener("mousemove", this.onMove)
                        }
                    }
                },
                f = (o(304), o(21)),
                component = Object(f.a)(l, (function() {
                    var t = this.$createElement;
                    return (this._self._c || t)("canvas", {
                        ref: "canvas",
                        attrs: {
                            id: "lens-artwork"
                        }
                    })
                }), [], !1, null, "b1521400", null);
            e.default = component.exports
        },
        270: function(t, e, o) {
            o(271), t.exports = o(272)
        },
        300: function(t, e, o) {
            "use strict";
            o(203)
        },
        301: function(t, e, o) {
            var n = o(53)(!1);
            n.push([t.i, '@font-face{font-family:"Roobert";font-style:normal;font-weight:300;src:url(/fonts/WOFF2/Roobert-Light.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Light.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:300;src:url(/fonts/WOFF2/Roobert-LightItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-LightItalic.woff) format("woff")}@font-face{font-family:"Raleway";font-style:normal;font-weight:300;src:url(/fonts/WOFF2/Raleway-Light.woff2) format("woff2"),url(/fonts/WOFF/Raleway-Light.woff) format("woff")}@font-face{font-family:"Raleway";font-style:italic;font-weight:300;src:url(/fonts/WOFF2/Raleway-LightItalic.woff2) format("woff2"),url(/fonts/WOFF/Raleway-LightItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:400;src:url(/fonts/WOFF2/Roobert-Regular.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Regular.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:400;src:url(/fonts/WOFF2/Roobert-RegularItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-RegularItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:500;src:url(/fonts/WOFF2/Roobert-Medium.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Medium.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:500;src:url(/fonts/WOFF2/Roobert-MediumItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-MediumItalic.woff) format("woff")}@font-face{font-family:"Raleway";font-style:normal;font-weight:500;src:url(/fonts/WOFF2/Raleway-Medium.woff2) format("woff2"),url(/fonts/WOFF/Raleway-Medium.woff) format("woff")}@font-face{font-family:"Raleway";font-style:italic;font-weight:500;src:url(/fonts/WOFF2/Raleway-MediumItalic.woff2) format("woff2"),url(/fonts/WOFF/Raleway-MediumItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:700;src:url(/fonts/WOFF2/Roobert-SemiBold.woff2) format("woff2"),url(/fonts/WOFF/Roobert-SemiBold.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:700;src:url(/fonts/WOFF2/Roobert-SemiBoldItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-SemiBoldItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:700;src:url(/fonts/WOFF2/Roobert-Bold.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Bold.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:700;src:url(/fonts/WOFF2/Roobert-BoldItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-BoldItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:900;src:url(/fonts/WOFF2/Roobert-Heavy.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Heavy.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:900;src:url(/fonts/WOFF2/Roobert-HeavyItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-HeavyItalic.woff) format("woff")}#error-page[data-v-0b60a704]{width:100vw;height:100vh;height:calc(var(--vh, 1vh)*100)}#error-page .container[data-v-0b60a704]{height:100%;width:100%}#error-page .container .canvas-container[data-v-0b60a704]{position:absolute;top:0;left:0;z-index:0}#error-page .container .canvas-container canvas[data-v-0b60a704]{width:100vw;height:100vh;height:calc(var(--vh, 1vh)*100)}#error-page .text-container[data-v-0b60a704]{position:absolute;top:50%;left:50%;transform:translate3d(-50%,-50%,0);text-align:center;width:80%}@media(min-width:1024px){#error-page .text-container[data-v-0b60a704]{width:57.29vw}}#error-page .text-container p[data-v-0b60a704]{font-weight:400;font-size:6.4vw;line-height:8.53vw}@media(min-width:1024px){#error-page .text-container p[data-v-0b60a704]{font-size:3.33vw;line-height:4.69vw}}#error-page .text-container p+a[data-v-0b60a704]{margin-top:13.33vw}@media(min-width:1024px){#error-page .text-container p+a[data-v-0b60a704]{margin-top:5.21vw}}#error-page .text-container p+a[data-v-0b60a704]:after{border:1px solid #fff;background:transparent}', ""]), t.exports = n
        },
        304: function(t, e, o) {
            "use strict";
            o(204)
        },
        305: function(t, e, o) {
            var n = o(53)(!1);
            n.push([t.i, '@font-face{font-family:"Roobert";font-style:normal;font-weight:300;src:url(/fonts/WOFF2/Roobert-Light.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Light.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:300;src:url(/fonts/WOFF2/Roobert-LightItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-LightItalic.woff) format("woff")}@font-face{font-family:"Raleway";font-style:normal;font-weight:300;src:url(/fonts/WOFF2/Raleway-Light.woff2) format("woff2"),url(/fonts/WOFF/Raleway-Light.woff) format("woff")}@font-face{font-family:"Raleway";font-style:italic;font-weight:300;src:url(/fonts/WOFF2/Raleway-LightItalic.woff2) format("woff2"),url(/fonts/WOFF/Raleway-LightItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:400;src:url(/fonts/WOFF2/Roobert-Regular.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Regular.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:400;src:url(/fonts/WOFF2/Roobert-RegularItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-RegularItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:500;src:url(/fonts/WOFF2/Roobert-Medium.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Medium.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:500;src:url(/fonts/WOFF2/Roobert-MediumItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-MediumItalic.woff) format("woff")}@font-face{font-family:"Raleway";font-style:normal;font-weight:500;src:url(/fonts/WOFF2/Raleway-Medium.woff2) format("woff2"),url(/fonts/WOFF/Raleway-Medium.woff) format("woff")}@font-face{font-family:"Raleway";font-style:italic;font-weight:500;src:url(/fonts/WOFF2/Raleway-MediumItalic.woff2) format("woff2"),url(/fonts/WOFF/Raleway-MediumItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:700;src:url(/fonts/WOFF2/Roobert-SemiBold.woff2) format("woff2"),url(/fonts/WOFF/Roobert-SemiBold.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:700;src:url(/fonts/WOFF2/Roobert-SemiBoldItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-SemiBoldItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:700;src:url(/fonts/WOFF2/Roobert-Bold.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Bold.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:700;src:url(/fonts/WOFF2/Roobert-BoldItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-BoldItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:900;src:url(/fonts/WOFF2/Roobert-Heavy.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Heavy.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:900;src:url(/fonts/WOFF2/Roobert-HeavyItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-HeavyItalic.woff) format("woff")}#lens-scene[data-v-b1521400]{background:red}', ""]), t.exports = n
        },
        306: function(t, e, o) {
            var content = o(307);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(54).default)("1c9e4838", content, !0, {
                sourceMap: !1
            })
        },
        307: function(t, e, o) {
            var n = o(53),
                r = o(205),
                l = o(308),
                f = o(309),
                c = o(124),
                d = n(!1),
                m = r(l),
                h = r(f),
                w = r(c);
            d.push([t.i, '/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */*,:after,:before{box-sizing:border-box}html{-moz-tab-size:4;-o-tab-size:4;tab-size:4;line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,"Segoe UI",Helvetica,Arial,"Apple Color Emoji","Segoe UI Emoji"}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,"Liberation Mono",Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}@font-face{font-family:"Roobert";font-style:normal;font-weight:300;src:url(/fonts/WOFF2/Roobert-Light.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Light.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:300;src:url(/fonts/WOFF2/Roobert-LightItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-LightItalic.woff) format("woff")}@font-face{font-family:"Raleway";font-style:normal;font-weight:300;src:url(/fonts/WOFF2/Raleway-Light.woff2) format("woff2"),url(/fonts/WOFF/Raleway-Light.woff) format("woff")}@font-face{font-family:"Raleway";font-style:italic;font-weight:300;src:url(/fonts/WOFF2/Raleway-LightItalic.woff2) format("woff2"),url(/fonts/WOFF/Raleway-LightItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:400;src:url(/fonts/WOFF2/Roobert-Regular.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Regular.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:400;src:url(/fonts/WOFF2/Roobert-RegularItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-RegularItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:500;src:url(/fonts/WOFF2/Roobert-Medium.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Medium.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:500;src:url(/fonts/WOFF2/Roobert-MediumItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-MediumItalic.woff) format("woff")}@font-face{font-family:"Raleway";font-style:normal;font-weight:500;src:url(/fonts/WOFF2/Raleway-Medium.woff2) format("woff2"),url(/fonts/WOFF/Raleway-Medium.woff) format("woff")}@font-face{font-family:"Raleway";font-style:italic;font-weight:500;src:url(/fonts/WOFF2/Raleway-MediumItalic.woff2) format("woff2"),url(/fonts/WOFF/Raleway-MediumItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:700;src:url(/fonts/WOFF2/Roobert-SemiBold.woff2) format("woff2"),url(/fonts/WOFF/Roobert-SemiBold.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:700;src:url(/fonts/WOFF2/Roobert-SemiBoldItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-SemiBoldItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:700;src:url(/fonts/WOFF2/Roobert-Bold.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Bold.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:700;src:url(/fonts/WOFF2/Roobert-BoldItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-BoldItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:900;src:url(/fonts/WOFF2/Roobert-Heavy.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Heavy.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:900;src:url(/fonts/WOFF2/Roobert-HeavyItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-HeavyItalic.woff) format("woff")}a{color:#fff;text-decoration:none}a.button--link{position:relative;display:inline-block;padding:6.4vw 13.33vw;font-size:3.73vw;line-height:4.53vw}@media(min-width:1024px){a.button--link{font-size:.83vw;line-height:.99vw;padding:1.35vw 2.76vw}}a.button--link:before{transition:transform .5s cubic-bezier(.19,1,.22,1)}@media(min-width:1024px){a.button--link:before{content:url(' + m + ');display:inline-block;height:.52vw;width:.52vw;margin-right:1.09vw}}a.button--link:after{content:"";position:absolute;top:0;left:0;height:100%;width:100%;background:linear-gradient(270deg,rgba(131,235,149,.6) -2.78%,rgba(255,179,64,.6) 99.99%,#ff8469);opacity:.5;transition:transform .5s cubic-bezier(.19,1,.22,1),opacity .5s cubic-bezier(.19,1,.22,1);border-radius:26.67vw}@media(min-width:1024px){a.button--link:after{border-radius:5.21vw}}a.button--link:hover:after{opacity:1;transform:scale(1.1)}a.button--link:hover:before{transform:translateX(20%)}a.button--arrow{display:inline-block;vertical-align:middle;font-weight:300;transition:color .5s cubic-bezier(.19,1,.22,1),background .5s cubic-bezier(.19,1,.22,1);border:1px solid hsla(0,0%,100%,.3);border-radius:26.67vw;font-size:4.27vw;line-height:5.6vw;padding:4.53vw 9.6vw}@media(min-width:1024px){a.button--arrow{border-radius:5.21vw;font-size:.83vw;line-height:1.09vw;padding:.89vw 1.88vw}}a.button--arrow svg{display:inline-block;vertical-align:middle;transition:transform .5s cubic-bezier(.19,1,.22,1);height:2.67vw;width:2.67vw;margin-right:5.6vw}@media(min-width:1024px){a.button--arrow svg{height:.52vw;width:.52vw;margin-right:1.09vw}}a.button--arrow svg path{transition:fill .5s cubic-bezier(.19,1,.22,1);fill:#fff}a.button--arrow:hover{color:#000;background:#fff}a.button--arrow:hover svg{transform:translate3d(50%,0,0)}a.button--arrow:hover svg path{fill:#000}a.black{color:#000;opacity:1}a.black.text-link{font-size:4.27vw;line-height:5.87vw}@media(min-width:1024px){a.black.text-link{font-size:.83vw;line-height:1.15vw}}a.black.text-link svg{display:inline-block;vertical-align:middle;transition:transform .8s cubic-bezier(.19,1,.22,1);width:2.67vw;height:2.67vw;margin-right:3.2vw}@media(min-width:1024px){a.black.text-link svg{width:.52vw;height:.52vw;margin-right:.63vw}}a.black.text-link:before{display:none}a.black.text-link span{display:inline-block;vertical-align:middle}.notouch a.black.text-link:hover svg{transform:translateZ(0)}a.button-locked{display:inline-block;vertical-align:middle;background:#1c1c1c;padding:6.4vw 16vw 7.73vw;border-radius:26.67vw}@media(min-width:1024px){a.button-locked{padding:1.25vw 3.65vw 1.51vw;border-radius:5.21vw}}a.button-locked:after{content:url(' + h + ");display:inline-block;vertical-align:middle;height:auto;width:2.93vw;margin-left:6.93vw}@media(min-width:1024px){a.button-locked:after{width:.57vw;margin-left:1.35vw}}ul{list-style:none;margin:0;padding:0}ul li a{opacity:.4;transition:color 1.25s cubic-bezier(.19,1,.22,1),opacity .4s linear,transform .8s cubic-bezier(.19,1,.22,1)}@media(min-width:1024px){ul li a:before{opacity:0;content:url(" + m + ");display:inline-block;transform:translateX(-100%);transition:opacity .4s linear,transform .8s cubic-bezier(.19,1,.22,1);height:.52vw;width:.52vw;margin-right:.47vw}}.notouch ul li:hover a,ul li.active a{opacity:1}ul li.active a:before{transform:translateX(0);opacity:1}button{border:none}h1,h2,h3,h4,h5{padding:0;margin:0}div,p,span{margin:0}section>.title{font-weight:600;display:inline-block;vertical-align:bottom;font-size:3.73vw;line-height:4.53vw}@media(min-width:1024px){section>.title{font-size:.73vw;line-height:.89vw}}section>.title.rotated:before{transform:rotate(45deg)}section>.title:before{content:url(" + m + ");display:inline-block;height:2.67vw;width:2.67vw;margin-right:6.4vw}@media(min-width:1024px){section>.title:before{height:.52vw;width:.52vw;margin-right:.99vw}}section>.title.black{color:#000}section>.title.black:before{content:url(" + w + ')}.play-cursor{display:flex;position:relative;border-radius:50%;pointer-events:none;z-index:9999;justify-content:center;align-items:center;transform-origin:center center;transition:background .3s linear,opacity .3s linear;background:#fff;color:#fff;opacity:.8;height:36.8vw;width:36.8vw}@media(min-width:1024px){.play-cursor{height:7.19vw;width:7.19vw}}.play-cursor span{display:block;color:#000;font-size:4.27vw;line-height:5.07vw}@media(min-width:1024px){.play-cursor span{font-size:.83vw;line-height:.99vw}}@media(min-width:1024px){.play-cursor img{width:1.25vw;height:1.25vw}}.wysiwyg p{font-size:4.27vw;line-height:7.73vw;margin-top:5.33vw}@media(min-width:1024px){.wysiwyg p{margin-top:1.04vw;font-size:1.04vw;line-height:1.72vw}}.wysiwyg p+p{margin-top:5.33vw}@media(min-width:1024px){.wysiwyg p+p{margin-top:1.04vw}}.wysiwyg p:first-child{margin-top:0}.wysiwyg ul{margin-top:5.33vw}@media(min-width:1024px){.wysiwyg ul{margin-top:1.04vw}}.wysiwyg ul li{font-size:4.27vw;line-height:8vw}@media(min-width:1024px){.wysiwyg ul li{font-size:.83vw;line-height:1.56vw}}.close{transition:transform .5s cubic-bezier(.19,1,.22,1);transform-origin:center center;background:transparent;position:relative;height:5.33vw;width:10.67vw}@media(min-width:1024px){.close{height:1.04vw;width:2.08vw}}.close:after,.close:before{position:absolute;content:"";background-color:#fff;height:4.8vw;width:.53vw;top:.27vw;left:5.33vw}@media(min-width:1024px){.close:after,.close:before{height:.94vw;width:.1vw;top:.05vw;left:1.04vw}}.close:before{transform:rotate(45deg)}.close:after{transform:rotate(-45deg)}@media(min-width:1024px){.notouch .close:hover{cursor:pointer;transform:rotate(90deg)}}\n\n/*! locomotive-scroll v4.1.1 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */html.has-scroll-smooth{overflow:hidden}html.has-scroll-dragging{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.has-scroll-smooth body{overflow:hidden}.has-scroll-smooth [data-scroll-container]{min-height:100vh}[data-scroll-direction=horizontal] [data-scroll-container]{height:100vh;display:inline-block;white-space:nowrap}[data-scroll-direction=horizontal] [data-scroll-section]{display:inline-block;vertical-align:top;white-space:nowrap;height:100%}.c-scrollbar{position:absolute;right:0;top:0;width:11px;height:100%;transform-origin:center right;transition:transform .3s,opacity .3s;opacity:0}.c-scrollbar:hover{transform:scaleX(1.45)}.c-scrollbar:hover,.has-scroll-dragging .c-scrollbar,.has-scroll-scrolling .c-scrollbar{opacity:1}[data-scroll-direction=horizontal] .c-scrollbar{width:100%;height:10px;top:auto;bottom:0;transform:scaleY(1)}[data-scroll-direction=horizontal] .c-scrollbar:hover{transform:scaleY(1.3)}.c-scrollbar_thumb{position:absolute;top:0;right:0;background-color:#000;opacity:.5;width:7px;border-radius:10px;margin:2px;cursor:-webkit-grab;cursor:grab}.has-scroll-dragging .c-scrollbar_thumb{cursor:-webkit-grabbing;cursor:grabbing}[data-scroll-direction=horizontal] .c-scrollbar_thumb{right:auto;bottom:0}.container{margin:auto;padding:0 6.67vw}@media(min-width:768px){.container{padding:0 5.21vw}}@media(min-width:1024px){.container{padding:0 3.33vw;max-width:74.84vw}}.container.no-margin,.container.no-margin.mb{padding-left:0;padding-right:0}@media(min-width:1024px){.container.no-margin.mb{padding:0 3.33vw}}.container.no-margin.lg{padding:0 6.4vw}@media(min-width:1024px){.container.no-margin.lg{padding:0}}.grid{display:flex;flex-direction:column;flex-flow:row wrap}.grid>[class*=column-]{display:block}.first{order:-1}.last{order:12}.right{text-align:right}.left{text-align:left}.center{text-align:center}.align-top{align-items:start}.align-center{align-items:center}.align-bottom{align-items:end}.column-xs-1{flex-basis:8.3333333333%;max-width:8.3333333333%}.column-xs-2{flex-basis:16.6666666667%;max-width:16.6666666667%}.column-xs-3{flex-basis:25%;max-width:25%}.column-xs-4{flex-basis:33.3333333333%;max-width:33.3333333333%}.column-xs-5{flex-basis:41.6666666667%;max-width:41.6666666667%}.column-xs-6{flex-basis:50%;max-width:50%}.column-xs-7{flex-basis:58.3333333333%;max-width:58.3333333333%}.column-xs-8{flex-basis:66.6666666667%;max-width:66.6666666667%}.column-xs-9{flex-basis:75%;max-width:75%}.column-xs-10{flex-basis:83.3333333333%;max-width:83.3333333333%}.column-xs-11{flex-basis:91.6666666667%;max-width:91.6666666667%}.column-xs-12{flex-basis:100%;max-width:100%}@media(min-width:425px){.column-sm-1{flex-basis:8.3333333333%;max-width:8.3333333333%}.column-sm-2{flex-basis:16.6666666667%;max-width:16.6666666667%}.column-sm-3{flex-basis:25%;max-width:25%}.column-sm-4{flex-basis:33.3333333333%;max-width:33.3333333333%}.column-sm-5{flex-basis:41.6666666667%;max-width:41.6666666667%}.column-sm-6{flex-basis:50%;max-width:50%}.column-sm-7{flex-basis:58.3333333333%;max-width:58.3333333333%}.column-sm-8{flex-basis:66.6666666667%;max-width:66.6666666667%}.column-sm-9{flex-basis:75%;max-width:75%}.column-sm-10{flex-basis:83.3333333333%;max-width:83.3333333333%}.column-sm-11{flex-basis:91.6666666667%;max-width:91.6666666667%}.column-sm-12{flex-basis:100%;max-width:100%}}@media(min-width:0){.column-md-1{flex-basis:8.3333333333%;max-width:8.3333333333%}.column-md-2{flex-basis:16.6666666667%;max-width:16.6666666667%}.column-md-3{flex-basis:25%;max-width:25%}.column-md-4{flex-basis:33.3333333333%;max-width:33.3333333333%}.column-md-5{flex-basis:41.6666666667%;max-width:41.6666666667%}.column-md-6{flex-basis:50%;max-width:50%}.column-md-7{flex-basis:58.3333333333%;max-width:58.3333333333%}.column-md-8{flex-basis:66.6666666667%;max-width:66.6666666667%}.column-md-9{flex-basis:75%;max-width:75%}.column-md-10{flex-basis:83.3333333333%;max-width:83.3333333333%}.column-md-11{flex-basis:91.6666666667%;max-width:91.6666666667%}.column-md-12{flex-basis:100%;max-width:100%}}@media(min-width:768px){.column-md-1{flex-basis:8.3333333333%;max-width:8.3333333333%}.column-md-2{flex-basis:16.6666666667%;max-width:16.6666666667%}.column-md-3{flex-basis:25%;max-width:25%}.column-md-4{flex-basis:33.3333333333%;max-width:33.3333333333%}.column-md-5{flex-basis:41.6666666667%;max-width:41.6666666667%}.column-md-6{flex-basis:50%;max-width:50%}.column-md-7{flex-basis:58.3333333333%;max-width:58.3333333333%}.column-md-8{flex-basis:66.6666666667%;max-width:66.6666666667%}.column-md-9{flex-basis:75%;max-width:75%}.column-md-10{flex-basis:83.3333333333%;max-width:83.3333333333%}.column-md-11{flex-basis:91.6666666667%;max-width:91.6666666667%}.column-md-12{flex-basis:100%;max-width:100%}}@media(min-width:1024px){.column-lg-1{flex-basis:8.3333333333%;max-width:8.3333333333%}.column-lg-2{flex-basis:16.6666666667%;max-width:16.6666666667%}.column-lg-3{flex-basis:25%;max-width:25%}.column-lg-4{flex-basis:33.3333333333%;max-width:33.3333333333%}.column-lg-5{flex-basis:41.6666666667%;max-width:41.6666666667%}.column-lg-6{flex-basis:50%;max-width:50%}.column-lg-7{flex-basis:58.3333333333%;max-width:58.3333333333%}.column-lg-8{flex-basis:66.6666666667%;max-width:66.6666666667%}.column-lg-9{flex-basis:75%;max-width:75%}.column-lg-10{flex-basis:83.3333333333%;max-width:83.3333333333%}.column-lg-11{flex-basis:91.6666666667%;max-width:91.6666666667%}.column-lg-12{flex-basis:100%;max-width:100%}}@media(min-width:1280px){.column-lg-1{flex-basis:8.3333333333%;max-width:8.3333333333%}.column-lg-2{flex-basis:16.6666666667%;max-width:16.6666666667%}.column-lg-3{flex-basis:25%;max-width:25%}.column-lg-4{flex-basis:33.3333333333%;max-width:33.3333333333%}.column-lg-5{flex-basis:41.6666666667%;max-width:41.6666666667%}.column-lg-6{flex-basis:50%;max-width:50%}.column-lg-7{flex-basis:58.3333333333%;max-width:58.3333333333%}.column-lg-8{flex-basis:66.6666666667%;max-width:66.6666666667%}.column-lg-9{flex-basis:75%;max-width:75%}.column-lg-10{flex-basis:83.3333333333%;max-width:83.3333333333%}.column-lg-11{flex-basis:91.6666666667%;max-width:91.6666666667%}.column-lg-12{flex-basis:100%;max-width:100%}}@supports(display:grid){.grid{display:grid;grid-template-columns:repeat(12,1fr);grid-template-rows:auto}.grid>[class*=column-]{margin:0;max-width:100%}.column-xs-1{grid-column-start:span 1;grid-column-end:span 1}.column-xs-2{grid-column-start:span 2;grid-column-end:span 2}.column-xs-3{grid-column-start:span 3;grid-column-end:span 3}.column-xs-4{grid-column-start:span 4;grid-column-end:span 4}.column-xs-5{grid-column-start:span 5;grid-column-end:span 5}.column-xs-6{grid-column-start:span 6;grid-column-end:span 6}.column-xs-7{grid-column-start:span 7;grid-column-end:span 7}.column-xs-8{grid-column-start:span 8;grid-column-end:span 8}.column-xs-9{grid-column-start:span 9;grid-column-end:span 9}.column-xs-10{grid-column-start:span 10;grid-column-end:span 10}.column-xs-11{grid-column-start:span 11;grid-column-end:span 11}.column-xs-12{grid-column-start:span 12;grid-column-end:span 12}@media(min-width:425px){.column-sm-1{grid-column-start:span 1;grid-column-end:span 1}.column-sm-2{grid-column-start:span 2;grid-column-end:span 2}.column-sm-3{grid-column-start:span 3;grid-column-end:span 3}.column-sm-4{grid-column-start:span 4;grid-column-end:span 4}.column-sm-5{grid-column-start:span 5;grid-column-end:span 5}.column-sm-6{grid-column-start:span 6;grid-column-end:span 6}.column-sm-7{grid-column-start:span 7;grid-column-end:span 7}.column-sm-8{grid-column-start:span 8;grid-column-end:span 8}.column-sm-9{grid-column-start:span 9;grid-column-end:span 9}.column-sm-10{grid-column-start:span 10;grid-column-end:span 10}.column-sm-11{grid-column-start:span 11;grid-column-end:span 11}.column-sm-12{grid-column-start:span 12;grid-column-end:span 12}}@media(min-width:768px){.column-md-1{grid-column-start:span 1;grid-column-end:span 1}.column-md-2{grid-column-start:span 2;grid-column-end:span 2}.column-md-3{grid-column-start:span 3;grid-column-end:span 3}.column-md-4{grid-column-start:span 4;grid-column-end:span 4}.column-md-5{grid-column-start:span 5;grid-column-end:span 5}.column-md-6{grid-column-start:span 6;grid-column-end:span 6}.column-md-7{grid-column-start:span 7;grid-column-end:span 7}.column-md-8{grid-column-start:span 8;grid-column-end:span 8}.column-md-9{grid-column-start:span 9;grid-column-end:span 9}.column-md-10{grid-column-start:span 10;grid-column-end:span 10}.column-md-11{grid-column-start:span 11;grid-column-end:span 11}.column-md-12{grid-column-start:span 12;grid-column-end:span 12}}@media(min-width:1024px){.column-lg-1{grid-column-start:span 1;grid-column-end:span 1}.column-lg-2{grid-column-start:span 2;grid-column-end:span 2}.column-lg-3{grid-column-start:span 3;grid-column-end:span 3}.column-lg-4{grid-column-start:span 4;grid-column-end:span 4}.column-lg-5{grid-column-start:span 5;grid-column-end:span 5}.column-lg-6{grid-column-start:span 6;grid-column-end:span 6}.column-lg-7{grid-column-start:span 7;grid-column-end:span 7}.column-lg-8{grid-column-start:span 8;grid-column-end:span 8}.column-lg-9{grid-column-start:span 9;grid-column-end:span 9}.column-lg-10{grid-column-start:span 10;grid-column-end:span 10}.column-lg-11{grid-column-start:span 11;grid-column-end:span 11}.column-lg-12{grid-column-start:span 12;grid-column-end:span 12}}@media(min-width:1280px){.column-lg-1{grid-column-start:span 1;grid-column-end:span 1}.column-lg-2{grid-column-start:span 2;grid-column-end:span 2}.column-lg-3{grid-column-start:span 3;grid-column-end:span 3}.column-lg-4{grid-column-start:span 4;grid-column-end:span 4}.column-lg-5{grid-column-start:span 5;grid-column-end:span 5}.column-lg-6{grid-column-start:span 6;grid-column-end:span 6}.column-lg-7{grid-column-start:span 7;grid-column-end:span 7}.column-lg-8{grid-column-start:span 8;grid-column-end:span 8}.column-lg-9{grid-column-start:span 9;grid-column-end:span 9}.column-lg-10{grid-column-start:span 10;grid-column-end:span 10}.column-lg-11{grid-column-start:span 11;grid-column-end:span 11}.column-lg-12{grid-column-start:span 12;grid-column-end:span 12}}}@-webkit-keyframes rotating{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}@-webkit-keyframes blinker{0%{opacity:1}to{opacity:0}}@-webkit-keyframes wave-animation{0%{transform:rotate(0deg)}10%{transform:rotate(14deg)}20%{transform:rotate(-8deg)}30%{transform:rotate(14deg)}40%{transform:rotate(-4deg)}50%{transform:rotate(10deg)}60%{transform:rotate(0deg)}to{transform:rotate(0deg)}}.rotating{-webkit-animation:rotating 10s linear infinite}.waving{-webkit-animation-name:wave-animation;animation-name:wave-animation;-webkit-animation-duration:2.5s;animation-duration:2.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;transform-origin:70% 70%;display:inline-block}.blink{text-decoration:blink;-webkit-animation-name:blinker;-webkit-animation-duration:.6s;-webkit-animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in-out;-webkit-animation-direction:alternate}', ""]), t.exports = d
        },
        308: function(t, e, o) {
            t.exports = o.p + "86a693c621114a7f091db1002c2f4069.svg"
        },
        309: function(t, e, o) {
            t.exports = o.p + "1623dbc913b7e18c67265bcbb2030495.svg"
        },
        320: function(t, e, o) {
            "use strict";
            o(222)
        },
        321: function(t, e, o) {
            var n = o(53)(!1);
            n.push([t.i, '@font-face{font-family:"Roobert";font-style:normal;font-weight:300;src:url(/fonts/WOFF2/Roobert-Light.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Light.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:300;src:url(/fonts/WOFF2/Roobert-LightItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-LightItalic.woff) format("woff")}@font-face{font-family:"Raleway";font-style:normal;font-weight:300;src:url(/fonts/WOFF2/Raleway-Light.woff2) format("woff2"),url(/fonts/WOFF/Raleway-Light.woff) format("woff")}@font-face{font-family:"Raleway";font-style:italic;font-weight:300;src:url(/fonts/WOFF2/Raleway-LightItalic.woff2) format("woff2"),url(/fonts/WOFF/Raleway-LightItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:400;src:url(/fonts/WOFF2/Roobert-Regular.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Regular.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:400;src:url(/fonts/WOFF2/Roobert-RegularItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-RegularItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:500;src:url(/fonts/WOFF2/Roobert-Medium.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Medium.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:500;src:url(/fonts/WOFF2/Roobert-MediumItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-MediumItalic.woff) format("woff")}@font-face{font-family:"Raleway";font-style:normal;font-weight:500;src:url(/fonts/WOFF2/Raleway-Medium.woff2) format("woff2"),url(/fonts/WOFF/Raleway-Medium.woff) format("woff")}@font-face{font-family:"Raleway";font-style:italic;font-weight:500;src:url(/fonts/WOFF2/Raleway-MediumItalic.woff2) format("woff2"),url(/fonts/WOFF/Raleway-MediumItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:700;src:url(/fonts/WOFF2/Roobert-SemiBold.woff2) format("woff2"),url(/fonts/WOFF/Roobert-SemiBold.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:700;src:url(/fonts/WOFF2/Roobert-SemiBoldItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-SemiBoldItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:700;src:url(/fonts/WOFF2/Roobert-Bold.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Bold.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:700;src:url(/fonts/WOFF2/Roobert-BoldItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-BoldItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:900;src:url(/fonts/WOFF2/Roobert-Heavy.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Heavy.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:900;src:url(/fonts/WOFF2/Roobert-HeavyItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-HeavyItalic.woff) format("woff")}html{color:#fff;font-family:"Roobert";font-weight:400}#app{background:#000;transition:background 1.25s cubic-bezier(.19,1,.22,1)}#app.white-bg{background:#fff}#app .app-content{height:100vh;height:calc(var(--vh, 1vh)*100);overflow:hidden;will-change:transform}', ""]), t.exports = n
        },
        322: function(t, e, o) {
            t.exports = o.p + "img/loader-light.ece08d7.png"
        },
        324: function(t, e, o) {
            "use strict";
            o(223)
        },
        325: function(t, e, o) {
            var n = o(53)(!1);
            n.push([t.i, '@font-face{font-family:"Roobert";font-style:normal;font-weight:300;src:url(/fonts/WOFF2/Roobert-Light.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Light.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:300;src:url(/fonts/WOFF2/Roobert-LightItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-LightItalic.woff) format("woff")}@font-face{font-family:"Raleway";font-style:normal;font-weight:300;src:url(/fonts/WOFF2/Raleway-Light.woff2) format("woff2"),url(/fonts/WOFF/Raleway-Light.woff) format("woff")}@font-face{font-family:"Raleway";font-style:italic;font-weight:300;src:url(/fonts/WOFF2/Raleway-LightItalic.woff2) format("woff2"),url(/fonts/WOFF/Raleway-LightItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:400;src:url(/fonts/WOFF2/Roobert-Regular.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Regular.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:400;src:url(/fonts/WOFF2/Roobert-RegularItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-RegularItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:500;src:url(/fonts/WOFF2/Roobert-Medium.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Medium.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:500;src:url(/fonts/WOFF2/Roobert-MediumItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-MediumItalic.woff) format("woff")}@font-face{font-family:"Raleway";font-style:normal;font-weight:500;src:url(/fonts/WOFF2/Raleway-Medium.woff2) format("woff2"),url(/fonts/WOFF/Raleway-Medium.woff) format("woff")}@font-face{font-family:"Raleway";font-style:italic;font-weight:500;src:url(/fonts/WOFF2/Raleway-MediumItalic.woff2) format("woff2"),url(/fonts/WOFF/Raleway-MediumItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:700;src:url(/fonts/WOFF2/Roobert-SemiBold.woff2) format("woff2"),url(/fonts/WOFF/Roobert-SemiBold.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:700;src:url(/fonts/WOFF2/Roobert-SemiBoldItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-SemiBoldItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:700;src:url(/fonts/WOFF2/Roobert-Bold.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Bold.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:700;src:url(/fonts/WOFF2/Roobert-BoldItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-BoldItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:900;src:url(/fonts/WOFF2/Roobert-Heavy.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Heavy.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:900;src:url(/fonts/WOFF2/Roobert-HeavyItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-HeavyItalic.woff) format("woff")}#loader[data-v-84419ef8]{font-family:"Roobert";position:fixed;top:0;left:0;width:100vw;height:100vh;height:calc(var(--vh, 1vh)*100);z-index:10000;pointer-events:none;display:flex;overflow:hidden;justify-content:center;align-items:center}#loader .container[data-v-84419ef8]{position:relative;z-index:10001;width:100%;text-align:center;font-size:7.47vw;line-height:11.73vw}@media(min-width:1024px){#loader .container[data-v-84419ef8]{font-size:2.71vw;line-height:3.23vw}}#loader .container .logo-display[data-v-84419ef8]{display:block;position:relative;opacity:0;transition:opacity .5s cubic-bezier(.19,1,.22,1)}#loader .container .logo-display .logo[data-v-84419ef8]{position:relative;z-index:10}#loader .container .logo-display .logo svg[data-v-84419ef8]{height:auto;width:40vw}@media(min-width:1024px){#loader .container .logo-display .logo svg[data-v-84419ef8]{width:10.42vw}}#loader .container .logo-display .bg-light[data-v-84419ef8]{position:absolute;top:50%;left:50%;transform:translate3d(-50%,-45%,0);z-index:-1}#loader .container .logo-display .bg-light img[data-v-84419ef8]{width:40vw}@media(min-width:1024px){#loader .container .logo-display .bg-light img[data-v-84419ef8]{width:10.42vw}}#loader .text-display[data-v-84419ef8]{position:absolute;top:50%;left:50%;transform:translate3d(-50%,-50%,0);display:inline-block;width:100%;text-align:center}@media(min-width:1024px){#loader .text-display[data-v-84419ef8]{transform:translate3d(-50%,30%,0);position:relative}}#loader .text-display span[data-v-84419ef8]{display:inline-block;opacity:0;transform:translate3d(0,100%,0)}#loader .text-display span+span[data-v-84419ef8]{margin-left:1.33vw}@media(min-width:1024px){#loader .text-display span+span[data-v-84419ef8]{margin-left:.52vw}}#loader .bg[data-v-84419ef8]{position:absolute;top:0;height:100%;width:100%;left:0;background:#000;opacity:0}', ""]), t.exports = n
        },
        326: function(t, e, o) {
            "use strict";
            o(224)
        },
        327: function(t, e, o) {
            var n = o(53)(!1);
            n.push([t.i, '@font-face{font-family:"Roobert";font-style:normal;font-weight:300;src:url(/fonts/WOFF2/Roobert-Light.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Light.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:300;src:url(/fonts/WOFF2/Roobert-LightItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-LightItalic.woff) format("woff")}@font-face{font-family:"Raleway";font-style:normal;font-weight:300;src:url(/fonts/WOFF2/Raleway-Light.woff2) format("woff2"),url(/fonts/WOFF/Raleway-Light.woff) format("woff")}@font-face{font-family:"Raleway";font-style:italic;font-weight:300;src:url(/fonts/WOFF2/Raleway-LightItalic.woff2) format("woff2"),url(/fonts/WOFF/Raleway-LightItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:400;src:url(/fonts/WOFF2/Roobert-Regular.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Regular.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:400;src:url(/fonts/WOFF2/Roobert-RegularItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-RegularItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:500;src:url(/fonts/WOFF2/Roobert-Medium.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Medium.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:500;src:url(/fonts/WOFF2/Roobert-MediumItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-MediumItalic.woff) format("woff")}@font-face{font-family:"Raleway";font-style:normal;font-weight:500;src:url(/fonts/WOFF2/Raleway-Medium.woff2) format("woff2"),url(/fonts/WOFF/Raleway-Medium.woff) format("woff")}@font-face{font-family:"Raleway";font-style:italic;font-weight:500;src:url(/fonts/WOFF2/Raleway-MediumItalic.woff2) format("woff2"),url(/fonts/WOFF/Raleway-MediumItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:700;src:url(/fonts/WOFF2/Roobert-SemiBold.woff2) format("woff2"),url(/fonts/WOFF/Roobert-SemiBold.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:700;src:url(/fonts/WOFF2/Roobert-SemiBoldItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-SemiBoldItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:700;src:url(/fonts/WOFF2/Roobert-Bold.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Bold.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:700;src:url(/fonts/WOFF2/Roobert-BoldItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-BoldItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:900;src:url(/fonts/WOFF2/Roobert-Heavy.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Heavy.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:900;src:url(/fonts/WOFF2/Roobert-HeavyItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-HeavyItalic.woff) format("woff")}.dot-cursor[data-v-02bb90e8]{display:none;overflow:hidden}.white-bg .dot-cursor[data-v-02bb90e8]{background:#000!important}@media(min-width:1024px){.notouch .dot-cursor[data-v-02bb90e8]{opacity:0;display:flex;justify-content:center;align-items:center;background:#fff;will-change:transform;position:absolute;top:50%;left:50%;transform:translate3d(-50%,-50%,0);z-index:999;border-radius:100%;width:10vw;height:10vw;transform:translate3d(-50%,-50%,0) scaleX(1);transform-origin:center;transition:background .6s cubic-bezier(.19,1,.22,1),opacity .6s linear;pointer-events:none}.white-bg .notouch .dot-cursor[data-v-02bb90e8]{background:#000}}.dot-cursor span[data-v-02bb90e8]{position:absolute;top:calc(50% - .415vw);left:50%;display:block;color:#000;opacity:0;transform:translateZ(0) scale3d(0,0,0);transform-origin:center;transition:transform .8s cubic-bezier(.19,1,.22,1);transition-delay:.15s;font-size:4.27vw;line-height:5.07vw}@media(min-width:1024px){.dot-cursor span[data-v-02bb90e8]{font-size:.83vw;line-height:.99vw}}@media(min-width:1024px){.dot-cursor img[data-v-02bb90e8]{transform:scale3d(0,0,0);transform-origin:center;transition:transform .8s cubic-bezier(.19,1,.22,1);transition-delay:.15s;width:1.77vw;height:1.77vw}}', ""]), t.exports = n
        },
        328: function(t, e, o) {
            "use strict";
            o(225)
        },
        329: function(t, e, o) {
            var n = o(53)(!1);
            n.push([t.i, '@font-face{font-family:"Roobert";font-style:normal;font-weight:300;src:url(/fonts/WOFF2/Roobert-Light.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Light.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:300;src:url(/fonts/WOFF2/Roobert-LightItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-LightItalic.woff) format("woff")}@font-face{font-family:"Raleway";font-style:normal;font-weight:300;src:url(/fonts/WOFF2/Raleway-Light.woff2) format("woff2"),url(/fonts/WOFF/Raleway-Light.woff) format("woff")}@font-face{font-family:"Raleway";font-style:italic;font-weight:300;src:url(/fonts/WOFF2/Raleway-LightItalic.woff2) format("woff2"),url(/fonts/WOFF/Raleway-LightItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:400;src:url(/fonts/WOFF2/Roobert-Regular.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Regular.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:400;src:url(/fonts/WOFF2/Roobert-RegularItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-RegularItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:500;src:url(/fonts/WOFF2/Roobert-Medium.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Medium.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:500;src:url(/fonts/WOFF2/Roobert-MediumItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-MediumItalic.woff) format("woff")}@font-face{font-family:"Raleway";font-style:normal;font-weight:500;src:url(/fonts/WOFF2/Raleway-Medium.woff2) format("woff2"),url(/fonts/WOFF/Raleway-Medium.woff) format("woff")}@font-face{font-family:"Raleway";font-style:italic;font-weight:500;src:url(/fonts/WOFF2/Raleway-MediumItalic.woff2) format("woff2"),url(/fonts/WOFF/Raleway-MediumItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:700;src:url(/fonts/WOFF2/Roobert-SemiBold.woff2) format("woff2"),url(/fonts/WOFF/Roobert-SemiBold.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:700;src:url(/fonts/WOFF2/Roobert-SemiBoldItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-SemiBoldItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:700;src:url(/fonts/WOFF2/Roobert-Bold.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Bold.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:700;src:url(/fonts/WOFF2/Roobert-BoldItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-BoldItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:900;src:url(/fonts/WOFF2/Roobert-Heavy.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Heavy.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:900;src:url(/fonts/WOFF2/Roobert-HeavyItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-HeavyItalic.woff) format("woff")}.overlay[data-v-913fc87a]{display:none;position:absolute;top:0;left:0;width:100vw;height:100vh;height:calc(var(--vh, 1vh)*100);z-index:3000;background:#000;transform:translate3d(0,100%,0)}', ""]), t.exports = n
        },
        330: function(t, e, o) {
            "use strict";
            o(226)
        },
        331: function(t, e, o) {
            var n = o(53)(!1);
            n.push([t.i, '@font-face{font-family:"Roobert";font-style:normal;font-weight:300;src:url(/fonts/WOFF2/Roobert-Light.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Light.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:300;src:url(/fonts/WOFF2/Roobert-LightItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-LightItalic.woff) format("woff")}@font-face{font-family:"Raleway";font-style:normal;font-weight:300;src:url(/fonts/WOFF2/Raleway-Light.woff2) format("woff2"),url(/fonts/WOFF/Raleway-Light.woff) format("woff")}@font-face{font-family:"Raleway";font-style:italic;font-weight:300;src:url(/fonts/WOFF2/Raleway-LightItalic.woff2) format("woff2"),url(/fonts/WOFF/Raleway-LightItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:400;src:url(/fonts/WOFF2/Roobert-Regular.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Regular.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:400;src:url(/fonts/WOFF2/Roobert-RegularItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-RegularItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:500;src:url(/fonts/WOFF2/Roobert-Medium.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Medium.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:500;src:url(/fonts/WOFF2/Roobert-MediumItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-MediumItalic.woff) format("woff")}@font-face{font-family:"Raleway";font-style:normal;font-weight:500;src:url(/fonts/WOFF2/Raleway-Medium.woff2) format("woff2"),url(/fonts/WOFF/Raleway-Medium.woff) format("woff")}@font-face{font-family:"Raleway";font-style:italic;font-weight:500;src:url(/fonts/WOFF2/Raleway-MediumItalic.woff2) format("woff2"),url(/fonts/WOFF/Raleway-MediumItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:700;src:url(/fonts/WOFF2/Roobert-SemiBold.woff2) format("woff2"),url(/fonts/WOFF/Roobert-SemiBold.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:700;src:url(/fonts/WOFF2/Roobert-SemiBoldItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-SemiBoldItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:700;src:url(/fonts/WOFF2/Roobert-Bold.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Bold.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:700;src:url(/fonts/WOFF2/Roobert-BoldItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-BoldItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:900;src:url(/fonts/WOFF2/Roobert-Heavy.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Heavy.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:900;src:url(/fonts/WOFF2/Roobert-HeavyItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-HeavyItalic.woff) format("woff")}.cookie-banner{position:fixed;background:rgba(3,3,3,.4);z-index:1000;width:100vw;color:#fff;display:none;align-items:center;bottom:0;right:0;padding:6.67vw}@media(min-width:1024px){.cookie-banner{width:auto;bottom:5.89vw;right:5.89vw;padding:2.08vw 1.56vw 2.08vw 2.6vw}}.cookie-banner .content{position:relative;display:inline-block;vertical-align:middle;font-weight:400;opacity:.6;width:50.67vw;font-size:3.2vw;line-height:4.27vw}@media(min-width:1024px){.cookie-banner .content{width:9.06vw;font-size:.63vw;line-height:.83vw}}.cookie-banner .content a{text-decoration:underline}.cookie-banner button{display:inline-block;vertical-align:middle;color:#fff;padding:0;font-size:3.2vw;line-height:3.73vw}@media(min-width:1024px){.cookie-banner button{font-size:.63vw;line-height:.83vw}}.cookie-banner button.cta{background:rgba(55,55,55,.78);transition:color .5s cubic-bezier(.19,1,.22,1),background .5s cubic-bezier(.19,1,.22,1);padding:4vw 12vw;border-radius:26.67vw;margin-left:1.33vw;margin-right:2.67vw}@media(min-width:1024px){.cookie-banner button.cta{padding:.78vw 2.34vw;border-radius:5.21vw;margin-left:1.04vw;margin-right:1.04vw}}@media(min-width:1024px){.notouch .cookie-banner button.cta:hover{cursor:pointer;background:#fff;color:#000}}', ""]), t.exports = n
        },
        332: function(t, e, o) {
            t.exports = o.p + "img/bg-light-menu-mb.9ff85a7.jpg"
        },
        333: function(t, e, o) {
            "use strict";
            o(227)
        },
        334: function(t, e, o) {
            var n = o(53),
                r = o(205),
                l = o(124),
                f = n(!1),
                c = r(l);
            f.push([t.i, '@font-face{font-family:"Roobert";font-style:normal;font-weight:300;src:url(/fonts/WOFF2/Roobert-Light.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Light.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:300;src:url(/fonts/WOFF2/Roobert-LightItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-LightItalic.woff) format("woff")}@font-face{font-family:"Raleway";font-style:normal;font-weight:300;src:url(/fonts/WOFF2/Raleway-Light.woff2) format("woff2"),url(/fonts/WOFF/Raleway-Light.woff) format("woff")}@font-face{font-family:"Raleway";font-style:italic;font-weight:300;src:url(/fonts/WOFF2/Raleway-LightItalic.woff2) format("woff2"),url(/fonts/WOFF/Raleway-LightItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:400;src:url(/fonts/WOFF2/Roobert-Regular.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Regular.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:400;src:url(/fonts/WOFF2/Roobert-RegularItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-RegularItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:500;src:url(/fonts/WOFF2/Roobert-Medium.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Medium.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:500;src:url(/fonts/WOFF2/Roobert-MediumItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-MediumItalic.woff) format("woff")}@font-face{font-family:"Raleway";font-style:normal;font-weight:500;src:url(/fonts/WOFF2/Raleway-Medium.woff2) format("woff2"),url(/fonts/WOFF/Raleway-Medium.woff) format("woff")}@font-face{font-family:"Raleway";font-style:italic;font-weight:500;src:url(/fonts/WOFF2/Raleway-MediumItalic.woff2) format("woff2"),url(/fonts/WOFF/Raleway-MediumItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:700;src:url(/fonts/WOFF2/Roobert-SemiBold.woff2) format("woff2"),url(/fonts/WOFF/Roobert-SemiBold.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:700;src:url(/fonts/WOFF2/Roobert-SemiBoldItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-SemiBoldItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:700;src:url(/fonts/WOFF2/Roobert-Bold.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Bold.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:700;src:url(/fonts/WOFF2/Roobert-BoldItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-BoldItalic.woff) format("woff")}@font-face{font-family:"Roobert";font-style:normal;font-weight:900;src:url(/fonts/WOFF2/Roobert-Heavy.woff2) format("woff2"),url(/fonts/WOFF/Roobert-Heavy.woff) format("woff")}@font-face{font-family:"Roobert";font-style:italic;font-weight:900;src:url(/fonts/WOFF2/Roobert-HeavyItalic.woff2) format("woff2"),url(/fonts/WOFF/Roobert-HeavyItalic.woff) format("woff")}header[data-v-db53f10c]{position:fixed;z-index:1;width:100vw;font-family:"Roobert";transition:opacity .7s cubic-bezier(.19,1,.22,1);opacity:1}.sc-down header[data-v-db53f10c]{opacity:0;pointer-events:none}header .container[data-v-db53f10c]{opacity:0}@media(min-width:1024px){header .container[data-v-db53f10c]{font-size:.73vw;line-height:.88vw}}header .container .grid[data-v-db53f10c]{padding-top:17.6vw}@media(min-width:1024px){header .container .grid[data-v-db53f10c]{padding-top:3.44vw}}header .container svg path[data-v-db53f10c]{transition:fill 1.25s cubic-bezier(.19,1,.22,1)}.white-bg header .container svg path[data-v-db53f10c]{fill:#010101}header .container .anchors[data-v-db53f10c]{display:inline-block;vertical-align:top;text-transform:uppercase}@media(min-width:1024px){header .container .anchors[data-v-db53f10c]{margin-left:14.01vw}}.white-bg header .container .anchors a[data-v-db53f10c]{color:#010101}.white-bg header .container .anchors a[data-v-db53f10c]:before{content:url(' + c + ')}header .container .anchors.active a[data-v-db53f10c]{display:inline-block;opacity:1}header .container .anchors ul li[data-v-db53f10c]{opacity:0}header .container .anchors ul li a[data-v-db53f10c]:hover{opacity:1}header .container .anchors ul li a[data-v-db53f10c]:hover:before{transform:translateX(0);opacity:1}header .container .anchors ul li+li[data-v-db53f10c]{margin-top:.94vw}header .container .menu[data-v-db53f10c]{position:absolute;top:0;right:0;text-transform:uppercase;text-align:right}@media(min-width:1024px){header .container .menu[data-v-db53f10c]{font-size:.94vw;line-height:.78vw;letter-spacing:.26vw;font-weight:300}}@media(min-width:1024px){header .container .menu ul li+li[data-v-db53f10c]{margin-top:.57vw}}header .container .menu .burger[data-v-db53f10c]{display:inline-flex;outline:none;border:0;background:transparent;transition:all .25s ease-out;cursor:pointer;position:absolute;top:0;right:0;z-index:21;top:14.13vw;right:4.53vw;width:6.93vw;height:5.33vw;padding:5.33vw}header .container .menu .burger[data-v-db53f10c]:after,header .container .menu .burger[data-v-db53f10c]:before{content:"";position:absolute;background:#fff;transition:all .5s cubic-bezier(.19,1,.22,1);top:5.33vw;left:2vw;width:6.93vw;height:.27vw}.white-bg header .container .menu .burger[data-v-db53f10c]:after,.white-bg header .container .menu .burger[data-v-db53f10c]:before{background:#010101}header .container .menu .burger[data-v-db53f10c]:before{transform:translate3d(0,-.7vw,0) rotate(0deg)}header .container .menu .burger[data-v-db53f10c]:after{transform:translate3d(0,.7vw,0) rotate(0deg)}header .container .menu .burger.open[data-v-db53f10c]:before{transform:translateZ(0) rotate(45deg)}header .container .menu .burger.open[data-v-db53f10c]:after{transform:translateZ(0) rotate(-45deg)}header .container .menu.mb[data-v-db53f10c]{display:block}@media(min-width:1024px){header .container .menu.mb[data-v-db53f10c]{display:none}}header .container .nav[data-v-db53f10c]{width:100vw;height:100vh;height:calc(var(--vh, 1vh)*100);background:transparent;background:#000;position:fixed;top:0;left:0;z-index:-1;overflow:auto;transform:translate3d(-100%,0,0);padding-top:40vw;padding-bottom:5.33vw;-ms-overflow-style:none;scrollbar-width:none}@media(min-width:768px){header .container .nav[data-v-db53f10c]{padding-top:39.06vw;padding-bottom:2.6vw}}@media(min-width:1024px){header .container .nav[data-v-db53f10c]{z-index:20}}header .container .nav .bg-light[data-v-db53f10c]{width:100vw;height:100%;position:absolute;z-index:-1;display:block;left:0;bottom:32vw;height:124vw}@media(min-width:768px){header .container .nav .bg-light[data-v-db53f10c]{bottom:0;height:133.33vw}}@media(min-width:1024px){header .container .nav .bg-light[data-v-db53f10c]{display:none}}header .container .nav .bg-light img[data-v-db53f10c]{width:100%;height:100%;position:absolute;top:50%;left:50%;transform:translate3d(-50%,-50%,0);-o-object-fit:cover;object-fit:cover;transition:transform .8s cubic-bezier(.19,1,.22,1);z-index:5}header .container .nav[data-v-db53f10c]::-webkit-scrollbar{display:none}header .container .nav .container[data-v-db53f10c]{opacity:1}header .container .nav .container .languages[data-v-db53f10c]{display:inline-block;vertical-align:top;transition:color 1.25s cubic-bezier(.19,1,.22,1);margin-bottom:5.33vw}header .container .nav .container .languages ul[data-v-db53f10c]{display:inline-block;vertical-align:middle}header .container .nav .container .languages ul li[data-v-db53f10c]{display:inline-block}header .container .nav .container .languages ul li a[data-v-db53f10c]:before{display:none}header .container .nav .container .languages ul li+li[data-v-db53f10c]{margin-left:9.33vw}header .container .nav .container .sections-anchors[data-v-db53f10c]{font-weight:200;text-transform:uppercase;font-size:10.67vw;line-height:17.6vw;margin-bottom:20vw}@media(min-width:768px){header .container .nav .container .sections-anchors[data-v-db53f10c]{font-size:5.21vw;line-height:8.59vw;margin-bottom:9.77vw}}header .container .nav .container .sections-anchors li[data-v-db53f10c]{opacity:0}header .container .nav .container .sections-anchors li a[data-v-db53f10c]{opacity:1}header .container .nav .container .contact-mail[data-v-db53f10c]{font-weight:300;margin-top:2.93vw;font-size:4.27vw;line-height:5.87vw}header .container .nav .container .contact-mail svg[data-v-db53f10c]{display:inline-block;vertical-align:middle;height:2.4vw;margin-right:4.27vw;width:2.4vw}header .container .nav .container .contact-mail a[data-v-db53f10c]{display:inline-block;vertical-align:middle;opacity:0;position:relative;padding-bottom:1.33vw}header .container .nav .container .contact-mail a[data-v-db53f10c]:after{position:absolute;content:"";bottom:0;left:0;height:1px;width:100%;background:hsla(0,0%,98.4%,.29)}@media(min-width:1024px){header .container .nav[data-v-db53f10c]{display:none}}header .container .content-right[data-v-db53f10c]{display:none}@media(min-width:1024px){header .container .content-right[data-v-db53f10c]{display:block;height:0;position:relative}}header .container .content-right .logo[data-v-db53f10c]{display:inline-block}header .container .content-right .languages[data-v-db53f10c]{display:inline-block;vertical-align:top;transition:color 1.25s cubic-bezier(.19,1,.22,1)}header .container .content-right .languages[data-v-db53f10c]:before{display:inline-block;vertical-align:middle;content:"";width:2px;background:#fff}@media(min-width:1024px){header .container .content-right .languages[data-v-db53f10c]:before{height:.57vw;margin-right:1.82vw}}header .container .content-right .languages ul[data-v-db53f10c]{display:inline-block;vertical-align:middle}header .container .content-right .languages ul li[data-v-db53f10c]{display:inline-block}header .container .content-right .languages ul li a[data-v-db53f10c]:before{display:none}@media(min-width:1024px){header .container .content-right .languages ul li+li[data-v-db53f10c]{margin-left:1.82vw}}.white-bg header .container .content-right .languages[data-v-db53f10c]:before{background:#010101}.white-bg header .container .content-right .languages a[data-v-db53f10c]{color:#010101}', ""]), t.exports = f
        },
        335: function(t, e, o) {
            "use strict";
            o.r(e), o.d(e, "state", (function() {
                return n
            })), o.d(e, "mutations", (function() {
                return r
            })), o.d(e, "actions", (function() {
                return l
            })), o.d(e, "getters", (function() {
                return f
            }));
            var n = function() {
                    return {
                        isSceneLoaded: !1,
                        lastRoute: "",
                        cookieData: ""
                    }
                },
                r = {
                    SET_SCENE_LOAD: function(t, e) {
                        t.isSceneLoaded = e
                    },
                    SET_LAST_ROUTE: function(t, e) {
                        t.lastRoute = e
                    },
                    SET_COOKIE_DATA: function(t, e) {
                        t.cookieData = e
                    }
                },
                l = {},
                f = {
                    lastRoute: function(t) {
                        return t.lastRoute
                    },
                    isSceneLoaded: function(t) {
                        return t.isSceneLoaded
                    },
                    cookieData: function(t) {
                        return t.cookieData
                    }
                }
        },
        405: function(t, e, o) {
            "use strict";
            o.r(e);
            var n = [function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "dot-cursor"
                    }, [n("img", {
                        attrs: {
                            src: o(124),
                            alt: ""
                        }
                    }), t._v(" "), n("span")])
                }],
                r = (o(45), o(6)),
                l = o(0),
                f = (o(33), o(65), o(15), function(t, e, a) {
                    return t * (1 - a) + e * a
                }),
                c = (o(202), o(43), 1e3 / 60),
                d = {
                    callbacks: [],
                    raf: [],
                    lastDate: Date.now(),
                    dt: 0,
                    now: 0,
                    addQueue: function(t) {
                        return this.callbacks.push(t), this.callbacks.length - 1
                    },
                    removeQueue: function(t) {
                        return !!this.callbacks[t] && (this.callbacks.splice(t, 1), !0)
                    },
                    render: function(t) {
                        this.raf = window.requestAnimationFrame(this.render.bind(this)), this.now = Date.now(), this.dt = this.now - this.lastDate, this.dt > c && (this.lastDate = this.now - this.dt % c, this.callbacks.map((function(e) {
                            var o;
                            return (o = e) && "[object Function]" === {}.toString.call(o) && e(t), !0
                        })))
                    },
                    stop: function() {
                        window.cancelAnimationFrame(this.raf), this.raf = null
                    }
                };
            d.render(0);
            var m = d,
                h = {
                    name: "DotCursor",
                    data: function() {
                        return {
                            duration: .6,
                            scale: .075,
                            mouseX: .5 * window.innerWidth,
                            mouseY: .5 * window.innerHeight,
                            x: .5 * window.innerWidth,
                            y: .5 * window.innerHeight,
                            w: 0,
                            h: 0
                        }
                    },
                    computed: {
                        getNewPos: function() {
                            return "translate3d(".concat(this.x - .5 * this.w - .5 * window.innerWidth, "px, ").concat(this.y - .5 * this.h - .5 * window.innerHeight, "px, 0)\n                        scale3d(").concat(this.scale, ", ").concat(this.scale, ", 1)")
                        }
                    },
                    destroyed: function() {
                        this.$nuxt.$off("init-cursor", this.init), this.$nuxt.$off("set-cursor-position", this.setMousePos), this.$nuxt.$off("reset-cursor", this.resetCursor)
                    },
                    mounted: function() {
                        this.$nextTick((function() {
                            this.w = this.$el.getBoundingClientRect().width, this.h = this.$el.getBoundingClientRect().height, this.init(), this.$nuxt.$on("init-cursor", this.init), this.$nuxt.$on("set-cursor-position", this.setMousePos), this.$nuxt.$on("on-enter-project", this.onEnterProject), this.$nuxt.$on("on-leave-project", this.onLeaveProject), this.$nuxt.$on("on-enter-next-project", this.onEnterNextProject), this.$nuxt.$on("on-leave-next-project", this.onLeaveNextProject), this.$nuxt.$on("on-enter-video", this.onEnterVideo), this.$nuxt.$on("on-enter-video-played", this.onEnterVideoPlayed), this.$nuxt.$on("on-leave-video", this.onLeaveVideo), this.$nuxt.$on("reset-cursor", this.resetCursor)
                        }))
                    },
                    methods: {
                        init: function() {
                            this.$nuxt.$emit("remove-mousemove-emit"), this.attach()
                        },
                        setMousePos: function(t, e) {
                            this.mouseX = t, this.mouseY = e
                        },
                        resetCursor: function() {
                            r.b.to(this, {
                                scale: .075,
                                ease: l.a.easeOut,
                                duration: .75 * this.duration
                            }), this.$el.querySelector("span").style.transform = "translate3d(-50%, 0, 0) scale3d(0, 0, 0))", this.$el.querySelector("span").style.opacity = 0, this.$el.style.opacity = 1, this.$el.querySelector("span").innerText = "", this.$el.querySelector("img").style.transform = "scale3d(0, 0, 0)", this.$el.style.opacity = 1
                        },
                        onEnterVideo: function() {
                            var t = this;
                            this.tlOnLeaveVideo && this.tlOnLeaveVideo.kill(), this.tlOnEnterVideo = r.b.timeline({
                                paused: !0
                            }), this.tlOnEnterVideo.to(this, {
                                scale: 1,
                                ease: l.a.easeOut,
                                duration: this.duration
                            }, 0), this.tlOnEnterVideo.add((function() {
                                t.$el.querySelector("span").innerText = "Play", t.$el.querySelector("span").style.transform = "translate3d(-50%, 0, 0) scale3d(1, 1, 1)", t.$el.querySelector("span").style.opacity = 1, t.$el.style.opacity = 1
                            }), 0), this.tlOnEnterVideo.play()
                        },
                        onEnterVideoPlayed: function() {
                            var t = this;
                            this.tlOnLeaveVideo && this.tlOnLeaveVideo.kill(), this.tlOnEnterVideo = r.b.timeline({
                                paused: !0
                            }), this.tlOnEnterVideo.to(this, {
                                scale: 1,
                                ease: l.a.easeOut,
                                duration: this.duration
                            }, 0), this.tlOnEnterVideo.add((function() {
                                t.$el.querySelector("span").innerText = "Pause", t.$el.querySelector("span").style.transform = "translate3d(-50%, 0, 0) scale3d(1, 1, 1)", t.$el.querySelector("span").style.opacity = 1, t.$el.style.opacity = 1
                            }), 0), this.tlOnEnterVideo.play()
                        },
                        onLeaveVideo: function() {
                            var t = this;
                            this.tlOnEnterVideo && this.tlOnEnterVideo.kill(), this.tlOnLeaveVideo = r.b.timeline({
                                paused: !0
                            }), this.tlOnLeaveVideo.to(this, {
                                scale: .075,
                                ease: l.a.easeOut,
                                duration: .75 * this.duration
                            }, 0), this.tlOnLeaveVideo.add((function() {
                                t.$el.querySelector("span").style.transform = "translate3d(-50%, 0, 0) scale3d(0, 0, 0))", t.$el.querySelector("span").style.opacity = 0, t.$el.style.opacity = 1, t.$el.querySelector("span").innerText = ""
                            }), 0), this.tlOnLeaveVideo.play()
                        },
                        onEnterProject: function() {
                            var t = this;
                            this.tlOnLeaveProject && this.tlOnLeaveProject.kill(), this.tlOnEnterProject = r.b.timeline({
                                paused: !0
                            }), this.tlOnEnterProject.to(this, {
                                scale: .75,
                                ease: l.a.easeOut,
                                duration: .75 * this.duration
                            }, 0), this.tlOnEnterProject.add((function() {
                                t.$el.querySelector("img").style.transform = "scale3d(1, 1, 1) rotate(-45deg)", t.$el.style.opacity = 1
                            }), 0), this.tlOnEnterProject.play()
                        },
                        onLeaveProject: function() {
                            var t = this;
                            this.tlOnEnterProject && this.tlOnEnterProject.kill(), this.tlOnLeaveProject = r.b.timeline({
                                paused: !0
                            }), this.tlOnLeaveProject.to(this, {
                                scale: .075,
                                ease: l.a.easeOut,
                                duration: .75 * this.duration
                            }, 0), this.tlOnLeaveProject.add((function() {
                                t.$el.querySelector("img").style.transform = "scale3d(0, 0, 0)", t.$el.style.opacity = 1
                            }), 0), this.tlOnLeaveProject.play()
                        },
                        onEnterNextProject: function() {
                            var t = this;
                            this.tlOnLeaveNextProject && this.tlOnLeaveNextProject.kill(), this.tlOnEnterNextProject = r.b.timeline({
                                paused: !0
                            }), this.tlOnEnterNextProject.to(this, {
                                scale: 1,
                                ease: l.a.easeOut,
                                duration: .75 * this.duration
                            }, 0), this.tlOnEnterNextProject.add((function() {
                                t.$el.querySelector("span").innerText = "Next Project", t.$el.querySelector("span").style.transform = "translate3d(-50%, 0, 0) scale3d(1, 1, 1)", t.$el.querySelector("span").style.opacity = 1, t.$el.style.opacity = 1
                            }), 0), this.tlOnEnterNextProject.play()
                        },
                        onLeaveNextProject: function() {
                            var t = this;
                            this.tlOnEnterNextProject && this.tlOnEnterNextProject.kill(), this.tlOnLeaveNextProject = r.b.timeline({
                                paused: !0
                            }), this.tlOnLeaveNextProject.to(this, {
                                scale: .075,
                                ease: l.a.easeOut,
                                duration: .75 * this.duration
                            }, 0), this.tlOnLeaveNextProject.add((function() {
                                t.$el.querySelector("span").style.transform = "translate3d(-50%, 0, 0) scale3d(0, 0, 0))", t.$el.querySelector("span").style.opacity = 0, t.$el.style.opacity = 1, t.$el.querySelector("span").innerText = ""
                            }), 0), this.tlOnLeaveNextProject.play()
                        },
                        onMove: function(t) {
                            this.mouseX = t.pageX, this.mouseY = t.pageY
                        },
                        update: function() {
                            this.x = f(this.x, this.mouseX, .15), this.y = f(this.y, this.mouseY, .15), this.$el.style.transform = this.getNewPos
                        },
                        onLeaveScreen: function() {
                            this.$el.style.opacity = 0
                        },
                        onEnterScreen: function() {
                            this.$el.style.opacity = 1
                        },
                        onEnterLink: function() {
                            r.b.to(this, {
                                scale: 0,
                                ease: l.a.easeOut,
                                duration: .75 * this.duration
                            }), this.$el.style.opacity = 0
                        },
                        onResize: function() {
                            this.wW = window.innerWidth, this.wH = window.innerHeight
                        },
                        attach: function() {
                            this.rafUpdate = m.addQueue(this.update), document.addEventListener("resize", this.onResize), document.addEventListener("mousemove", this.onMove), document.addEventListener("mouseenter", this.onEnterScreen), document.addEventListener("mouseleave", this.onLeaveScreen)
                        },
                        detach: function() {
                            m.removeQueue(this.rafUpdate), document.removeEventListener("resize", this.onResize), document.removeEventListener("mousemove", this.onMove), document.removeEventListener("mouseenter", this.onEnterScreen), document.removeEventListener("mouseleave", this.onLeaveScreen)
                        }
                    }
                },
                w = (o(326), o(21)),
                component = Object(w.a)(h, (function() {
                    var t = this,
                        e = t.$createElement;
                    t._self._c;
                    return t._m(0)
                }), n, !1, null, "02bb90e8", null);
            e.default = component.exports
        },
        406: function(t, e, o) {
            "use strict";
            o.r(e);
            var n = [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "font_preload",
                        staticStyle: {
                            opacity: "0"
                        }
                    }, [e("span", {
                        staticStyle: {
                            "font-family": "'Roobert'"
                        }
                    })])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("span", [t._v("hell"), o("i", [t._v("o")])])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("span", [t._v("sa"), o("i", [t._v("i")]), t._v("g"), o("i", [t._v("o")]), t._v("n")])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("span", [t._v("x"), o("i", [t._v("i")]), t._v("n chà"), o("i", [t._v("o")])])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("span", [t._v("sà"), o("i", [t._v("i")]), t._v(" g"), o("i", [t._v("ò")]), t._v("n")])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "bg-light"
                    }, [e("img", {
                        attrs: {
                            src: o(322),
                            alt: ""
                        }
                    })])
                }],
                r = o(6),
                l = o(0),
                f = o(41),
                c = o(97),
                d = o(120),
                m = {
                    name: "Loader",
                    components: {
                        LogoSVG: o.n(d).a
                    },
                    data: function() {
                        return {
                            isHomeLoaded: !1
                        }
                    },
                    destroyed: function() {},
                    mounted: function() {
                        this.init(), this.attach()
                    },
                    methods: {
                        init: function() {
                            this.$home = document.querySelector("#home"), this.$home && this.$home.classList.add("loading"), this.textDisplay1 = this.$el.querySelector(".text-display span:nth-child(1)"), this.textDisplay2 = this.$el.querySelector(".text-display span:nth-child(2)"), this.header = document.querySelector("header .container"), this.$anchors = document.querySelectorAll("header .container .anchors ul li"), this.$sentencesContainer = document.querySelectorAll("#home .sentences"), this.$sentences = document.querySelectorAll("#home .sentences ul .active .container--word"), this.$scrollLogo = document.querySelectorAll("#home .scroll-logo"), this.$logoDisplay = this.$el.querySelector(".logo-display "), this.$bg = this.$el.querySelector(".bg ")
                        },
                        showHome: function() {
                            var t = this;
                            this.tlShowHome && this.tlShowHome.kill(), this.tlShowHome = r.b.timeline(), this.$nuxt.$emit("stop-scroll"), this.$home = document.querySelector("#home"), this.$home && this.$home.classList.add("loading"), this.textDisplay1 = this.$el.querySelector(".text-display span:nth-child(1)"), this.textDisplay2 = this.$el.querySelector(".text-display span:nth-child(2)"), this.header = document.querySelector("header .container"), this.$anchors = document.querySelectorAll("header .container .anchors ul li"), this.$sentencesContainer = document.querySelectorAll("#home .sentences"), this.$sentences = document.querySelectorAll("#home .sentences ul .active .container--word"), this.$scrollLogo = document.querySelectorAll("#home .scroll-logo"), this.$gradientBot = document.querySelectorAll("#home .gradient"), this.tlShowHome.add((function() {
                                t.$nuxt.$emit("stop-scroll"), t.$home && t.$home.classList.add("loading"), t.$store.state.isSceneLoaded || t.$store.commit("SET_SCENE_LOAD", !0), t.$nuxt.$emit("pre-show-background")
                            }), .35).to(this.textDisplay1, {
                                y: 0,
                                ease: l.a.easeOut,
                                force3D: !0,
                                duration: 1.2
                            }, 1).to(this.textDisplay2, {
                                y: 0,
                                ease: l.a.easeOut,
                                force3D: !0,
                                duration: 1.2
                            }, 1.1).to(this.textDisplay1, {
                                opacity: 1,
                                duration: 1.2,
                                ease: l.a.easeOut
                            }, 1).to(this.textDisplay2, {
                                opacity: 1,
                                duration: 1.2,
                                ease: l.a.easeOut
                            }, 1.1).to(this.textDisplay1, {
                                y: "-100%",
                                ease: l.a.easeOut,
                                force3D: !0,
                                duration: 1.2
                            }, 4.5).to(this.textDisplay1, {
                                opacity: 0,
                                duration: 1.2,
                                ease: l.a.easeOut
                            }, 4.5).to(this.textDisplay2, {
                                y: "-100%",
                                ease: l.a.easeOut,
                                force3D: !0,
                                duration: 1.2
                            }, 4.6).to(this.textDisplay2, {
                                opacity: 0,
                                duration: 1.2,
                                ease: l.a.easeOut
                            }, 4.6).add((function() {
                                t.$nuxt.$emit("show-background")
                            }), 4).add((function() {
                                t.$nuxt.$emit("show-lens")
                            }), 5).fromTo(this.$gradientBot, {
                                opacity: 0
                            }, {
                                opacity: 1
                            }, 5.1).to(this.header, {
                                opacity: 1,
                                duration: 1,
                                ease: l.a.easeOut
                            }, 5.1), f.a.device.mobile || this.tlShowHome.fromTo(this.header, {
                                y: "-100%"
                            }, {
                                y: "0%",
                                force3D: !0,
                                duration: 1,
                                ease: l.a.easeOut
                            }, 5.1), this.tlShowHome.to(this.$anchors, {
                                opacity: 1,
                                duration: 1,
                                stagger: .075,
                                ease: l.a.easeOut
                            }, 5.1).fromTo(this.$anchors, {
                                x: "100%"
                            }, {
                                x: "0%",
                                force3D: !0,
                                duration: 1,
                                stagger: .075,
                                ease: l.a.easeOut
                            }, 5.1).to(this.$sentencesContainer, {
                                opacity: 1,
                                duration: 1,
                                stagger: .075,
                                onStart: function() {
                                    t.$nuxt.$emit("animate-sentences")
                                },
                                ease: l.a.easeOut
                            }, 5.2).fromTo(this.$sentences[0], {
                                y: "60%"
                            }, {
                                y: "0%",
                                ease: l.a.easeOut,
                                force3D: !0,
                                duration: 1.2
                            }, 5.3).fromTo(this.$sentences[0], {
                                opacity: 0
                            }, {
                                opacity: 1,
                                duration: 1,
                                stagger: .075,
                                ease: l.a.easeOut
                            }, 5.3).fromTo(this.$sentences[1], {
                                y: "60%"
                            }, {
                                y: "0%",
                                ease: l.a.easeOut,
                                force3D: !0,
                                duration: 1.2
                            }, 5.4).fromTo(this.$sentences[1], {
                                opacity: 0
                            }, {
                                opacity: 1,
                                duration: 1,
                                stagger: .075,
                                ease: l.a.easeOut
                            }, 5.4).to(this.$scrollLogo, {
                                opacity: 1,
                                duration: 1,
                                ease: l.a.easeOut
                            }, 5.5).add((function() {
                                t.$home && t.$home.classList.remove("loading"), t.$nuxt.$emit("start-scroll"), c.a.getCookie("agreement-use-cookie") || t.$nuxt.$emit("show-cookie"), t.$nuxt.$emit("update-scroll")
                            }), 5.4).add((function() {
                                t.$nuxt.$on("on-scene-load", t.showHome)
                            })), this.tlShowHome.play()
                        },
                        setingLoading: function() {
                            var t = this;
                            this.tlLoadingProject = r.b.timeline({
                                paused: !0
                            }), this.tlLoadingProject.add((function() {}), 0).set(this.$bg, {
                                opacity: 1
                            }, 0).to(this.$logoDisplay, {
                                opacity: 1
                            }, 0).add((function() {
                                t.$logoDisplay.classList.add("blink")
                            }), 0), this.tlLoadingProject.play()
                        },
                        onLoadingProject: function() {
                            var t = this;
                            this.tlLoadingProject = r.b.timeline({
                                paused: !0
                            }), this.tlLoadingProject.add((function() {}), 0).to(this.$bg, {
                                opacity: 1,
                                duration: 1.2,
                                ease: l.a.easeOut
                            }, 0).to(this.$logoDisplay, {
                                opacity: 1,
                                duration: 1.2,
                                ease: l.a.easeOut
                            }, 0).add((function() {
                                t.$logoDisplay.classList.add("blink")
                            }), 1.21), this.tlLoadingProject.play()
                        },
                        onloadedProject: function() {
                            var t = this;
                            this.tlLoadingProject = r.b.timeline({
                                paused: !0
                            }), this.tlLoadingProject.add((function() {
                                t.$logoDisplay.classList.remove("blink")
                            }), 0).to(this.$bg, {
                                opacity: 0,
                                duration: .6,
                                ease: l.a.easeOut
                            }, .1).to(this.$logoDisplay, {
                                opacity: 0,
                                duration: .3,
                                ease: l.a.easeOut
                            }, 0), this.tlLoadingProject.play()
                        },
                        attach: function() {
                            this.$nuxt.$on("on-scene-load", this.showHome), this.$nuxt.$on("set-loading", this.setingLoading), this.$nuxt.$on("on-project-loading", this.onLoadingProject), this.$nuxt.$on("on-project-loaded", this.onloadedProject)
                        }
                    }
                },
                h = (o(324), o(21)),
                component = Object(h.a)(m, (function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        attrs: {
                            id: "loader"
                        }
                    }, [t._m(0), t._v(" "), o("div", {
                        staticClass: "bg"
                    }), t._v(" "), o("div", {
                        staticClass: "container"
                    }, ["en" == t.$i18n.locale ? o("div", {
                        staticClass: "text-display",
                        staticStyle: {
                            "font-family": "'Roobert'"
                        }
                    }, [t._m(1), t._m(2)]) : t._e(), t._v(" "), "vn" == t.$i18n.locale ? o("div", {
                        staticClass: "text-display",
                        staticStyle: {
                            "font-family": "'Roobert'"
                        }
                    }, [t._m(3), t._m(4)]) : t._e(), t._v(" "), "zh" == t.$i18n.locale ? o("div", {
                        staticClass: "text-display",
                        staticStyle: {
                            "font-family": "'Roobert'"
                        }
                    }, [o("span", [t._v("你好")]), t._v(" "), o("span", [t._v("西贡")])]) : t._e(), t._v(" "), o("div", {
                        staticClass: "logo-display"
                    }, [o("div", {
                        staticClass: "logo"
                    }, [o("LogoSVG")], 1), t._v(" "), t._m(5)])])])
                }), n, !1, null, "84419ef8", null);
            e.default = component.exports
        },
        407: function(t, e, o) {
            "use strict";
            o.r(e);
            var n = {
                    name: "Overlay",
                    data: function() {
                        return {}
                    },
                    mounted: function() {
                        this.$nextTick((function() {}))
                    }
                },
                r = (o(328), o(21)),
                component = Object(r.a)(n, (function() {
                    var t = this.$createElement;
                    return (this._self._c || t)("div", {
                        staticClass: "overlay"
                    })
                }), [], !1, null, "913fc87a", null);
            e.default = component.exports
        },
        408: function(t, e, o) {
            "use strict";
            o.r(e);
            var n = o(6),
                r = o(97),
                l = {
                    name: "CookiesBanner",
                    computed: {
                        cookieData: function() {
                            return this.$store.getters.cookieData
                        }
                    },
                    mounted: function() {
                        this.attach()
                    },
                    methods: {
                        attach: function() {
                            this.$nuxt.$on("show-cookie", this.show), this.$nuxt.$on("hide-cookie", this.hide)
                        },
                        show: function() {
                            var t = document.querySelector(".cookie-banner"),
                                e = n.a.timeline();
                            r.a.getCookie("agreement-use-cookie") || this.$nuxt.$off("show-cookie", this.show), e.set(t, {
                                display: "flex"
                            }).fromTo(t, {
                                y: 200
                            }, {
                                duration: .6,
                                y: 0,
                                ease: "power3.out"
                            }), e.play()
                        },
                        hide: function() {
                            var t = document.querySelector(".cookie-banner"),
                                e = n.a.timeline();
                            r.a.createCookie("agreement-use-cookie", !0, 30), e.to(t, {
                                duration: .6,
                                y: 200,
                                ease: "power3.in"
                            }).set(t, {
                                display: "none"
                            }), e.play()
                        }
                    }
                },
                f = (o(330), o(21)),
                component = Object(f.a)(l, (function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "cookie-banner"
                    }, [o("div", {
                        staticClass: "content"
                    }, [o("div", [o("p", [t._v(t._s(t.cookieData.text) + " "), o("a", {
                        attrs: {
                            href: t.cookieData.privacy_url,
                            target: "_blank"
                        }
                    }, [t._v(t._s(t.cookieData.privacy_text))])])])]), t._v(" "), o("button", {
                        staticClass: "cta",
                        on: {
                            "~click": function(e) {
                                return t.hide.apply(null, arguments)
                            }
                        }
                    }, [t._v(t._s(t.cookieData.cta))]), t._v(" "), o("button", {
                        staticClass: "close",
                        attrs: {
                            role: "button",
                            name: "close",
                            title: "close button"
                        },
                        on: {
                            "~click": function(e) {
                                return t.hide.apply(null, arguments)
                            }
                        }
                    })])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        41: function(t, e, o) {
            "use strict";
            var n = o(29),
                r = o(30),
                l = (o(33), o(92), o(50), o(58), o(42), function() {
                    function t() {
                        Object(n.a)(this, t), this.ua = navigator.userAgent.toLowerCase(), this.html = document.querySelector("html"), this.checkNavigator(), this.checkPlatform(), this.checkDevice(), this.checkVersion(), this.checkEvents(), this.checkCss(), this.addConsole()
                    }
                    return Object(r.a)(t, [{
                        key: "checkDevice",
                        value: function() {
                            this.device = {}, this.device.iphone = null != this.ua.match(/iPhone/i) || null != this.ua.match(/iPod/i), this.device.mobile = null != this.ua.match(/mobile/i), this.device.ipad = this.platform.ios && !this.device.iphone, this.device.tablet = this.device.ipad && !this.device.iphone || null != this.ua.match(/android/i) && !this.device.mobile, this.device.tablet && (this.device.mobile = !1), this.device.desktop = !this.device.tablet && !this.device.mobile, this.device.touch = !!("function" == typeof window.ontouchstart || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 || this.device.mobile || this.device.ipad || this.device.iphone || this.device.tablet || this.platform.android || this.platform.windowsphone), this.device.retina = window.devicePixelRatio > 1
                        }
                    }, {
                        key: "checkNavigator",
                        value: function() {
                            this.browser = {}, this.browser.ioswebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(this.ua), this.browser.firefox = this.ua.includes("firefox"), this.browser.samsung = this.ua.includes("samsungbrowser"), this.browser.ie = (this.ua.includes("msie") || window.ActiveXObject || "ActiveXObject" in window) && !this.browser.firefox, this.browser.edge = /Edge./i.test(this.ua), this.browser.chrome = this.ua.includes("chrome") && !this.browser.samsung, this.browser.safari = !!(this.ua.includes("safari") && !this.browser.chrome && !this.browser.samsung || this.ua.match(/fbios/i) || this.ua.match(/micromessenger/i)), this.browser.opera = this.ua.includes("presto"), this.browser.facebook = this.ua.includes("fban") || this.ua.includes("fbav")
                        }
                    }, {
                        key: "checkPlatform",
                        value: function() {
                            this.platform = {}, this.platform.ios = /iPad|iPhone|iPod/.test(navigator.platform) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1, this.platform.win = /win/i.test(navigator.platform.toLowerCase()), this.platform.mac = navigator.platform.toLowerCase().includes("mac"), this.platform.android = this.ua.includes("android"), this.platform.linux = this.ua.includes("linux"), this.platform.windowsphone = this.ua.includes("windows phone") || null != this.ua.match(/mobile/i) && this.browser.ie
                        }
                    }, {
                        key: "checkVersion",
                        value: function() {
                            this.version = {}, this.version.full = this.getBrowserVersion(), this.version.main = parseInt(this.version.full), this.version.ie6 = this.html.classList.contains("ie6"), this.version.ie7 = this.html.classList.contains("ie7"), this.version.ie8 = this.html.classList.contains("ie8"), this.version.ie9 = this.html.classList.contains("ie9"), this.version.ie10 = navigator.appVersion.includes("MSIE 10"), this.version.ie11 = null != this.ua.match(/Trident\/7\./i), this.version.edge = /Edge./i.test(this.ua), this.version.ios7 = null != this.ua.match(/Version\/7/i), this.version.ios9 = null != this.ua.match(/Version\/9/i)
                        }
                    }, {
                        key: "checkEvents",
                        value: function() {
                            this.event = {}, this.device.touch ? (this.event.click = "touchstart", this.event.down = "touchstart", this.event.up = "touchend", this.event.move = "touchmove", window.navigator.msPointerEnabled && (this.event.click = "MSPointerDown", this.event.down = "MSPointerDown", this.event.up = "MSPointerUp", this.event.move = "MSPointerMove")) : (this.event.click = "click", this.event.down = "mousedown", this.event.up = "mouseup", this.event.move = "mousemove")
                        }
                    }, {
                        key: "checkCss",
                        value: function() {
                            this.css = {}, this.css.transform3d = this.checkCssProperty("transform", "translate3d(1px,1px,1px)", !0)
                        }
                    }, {
                        key: "checkCssProperty",
                        value: function(t, e, o) {
                            var div = document.createElement("div");
                            this.html.appendChild(div);
                            var n, r = (o ? this.browser.cssVendorPrefix : "") + t,
                                l = (o ? this.browser.jsVendorPrefix : "") + this.uppercaseFirstLetter(t);
                            return void 0 !== div.style[l] && (div.style[l] = e, n = window.getComputedStyle(div).getPropertyValue(r)), this.html.removeChild(div), void 0 !== n && n.length > 0 && "none" !== n
                        }
                    }, {
                        key: "getBrowserVersion",
                        value: function() {
                            var t, e = navigator.appName,
                                o = this.ua,
                                n = o.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
                            return n && null != (t = o.match(/version\/([\.\d]+)/i)) && (n[2] = t[1]), (n = n ? [n[1], n[2]] : [e, navigator.appVersion, "-?"])[1]
                        }
                    }, {
                        key: "checkVendorPrefix",
                        value: function() {
                            var t = {
                                ioswebview: ["-webkit-", "webkit"],
                                facebook: ["-webkit-", "webkit"],
                                samsung: ["-webkit-", "webkit"],
                                chrome: ["-webkit-", "webkit"],
                                safari: ["-webkit-", "webkit"],
                                firefox: ["-moz-", "Moz"],
                                opera: ["-o-", "O"],
                                ie: ["-ms-", "ms"]
                            };
                            for (var e in this.browser)
                                if (this.browser[e]) return this.browser.cssVendorPrefix = t[e][0], void(this.browser.jsVendorPrefix = t[e][1]);
                            this.browser.cssVendorPrefix = "", this.browser.jsVendorPrefix = ""
                        }
                    }, {
                        key: "checkVideoSupport",
                        value: function() {
                            var t = {
                                ioswebview: ["mp4", "video/mp4"],
                                facebook: ["mp4", "video/mp4"],
                                samsung: ["mp4", "video/mp4"],
                                chrome: ["mp4", "video/mp4"],
                                safari: ["mp4", "video/mp4"],
                                firefox: ["mp4", "video/mp4"],
                                opera: ["webm", "video/webm"],
                                ie: ["mp4", "video/mp4"]
                            };
                            for (var e in this.browser)
                                if (this.browser[e]) return this.browser.videoExtension = t[e][0], void(this.browser.videoType = t[e][1]);
                            this.browser.videoExtension = "mp4", this.browser.videoType = "video/mp4"
                        }
                    }, {
                        key: "checkWebGL",
                        value: function() {
                            var canvas, t, e;
                            try {
                                e = (t = (canvas = document.createElement("canvas")).getContext("webgl") || canvas.getContext("experimental-webgl")).getSupportedExtensions()
                            } catch (t) {}
                            if (void 0 !== t && (self.webgl = new Boolean(!0)), t)
                                for (var i = -1, o = e.length; ++i < o;) self.webgl[e[i]] = !0;
                            canvas = void 0
                        }
                    }, {
                        key: "uppercaseFirstLetter",
                        value: function(t) {
                            return t.charAt(0).toUpperCase() + t.slice(1)
                        }
                    }, {
                        key: "addConsole",
                        value: function() {
                            if (!window.console);
                        }
                    }]), t
                }());
            e.a = new l
        },
        67: function(t, e, o) {
            "use strict";
            o(81);
            var n = {
                    name: "Error",
                    mounted: function() {
                        var t = this;
                        this.$nuxt.$store.state.isSceneLoaded || this.$nuxt.$emit("set-loading"), setTimeout((function() {
                            t.$nuxt.$emit("on-project-loaded"), t.$nuxt.$emit("stop-scroll")
                        }), 1500)
                    }
                },
                r = (o(300), o(21)),
                component = Object(r.a)(n, (function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        attrs: {
                            id: "error-page"
                        }
                    }, [o("div", {
                        staticClass: "container no-margin lg"
                    }, [o("div", {
                        staticClass: "canvas-container"
                    }, [o("Lens3D")], 1)]), t._v(" "), o("div", {
                        staticClass: "text-container",
                        style: "en" !== t.$i18n.locale || "zh" !== t.$i18n.locale ? "font-family: 'Raleway';" : "font-family: 'Roobert';"
                    }, ["en" === t.$i18n.locale ? o("p", [t._v("\n      Sorry the page you requested was not found\n    ")]) : o("p", [t._v("\n      Nội dung bạn đang tìm kiếm không có trên website của chúng tôi\n    ")]), t._v(" "), "en" === t.$i18n.locale ? o("a", {
                        staticClass: "button--link",
                        attrs: {
                            href: "en" === t.$i18n.locale ? "http://monopo.vn/" : "http://monopo.vn/" + t.$i18n.locale
                        }
                    }, [t._v("Go Back to Home page")]) : o("a", {
                        staticClass: "button--link",
                        attrs: {
                            href: "en" === t.$i18n.locale ? "http://monopo.vn/" : "http://monopo.vn/" + t.$i18n.locale
                        }
                    }, [t._v("Trang Chủ")])])])
                }), [], !1, null, "0b60a704", null);
            e.a = component.exports;
            installComponents(component, {
                Lens3D: o(269).default
            })
        },
        71: function(t, e, o) {
            "use strict";
            o.r(e), o.d(e, "PALETTE", (function() {
                return n
            }));
            var n = {
                baseFirst: [120, 158, 113],
                accent: [0, 0, 0],
                baseSecond: [224, 148, 66],
                baseThird: [232, 201, 73],
                baseLight: 16755758,
                accentLight: 16711680
            }
        },
        97: function(t, e, o) {
            "use strict";
            o(33), o(65);
            var n = {
                getCookie: function(t) {
                    if (document.cookie.length > 0) {
                        var e = document.cookie.indexOf(t + "=");
                        if (-1 !== e) {
                            e = e + t.length + 1;
                            var o = document.cookie.indexOf(";", e);
                            return -1 === o && (o = document.cookie.length), unescape(document.cookie.substring(e, o)).replace(/'/g, "")
                        }
                    }
                    return ""
                },
                createCookie: function(t, e, o) {
                    var n;
                    if (o) {
                        var r = new Date;
                        r.setTime(r.getTime() + 24 * o * 60 * 60 * 1e3), n = "; expires=" + r.toGMTString()
                    } else n = "";
                    document.cookie = t + "=" + e + n + "; path=/"
                },
                getRandomInt: function(t, e) {
                    return t = Math.ceil(t), e = Math.floor(e), Math.floor(Math.random() * (e - t)) + t
                }
            };
            e.a = n
        }
    },
    [
        [270, 24, 4, 25]
    ]
]);
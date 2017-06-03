(function(app, $, $dom, EV, _){

    app.define("features.orbits");

    app.features.orbits = {

        active: false,

        waves: 0,

        init: function(){

            if (this.active) return;

            WD.el = $dom.body.find(".orbit-holder");

            WD.$orbits = WD.el.find(".orbit");

            WD.$imgs = WD.$orbits.find("[data-deg]");

            WD.setOrbits();

            WD.destroyImages();

            WD.el.find(".center-content").on("click", function() {
                WD.animateWave()
            });
            setInterval(function() {
                WD.animateWave(2e3)
            }, 1e4);

            this.active = true;
        },

        setOrbits: function(){
            var t = WD.el.outerWidth();

            WD.$imgs.each(function(e, a) {
                var i = $(a),
                    s = parseFloat(i.closest(".orbit").attr("data-r")) / 100 * t,
                    n = i.attr("data-deg") || 0,
                    o = i.outerWidth(),
                    r = i.outerHeight();
                i.css({
                    left: parseInt(s * Math.sin(n * Math.PI / 180), 10) + "px",
                    top: parseInt(s * -Math.cos(n * Math.PI / 180), 10) + "px",
                    marginTop: s - r / 2,
                    marginLeft: s - o / 2
                })
            })
        },

        animateWave: function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? 1200 : arguments[0];

            if (!(this.waves > 2)) {
                this.waves++;
                var a = $('<div class="orbit-wave"></div>');
                WD.el.find(".orbits").prepend(a), anime({
                    targets: a[0],
                    easing: "easeOutQuad",
                    duration: e,
                    width: ["18.916%", "102%"],
                    height: ["18.916%", "102%"],
                    opacity: {
                        value: [1, 0],
                        easing: "easeInSine",
                        duration: e - e / 3
                    },
                    complete: function() {
                        a.remove(), WD.waves--
                    }
                })
            }
        },

        destroyImages: function() {
            var t = this,
                e = WD.$imgs.closest(".candestroy").length - 1,
                a = 0;
            WD.$imgs.on("mousedown touchstart", function(i) {
                if (!$(i.target).closest("svg").hasClass("nodestroy")) {
                    $(i.target).addClass("pointerEvents-none");
                    for (var s = 60, n = [], o = 0, r = anime.random(30, 60); o <= r; o++) {
                        var d = document.createElement("div"),
                            c = {
                                el: d,
                                width: anime.random(4, 10),
                                deg: anime.random(0, 360) + "deg",
                                x: anime.random(s / 3, 1 * s) + "px"
                            };
                        n.push(c), d.className = "part", i.target.parentNode.appendChild(d), d.style.cssText = "transform: rotate(" + c.deg + ")"
                    }
                    n.forEach(function(t) {
                        anime({
                            targets: t.el,
                            duration: 350,
                            easing: "easeInOutQuad",
                            width: [0, t.width],
                            rotate: [t.deg, t.deg],
                            translateX: [0, t.x],
                            opacity: {
                                value: [.6, 0],
                                delay: 180,
                                duration: 120,
                                easing: "linear"
                            },
                            complete: function(t) {
                                t.animatables[0].target.remove()
                            }
                        })
                    }), anime({
                        targets: i.target,
                        duration: 350,
                        easing: "easeInOutQuad",
                        scale: [1, .8],
                        opacity: [1, 0],
                        complete: function() {
                            i.target.remove(), a++, a === e && (WD.el.find(".orbits").addClass("big"), t.setOrbits())
                        }
                    })
                }
            })
        }
    };

    var WD = app.features.orbits;

})(app, $, app.$dom, app.events, app.utils);

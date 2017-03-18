(function(app, $, $dom, EV, _){

    app.define("features.premium");

    app.features.premium = {

        active: false,

        init: function(options){
            var _this = this;

            if (this.active) return;

            this.options = options || {};

            this.scope = this.options.scope ? $(this.options.scope) : $dom.body;
            this.scroll = this.options.scroll ? $(this.options.scroll) : app.$dom.window;

            _.each(this.render, function(fn){
                if (_.isFunction(fn)) fn(_this);
            });

            this.active = true;
        },

        render: {

            header: function(parent){
                var $header = WD.scope.find(".ovpremium__header"),
                    $headerOverlay = $header.find(".ovpremium__header__overlay"),
                    $layers = $header.find(".ovpremium__header__layer"),
                    layers = [];

                if (!$header.length) return;

                $layers.each(function(i){
                    var $elem = $(this),
                        transform = $elem.css("transform").match(/matrix\(\d+, ?\d+, ?\d+, ?\d+, ?(\-?\d+), ?(\-?\d+)/),
                        x = transform[1],
                        y = parseInt(transform[2]) + _.random(12, 24),
                        scale = _.random(90, 105) / 100;

                    this._index = i;

                    layers.push({
                        elem: $elem,
                        transform: "translate3d(" + x + "px, " + transform[2] + "px, 0px) scale3d(1, 1, 1)"
                    });

                    $elem.css({
                        "transform": "translate3d(" + x + "px, " + y + "px, 0px) scale3d(" + scale + ", " + scale + ", 1)"
                    });
                });

                WD.headerParallax = new app.plugins.scroll.parallax({
                    scroll: WD.scroll,
                    container: $header,
                    scenario: WD.items,
                    fade: {
                        in: {
                            elem: $headerOverlay
                        }
                    }
                });

                var anim = 0;

                if (parent.options.controllerImage){
                    parent.options.controllerImage.on("image-load", (function(elem){
                        if (elem.classList[0].match(/ovpremium__header__layer/)){
                            var $layer = $(elem).parent();
                            $layer.addClass("ovpremium__header__layer--animate")
                            .css({
                                "transform": layers[$layer[0]._index].transform
                            });
                            _.onEndTransition($layer[0], function(){
                                $layer.addClass("ovpremium__header__layer--animated");
                                (function(layer){
                                    setTimeout(function(){
                                        layer.removeClass("ovpremium__header__layer--animate");
                                    }, 200);
                                })($layer);
                                anim++;
                                if (anim == layers.length){
                                    WD.headerParallax.start();
                                }
                            });
                        }
                    }));
                }
                else {
                    $.each(layers, function(){
                        var $elem = this.elem;
                        $elem.addClass("ovpremium__header__layer--animate")
                        .css({
                            "transform": this.transform,
                            "transition-delay": (_.random(0, 15) / 100) + "s"
                        });
                        _.onEndTransition($elem[0], function(){
                            $elem.addClass("ovpremium__header__layer--animated")
                            .removeClass("ovpremium__header__layer--animate")
                            .css("transition-delay", "0s");
                            anim++;
                            if (anim == layers.length){
                                WD.headerParallax.start();
                            }
                        });
                    });
                }
            },

            content: function(){
                WD.contentAnimate = new app.plugins.scroll.animate({
                    scroll: WD.scroll,
                    container: WD.scope,
                    scenario: [
                        {
                            elem: ".screens",
                            callback: function($elem, i){
                                if ($elem[0].play){
                                    setTimeout(function(){
                                        $elem[0].play.run(true);
                                    }, 1500);
                                }
                            }
                        },
                        {
                            elem: ".overview__section[data-section='stat']",
                            callback: function($elem, i){
                                WD.chartRadial.render([_.random(5, 87), _.random(5, 87), _.random(5, 87)]);
                            }
                        }
                    ]
                });

                WD.contentAnimate.start();
            },

            chart: function(){
                WD.chartRadial = new app.plugins.chartRadial(WD.scope.find(".chart__radial"), {
                    container: "chart__radial__graph mb-m",
                    labels: "chart__radial__labels c-blackLight",
                    labelItem: "chart__radial__label mb-xxs"
                });

                WD.chartRadial.render([
                    {
                        title: "настольные ПК",
                        value: _.random(5, 87)
                    },
                    {
                        title: "планшеты",
                        value: _.random(5, 87)
                    },
                    {
                        title: "мобильные телефоны",
                        value: _.random(5, 87)
                    }
                ]);
            },

            ipad: function(){
                WD.ipadParallax = new app.plugins.scroll.parallax({
                    scroll: WD.scroll,
                    scenario: [
                    {
                        container: ".slide8-1__viewport",
                        selector: ".slide8-1__screen",
                        viewports: {
                            large: {
                                fromTime: 0.07720144752714113,
                                toTime: 2.2,
                                fromX: 0,
                                toX: 0,
                                fromY: 0,
                                toY: -1500
                            }
                        }
                    }]
                });

                WD.ipadParallax.start();
            },

            screens: function(){
                WD.screens = [];

                WD.scope.find(".screens").each(function(i){
                    var screen = new app.plugins.screens(this, {
                        vertical: this.getAttribute("data-vertical") == "true" ? true : false,
                        mousewheel: false,
                        phoneEmulate: true,
                        play: {
                            round: this.getAttribute("data-round") == "true" ? true : false
                        }
                    });
                    screen.init();
                    screen.marquee.disableKeyboard();
                    if (this.getAttribute("data-autorun") == "true"){
                        this.play = screen.play;
                    }
                    WD.screens.push(screen);
                });
            },

            notebooks: function(){
                WD.notebooksParallax = new app.plugins.scroll.parallax({
                    scroll: WD.scroll,
                    scenario: [
                    {
                        container: ".overview__section[data-section='finish']",
                        selector: ".slide11-1",
                        viewports: {
                            large: {
                                fromTime: 0,
                                toTime: 1,
                                fromX: 0,
                                toX: 0,
                                fromY: 100,
                                toY: -150
                            }
                        }
                    }]
                });

                WD.notebooksParallax.start();
            }
        },

        destroy: function(){
            this.headerParallax.destroy();
            this.contentAnimate.destroy();
            this.chartRadial.destroy();
            if (this.screens){
                _.each(this.screens, function(screen){
                    screen.destroy();
                });
            }
            this.active = false;
        },
        items: [
        {
            selector: ".ovpremium__header__layer1",
            viewports: {
                large: {
                    fromTime: .07720144752714113,
                    toTime: 1,
                    fromX: -645,
                    toX: -645,
                    fromY: -70,
                    toY: -1300
                },
                medium: {
                    fromX: -500,
                    toX: -500,
                    fromY: 50
                },
                small: {
                    fromX: -148,
                    toX: -148,
                    fromY: -18,
                    toY: -1e3,
                    fromTime: 0
                }
            }
        }, {
            selector: ".ovpremium__header__layer2",
            viewports: {
                large: {
                    fromTime: 0,
                    toTime: 1,
                    fromX: -323,
                    toX: -323,
                    fromY: -245,
                    toY: -1700
                },
                medium: {
                    fromX: -252,
                    toX: -252,
                    fromY: -95
                },
                small: {
                    fromX: -148,
                    toX: -148,
                    fromY: 276,
                    toY: -600,
                    fromTime: 0
                }
            }
        }, {
            selector: ".ovpremium__header__layer3",
            viewports: {
                large: {
                    fromTime: .033,
                    toTime: 1,
                    fromX: 0,
                    toX: 0,
                    fromY: -110,
                    toY: -1e3
                },
                medium: {
                    fromY: -187
                },
                small: {
                    fromY: 28,
                    fromX: 0,
                    toX: 0,
                    toY: -480,
                    fromTime: 0
                }
            }
        }, {
            selector: ".ovpremium__header__layer4",
            viewports: {
                large: {
                    fromTime: 0,
                    toTime: 1,
                    fromX: 582,
                    toX: 582,
                    fromY: 466,
                    toY: -400
                },
                medium: {
                    fromX: 450,
                    toX: 450,
                    fromY: 462,
                    fromTime: .033,
                    toY: -400
                },
                small: {
                    fromX: 118,
                    toX: 118,
                    fromY: 834,
                    fromTime: 0,
                    toY: -200,
                    toTime: 1
                }
            }
        }, {
            selector: ".ovpremium__header__layer5",
            viewports: {
                large: {
                    fromTime: .077,
                    toTime: 1,
                    fromX: -645,
                    toX: -645,
                    fromY: 567,
                    toY: -300
                },
                medium: {
                    fromX: -500,
                    toX: -500,
                    fromY: 540
                },
                small: {
                    toX: 148,
                    fromX: 148,
                    fromY: -68,
                    toY: -1650,
                    fromTime: 0
                }
            }
        }, {
            selector: ".ovpremium__header__layer6",
            viewports: {
                large: {
                    fromTime: 0,
                    toTime: 1,
                    fromX: -323,
                    toX: -323,
                    fromY: 392,
                    toY: -800
                },
                medium: {
                    toX: -252,
                    fromX: -252,
                    fromY: 396
                },
                small: {
                    fromX: -148,
                    toX: -148,
                    fromY: 606,
                    toY: -400,
                    fromTime: 0
                }
            }
        }, {
            selector: ".ovpremium__header__layer7",
            viewports: {
                large: {
                    fromTime: .033,
                    toTime: 1,
                    fromX: 0,
                    toX: 0,
                    fromY: 527,
                    toY: 0
                },
                medium: {
                    fromY: 535
                },
                small: {
                    toY: -460,
                    fromY: 484,
                    fromTime: 0
                }
            }
        }, {
            selector: ".ovpremium__header__layer8",
            viewports: {
                large: {
                    fromTime: 0,
                    toTime: 1,
                    fromX: 323,
                    toX: 323,
                    fromY: -175,
                    toY: -1200
                },
                medium: {
                    fromX: 252,
                    toX: 252,
                    fromY: -38,
                    toY: -1200,
                    fromTime: .033
                },
                small: {
                    toX: 148,
                    fromX: 148,
                    fromY: 226,
                    fromTime: 0,
                    toY: -1200
                }
            }
        }, {
            selector: ".ovpremium__header__layer9",
            viewports: {
                large: {
                    fromTime: 0,
                    toTime: 1,
                    fromX: 645,
                    toX: 645,
                    fromY: -268,
                    toY: -900
                },
                medium: {
                    fromX: 500,
                    toX: 500,
                    fromY: -126,
                    fromTime: .033,
                    toY: -600
                },
                small: {
                    fromX: -148,
                    toX: -148,
                    fromY: 896,
                    toY: 0,
                    fromTime: 0,
                    toTime: 1
                }
            }
        }, {
            selector: ".ovpremium__header__layer10",
            viewports: {
                large: {
                    fromTime: 0,
                    toTime: 1,
                    fromX: -323,
                    toX: -323,
                    fromY: 1126,
                    toY: -200
                },
                medium: {
                    toX: -252,
                    fromX: -252,
                    fromY: 974,
                    toY: -400
                },
                small: {
                    fromX: 148,
                    toX: 148,
                    fromY: 520,
                    fromTime: 0,
                    toY: -800
                }
            }
        }]
    };

    var WD = app.features.premium;

})(app, $, app.$dom, app.events, app.utils);

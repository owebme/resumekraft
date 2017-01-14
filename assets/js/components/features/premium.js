(function(app, $, $dom, EV, _){

    app.define("features.premium");

    app.features.premium = {

        active: false,

        init: function(scroll, scope){

            if (this.active) return;

            this.scope = scope ? $(scope) : $dom.body;
            this.scroll = scroll ? $(scroll) : app.$dom.window;

            var _this = this,
                $header = this.scope.find(".premium__header"),
                $headerOverlay = $header.find(".premium__header__overlay"),
                $layers = $header.find(".premium__header__layer"),
                layers = [];

            $layers.each(function(){
                var $elem = $(this),
                    transform = $elem.css("transform").match(/matrix\(\d+, ?\d+, ?\d+, ?\d+, ?(\-?\d+), ?(\-?\d+)/),
                    x = transform[1],
                    y = parseInt(transform[2]) + _.random(12, 24),
                    scale = _.random(90, 105) / 100;

                layers.push({
                    elem: $elem,
                    transform: "translate3d(" + x + "px, " + transform[2] + "px, 0px) scale3d(1, 1, 1)"
                });

                $elem.css({
                    "transform": "translate3d(" + x + "px, " + y + "px, 0px) scale3d(" + scale + ", " + scale + ", 1)"
                });
            });

            this.headerParallax = new app.plugins.scroll.parallax({
                scroll: this.scroll,
                container: $header,
                scenario: this.items,
                fade: {
                    in: {
                        elem: $headerOverlay
                    }
                }
            });

            var anim = 0;

            $.each(layers, function(){
                var $elem = this.elem;
                $elem.addClass("premium__header__layer--animate")
                .css({
                    "transform": this.transform,
                    "transition-delay": (_.random(0, 15) / 100) + "s"
                });
                _.onEndTransition($elem[0], function(){
                    $elem.addClass("premium__header__layer--animated")
                    .removeClass("premium__header__layer--animate")
                    .css("transition-delay", "0s");
                    anim++;
                    if (anim == layers.length){
                        _this.headerParallax.start();
                    }
                });
            });

            this.contentAnimate = new app.plugins.scroll.animate({
                scroll: this.scroll,
                container: this.scope
            });

            this.contentAnimate.start();

            this.chartRadial = new app.plugins.chartRadial(this.scope.find(".chart__radial"), {
                container: "chart__radial__graph mb-m",
                labels: "chart__radial__labels c-blackLight",
                labelItem: "chart__radial__label mb-xxs"
            });

            this.chartRadial.render([
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

            this.active = true;
        },
        destroy: function(){
            this.headerParallax.destroy();
            this.contentAnimate.destroy();
            this.chartRadial.destroy();
            this.active = false;
        },
        items: [
        {
            selector: ".premium__header__layer1",
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
            selector: ".premium__header__layer2",
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
            selector: ".premium__header__layer3",
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
            selector: ".premium__header__layer4",
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
            selector: ".premium__header__layer5",
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
            selector: ".premium__header__layer6",
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
            selector: ".premium__header__layer7",
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
            selector: ".premium__header__layer8",
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
            selector: ".premium__header__layer9",
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
            selector: ".premium__header__layer10",
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

(function(app, $, $dom, EV, _){

    app.define("sections.premium");

    app.sections.premium = {

        init: function(){

            this.el = $dom.body.children("overview-premium");

            if (this.el.length) this.render();
        },

        render: function(){
            $afterlag.run(function(){

                var $layers = WD.el.find(".premium__header__layer"),
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

                $.each(layers, function(){
                    this.elem.addClass("premium__header__layer--animate")
                    .css({
                        "transform": this.transform,
                        "transition-delay": (_.random(0, 15) / 100) + "s"
                    });
                });

                var scrollAnimate = new app.plugins.scroll.animate({
                    scroll: app.$dom.window,
                    container: app.$dom.body
                });

                scrollAnimate.start();

                var chartRadial = new app.plugins.chartRadial(WD.el.find(".chart__radial"), {
                    container: "chart__radial__graph mb-m",
                    labels: "chart__radial__labels c-blackLight",
                    labelItem: "chart__radial__label mb-xxs"
                });

                chartRadial.render([
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
            });
        }
    };

    var WD = app.sections.premium;

})(app, $, app.$dom, app.events, app.utils);

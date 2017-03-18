(function(app, $, $dom, EV, _){

    app.define("sections.home");

    app.sections.home = {

        init: function(){

            this.el = $dom.body.children("section-home");

            if (this.el.length) this.render();
        },

        render: function(){

            var $sectionFunctions = WD.el.find('.home__functions'),
                offsetTop = $sectionFunctions.offset().top,
                animHeader = new app.plugins.animate(WD.el.find('.home__header')),
                animFunctions = new app.plugins.animate($sectionFunctions, {
                    showAfter: 1
                });

            animHeader.show();

            app.$dom.window.on("scroll.animFunctions", function(){
                var scroll = app.$dom.document.scrollTop() + (app.sizes.height / 1.3);
                if (scroll > offsetTop){
                    app.$dom.window.off("scroll.animFunctions");
                    animFunctions.show();
                }
            });

            var scrollAnimate = new app.plugins.scroll.animate({
                scroll: app.$dom.window,
                container: app.$dom.body
            });

            scrollAnimate.start();

            var scrollParallax = new app.plugins.scroll.parallax({
                scroll: app.$dom.window,
                scenario: [
                {
                    container: ".home__section1__phone__viewport",
                    selector: ".home__section1__phone__screen",
                    viewports: {
                        large: {
                            fromTime: 0.67,
                            toTime: 2.9,
                            fromX: 0,
                            toX: 0,
                            fromY: 0,
                            toY: -1000
                        }
                    }
                },
                {
                    container: ".home__section2__ipad__viewport",
                    selector: ".home__section2__ipad__screen",
                    viewports: {
                        large: {
                            fromTime: 0.15,
                            toTime: 3.2,
                            fromY: 0,
                            toY: -1000
                        }
                    }
                }
                ]
            });

            scrollParallax.start();

            $afterlag.run(function(){
                WD.el.find('#video').removeClass("display-none");
            });

            var imagesLoaded = new app.plugins.imagesLoaded();

            imagesLoaded.on("complete", function(){
                app.sections.trigger("ready");
            });

            imagesLoaded.load({
                timeout: 2000
            });

            app.metrika.set("views.home", 1, {
                action: "inc"
            })
        }
    };

    var WD = app.sections.home;

})(app, $, app.$dom, app.events, app.utils);

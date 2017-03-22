(function(app, $, $dom, EV, _){

    app.define("sections.home");

    app.sections.home = {

        init: function(){

            this.el = $dom.body.children("section-home");

            if (this.el.length) this.render();
        },

        render: function(){

            WD.imagesLoaded();

            WD.header();

            WD.screenVideo();

            WD.scrollAnimate();

            WD.scrollParallax();

            app.metrika.set("views.home", 1, {
                action: "inc"
            })
        },

        imagesLoaded: function(){

            var imagesLoaded = new app.plugins.imagesLoaded();

            imagesLoaded.once("complete", function(){
                $afterlag.run(function(){
                    app.sections.trigger("ready");
                });
            });

            imagesLoaded.load({
                timeout: 5000
            });
        },

        header: function(){
            var $sectionFunctions = WD.el.find('.home__functions'),
                animHeader = new app.plugins.animate(WD.el.find('.home__header'));

            WD.offsetFn = $sectionFunctions.offset().top;
            WD.animFunctions = new app.plugins.animate($sectionFunctions, {
                showAfter: 1
            });

            animHeader.show();

            $dom.window.on("scroll.animFunctions", function(){
                _.raf(WD._scroll);
            });
        },

        _scroll: function(){
            var scroll = $dom.document.scrollTop() + (app.sizes.height / 1.3);
            if (scroll > WD.offsetFn){
                _.caf(WD._scroll);
                $dom.window.off("scroll.animFunctions");
                WD.animFunctions.show();
            }
        },

        scrollAnimate: function(){
            var scrollAnimate = new app.plugins.scroll.animate({
                scroll: $dom.window,
                container: $dom.body
            });

            scrollAnimate.start();
        },

        scrollParallax: function(){
            var scrollParallax = new app.plugins.scroll.parallax({
                scroll: $dom.window,
                items: [
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
        },

        screenVideo: function(){
            var video = WD.el.find("#video")[0];

            function checkLoad() {
                 if (video.readyState === 4) {
                     video.setAttribute("data-show", true);
                 } else {
                     setTimeout(checkLoad, 100);
                 }
            }
            checkLoad();
        }
    };

    var WD = app.sections.home;

})(app, $, app.$dom, app.events, app.utils);

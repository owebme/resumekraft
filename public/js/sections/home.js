(function(app, $, $dom, EV, _){

    app.define("sections.home");

    app.sections.home = {

        init: function(){

            this.el = $dom.body.children("section-home");

            if (this.el.length) this.render();
        },

        render: function(){

            WD.imagesLoaded();

            WD.screenVideo();

            $afterlag.run(function(){

                WD.header();

                WD.scrollAnimate();

                WD.scrollParallax();

                WD.createAccount();
            }, {
                timeout: 1000,
                delay: app.device.isIE ? 1000 : null
            });

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
                WD.raf = _.raf(WD._scroll);
            });
        },

        _scroll: function(){
            var scroll = $dom.document.scrollTop() + (app.sizes.height / 1.3);
            if (scroll > WD.offsetFn){
                _.caf(WD.raf);
                $dom.window.off("scroll.animFunctions");
                WD.animFunctions.show();
            }
        },

        scrollAnimate: function(){
            var scrollAnimate = new app.plugins.scroll.animate({
                scroll: $dom.window,
                container: WD.el
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

            var bgParallax = new app.plugins.scroll.ParallaxController({
                items: [
                    {
                        selector: ".bgParallax",
                        from: 100,
                        to: -150,
                        off: 0
                    }
                ]
            });

            bgParallax.start();

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
        },

        createAccount: function(){

            WD.el.on("click", ".createAccount", function(){
                var plan = this.getAttribute("data-plan");
                app.tag("section-auth").open("signup", plan);
            });
        }
    };

    var WD = app.sections.home;

})(app, $, app.$dom, app.events, app.utils);

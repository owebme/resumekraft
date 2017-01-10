(function(app, $, $dom, EV, _){

    app.define("sections.home");

    app.sections.home = {

        init: function(){

            this.el = $dom.body.children("section-home");

            if (this.el.length) this.render();
        },

        render: function(){

            if (app.device.isPhone) app.screens.init();

            if (!app.device.isMobile){
                $afterlag.run(function(){

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
                });
            }
            else {
                var video = document.getElementById('video'),
                    play = false;

                document.addEventListener('touchstart', function(event) {
                    if (!play) {
                        play = true;
                        video.play();
                    }
                }, false);
            }
        }
    };

    var WD = app.sections.home;

})(app, $, app.$dom, app.events, app.utils);

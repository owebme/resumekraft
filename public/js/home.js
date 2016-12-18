(function(app, $, $dom, EV, _){

    app.define("sections.home");

    app.sections.home = {

        init: function(){

            this.el = $dom.body.find("section-home");

            if (this.el) this.render();
        },

        render: function(){

            if (app.device.isPhone) app.screens.init();

            if (!app.device.isMobile){
                setTimeout(function(){

                    var animHeader = new app.plugins.animate(WD.el.find('.home__header'));

                    animHeader.show();

                    var animFunctions = new app.plugins.animate(WD.el.find('.home__functions'), {
                        showAfter: 1
                    });

                    animFunctions.show();

                    var scrollAnimate = new app.plugins.scroll.animate({
                        scroll: app.$dom.window,
                        container: app.$dom.body
                    });

                    scrollAnimate.start();

                }, 100);
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

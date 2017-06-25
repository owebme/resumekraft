(function(app, $, $dom, EV, _){

    app.define("sections.gift");

    app.sections.gift = {

        init: function(){

            this.el = $dom.body.children("section-gift");

            if (this.el.length) this.render();
        },

        render: function(){

            WD.fireworks();

            WD.phone();

            // $afterlag.run(function(){
            //     WD.audio("/public/sound/applause.mov");
            // });

            WD.animButton(WD.el.find(".code__button")[0]);
        },

        phone: function(){
            var $screens = WD.el.find(".screens"),
                slide = $screens.attr("data-slide");
                $nav = $screens.prev();

            WD.slider = new app.plugins.screens($screens[0], {
                vertical: false,
                mousewheel: false,
                phoneEmulate: true,
                play: {
                    run: false,
                    interval: 5
                }
            });
            WD.slider.init();
            WD.slider.marquee.disableKeyboard();
            if (slide) WD.slider.nav(parseInt(slide));

            setTimeout(function(){
                $screens.find(".screen").on('show', function(e){
                    $nav.attr("data-color", _.shuffle($store.colors.get())[0]._id);
                });
            }, 1000);
        },

        fireworks: function(){
            WD.fireworksCtrl = app.features.fireworks.init(WD.el.find(".fireworks")[0]);

            var $menu = WD.el.find(".menu");

            document.addEventListener("readystatechange", function(){
                if (document.readyState === "complete"){
                    WD.fireworksCtrl.setCanvasSize();

                    $afterlag.run(function(){

                        _.onEndTransition($menu[0], function(){
                            WD.pulseButton();
                            WD.slider.play.run();
                            WD.fireClick(WD.fireClickStep);
                        });

                        WD.el.attr("data-show", true);
                    });
                }
            });
        },

        pulseButton: function(){
            $afterlag.xs(function(){
                WD.animButton.hover();
                setTimeout(function(){
                    WD.animButton.down();
                }, 1000);
            });
        },

        fireClick: function(step){
            var cords = WD.fireClickMap[step];
            WD.fireworksCtrl.animateParticules(cords.x, cords.y);

            setTimeout(function(){
                WD.fireClickStep += 1;
                if (WD.fireClickMap.length > WD.fireClickStep){
                    WD.fireClick(WD.fireClickStep);
                }
            }, WD.fireClickStep === WD.fireClickMap.length - 2 ? 800 : 200 + 50 * WD.fireClickStep);
        },

        fireClickStep: 0,

        fireClickMap: [
            {
                x: app.sizes.width * 0.2,
                y: 380
            },
            {
                x: app.sizes.width * 0.5,
                y: 320
            },
            {
                x: app.sizes.width * 0.6,
                y: 150
            },
            {
                x: app.sizes.width * 0.15,
                y: 80
            },
            {
                x: app.sizes.width * 0.25,
                y: 320
            }
        ],

        animButton: function(el){
            var pathEl = el.querySelector('path');
            var spanEl = el.querySelector('span');

            WD.animButton.hover = function() {
                anime.remove([pathEl, spanEl]);
                anime({
                    targets: pathEl,
                    d: 'M10,10 C10,10 60,7 90,7 C130,7 170,10 170,10 C170,10 172,20 172,30 C172,40 170,60 170,60 C170,60 130,63 90,63 C50,63 10,60 10,60 C10,60 8,40 8,30 C8,20 10,10 10,10 Z',
                    elasticity: 700,
                    offset: 0
                });
                anime({
                    targets: spanEl,
                    scale: 1.15,
                    duration: 800,
                    offset: 0
                });
            }
            WD.animButton.down = function() {
                anime.remove([pathEl, spanEl]);
                anime({
                    targets: pathEl,
                    d: 'M10,10 C10,10 60,9.98999977 90,9.98999977 C130,9.98999977 170,10 170,10 C170,10 170.009995,20 170.009995,30 C170.009995,40 170,60 170,60 C170,60 130,60.0099983 90,60.0099983 C50,60.0099983 10,60 10,60 C10,60 9.98999977,40 9.98999977,30 C9.98999977,20 10,10 10,10 Z',
                    elasticity: 700,
                    offset: 0
                });
                anime({
                    targets: spanEl,
                    scale: 1,
                    duration: 800,
                    offset: 0
                });
            }
            el.onmouseenter = WD.animButton.hover;
            el.onmousedown = WD.animButton.down;
            el.onmouseleave = WD.animButton.down;
        },

        audio: function(file){
            app.$dom.body.append('<audio src="' + file + '" autoplay>');
        }
    };

    var WD = app.sections.gift;

})(app, $, app.$dom, app.events, app.utils);

(function(app, $, $dom, EV, _){

    app.define("workflow.tutorial");

    app.workflow.tutorial = {

        active: false,

        currentScreen: "cover",

        previousScreen: null,

        init: function(){
            WD.el = $(".tutorial__screens");

            WD.screens = WD.el.find(".tutorial__screens__items");
            WD.num = WD.el.find(".tutorial__screens__num__items");
            WD.lens = WD.el.find(".scroll__lens");
            WD.scrollHelp = WD.el.find(".scroll__help");

            WD.observer();
            WD.render();
        },

        show: function(){
            if (WD.active) return;

            $dom.body.attr("data-theme", "dark");
            $dom.body.attr("data-tutorial", true);

            $afterlag.s(function(){
                WD.screens.find(".tutorial__screen:first")
                .attr("data-active", true);
                $afterlag.xl(function(){
                    WD.detectZone();
                });
                WD.active = true;
            });
        },

        embeds: {

            active: false,

            show: function(){
                WD.embeds.active = true;
                $dom.body.attr("data-tutorial-help", true);
            },

            hide: function(){
                WD.embeds.active = false;
                $dom.body.attr("data-tutorial-help", false);
            }
        },

        detectZone: function(){
            if (!WD.embeds.active){
                if (app.device.isMobile){
                    WD.embeds.show();
                }
                else {
                    var offset = app.workflow.control.device.el.offset(),
                        width = app.workflow.control.device.el.width();

                    if (offset.left <= app.cords.x && (offset.left + width) >= app.cords.x){
                        WD.embeds.show();
                    }
                }
            }
        },

        render: function(){
            $dom.body.find(".tutorial__close").on("click", function(){
                WD.hide();
            });

            WD.el.find(".tutorial__screen__button__hide").on("click", function(){
                WD.hide();
            });

            if (!app.device.isMobile){
                app.cords = {};
                $dom.document.on("mousemove.metrika", function(e){
                    _.raf(function(){
                        app.cords.x = e.pageX;
                        app.cords.y = e.pageY;
                    })
                });
            }
        },

        hide: function(){
            if (!WD.active) return;

            $dom.body.attr("data-tutorial", false);
            WD.embeds.hide();

            WD.screens.find(".tutorial__screen[data-active=true]")
            .attr("data-active", false);

            WD.active = false;
            WD.help = false;

            _.onEndTransition(WD.lens[0], function(){
                $dom.body.removeAttr("data-tutorial");
                $dom.body.attr("data-help", true);
                $dom.body.attr("data-theme", "white");
                app.workflow.control.device.scrollTo("cover");
            });
        },

        observer: function(){
            $dom.window.on("message", function(e){
                var data = e.originalEvent.data;
                if (data && data.screen){

                    WD.previousScreen = WD.currentScreen;
                    WD.currentScreen = data.screen;

                    if (!WD.active) return;

                    var $screen = WD.screens.find(".tutorial__screen[data-screen='" + WD.currentScreen + "']");
                    $screen.attr("data-active", true)
                    .siblings()
                    .attr("data-active", false);

                    if (WD.currentScreen === "likes"){
                        $dom.body.attr("data-tutorial", "finish");
                    }
                    else {
                        var num = parseInt($screen.index()) + 1;
                        WD.num.text(num < 10 ? "0" + num : num);

                        if (WD.previousScreen === "likes"){
                            $dom.body.attr("data-tutorial", true);
                        }
                    }
                }
            });
        }
    };

    var WD = app.workflow.tutorial;

})(app, $, app.$dom, app.events, app.utils);

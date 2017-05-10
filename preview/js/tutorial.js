(function(app, $, $dom, EV, _){

    app.define("workflow.tutorial");

    app.workflow.tutorial = {

        active: false,

        help: false,

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
                WD.active = true;
            });
        },

        render: function(){
            $dom.body.find(".tutorial__close").on("click", function(){
                WD.hide();
            });

            WD.el.find(".tutorial__screen__button__hide").on("click", function(){
                WD.hide();
            });
        },

        hide: function(){
            if (!WD.active) return;

            $dom.body.attr("data-tutorial", false);
            $dom.body.attr("data-tutorial-help", false);

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
                if (data && data.screen && WD.active){

                    WD.previousScreen = WD.currentScreen;
                    WD.currentScreen = data.screen;

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

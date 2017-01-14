(function(app, $, $dom, EV, _){

    app.define("sections.home");

    app.sections.home = {

        theme: "blue",

        init: function(){

            this.el = $dom.body.children("section-home-mobile");

            if (this.el.length) this.render();
        },

        render: function(){

            WD.screens = new app.plugins.screens(this.el, {
                dataAttr: "section"
            });
            WD.screens.init(5);

            var $screen = WD.el.find(".screen");

            $screen.on('show', function(e){
                var theme = $(this).data("theme"),
                    theme = theme ? theme : "blue";

                if (WD.theme != theme){
                    WD.el.attr("data-theme", theme);
                    WD.theme = theme;
                }
            });

            // var video = document.getElementById('video'),
            //     play = false;
            //
            // document.addEventListener('touchstart', function(event) {
            //     if (!play) {
            //         play = true;
            //         video.play();
            //     }
            // }, false);
        }
    };

    var WD = app.sections.home;

})(app, $, app.$dom, app.events, app.utils);

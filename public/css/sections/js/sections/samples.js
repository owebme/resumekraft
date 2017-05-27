(function(app, $, $dom, EV, _){

    app.define("sections.samples");

    app.sections.samples = {

        init: function(){

            this.el = $dom.body.children("section-samples");

            if (this.el.length) this.render();
        },

        render: function(){

            WD.content();
            WD.waves();

            app.metrika.set("views.samples", 1, {
                action: "inc"
            })
        },

        content: function(){

            WD.el.find(".samples__nav__select").on("click", function(){
                var $item = $(this),
                    show = $item.attr("data-show");

                $item.attr("data-show", show == "true" ? false : true);
            });

            var options = new app.plugins.scroll.content(WD.el.find(".samples__nav__options"));
            options.init();
        },

        waves: function(){
            Waves.attach('[data-ripple]');
            Waves.init();
        }
    };

    var WD = app.sections.samples;

})(app, $, app.$dom, app.events, app.utils);

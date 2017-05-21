(function(app, $, $dom, EV, _){

    app.define("sections.samples");

    app.sections.samples = {

        init: function(){

            this.el = $dom.body.children("section-samples");

            if (this.el.length) this.render();
        },

        render: function(){

            WD.content();

            WD.ripple = new app.plugins.ripple();

            app.metrika.set("views.samples", 1, {
                action: "inc"
            })
        },

        content: function(){

        }
    };

    var WD = app.sections.samples;

})(app, $, app.$dom, app.events, app.utils);

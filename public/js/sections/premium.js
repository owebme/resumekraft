(function(app, $, $dom, EV, _){

    app.define("sections.premium");

    app.sections.premium = {

        init: function(){

            this.el = $dom.body.children("overview-premium");

            if (this.el.length) this.render();
        },

        render: function(){

            app.features.navbar.init();

            var imagesLoaded = new app.plugins.imagesLoaded();

            app.features.premium.init({
                imagesLoaded: imagesLoaded
            });

            imagesLoaded.once("complete", function(){
                $afterlag.run(function(){
                    app.sections.trigger("ready");
                });
            });

            app.metrika.set("views.premium", 1, {
                action: "inc"
            })
        }
    };

    var WD = app.sections.premium;

})(app, $, app.$dom, app.events, app.utils);

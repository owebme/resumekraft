(function(app, $, $dom, EV, _){

    app.define("sections.premium");

    app.sections.premium = {

        init: function(){

            this.el = $dom.body.children("overview-premium");

            if (this.el.length) this.render();
        },

        render: function(){
            $afterlag.run(function(){

                app.features.premium.init();
                app.features.navbar.init();

            });
        }
    };

    var WD = app.sections.premium;

})(app, $, app.$dom, app.events, app.utils);

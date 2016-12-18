(function(app, $, $dom, EV, _){

    app.define("sections.nav");

    app.sections.nav = {

        init: function(){

            this.el = $dom.body.find("section-nav");

            if (this.el) this.render();
        },

        render: function(){

            this.el.find("#openAuth").on("click", function(){
                app.tag("section-auth").open("signin");
            });
        }
    };

    var WD = app.sections.nav;

})(app, $, app.$dom, app.events, app.utils);

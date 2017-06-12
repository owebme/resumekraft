(function(app, $, $dom, EV, _){

    app.define("sections.premium");

    app.sections.premium = {

        init: function(){

            this.el = $dom.body.children("overview-premium");

            if (this.el.length) this.render();
        },

        render: function(){

            WD.auth = WD.el.attr("data-auth") == "true" ? true : false;

            var imagesLoaded = new app.plugins.imagesLoaded();

            app.features.premium.init({
                scope: WD.el,
                imagesLoaded: imagesLoaded
            });

            imagesLoaded.once("complete", function(){
                $afterlag.run(function(){
                    app.sections.on("afterMounted", function(){
                        app.tag("section-player", function(tag){
                            app.features.premium.player = tag;
                        });
                    });
                    app.sections.trigger("ready");
                });
            });

            WD.createAccount();

            app.metrika.set("views.premium", 1, {
                action: "inc"
            })
        },

        createAccount: function(){

            WD.el.on("click", ".createAccount", function(){
                var period = this.getAttribute("data-period") || "month1";
                if (WD.auth){
                    _.opener("/private/?plan=premium&period=" + period);
                }
                else {
                    app.tag("section-auth").open("signup", "premium");
                    app.metrika.set("plan.period", period);
                }
            });
        }
    };

    var WD = app.sections.premium;

})(app, $, app.$dom, app.events, app.utils);

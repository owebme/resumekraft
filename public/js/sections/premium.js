(function(app, $, $dom, EV, _){

    app.define("sections.premium");

    app.sections.premium = {

        init: function(){

            this.el = $dom.body.children("overview-premium");

            if (this.el.length) this.render();
        },

        render: function(){
            var ready = 0,
                isShow = false;

            app.features.navbar.init();

            var imagesLoaded = new app.plugins.imagesLoaded();

            app.features.premium.init({
                controllerImage: imagesLoaded
            });

            imagesLoaded.on("complete", function(){
                $afterlag.run(function(){
                    app.sections.trigger("ready");
                });
            });

            // imagesLoaded.on("image-load", (function(){
            //     ready += 1;
            //     if (!isShow && ready > 7){
            //         isShow = true;
            //         app.features.premium.init();
            //     }
            // }));

            imagesLoaded.load({
                timeout: 2000
            });

            app.metrika.set("views.premium", 1, {
                action: "inc"
            })
        }
    };

    var WD = app.sections.premium;

})(app, $, app.$dom, app.events, app.utils);

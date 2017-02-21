(function(app, $, $dom, EV, _){

    app.define("features.links");

    app.features.links = {

        active: false,

        init: function(){

            if (this.active) return;

            $dom.body.on("click", "a", function(e){
                var link = this.getAttribute("href");
                if (link && link != "#" && !link.match(/http:/)){
                    app.tag("section-loader").show();
                }
            });

            this.active = true;
        }
    };

    var WD = app.features.links;

})(app, $, app.$dom, app.events, app.utils);

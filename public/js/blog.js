(function(app, $, $dom, EV, _){

    app.define("sections.blog");

    app.sections.blog = {

        init: function(){

            this.el = $dom.body.find("section-blog");

            if (this.el) this.render();
        },

        render: function(){

            var scrollAnimate = new app.plugins.scroll.animate({
                scroll: $dom.window,
                container: WD.el.find(".blog__grid"),
                delta: "xs"
            });

            scrollAnimate.start();

            var animHeader = new app.plugins.animate(WD.el.find(".blog__header"), {
                showAfter: 1
            });

            animHeader.show();

            if (typeof Skycons !== 'undefined'){
                var skycons = new Skycons(
                    {"color": "#fff"},
                    {"resizeClear": true}
                );
                skycons.add("blog__grid__weather__canvas", Skycons.PARTLY_CLOUDY_NIGHT);
                skycons.play();
            };

            var $shareButton = WD.el.find(".blog__shareButton");

            $shareButton.on("mouseenter mouseleave", function(e){
                if (e.type === "mouseenter"){
                    WD.el.attr("data-overlay", "true");
                }
                else {
                    WD.el.attr("data-overlay", "false");
                }
            });
        }
    };

    var WD = app.sections.blog;

})(app, $, app.$dom, app.events, app.utils);

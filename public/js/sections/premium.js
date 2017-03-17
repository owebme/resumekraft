(function(app, $, $dom, EV, _){

    app.define("sections.premium");

    app.sections.premium = {

        init: function(){

            this.el = $dom.body.children("overview-premium");

            if (this.el.length) this.render();
        },

        render: function(){

            $dom.body.addClass("no-scroll").scrollTop(0);

            var $loader = this.el.find(".overview__loader"),
                $percent = $loader.find(".overview__loader__percent")[0],
                $progress = $loader.find(".overview__loader__progress"),
                progress;

            app.loader.images(this.el,
            function(e){
                $loader.attr("data-complete", true);
                $dom.body.removeClass("no-scroll");
                app.features.premium.init();
                app.features.navbar.init();
            },
            function(ready, total){
                progress = parseInt(100 * (ready / total));
                $progress.css("transform", "translate3d(-50%, " + (100 - progress) + "%, 0)");
                $percent.innerHTML = progress + "<span>%</span>";
            });
        }
    };

    var WD = app.sections.premium;

})(app, $, app.$dom, app.events, app.utils);

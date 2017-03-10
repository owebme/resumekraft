(function(app, $, $dom, EV, _){

    app.define("sections.jobs");

    app.sections.jobs = {

        init: function(){

            if (app.device.isPhone) return;

            this.el = $dom.body.children(".section.jobs");

            if (this.el.length) this.render();
        },

        render: function(){

            $dom.root = this.el;

            $Sections = new app.plugins.define("$Sections");

            if (!Store.get("vacancyFavorites")){
                Store.set("vacancyFavorites", []);
            }

            app.sections.on("afterMounted", function(){

                app.tag("ui-dropmenu", function(tag){
                    window.$dropMenu = tag;
                });

                if (WD.el.find("vacancy-panel-btn-favorite-side").length && $store.jobs.item){
                    riot.mount("vacancy-panel-btn-favorite-side", "vacancy-panel-btn-favorite", {
                        item: $store.jobs.item
                    });
                }
            });
        }
    };

    var WD = app.sections.jobs;

})(app, $, app.$dom, app.events, app.utils);

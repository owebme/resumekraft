(function(app, $, $dom, EV, _){

    app.define("sections");

    app.sections = {

        init: function(){
            if (app.plugins.eventsEmitter) app.plugins.eventsEmitter.init(this);

            if (app.device.isPhone && !location.href.match(/\/jobs\//)){
                $dom.body.removeClass("appLoading");
                app.features.links.init();
            }
            _.each(app.sections, function(item){
                if (item.init) item.init();
            });
        }
    };

})(app, $, app.$dom, app.events, app.utils);

(function(app, $, $dom, EV, _){

    app.define("sections");

    app.sections = {

        init: function(){
            _.each(app.sections, function(item){
                if (item.init) item.init();
            });
            if (app.device.isPhone){
                $dom.body.removeClass("appLoading");
                app.features.links.init();
            }
        }
    };

})(app, $, app.$dom, app.events, app.utils);

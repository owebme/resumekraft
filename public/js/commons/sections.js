(function(app, $, $dom, EV, _){

    app.define("sections");

    app.sections = {

        init: function(options){
            var options = options || {};

            if (app.plugins.eventsEmitter) app.plugins.eventsEmitter.init(this);

            if (_.isFunction(options.beforeInit)) options.beforeInit();

            _.each(app.sections, function(item){
                if (item.init) item.init();
            });

            if (_.isFunction(options.afterInit)) options.afterInit();
        }
    };

})(app, $, app.$dom, app.events, app.utils);

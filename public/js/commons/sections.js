(function(app, $, $dom, EV, _){

    app.define("sections");

    app.sections = {

        init: function(options){
            var options = options || {};

            $Sections = new app.plugins.define("$Sections");
            $Screens = new app.plugins.define("$Screens");

            if (_.isFunction(options.beforeInit)) options.beforeInit();

            _.each(app.sections, function(item){
                if (item.init) item.init();
            });

            if (_.isFunction(options.afterInit)) options.afterInit();
        }
    };

    _.extend(app.sections, new app.commons.EventEmitterMicro());

})(app, $, app.$dom, app.events, app.utils);

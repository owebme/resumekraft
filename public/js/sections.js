(function(app, $, $dom, EV, _){

    app.sections = {

        init: function(){
            _.each(app.sections, function(item){
                if (item.init) item.init();
            });
        }
    };

})(app, $, app.$dom, app.events, app.utils);

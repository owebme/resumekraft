(function(app, $, $dom, EV, _){

    app.sections = {

        init: function(){
            _.each(app.sections, function(item){
                if (item.init) item.init();
            });
            if (app.device.isPhone){
                $afterlag.run(function(){
                    $dom.body.removeClass("appLoading");
                }, {
                    timeout: 5000
                });
            }
        }
    };

})(app, $, app.$dom, app.events, app.utils);

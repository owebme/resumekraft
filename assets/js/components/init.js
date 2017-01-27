(function(){

    riot.compile(function(){
        if (app.fetch){
            app.fetch("getDataInit").then(function(){
                init();
            });
        }
        else {
            init();
        }
    });

    var init = function(){
        app.$dom.root = $('<root-main' + (app.device.isPhone ? '-mobile' : '') + ' id="app"/>').prependTo(app.$dom.body);
        riot.mount("*");
    }

})();

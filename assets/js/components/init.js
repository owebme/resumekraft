(function(){

    riot.compile(function(){
        if (app.fetch){
            app.fetch("getDataInit").then(function(){
                riot.mount("*");
            });
        }
        else {
            riot.mount("*");
        }
    });

})();

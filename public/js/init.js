(function(){

    app.$dom.window.on("load", function(){
        riot.compile(function(e){
            riot.mount("*", {app: true});
        });
    });

    app.sections.init();

})();

(function(){

    riot.compile(function(e){
        riot.mount("*", {app: true});
    });
    
    app.metrika = new app.plugins.metrika({
        key: "public",
        data: app.metrics.public
    });

    app.sections.init();

})();

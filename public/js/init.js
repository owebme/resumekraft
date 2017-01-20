(function(){

    riot.compile(function(e){
        riot.mount("*", {app: true});
    });

    app.sections.init();
    app.metrika = new app.plugins.metrika({
        key: "public",
        data: app.metrics.public
    });

})();

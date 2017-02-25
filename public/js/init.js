(function(){

    app.metrika = new app.plugins.metrika({
        key: "public",
        data: app.metrics.public
    });

    app.sections.init();

    riot.compile(function(e){
        app.sections.trigger("beforeMounted");
        riot.mount("*", {app: true});
        app.sections.trigger("afterMounted");
    });

})();

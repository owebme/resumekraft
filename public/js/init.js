(function(){

    if (location.href.match(/\/jobs\//)){
        app.metrika = new app.plugins.metrika({
            key: "jobs",
            data: app.metrics.jobs
        });
    }
    else {
        app.metrika = new app.plugins.metrika({
            key: "public",
            data: app.metrics.public
        });
    }

    app.sections.init();

    riot.compile(function(e){
        app.sections.trigger("beforeMounted");

        riot.mount("*", {app: true});

        app.sections.trigger("afterMounted");

        app.tag("section-notify", function(tag){
            $Notify = tag;
        });
    });

})();

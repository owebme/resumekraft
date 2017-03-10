(function(app, $, $dom, _){

    var start = new Date().getTime();
    console.time("process");

    app.metrika = new app.plugins.metrika({
        key: "jobs",
        data: app.metrics.jobs
    });

    app.plugins.eventsEmitter.init($store.jobs.favorites);

    app.sections.init();

    if (app.device.isPhone){
        app.sections.on("beforeMounted", function(){
            $dom.body.removeClass("appLoading");
        })
    }

    riot.compile(function(e){
        app.sections.trigger("beforeMounted");

        riot.mount("*", {renderClient: true});

        app.sections.trigger("afterMounted");

        app.tag("section-notify", function(tag){
            $Notify = tag;
        });

        console.timeEnd("process");
        var elapsed = new Date().getTime() - start;
        //alert(elapsed + "ms");
    });

})(app, $, app.$dom, app.utils);

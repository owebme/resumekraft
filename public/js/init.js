(function(app, $, $dom, _){

    var start = new Date().getTime();
    console.time("process");

    app.metrika = new app.plugins.metrika({
        key: "public",
        data: app.metrics.public
    });

    if (app.device.isPhone){
        $dom.body.removeClass("appLoading");
        app.features.links.init();
    }

    app.sections.init();

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

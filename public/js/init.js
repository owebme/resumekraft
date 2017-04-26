(function(app, $, $dom, _){

    var start = new Date().getTime();
    console.time("process");

    app.isSite = true;

    app.metrika = new app.plugins.metrika({
        key: "public",
        data: app.metrics.public
    });

    if (!app.metrika.get("referer")){
        app.metrika.set("referer", document.referrer);
    }

    app.sections.once("endLoading", function(){
        $dom.body.removeClass("appLoading");
        app.features.links.init();
    });

    app.sections.once("ready", function(){
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
    });

    app.sections.init();
    app.features.navbar.init();

    if (app.config.changeStyles){
        if (app.device.isPhone){
            app.plugins.styles.init({
                elem: "#styles",
                default: "normal",
                screens: [
                    {
                        title: "small",
                        maxWidth: 360,
                        path: "/public/css/style.mobile.smallScreen.css"
                    },
                    {
                        title: "normal",
                        minWidth: 360,
                        maxWidth: 767,
                        path: "/public/css/style.mobile.css"
                    },
                    {
                        title: "tablet",
                        minWidth: 768,
                        reload: true
                    }
                ]
            });
        }
        else {
            app.plugins.styles.init({
                elem: "#styles",
                default: "normal",
                screens: [
                    {
                        title: "small",
                        maxWidth: 767,
                        reload: true
                    }
                ]
            });
        }
    }

})(app, $, app.$dom, app.utils);

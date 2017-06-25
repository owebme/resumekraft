(function(app, $, $dom, EV, _){

    app.define("workflow.control");

    app.workflow.control = {

        init: function(){
            WD.device.render();
        },

        device: {

            render: function(){
                WD.device.el = $("#device");
                WD.device.switcher = $(".control__device");
                WD.device.container = WD.device.el.find(".frame-container");
                WD.device.loader = WD.device.el.find(".loader");
                WD.device.loaderBg = WD.device.loader.find(".loader-bg");

                if (app.device.isMobile){
                    WD.device.switcher.find(".help__text")
                    .text("Версия для планшетов");

                    WD.device.switcher.on("click", function(){
                        _.opener("/premium/demo");
                    });
                }
                else {
                    WD.device.switcher.on("click", function(){
                        var device = $State.get("device");
                        if (device == "phone"){
                            WD.device.change(device, "desktop");
                        }
                        else if (device == "desktop"){
                            WD.device.change(device, "tablet");
                        }
                        else if (device == "tablet"){
                            WD.device.change(device, "phone");
                        }
                    });
                }
            },

            onLoad: function(callback){
                WD.device.loadedFrame = false;

                WD.device.frame.one("load", function(){
                    app.$dom.window.one("message", function(e){
                        var data = e.originalEvent.data;
                        if (data && data == "ready"){
                            if (window.$idhh){
                                app.tag("resume-import").request(window.$idhh);
                                window.$idhh = null;
                            }
                            else {
                                WD.device.afterLoad();
                            }
                            if (callback) callback();
                            clearTimeout(WD.device.waitLoadFrame);
                        }
                    });
                });
                WD.device.waitLoadFrame = setTimeout(function(){
                    WD.device.afterLoad();
                }, 5000);
            },

            load: function(){
                if (!WD.device.frame){
                    WD.device.frame = $('<iframe id="frame" src="/premium/demo" frameborder="none"/>').prependTo(WD.device.container);

                    WD.device.onLoad(function(){
                        app.workflow.tutorial.show();
                    });

                    WD.device.frame.on("mouseenter mouseleave", function(e){
                        if (e.type === "mouseenter"){
                            if (app.workflow.tutorial.active && !app.workflow.tutorial.embeds.active){
                                app.workflow.tutorial.embeds.show();
                            }
                            app.workflow.tutorial.scrollHelp.attr("data-text", "down");
                        }
                        else if (e.type === "mouseleave"){
                            app.workflow.tutorial.scrollHelp.attr("data-text", "up");
                        }
                    });
                }
                else {
                    WD.device.frame[0].contentWindow.postMessage({
                        photo: "/public/images/samples/" + $State.get("photo") + ".jpg"
                    }, '*');
                    WD.device.scrollTo("cover");
                    app.$dom.body.removeClass('apploading');
                    app.workflow.tutorial.show();
                }
            },

            afterLoad: function(){
                if (!WD.device.loadedFrame){
                    if (app.workflow.control.color){
                        app.workflow.control.color.change($State.get("color"));
                    }
                    // if (app.workflow.control.font){
                    //     app.workflow.control.font.change($State.get("font"));
                    // }
                    WD.device.frame[0].contentWindow.postMessage({
                        photo: "/public/images/samples/" + $State.get("photo") + ".jpg"
                    }, '*');
                    $dom.body.removeClass('apploading');
                    WD.device.loadedFrame = true;
                }
            },

            change: function(previousScreen, currentDevice){
                var previousScreen = _.findWhere(WD.screens, {"device": previousScreen}),
                    screen = _.findWhere(WD.screens, {"device": currentDevice}),
                    scaleX = screen.width() / previousScreen.width(),
                    scaleY = screen.height() / previousScreen.height();

                WD.device.loader.attr("data-device", currentDevice);

                if (currentDevice != "phone"){
                    $dom.body.attr("data-help", false);
                }
                if (previousScreen.device == "phone" && app.tag("section-notify").active) {
                    app.tag("section-notify").hide();
                }

                $dom.body.addClass('apploading');

                _.onEndTransition(WD.device.loader[0], function(){
                    $afterlag.xl(function(){
                        WD.device.loaderBg.attr("data-resize", true)
                        .css("transform", "translate3d(0, 0, 0) scale3d("+ scaleX +", "+ scaleY +", 1)");

                        _.onEndTransition(WD.device.loaderBg[0], function(){
                            WD.device.loaderBg.attr("data-resize", false)
                            .css("transform", "translate3d(0, 0, 0)");

                            $dom.body.attr("data-device", currentDevice);
                            $State.select("device").set(currentDevice);
                            WD.device.frame[0].contentDocument.location.reload(true);

                            WD.device.onLoad();
                        });
                    });
                });
            },

            scrollTo: function(screen){
                if (screen === undefined) return;
                WD.device.frame[0].contentWindow.postMessage({
                    scrollTo: screen,
                    scrollDuration: app.device.isMobile ? 0 : undefined
                }, '*');
            }
        },

        screens: [
            {
                device: 'desktop',
                width: function(){
                    return app.sizes.width;
                },
                height: function(){
                    return app.sizes.height;
                }
            },
            {
                device: 'tablet',
                width: function(){
                    return 1024;
                },
                height: function(){
                    return app.sizes.height < 640 ? app.sizes.height : app.sizes.height < 760 ? 640 : app.sizes.height < 780 ? 700 : 740;
                }
            },
            {
                device: 'phone',
                width: function(){
                    return app.sizes.height < 760 ? 375 : 414;
                },
                height: function(){
                    return app.sizes.height < 640 ? app.sizes.height : app.sizes.height < 760 ? 640 : 736;
                }
            }
        ]
    };

    var WD = app.workflow.control;

})(app, $, app.$dom, app.events, app.utils);

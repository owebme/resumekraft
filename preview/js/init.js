(function(){

    if (app.device.isPhone){
        location.replace("/premium/demo");
        return;
    }
    else if (location.href.match(/\?hh\=.{38}/)){
        window.$idhh = location.href.match(/\?hh\=(.{38})/)[1];
    }

    var isStart = false,
        $body = app.$dom.body,
        $control = {
            device: $(".control__device"),
            colors: $(".control__colors")
        },
        $device = $("#device"),
        $container = $device.find(".frame-container"),
        $loader = $device.find(".loader"),
        $loaderBg = $loader.find(".loader-bg"),
        $share = $(".button__like"),
        $menu = $(".menu"),
        $scrollHelp = $(".scroll__help"),
        $btnImport = $(".button__import__item"),
        $tutorial = $(".tutorial__screens");

    $tutorial.screens = $tutorial.find(".tutorial__screens__items");
    $tutorial.num = $tutorial.find(".tutorial__screens__num__items");
    $share.opener = $share.find(".button__like__opener"),
    $menu.opener = $(".menu__opener");
    $menu.close = $menu.find(".menu__close");

    $State = new Baobab({
        device: "phone",
        color: "#0084ff"
    },
    { autoCommit: true });

    $body.attr({
        "data-device": $State.get("device"),
        "data-color": $State.get("color")
    });

    _.bbUpdate($State, function(prop, value, e){
        if (prop == "color"){
            $body.attr("data-color", value);
            changeColor(value);
        }
        if (prop == "device" && value == "phone"){
            $body.attr("data-help", true);
        }
    });

    var screens = [
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
    ];

    $menu.opener.on("click", function(){
        $menu.attr("data-open", true);
        _.onEndTransition($menu.close[0], function(){
            $menu.attr("data-showed", true);
        });
    });

    $menu.close.on("click", function(){
        $menu.attr("data-showed", false);
        $menu.attr("data-open", false);
    });

    $share.opener.on("click", function(){
        $share.attr("data-open", true);
    });

    $btnImport.on("click", function(){
        app.tag("resume-import").show();
    });

    if (app.device.isMobile){
        $control.device.find(".help__text")
        .text("Версия для планшетов");

        $control.device.on("click", function(){
            _.opener("/premium/demo");
        });
    }
    else {
        $control.device.on("click", function(){
            var device = $State.get("device");
            if (device == "phone"){
                changeDevice(device, "desktop");
            }
            else if (device == "desktop"){
                changeDevice(device, "tablet");
            }
            else if (device == "tablet"){
                changeDevice(device, "phone");
            }
        });
    }

    $control.colors.on("click", function(){
        var item = $store.colors
            .select({'_id': $State.get('color')})
            .right();

        if (!item) item = $store.colors.get(0);
        else item = item.get()

        $State.select("color").set(item._id);
    });

    var frameOnLoad = function(callback){
        window.loadedFrame = false;
        $frame.one("load", function(){
            app.$dom.window.one("message", function(e){
                var data = e.originalEvent.data;
                if (data && data == "ready"){
                    if (window.$idhh){
                        app.tag("resume-import").request(window.$idhh);
                        window.$idhh = null;
                    }
                    else {
                        changeColor($State.get("color"));
                        $body.removeClass('apploading');
                    }
                    if (callback) callback();
                    clearTimeout(window.waitLoadFrame);
                    window.loadedFrame = true;
                }
            });
        });
        window.waitLoadFrame = setTimeout(function(){
            if (!window.loadedFrame){
                $body.removeClass('apploading');
                $body.attr("data-help", true);
            }
        }, 5000);
    };

    var changeColor = function(value){
        $frame[0].contentWindow.postMessage({
            color: value
        }, '*');
    };

    var changeDevice = function(previousScreen, currentDevice){
        var previousScreen = _.findWhere(screens, {"device": previousScreen}),
            screen = _.findWhere(screens, {"device": currentDevice}),
            scaleX = screen.width() / previousScreen.width(),
            scaleY = screen.height() / previousScreen.height();

        $loader.attr("data-device", currentDevice);

        if (currentDevice != "phone"){
            $body.attr("data-help", false);
        }
        if (previousScreen.device == "phone" && app.tag("section-notify").active) {
            app.tag("section-notify").hide();
        }

        $body.addClass('apploading');

        _.onEndTransition($loader[0], function(){
            $afterlag.xl(function(){
                $loaderBg.attr("data-resize", true)
                .css("transform", "translate3d(0, 0, 0) scale3d("+ scaleX +", "+ scaleY +", 1)");

                _.onEndTransition($loaderBg[0], function(){
                    $loaderBg.attr("data-resize", false)
                    .css("transform", "translate3d(0, 0, 0)");

                    $body.attr("data-device", currentDevice);
                    $State.select("device").set(currentDevice);
                    $frame[0].contentDocument.location.reload(true);

                    frameOnLoad();
                });
            });
        });
    };

    window.$frame = $('<iframe id="frame" src="/premium/demo" frameborder="none"/>').prependTo($container);

    frameOnLoad(function(){
        $body.attr("data-help", true);
    });

    $frame.on("mouseenter mouseleave", function(e){
        if (e.type === "mouseenter"){
            $scrollHelp.attr("data-text", "down");
        }
        else if (e.type === "mouseleave"){
            $scrollHelp.attr("data-text", "up");
        }
    });

    new app.plugins.share($share, {
        buttons: '.button__like__item',
        url: app.domain() + "/premium/",
        share: {
            title: "Премиальное резюме нового формата на ResumeKraft.ru"
        }
    });

    var currentScreen = "cover",
        previousScreen = null;

    app.$dom.window.on("message", function(e){
        var data = e.originalEvent.data;
        if (data && data.screen){
            previousScreen = currentScreen;
            currentScreen = data.screen;
            var $screen = $tutorial.screens.find(".tutorial__screen[data-screen='" + currentScreen + "']");
            $screen.attr("data-active", true)
            .siblings()
            .attr("data-active", false);

            if (currentScreen === "likes"){
                $body.attr("data-tutorial", "finish");
            }
            else {
                var num = parseInt($screen.index()) + 1;
                $tutorial.num.text(num < 10 ? "0" + num : num);

                if (previousScreen === "likes"){
                    $body.attr("data-tutorial", true);
                }
            }
        }
    });

    riot.compile(function(e){
        riot.mount("*");
    });

})();

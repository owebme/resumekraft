(function(){

    if (app.device.isMobile){
        location.replace("/premium/editing");
        return;
    }

    var $body = app.$dom.body,
        $control = {
            device: $(".control__device"),
            colors: $(".control__colors")
        },
        $device = $("#device"),
        $container = $device.find(".frame-container"),
        $frame = $('<iframe id="frame" src="/premium/editing?demo=true" frameborder="none"/>').prependTo($container),
        $loader = $device.find(".loader"),
        $loaderBg = $loader.find(".loader-bg"),
        $share = $(".button__like"),
        $menu = $(".menu");

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
                return app.sizes.height < 640 ? app.sizes.height : 640;
            }
        },
        {
            device: 'phone',
            width: function(){
                return 375;
            },
            height: function(){
                return app.sizes.height < 640 ? app.sizes.height : 640;
            }
        }
    ];

    $menu.opener.on("click", function(){
        $menu.attr("data-open", true);
    });

    $menu.close.on("click", function(){
        $menu.attr("data-open", false);
    });

    $share.opener.on("click", function(){
        $share.attr("data-open", true);
    });

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

    $control.colors.on("click", function(){
        var item = $store.colors
            .select({'_id': $State.get('color')})
            .right();

        if (!item) item = $store.colors.get(0);
        else item = item.get()

        $State.select("color").set(item._id);
    });

    var frameOnLoad = function(callback){
        $frame.one("load", function(){
            app.$dom.window.one("message", function(e){
                var data = e.originalEvent.data;
                if (data && data == "ready"){
                    changeColor($State.get("color"));
                    $body.removeClass('apploading');
                    if (callback) callback();
                }
            });
        });
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

    frameOnLoad(function(){
        $body.attr("data-help", true);
    });

    new app.plugins.share($share, {
        buttons: '.button__like__item',
        share: {
            title: "Премиальное резюме на ResumeKraft.ru"
        }
    });

    riot.compile(function(e){
        riot.mount("*");
    });

})();

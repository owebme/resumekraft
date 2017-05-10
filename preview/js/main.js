(function(app, $, $dom, EV, _){

    app.define("workflow");

    app.workflow = {

        isStart: false,

        init: function(){
            if (app.device.isPhone){
                location.replace("/premium/demo");
                return;
            }
            else if (location.href.match(/\?hh\=.{38}/)){
                window.$idhh = location.href.match(/\?hh\=(.{38})/)[1];
            }

            window.$State = new Baobab({
                device: "phone",
                color: "#0084ff",
                font: null
            },
            { autoCommit: true });

            WD.observer();
            WD.render();
            WD.share();
        },

        observer: function(){

            _.bbUpdate($State, function(prop, value, e){
                if (prop == "color"){
                    $dom.body.attr("data-color", value);
                }
                if (prop == "device" && value == "phone"){
                    $dom.body.attr("data-help", true);
                }
            });
        },

        render: function(){

            riot.compile(function(e){
                riot.mount("*");
            });

            $dom.body.attr({
                "data-device": $State.get("device"),
                "data-color": $State.get("color")
            });

            var $menu = $(".menu"),
                $btnImport = $(".button__import__item");

            $menu.opener = $(".menu__opener");
            $menu.close = $menu.find(".menu__close");

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

            $btnImport.on("click", function(){
                app.tag("resume-import").show();
            });

            app.workflow.control.init();
            app.workflow.tutorial.init();

            $afterlag.run(function(){
                app.tag("prof-list", function(tag){
                    tag.show();
                });
            });
        },

        onSelect: function(){
            app.workflow.control.device.load();
        },

        share: function(){
            new app.plugins.share($(".button__like"), {
                buttons: '.button__like__item',
                url: app.domain() + "/premium/",
                share: {
                    title: "Премиальное резюме нового формата на ResumeKraft.ru"
                }
            });
        }
    };

    var WD = app.workflow;

})(app, $, app.$dom, app.events, app.utils);

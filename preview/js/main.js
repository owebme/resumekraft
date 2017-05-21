(function(app, $, $dom, EV, _){

    app.define("workflow");

    app.workflow = {

        active: false,

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
                photo: "1",
                color: "#0084ff",
                font: "futura"
            },
            { autoCommit: true });

            WD.observer();
            WD.render();
            WD.share();

            WD.ripple = new app.plugins.ripple();
        },

        start: function(){
            if (WD.active) return;

            $afterlag.run(function(){
                app.tag("prof-list", function(tag){
                    tag.show();
                    WD.active = true;
                });
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
                $audio = $("#audio"),
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

            if ($audio.length){
                $audio[0].volume = 0.3;
            }

            WD.start();
        },

        onSelect: function(id){
            $State.select('photo').set(id);
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
        },

        observer: function(){

            _.bbUpdate($State, function(prop, value, e){
                if (prop == "color"){
                    $dom.body.attr("data-color", value);
                }
                if (prop == "device" && value == "phone"){
                    $dom.body.attr("data-help", true);
                }
                if (prop == "photo"){
                    app.workflow.profOpener.update({
                        id: value
                    });
                }
            });
        }
    };

    var WD = app.workflow;

})(app, $, app.$dom, app.events, app.utils);

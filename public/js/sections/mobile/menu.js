(function(app, $, $dom, EV, _){

    app.define("sections.menu");

    app.sections.menu = {

        init: function(){

            this.el = $dom.body.find(".menu");

            if (this.el.length) this.render();
        },

        render: function(){

            var $menu = this.el,
                $auth = null;

            $menu.opener = $dom.body.find(".menu__opener");
            $menu.close = $menu.find(".menu__close");

            $menu.opener.on("click", function(){
                $menu.attr("data-open", true);
            });

            $menu.close.on("click", function(){
                $menu.attr("data-open", false);
            });

            $menu.find(".menu__item__link[data-event]").on("click", function(){
                app.tag("section-auth").open($(this).attr("data-event"));
                if (!WD.$auth) WD.auth();
            });
        },

        auth: function(){
            var focused = false;

            WD.$auth = $(app.tag("section-auth").root);

            WD.$auth.find("input[type=text]").on("focus blur", function(e){
                if (e.type == "focus"){
                    focused = true;
                    if (WD.$auth) WD.$auth.attr("data-focused", true);
                }
                else {
                    focused = false;
                    if (WD.$auth) WD.$auth.attr("data-focused", false);
                }
            });
        }
    };

    var WD = app.sections.menu;

})(app, $, app.$dom, app.events, app.utils);

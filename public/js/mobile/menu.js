(function(app, $, $dom, EV, _){

    app.define("sections.menu");

    app.sections.menu = {

        init: function(){

            this.el = $dom.body.find(".menu");

            if (this.el.length) this.render();
        },

        render: function(){

            var $menu = this.el;

            $menu.opener = $dom.body.find(".menu__opener");
            $menu.close = $menu.find(".menu__close");

            $menu.opener.on("click", function(){
                $menu.attr("data-open", true);
            });

            $menu.close.on("click", function(){
                $menu.attr("data-open", false);
            });
        }
    };

    var WD = app.sections.menu;

})(app, $, app.$dom, app.events, app.utils);

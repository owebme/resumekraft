(function(app, $, $dom, EV, _){

    app.define("sections.nav");

    app.sections.nav = {

        init: function(){

            WD.el = app.$dom.body.find(".main__nav:first");

            if (WD.el.length) WD.render();
        },

        render: function(){
            var $dropmenu = WD.el.find("global-dropmenu"),
                $wrapper = $dropmenu.find("global-menu")[0],
                $opener = WD.el.find(".main__nav__menu__opener");

            $opener.on("click", function(){
                var value = $dropmenu.attr("data-open") == "true" ? true : false;
                $dropmenu.attr("data-open", !value);
                $opener.attr("data-active", !value);
            })

            $dropmenu.on("click", function(e){
                if (!$wrapper.contains(e.target)){
                    $dropmenu.attr("data-open", false);
                    $opener.attr("data-active", false);
                }
            });
        }
    };

    var WD = app.sections.nav;

})(app, $, app.$dom, app.events, app.utils);

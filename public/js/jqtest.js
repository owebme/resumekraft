(function(app, $, $dom, EV, _){

    app.define("sections.jqtest");

    app.sections.jqtest = {

        init: function(){

            this.el = $dom.body.children("section-jqtest");

            if (this.el.length) this.render();
        },

        render: function(){
            $afterlag.run(function(){
                var animate = new app.plugins.animate(WD.el, {
                    showAfter: 2,
                    hide: "noanimate"
                });

                animate.show();
            });
        }
    };

    var WD = app.sections.jqtest;

})(app, $, app.$dom, app.events, app.utils);

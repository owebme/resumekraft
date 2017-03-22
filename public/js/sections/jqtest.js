(function(app, $, $dom, EV, _){

    app.define("sections.jqtest");

    app.sections.jqtest = {

        init: function(){

            this.el = $dom.body.children("section-jqtest");

            if (this.el.length) this.render();
        },

        render: function(){

            $dom.root = this.el;

            $afterlag.run(function(){
                var animate = new app.plugins.animate(WD.el, {
                    showAfter: 2,
                    hide: "noanimate"
                });
                animate.show(function(){
                    app.sections.trigger("ready");
                });
            });

            var $button = WD.el.find(".btn-primary");

            app.sections.once("afterMounted", function(){
                $button.on("click", function(){
                    $Sections.jqtest.test.show();
                });
            });

            app.metrika.set("views.jqtest", 1, {
                action: "inc"
            })
        }
    };

    var WD = app.sections.jqtest;

})(app, $, app.$dom, app.events, app.utils);

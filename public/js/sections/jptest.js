(function(app, $, $dom, EV, _){

    app.define("sections.jptest");

    app.sections.jptest = {

        init: function(){

            this.el = $dom.body.children("section-jptest");

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

            app.sections.once("afterMounted", function(){
                app.features.jptest.init({
                    button: WD.el.find(".btn-primary")
                })
            });

            app.metrika.set("views.jptest", 1, {
                action: "inc"
            })
        }
    };

    var WD = app.sections.jptest;

})(app, $, app.$dom, app.events, app.utils);

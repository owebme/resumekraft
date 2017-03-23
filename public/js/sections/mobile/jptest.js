(function(app, $, $dom, EV, _){

    app.define("sections.jptest");

    app.sections.jptest = {

        init: function(){

            this.el = $dom.body.children("section-jptest-mobile");

            if (this.el.length) this.render();
        },

        render: function(){

            $dom.root = this.el;

            app.sections.once("afterMounted", function(){
                WD.el.find(".btn-xl").on("click", function(){
                    $Sections.jptest.test.show();
                });
                if (location.hash.match(/run/)){
                    $Sections.jptest.test.show();
                }
                app.sections.trigger("endLoading");
            });

            app.sections.trigger("ready");

            app.metrika.set("views.jptest", 1, {
                action: "inc"
            })
        }
    };

    var WD = app.sections.jptest;

})(app, $, app.$dom, app.events, app.utils);

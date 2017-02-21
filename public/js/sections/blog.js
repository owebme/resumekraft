(function(app, $, $dom, EV, _){

    app.define("sections.blog");

    app.sections.blog = {

        init: function(){

            this.el = $dom.body.children("section-blog");

            if (this.el.length) this.render();
        },

        render: function(){

            var scrollAnimate = new app.plugins.scroll.animate({
                scroll: $dom.window,
                container: WD.el.find(".blog__grid"),
                delta: "xs"
            });

            scrollAnimate.start();

            var animHeader = new app.plugins.animate(WD.el.find(".blog__header"), {
                showAfter: 1
            });

            animHeader.show();

            if (typeof Skycons !== 'undefined'){
                var skycons = new Skycons(
                    {"color": "#fff"},
                    {"resizeClear": true}
                );
                skycons.add("blog__grid__weather__canvas", Skycons.PARTLY_CLOUDY_NIGHT);
                skycons.play();
            };

            WD.share();

            WD.subscribe();
        },

        share: function(){
            $.shareButton = WD.el.find(".blog__shareButton");

            $.shareButton.on("mouseenter mouseleave", function(e){
                if (e.type === "mouseenter"){
                    WD.el.attr("data-overlay", "true");
                }
                else {
                    WD.el.attr("data-overlay", "false");
                }
            });

            new app.plugins.share($.shareButton, {
                buttons: ".blog__shareButton__item",
                dataAttr: "share"
            });
        },

        subscribe: function(){
            var $el = WD.el.find(".blog__subscribe");

            if (!app.metrika.get("offers.popup.blog.subscribe.success")){
                $afterlag.run(function(){
                    var $form = $("<blog-subscribe-form>").appendTo($el.find(".blog__subscribe__form")),
                        tag = riot.mount($form)[0];

                    tag.one("success fail", function(){
                        $el.remove();
                    })
                });
            }
            else {
                $el.remove();
            }
        }
    };

    var WD = app.sections.blog;

})(app, $, app.$dom, app.events, app.utils);

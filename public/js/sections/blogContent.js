(function(app, $, $dom, EV, _){

    app.define("sections.blogContent");

    app.sections.blogContent = {

        init: function(){

            this.el = $dom.body.children("blog-content");

            if (this.el.length) this.render();
        },

        render: function(){
            var delta = $dom.document.height() - app.sizes.height * 2,
                $buttons = WD.el.find(".blog__social__panel[data-pos='left']"),
                show = false;

            $dom.window.on("scroll", function(){
                if (this.scrollY > app.sizes.height && this.scrollY < delta && !show){
                    show = true;
                    $buttons.attr("data-active", "true");
                }
                else if ((this.scrollY < app.sizes.height || this.scrollY > delta) && show){
                    show = false;
                    $buttons.attr("data-active", "false");

                    if (!WD.popup.active && WD.popup.tag){
                        WD.popup.active = true;
                        WD.popup.tag.show();
                    }
                }
            });

            this.share();

            this.popup.mount();
        },

        share: function(){
            new app.plugins.share(WD.el.find(".blog__social__panel"), {
                buttons: ".blog__social__panel__item",
                dataAttr: "share"
            });
        },

        popup: {

            active: false,

            mount: function(){
                $afterlag.run(function(){
                    if (!app.metrika.get("offers.popup.blog.subscribe.show")){
                        var $popup = $("<popup-blog-subscribe style='display:none'>").appendTo(app.$dom.body),
                            tag = riot.mount($popup)[0];

                        tag.one("updated", function(){
                            WD.popup.tag = tag;
                        });
                    }
                    else {
                        WD.popup.active = true;
                    }
                });
            }
        }
    };

    var WD = app.sections.blogContent;

})(app, $, app.$dom, app.events, app.utils);

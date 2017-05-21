(function(app, $, $dom, EV, _){

    app.define("sections.blogArticle");

    app.sections.blogContent = {

        init: function(){

            this.el = $dom.body.children("blog-article");

            if (this.el.length) this.render();
        },

        render: function(){

            WD.content();

            WD.parallax();

            WD.arrowTop();

            WD.arrowBack();

            WD.share();

            $afterlag.run(function(){
                WD.socialPanel();
            });
        },

        content: function(){
            var scrollAnimate = new app.plugins.scroll.animate({
                container: WD.el.find(".blog__article"),
                delta: "xs"
            });

            scrollAnimate.start();
        },

        parallax: function(){

            WD.el.find(".blog__article__content img").each(function(){
                var image = this;
                _.onLoadImage(image.getAttribute("src"), function(){
                    var parallax = new app.plugins.scroll.ParallaxController({
                        items: [
                            {
                                elem: image,
                                from: -30,
                                to: 30,
                                off: 0,
                                clipOptions: {
                                    ease: "easeInOutCubic"
                                }
                            }
                        ]
                    });
                    parallax.start();
                });
            });
        },

        arrowTop: function(){

            WD.el.find("btn-arrow-top").on("click", function(){
                var top = $dom.document.scrollTop(),
                duration = top / 5;
                duration = duration < 500 ? 500 : duration;

                $dom.body.animate({scrollTop: 0}, duration);
            });
        },

        arrowBack: function(){
            var $button = WD.el.find("btn-arrow-back"),
                hidden = false;

            $dom.window.on("scroll.arrowBack", function(){
                if (this.scrollY > 0 && !hidden){
                    hidden = true;
                    $button.attr("data-hidden", true);
                }
                else if (this.scrollY == 0 && hidden){
                    hidden = false;
                    $button.attr("data-hidden", false);
                }
            });
        },

        socialPanel: function(){
            var height = WD.el.find(".blog__article").height(),
                delta = height - app.sizes.height * 2,
                $buttons = WD.el.find(".blog__social__panel[data-pos='left']"),
                show = false;

            if (height / app.sizes.height > 5.5){
                $dom.window.on("scroll.socialPanel", function(){
                    if (this.scrollY > app.sizes.height && this.scrollY < delta && !show){
                        show = true;
                        $buttons.attr("data-active", true);
                    }
                    else if ((this.scrollY < app.sizes.height || this.scrollY > delta) && show){
                        show = false;
                        $buttons.attr("data-active", false);
                    }
                });
            }
        },

        share: function(){
            new app.plugins.share(WD.el.find(".blog__article__header__share"), {
                buttons: ".blog__grid__item__share__link",
                dataAttr: "item"
            });

            new app.plugins.share(WD.el.find(".blog__social__panel"), {
                buttons: ".blog__social__panel__item",
                dataAttr: "share"
            });
        }
    };

    var WD = app.sections.blogContent;

})(app, $, app.$dom, app.events, app.utils);

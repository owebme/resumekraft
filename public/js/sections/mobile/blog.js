(function(app, $, $dom, EV, _){

    app.define("sections.blog");

    app.sections.blog = {

        init: function(){

            this.el = $dom.body.children("section-blog-mobile");

            if (this.el.length) this.render();
        },

        render: function(){

            new app.plugins.scroll.refreshFix(this.el);

            this.$nav = this.el.find("section-nav-blog-mobile");

            if (this.$nav.length) this.nav();

            var scrollAnimate = new app.plugins.scroll.animate({
                scroll: $dom.window,
                container: WD.el.find(".blog__grid"),
                delta: "xxs"
            });

            scrollAnimate.start();

            WD.imagesLoader();

            app.metrika.set("views.blog", 1, {
                action: "inc"
            })
        },

        imagesLoader: function(){
            var imagesLoaded = new app.plugins.imagesLoaded();

            imagesLoaded.on("complete", function(){
                app.sections.trigger("ready");
            });

            imagesLoaded.load({
                timeout: 10000
            });
        },

        nav: function(){
            var scrolling = false,
                showTitle = false,
                scrollOffset = app.sizes.height;

            $dom.window.on('scroll', function(){
                if (!scrolling){
                    scrolling = true;
                    _.raf(autoHideHeader);
                }
            });

            function autoHideHeader(){
                var scrollTop = $dom.window.scrollTop();
                if (scrollTop > scrollOffset && !showTitle){
                    WD.$nav.attr('data-turn', true);
                    showTitle = true;
                }
                else if (scrollTop < scrollOffset && showTitle) {
                    WD.$nav.removeAttr('data-turn');
                    showTitle = false;
                }
                scrolling = false;
            }
        }
    };

    var WD = app.sections.blog;

})(app, $, app.$dom, app.events, app.utils);

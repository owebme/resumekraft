(function(app, $, $dom, EV, _){

    app.define("sections.blog");

    app.sections.blog = {

        init: function(){

            this.el = $dom.body.children("section-blog");

            if (this.el.length) this.render();
        },

        render: function(){

            WD.grid = WD.el.find(".blog__grid");

            WD.content();

            WD.loading();

            WD.arrowTop();

            WD.share();

            app.metrika.set("views.blog", 1, {
                action: "inc"
            })
        },

        content: function(){
            WD.showItems = new app.plugins.scroll.animate({
                container: WD.el.find(".blog__grid"),
                delta: "xs"
            });

            WD.showItems.start();
        },

        loading: function(){
            var height = $dom.document.height(),
                page = parseInt(WD.el.attr("data-page")),
                pages = parseInt(WD.el.attr("data-pages")),
                $loader = WD.el.find(".loading"),
                show = false;

            if (page != pages){
                $dom.window.on("scroll.preloader", function(){
                    if (!show && (this.scrollY + app.sizes.height > height - 40)){
                        show = true;
                        page += 1;
                        if (page <= pages){
                            $loader.attr("data-active", true);
                            app.request("getBlogItems", page).then(function(data){
                                var $items = $('<div>').appendTo(WD.grid);
                                var tag = riot.mount($items[0], "blog-grid", {
                                    domain: app.domain(),
                                    items: data.items
                                });
                                $afterlag.run(function(){
                                    var $grid = WD.grid.find(".blog__grid");

                                    WD.shareLinks($grid);

                                    WD.grid.find(".blog__grid > a").unwrap();

                                    $loader.attr("data-active", false);

                                    WD.showItems.render(true);

                                    height = $dom.document.height();
                                    show = false;
                                });
                            })
                        }
                        else {
                            $dom.window.off("scroll.preloader");
                        }
                    }
                });
            }
        },

        arrowTop: function(){

            WD.el.find("btn-arrow-top").on("click", function(){
                var top = $dom.document.scrollTop(),
                duration = top / 5;
                duration = duration < 500 ? 500 : duration;

                $dom.body.animate({scrollTop: 0}, duration);
            });
        },

        share: function(){
            WD.grid.on("click", ".blog__grid__item__share", function(e){
                e.preventDefault();
            });
            WD.shareLinks(WD.grid);
        },

        shareLinks: function($scope){
            new app.plugins.share($scope.find(".blog__grid__item__share"), {
                buttons: ".blog__grid__item__share__link",
                dataAttr: "item"
            });
        }
    };

    var WD = app.sections.blog;

})(app, $, app.$dom, app.events, app.utils);

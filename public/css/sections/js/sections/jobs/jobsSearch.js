(function(app, $, $dom, EV, _){

    app.define("sections.jobsSearch");

    app.sections.jobsSearch = {

        init: function(){

            if (app.device.isPhone) return;

            this.el = $dom.body.children("section-jobs-search");

            if (this.el.length) this.render();
        },

        render: function(){

            app.features.jobsSearch.init();

            this.$nav = this.el.find("jobs-search-nav");
            this.$progress = this.el.find(".jobs__search__progress__line")[0];

            if (!app.device.isMobile){
                WD.scroll();
                WD.nav();
                WD.sidebar();
            }

            app.sections.on("afterMounted", function(){
                WD.$panel = WD.$nav.find(".jobs__search__nav__panel");
            });

            window.addEventListener('popstate', function(e){
                location.reload();
            }, false);
        },

        nav: function(){

            this.$nav.find(".jobs__search__nav__panel").on("click", ".input-group", function(e){
                WD.$nav.attr("data-show", true);
                WD.navShow = true;

                _.onEndTransition(WD.$panel[0], function(){
                    WD.$nav.find("jobs-search-form")
                    .find(".input-group[data-item='" + $(e.target).attr("data-item") + "']")
                    .find("input")
                    .focus();
                });
            });
        },

        sidebar: function(){
            WD.$sidebar = WD.el.find(".jobs__search__filter__screen");

            WD.$sidebar.theiaStickySidebar({
                additionalMarginTop: 66,
                additionalMarginBottom: 30
            });
        },

        scroll: function(){
            var scrolling = false,
                fixedPanel = false,
                scrollOffset = 94,
                progress = 0;

            $dom.window.on('scroll', function(){
                if (!scrolling){
                    scrolling = true;
                    _.raf(autoHidePanel);
                }
            });

            function autoHidePanel(){
                var scrollTop = $dom.window.scrollTop();
                if (scrollTop > scrollOffset && !fixedPanel){
                    WD.el.attr('data-fixed', true);
                    fixedPanel = true;
                }
                else if (scrollTop < scrollOffset && fixedPanel) {
                    WD.el.removeAttr('data-fixed');
                    fixedPanel = false;
                }
                if (WD.navShow){
                    WD.$nav.removeAttr('data-show');
                    WD.navShow = false;
                }
                var scrollHeight = document.documentElement.scrollHeight;
                progress = 1 - (scrollHeight - scrollTop) / scrollHeight;
                progress = (progress * (1.01 + (app.sizes.height / scrollHeight))) * 100;
                WD.$progress.style[app.prefixed.transform] = "translate3d(" + progress + "%, 0, 0)";
                scrolling = false;
            }
        }
    };

    var WD = app.sections.jobsSearch;

})(app, $, app.$dom, app.events, app.utils);

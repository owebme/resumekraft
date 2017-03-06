(function(app, $, $dom, EV, _){

    app.define("sections.jobsMobile");

    app.sections.jobsMobile = {

        init: function(){

            if (!app.device.isPhone) return;

            this.el = $dom.body.children(".section.jobs");

            if (this.el.length) this.render();
        },

        render: function(){

            $dom.root = this.el;

            $dom.body.scrollTop(0);

            $Sections = new app.plugins.define("$Sections");
            $Screens = new app.plugins.define("$Screens");

            new app.plugins.scroll.refreshFix(this.el);

            app.sections.on("afterMounted", function(){
                WD.$nav.find(".input-group input").on("blur", function(){
                    setTimeout(function(){
                        WD.$nav.attr("data-show", false);
                        app.$dom.root.attr("data-overlay", false);
                    }, 20);
                });
                WD.$overlay.on("click", function(){
                    WD.$nav.attr("data-show", false);
                    app.$dom.root.attr("data-overlay", false);
                });
            });

            this.$nav = this.el.find("jobs-panel-mobile");
            if (!this.$nav.length){
                this.$nav = this.el.find("jobs-search-panel-mobile");
            }
            this.$overlay = this.el.find(".section__overlay");

            WD.nav();

            window.addEventListener('popstate', function(e){
                location.reload();
            }, false);
        },

        nav: function(){

            WD.$nav.on("click", ".input-group", function(e){
                WD.$nav.attr("data-show", true);
                app.$dom.root.attr("data-overlay", true);
                $(this).find("input").focus();
            });
        },

        mainScreen: {
            show: function(){
                app.$dom.body.removeClass("no-scroll");
                app.$dom.root.attr("data-overlay-full", false);
            },
            hide: function(){
                app.$dom.body.addClass("no-scroll");
                app.$dom.root.attr("data-overlay-full", true);
            }
        }
    };

    var WD = app.sections.jobsMobile;

})(app, $, app.$dom, app.events, app.utils);

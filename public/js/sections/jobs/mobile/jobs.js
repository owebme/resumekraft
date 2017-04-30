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

            if (!Store.get("vacancyFavorites")){
                Store.set("vacancyFavorites", []);
            }

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

                $dom.body.on("click", "vacancy-content-side .employer__link, vacancy-similary-side .vacancy__similary__item, employer-vacancies-mobile-side .employer__vacancies__item__title", function(e){
                    $dom.body.addClass("appLoading");
                })

                if (WD.el.find("vacancy-panel-mobile-side").length && $store.jobs.item){
                    riot.mount("vacancy-panel-mobile-side", "vacancy-panel-mobile", {
                        item: $store.jobs.item
                    });
                }

                app.tag("ui-dropmenu", function(tag){
                    window.$dropMenu = tag;
                });

                WD.el.on("click", "a.link__to__vacancies", function(e){
                    e.preventDefault();

                    if ($Screens.employer){
                        var $container = $(this).closest(".section__content"),
                            $vacancies = $container.find("#vacancies");

                        if ($vacancies.length){
                            $container.scrollTop($vacancies.offset().top - $($Screens.employer.root).offset().top + $container.scrollTop() - 80);
                        }
                    }
                    else {
                        var $vacancies = WD.el.find("#vacancies");

                        if ($vacancies.length){
                            $dom.body.scrollTop($vacancies.offset().top - 80);
                        }
                    }
                });

                if (Url.parseQuery().standalone){
                    WD.el.find("jobs-footer").remove();
                    if ($Sections.popup && $Sections.popup.homescreen){
                        $Sections.popup.homescreen.unmount();
                    }
                }
                else {
                    WD.el.find("jobs-footer .jobs__blockHomeScreen").on("click", function(){
                        if ($Sections.popup && $Sections.popup.homescreen){
                            $Sections.popup.homescreen.show();
                        }
                    });
                }

                // WD.el.on("click", "a.map", function(e){
                //     var $link = $(this),
                //         address = $link.attr("data-addr");
                //
                //     if (address){
                //         if (app.device.isAndroid){
                //             e.preventDefault()
                //             window.open('https://www.google.com/maps/dir//' + address, "_blank");
                //         }
                //         else if (app.device.isIOS){
                //             $link.attr("href", 'maps://maps.apple.com/?daddr=' + address);
                //         }
                //     }
                // });
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
        }
    };

    var WD = app.sections.jobsMobile;

})(app, $, app.$dom, app.events, app.utils);

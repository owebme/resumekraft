(function(app, $, $dom, EV, _){

    app.define("sections.jobsSearch");

    app.sections.jobsSearch = {

        init: function(){

            this.el = $dom.body.children("section-jobs-search");

            if (this.el.length) this.render();
        },

        render: function(){

            $Sections = window.$Sections || {};

            app.$dom.root = this.el;

            $store.jobs.apiUrl = "https://api.hh.ru/vacancies?";

            var params = Url.parseQuery();

            var state = {
                area: null,
                metro: null,
                salary: null,
                specialization: null,
                industry: null,
                experience: null,
                employment: null,
                schedule: null,
                label: null,
                order_by: params.order_by ? params.order_by : "relevance",
                period: params.period ? params.period : "30",
                page: params.page ? parseInt(params.page) : 0,
                pages: $store.jobs.pages ? parseInt($store.jobs.pages) : 0,
                per_page: 20
            };

            if ($store.jobs.state){
                _.extend(state, $store.jobs.state);
            }

            $State = new Baobab(state);

            app.sections.on("afterMounted", function(){
                $Sections.pages = riot.mount("jobs-search-pages", "jobs-search-pages-client")[0];
            });

            //new app.plugins.scroll.refreshFix(this.el);

            this.$nav = this.el.find("jobs-search-nav");
            this.$progress = this.el.find(".jobs__search__progress__line")[0];

            WD.scroll();

            WD.nav();

            app.sections.on("afterMounted", function(){
                WD.$sidebar = WD.el.find("jobs-search-filter");
                WD.$panel = WD.$nav.find(".jobs__search__nav__panel");
            });
        },

        nav: function(){

            this.$nav.find(".jobs__search__nav__panel").on("click", ".input-group", function(e){
                WD.$nav.attr("data-show", true);
                WD.navShow = true;

                _.onEndTransition(WD.$panel[0], function(){
                    WD.$nav.find("jobs-search-vacancy-form")
                    .find(".input-group[data-item='" + $(e.target).attr("data-item") + "']")
                    .find("input")
                    .focus();
                });
            });
        },

        scroll: function(){
            var scrolling = false,
                fixedPanel = false,
                scrollOffset = 94,
                progress = 0;

            WD.sticky = {
                a: null,
                b: null,
                K: null,
                Z: 0,
                P: 66,
                N: 30
            }

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
                if (WD.$sidebar){
                    if (!WD.sticky.a){
                        WD.sticky.a = WD.$sidebar.parent()[0];
                        WD.sticky.b = WD.$sidebar[0];
                    }
                    var Ra = WD.sticky.a.getBoundingClientRect(),
                        R1bottom = document.documentElement.clientHeight;
                    if (Ra.bottom < R1bottom) {
                      var Rb = WD.sticky.b.getBoundingClientRect(),
                          Rh = Ra.top + Rb.height,
                          W = document.documentElement.clientHeight,
                          R1 = Math.round(Rh - R1bottom),
                          R2 = Math.round(Rh - W);
                      if (Rb.height + WD.sticky.P - 1 > W) {
                        if (Ra.top < WD.sticky.K) {  // скролл вниз
                          if (R2 + WD.sticky.N > R1) {  // не дойти до низа
                            if (Rb.bottom - W + WD.sticky.N - 1 <= 0) {  // подцепиться
                              WD.$sidebar.attr('data-fixed', true);
                              WD.sticky.b.style.top = W - Rb.height - WD.sticky.N + 'px';
                              WD.sticky.Z = WD.sticky.N + Ra.top + Rb.height - W;
                            } else {
                              WD.$sidebar.removeAttr('data-fixed');
                              WD.sticky.b.style.top = - WD.sticky.Z + 'px';
                            }
                          } else {
                            WD.$sidebar.removeAttr('data-fixed');
                            WD.sticky.b.style.top = - R1 +'px';
                            WD.sticky.Z = R1;
                          }
                        } else {  // скролл вверх
                          if (Ra.top - WD.sticky.P < 0) {  // не дойти до верха
                            if (Rb.top - WD.sticky.P + 1 >= 0) {  // подцепиться
                              WD.$sidebar.attr('data-fixed', true);
                              WD.sticky.b.style.top = WD.sticky.P + 'px';
                              WD.sticky.Z = Ra.top - WD.sticky.P;
                            } else {
                              WD.$sidebar.removeAttr('data-fixed');
                              WD.sticky.b.style.top = - WD.sticky.Z + 'px';
                            }
                          } else {
                            WD.$sidebar.removeAttr('data-fixed');
                            WD.sticky.b.style.top = '';
                            WD.sticky.Z = 0;
                          }
                        }
                        WD.sticky.K = Ra.top;
                      } else {
                        if ((Ra.top - WD.sticky.P) <= 0) {
                          if ((Ra.top - WD.sticky.P) <= R1) {
                            WD.$sidebar.removeAttr('data-fixed');
                            WD.sticky.b.style.top = - R1 +'px';
                          } else {
                            WD.$sidebar.attr('data-fixed', true);
                            WD.sticky.b.style.top = WD.sticky.P + 'px';
                          }
                        } else {
                          WD.$sidebar.removeAttr('data-fixed');
                          WD.sticky.b.style.top = '';
                        }
                      }
                    }
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

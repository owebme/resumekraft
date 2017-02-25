(function(app, $, $dom, EV, _){

    app.define("sections.jobsSearch");

    app.sections.jobsSearch = {

        init: function(){

            this.el = $dom.body.children("section-jobs-search");

            if (this.el.length) this.render();
        },

        render: function(){

            //new app.plugins.scroll.refreshFix(this.el);

            this.$nav = this.el.find("jobs-search-nav");

            this.$sidebar = this.el.find("jobs-search-filter");

            WD.nav();
        },

        nav: function(){
            var scrolling = false,
                turnPanel = false,
                scrollOffset = 40;

            $dom.window.on('scroll', function(){
                if (!scrolling){
                    scrolling = true;
                    _.raf(autoHidePanel);
                }
            });

            function autoHidePanel(){
                var scrollTop = $dom.window.scrollTop();
                if (scrollTop > scrollOffset && !turnPanel){
                    WD.$nav.attr('data-turn', true);
                    turnPanel = true;
                }
                else if (scrollTop < scrollOffset && turnPanel) {
                    WD.$nav.removeAttr('data-turn');
                    turnPanel = false;
                }
                scrolling = false;
            }
        }
    };

    var WD = app.sections.jobsSearch;

})(app, $, app.$dom, app.events, app.utils);

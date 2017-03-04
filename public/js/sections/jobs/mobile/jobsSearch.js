(function(app, $, $dom, EV, _){

    app.define("sections.jobsSearchMobile");

    app.sections.jobsSearchMobile = {

        init: function(){

            if (!app.device.isPhone) return;

            this.el = $dom.body.children("section-jobs-search-mobile");

            if (this.el.length) this.render();
        },

        render: function(){

            $dom.root = this.el;

            app.features.jobsSearch.init();

            new app.plugins.scroll.refreshFix(this.el);

            app.sections.on("afterMounted", function(){
                riot.mount("jobs-search-pages", "jobs-search-pages-client");

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

            $Sections.module("search.$content", app.$dom.root.find(".jobs__search__content"));

            this.$nav = this.el.find("jobs-search-panel-mobile");
            this.$content = this.el.find(".jobs__search");
            this.$overlay = this.el.find(".section__overlay");

            WD.scroll();

            WD.nav();

            app.sections.on("afterMounted", function(){
                WD.$filter = WD.el.find("jobs-search-filter");

                $Sections.search.$content.on('swipeLeft', function(){
                    $Sections.search.panel.open.filter();
                });
            });
        },

        nav: function(){

            WD.$nav.on("click", ".input-group", function(e){
                WD.$nav.attr("data-show", true);
                app.$dom.root.attr("data-overlay", true);
            });
        },

        scroll: function(){
            var scrolling = false,
        		previousTop = 0,
        		currentTop = 0,
        		scrollDelta = 30,
        		scrollOffset = 54;

            $dom.window.on('scroll', function(){
        		if (!scrolling){
        			scrolling = true;
        			_.raf(autoHideHeader);
        		}
        	});

            function autoHideHeader(){
        		var currentTop = $dom.window.scrollTop();

        		checkSimpleNavigation(currentTop);

        	   	previousTop = currentTop;
        		scrolling = false;
        	}

        	function checkSimpleNavigation(currentTop) {
        		//there's no secondary nav or secondary nav is below primary nav
        	    if (previousTop - currentTop > scrollDelta && currentTop > scrollOffset) {
        	    	//if scrolling up...
        	    	WD.$nav.attr('data-turn', true);
        	    } else if ((currentTop - previousTop > scrollDelta && currentTop > scrollOffset) || currentTop < scrollOffset) {
        	    	//if scrolling down...
        	    	WD.$nav.attr('data-turn', false);
        	    }
        	}
        }
    };

    var WD = app.sections.jobsSearchMobile;

})(app, $, app.$dom, app.events, app.utils);

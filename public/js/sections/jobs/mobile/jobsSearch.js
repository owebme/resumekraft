(function(app, $, $dom, EV, _){

    app.define("sections.jobsSearchMobile");

    app.sections.jobsSearchMobile = {

        init: function(){

            if (!app.device.isPhone) return;

            this.el = $dom.body.children("section-jobs-search-mobile");

            if (this.el.length) this.render();
        },

        render: function(){

            app.features.jobsSearch.init();

            $Sections.module("search.$content", app.$dom.root.find(".jobs__search__content"));

            this.$nav = this.el.find("jobs-search-panel-mobile");

            app.sections.on("afterMounted", function(){
                riot.mount("jobs-search-pages-side", "jobs-search-pages", {
                    renderClient: true,
                    utils: window._
                });

                $Sections.search.$content.on('swipeLeft', function(){
                    $Sections.search.panel.open.filter();
                });

                $Sections.search.$content.on('click', ".jobs__list__item__title", function(e){
                    e.preventDefault();
                    e.stopPropagation();

                    var $el = $(this);

                    app.sections.jobsMobile.mainScreen.hide();

                    $Screens.vacancy.show($el.attr("data-id"), $el.attr("href"), function(){
                        app.sections.jobsMobile.mainScreen.show();
                    })
                });
            });

            WD.scroll();
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

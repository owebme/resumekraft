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

            this.$nav = this.el.find("jobs-search-panel-mobile");

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

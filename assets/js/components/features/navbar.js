(function(app, $, $dom, EV, _){

    app.define("features.navbar");

    app.features.navbar = {

        active: false,

        init: function(){

            if (this.active) return;

            var $navbar = app.$dom.body.find("section-nav[data-fixed='true']"),
                scrolling = false,
        		previousTop = 0,
        		currentTop = 0,
        		scrollDelta = 10,
        		scrollOffset = 150;

            if (!$navbar.length) return;

            app.$dom.window.on('scroll', function(){
        		if (!scrolling){
        			scrolling = true;
        			_.raf(autoHideHeader);
        		}
        	});

            function autoHideHeader(){
        		var currentTop = app.$dom.window.scrollTop();

        		checkSimpleNavigation(currentTop);

        	   	previousTop = currentTop;
        		scrolling = false;
        	}

        	function checkSimpleNavigation(currentTop) {
        		//there's no secondary nav or secondary nav is below primary nav
        	    if (previousTop - currentTop > scrollDelta) {
        	    	//if scrolling up...
        	    	$navbar.attr('data-hidden', false);
        	    } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
        	    	//if scrolling down...
        	    	$navbar.attr('data-hidden', true);
        	    }
        	}

            this.active = true;
        }
    };

    var WD = app.features.navbar;

})(app, $, app.$dom, app.events, app.utils);

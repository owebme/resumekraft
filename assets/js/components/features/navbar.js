(function(app, $, $dom, EV, _){

    app.define("features.navbar");

    app.features.navbar = {

        active: false,

        init: function(){

            if (this.active) return;

            WD.el = app.$dom.body.find("section-nav");

            var scrolling = false,
        		previousTop = 0,
        		currentTop = 0,
        		scrollDelta = 10,
        		scrollOffset = 150;

            if (!WD.el.length) return;

            if (WD.el.attr("data-fixed") == "true"){

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
            	    	WD.el.attr('data-hidden', false);
            	    } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
            	    	//if scrolling down...
            	    	WD.el.attr('data-hidden', true);
            	    }
            	}
            }

            if (app.device.isMobile) WD.menu();

            this.active = true;
        },

        menu: function(){

            WD.$menu = WD.el.find(".menu");

            if (!WD.$menu.length) return;

            WD.opener = WD.el.find(".nav__menu__item--opener");
            WD.close = WD.$menu.find(".menu__close");

            WD.opener.on("click", function(){
                WD.$menu.attr("data-open", true);
            })
            WD.close.on("click", function(){
                WD.$menu.attr("data-open", false);
            })
        }
    };

    var WD = app.features.navbar;

})(app, $, app.$dom, app.events, app.utils);

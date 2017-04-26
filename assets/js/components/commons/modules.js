(function(loader){
	// history
	loader.history = [];
	// {fn} load resources
	loader.resources = function(resources, complete, callback){
		// check callbacks
		complete = complete || $.noop;
		callback = callback || $.noop;
		// unchached resources
		var unchached = [];
		for (var i=0; i<resources.length; i++) {
			if (loader.history.indexOf(resources[i])<0) unchached.push(resources[i]);
		};
		// if resources is empty
		if (!unchached.length) return complete();
		// load
		Modernizr.load({
			load: unchached,
			callback: function(url){
				loader.history.push(url);
				callback();
			},
			complete: complete
		});
	};
	// {fn} load images
	loader.images = function($scope, complete, callback){
		var loaded = 0;
		// check callbacks
		complete = complete || $.noop;
		callback = callback || $.noop;
		// init plugin
		$scope.imagesLoaded({ background: '.bg-cover' }).always(complete).progress(function(instance){
			loaded++;
			callback(loaded, instance.images.length)
		});
	}
})(app.loader);

(function(sizes, $dom){
	// {fn} update sizes
	var updateSizes = function(){
		sizes.width = $dom.window.width();
		sizes.height = parseInt(window.innerHeight,10);
		if (sizes.width <= 735) sizes.size = "small";
        else if (sizes.width >= 736 && sizes.width <= 1068) sizes.size = "medium";
        else if (sizes.width >= 1069 && sizes.width <= 1441) sizes.size = "large";
        else if (sizes.width >= 1442) sizes.size = "xlarge";
	};
	// {event} window resize
	$dom.window.on('resize.app orientationchange.app', updateSizes);
	// init
	updateSizes();
})(app.sizes, app.$dom);

(function(device, $dom, _){

	/* --- Mobile --- */
	device.support = Modernizr;

	/* --- Mobile --- */
	device.isMobile = device.support.touch;

	if ($dom.root.attr("demo") == "true"){
		app.demo = true;

		if ($dom.window.width() < 1025){
			device.isMobile = true;
			$dom.html.removeClass("m-no-touch").addClass("m-touch");
		}
	}
	$dom.html.addClass(device.isMobile ? 'd-mobile' : 'd-no-mobile');

	/* --- Retina --- */
	device.isRetina = (window.devicePixelRatio && window.devicePixelRatio>1);
	$dom.html.addClass(device.isRetina ? 'd-retina' : 'd-no-retina');

	/* --- sizeCheck --- */
	var sizeCheck = function(){
		var width = app.sizes.width || $dom.window.width();

		device.isPhone = (width < 768);
		device.isTablet = (width < 1025 && width > 767);
		device.orientation = (device.isTablet && width < 1025 && width > 991 || device.isPhone && width > 480 ? "landscape" : "portrait");

		$dom.html
		.addClass(device.isPhone ? 'd-phone' : 'd-no-phone')
		.removeClass(device.isPhone ? 'd-no-phone' : 'd-phone')
		.addClass(device.isTablet ? 'd-tablet' : 'd-no-tablet')
		.removeClass(device.isTablet ? 'd-no-tablet' : 'd-tablet')
		.addClass(device.isMobile && device.orientation === "landscape" ? 'r-landscape' : device.isMobile ? 'r-portrait' : null)
		.removeClass(device.isMobile && device.orientation !== "landscape" ? 'r-landscape' : device.isMobile ? 'r-portrait' : null);

		if (app.sizes.size && app.sizes.size.match(/large/)){
			if (app.sizes.size === "large"){
				$dom.html.addClass('d-largeScreen')
				.removeClass('d-xlargeScreen');
			}
			else if (app.sizes.size === "xlarge"){
				$dom.html.addClass('d-xlargeScreen')
				.removeClass('d-largeScreen');
			}
		}
		else {
			$dom.html.removeClass('d-largeScreen d-xlargeScreen');
		}
		device.is = device.isPhone ? 'phone' : (device.isTablet ? 'tablet' : 'desktop');
	};
	$dom.window.on((device.isMobile ? 'orientationchange' : 'resize') + '.sizeCheck', sizeCheck);
	sizeCheck();

	device.ua = navigator.userAgent;

	if (navigator.userAgent.match(/(iPhone)/i)) device.isPhone = true;

	/* --- iOS --- */
	if (navigator.userAgent.match(/iPad/i)) {
		$dom.html.addClass('d-ipad');
		device.isIPad = true;
	};
	if (navigator.userAgent.match(/(iPhone|iPod touch)/i)) {
		$dom.html.addClass('d-iphone');
		device.isIPhone = true;
	};
	if (navigator.userAgent.match(/(iPad|iPhone|iPod touch)/i)) {
		$dom.html.addClass('d-ios');
		device.isIOS = true;
		var expr = navigator.userAgent.match(/.*CPU.*OS (\d)_(\d)/i);
		device.verOS = expr && expr[1] ? expr[1] + (expr[2] ? "." + expr[2] : "") : false;
	}
	else {
		$dom.html.addClass('d-no-ios');
	};
	if (navigator.userAgent.match(/.*CPU.*OS 7_\d/i)) {
		$dom.html.addClass('d-ios7');
		device.isIOS7 = true;
	};
	if (navigator.userAgent.match(/Android/i)) {
		$dom.html.addClass('d-android');
		device.isAndroid = true;
		var expr = navigator.userAgent.match(/Android (\d)\.(\d)/i);
		device.verOS = expr && expr[1] ? expr[1] + (expr[2] ? "." + expr[2] : "") : false;
	};

	if (app.device.isMobile){
		device.os = device.isAndroid ? 'android' : (device.isIOS ? 'ios' : 'unknown');
	}

	/* --- iPad (for fix wrong window height) --- */
	if ($dom.html.hasClass('d-ipad d-ios7')) {
		$dom.window.on('resize orientationchange focusout', function(){
			window.scrollTo(0,0);
		});
	};

	device.isWin = navigator.platform.indexOf("Win") > -1;
	device.isMac = navigator.platform.indexOf("Mac") > -1;
	device.isLinux = navigator.platform.indexOf("Linux") > -1;

	$dom.html.addClass(device.isMac ? 'd-macOS' : 'd-no-macOS');

	device.platform = device.isWin ? 'win' : (device.isMac ? 'mac' : (device.isLinux ? 'linux' : 'unknown'));

	device.isStorage = Storage !== undefined;

	var _ua = device.ua;
	device.browser = {
	  version: (_ua.match( /.+(?:me|ox|on|rv|it|era|opr|ie)[\/: ]([\d.]+)/ ) || [0,'0'])[1],
	  opera: (/opera/i.test(_ua) || /opr/i.test(_ua)),
	  msie: (/msie/i.test(_ua) && !/opera/i.test(_ua) || /trident\//i.test(_ua)),
	  msie6: (/msie 6/i.test(_ua) && !/opera/i.test(_ua)),
	  msie7: (/msie 7/i.test(_ua) && !/opera/i.test(_ua)),
	  msie8: (/msie 8/i.test(_ua) && !/opera/i.test(_ua)),
	  msie9: (/msie 9/i.test(_ua) && !/opera/i.test(_ua)),
	  mozilla: /firefox/i.test(_ua),
	  chrome: /chrome/i.test(_ua),
	  safari: (!(/chrome/i.test(_ua)) && /webkit|safari|khtml/i.test(_ua)),
	  iphone: /iphone/i.test(_ua),
	  ipod: /ipod/i.test(_ua),
	  iphone4: /iphone.*OS 4/i.test(_ua),
	  ipod4: /ipod.*OS 4/i.test(_ua),
	  ipad: /ipad/i.test(_ua),
	  android: /android/i.test(_ua),
	  bada: /bada/i.test(_ua),
	  mobile: /iphone|ipod|ipad|opera mini|opera mobi|iemobile|android/i.test(_ua),
	  msieMobile: /iemobile/i.test(_ua),
	  safariMobile: /iphone|ipod|ipad/i.test(_ua),
	  operaMobile: /opera mini|opera mobi/i.test(_ua),
	  operaMini: /opera mini/i.test(_ua),
	  mac: /mac/i.test(_ua),
	  searchBot: /(yandex|google|stackrambler|aport|slurp|msnbot|bingbot|twitterbot|ia_archiver|facebookexternalhit)/i.test(_ua)
	};

	/* --- Chrome --- */
	device.isChrome = device.browser.chrome;
	$dom.html.addClass(device.isChrome ? 'd-chrome' : 'd-no-chrome');

	/* --- Safari --- */
	device.isSafari = device.browser.safari;
	$dom.html.addClass(device.isSafari ? 'd-safari' : 'd-no-safari');

	/* --- Firefox --- */
	device.isFirefox = device.browser.mozilla;
	$dom.html.addClass(device.isFirefox ? 'd-firefox' : 'd-no-firefox');

	/* --- Fix click onTouch device --- */
	if (device.isMobile && window.FastClick && 'addEventListener' in document) {
		document.addEventListener('DOMContentLoaded', function() {
			FastClick.attach(document.body);
		}, false);
	}

	if (!device.isPhone && device.isRetina && !device.isSafari){
		var timer, body = $dom.body[0];
		$dom.window[0].addEventListener('scroll', function(){
			clearTimeout(timer);
			if (!body.getAttribute("class") || !body.getAttribute("class").match(/disable__hover/)){
				body.classList.add('disable__hover');
			}

			timer = setTimeout(function(){
				body.classList.remove('disable__hover')
			}, 300);
		}, false);
	}

	app.device.get = function(){
		return _.extend(_.omit(app.device, ['get', 'support', 'browser']), {
			screen: app.sizes
		});
	}

})(app.device, app.$dom, app.utils);

(function(){
    if (typeof Object.assign != 'function') {
        (function () {
            Object.assign = function (target) {
                'use strict';
                if (target === undefined || target === null) {
                    throw new TypeError('Cannot convert undefined or null to object');
                }

                var output = Object(target);
                for (var index = 1; index < arguments.length; index++) {
                    var source = arguments[index];
                    if (source !== undefined && source !== null) {
                        for (var nextKey in source) {
                            if (source.hasOwnProperty(nextKey)) {
                                output[nextKey] = source[nextKey];
                            }
                        }
                    }
                }
                return output;
            };
        })();
    }
})();

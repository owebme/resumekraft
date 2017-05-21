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

		if (!device.isMobile && device.isTablet && width > 768){
			$dom.html.addClass("r-landscape");
		}
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

	/* --- IE --- */
	device.isIE = device.browser.msie;
	$dom.html.addClass(device.isIE ? 'd-ie' : null);

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
!function(e){function n(){}function t(e,n){return function(){e.apply(n,arguments)}}function o(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],s(e,this)}function i(e,n){for(;3===e._state;)e=e._value;return 0===e._state?void e._deferreds.push(n):(e._handled=!0,void o._immediateFn(function(){var t=1===e._state?n.onFulfilled:n.onRejected;if(null===t)return void(1===e._state?r:u)(n.promise,e._value);var o;try{o=t(e._value)}catch(i){return void u(n.promise,i)}r(n.promise,o)}))}function r(e,n){try{if(n===e)throw new TypeError("A promise cannot be resolved with itself.");if(n&&("object"==typeof n||"function"==typeof n)){var i=n.then;if(n instanceof o)return e._state=3,e._value=n,void f(e);if("function"==typeof i)return void s(t(i,n),e)}e._state=1,e._value=n,f(e)}catch(r){u(e,r)}}function u(e,n){e._state=2,e._value=n,f(e)}function f(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var n=0,t=e._deferreds.length;n<t;n++)i(e,e._deferreds[n]);e._deferreds=null}function c(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}function s(e,n){var t=!1;try{e(function(e){t||(t=!0,r(n,e))},function(e){t||(t=!0,u(n,e))})}catch(o){if(t)return;t=!0,u(n,o)}}var a=setTimeout;o.prototype["catch"]=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var o=new this.constructor(n);return i(this,new c(e,t,o)),o},o.all=function(e){var n=Array.prototype.slice.call(e);return new o(function(e,t){function o(r,u){try{if(u&&("object"==typeof u||"function"==typeof u)){var f=u.then;if("function"==typeof f)return void f.call(u,function(e){o(r,e)},t)}n[r]=u,0===--i&&e(n)}catch(c){t(c)}}if(0===n.length)return e([]);for(var i=n.length,r=0;r<n.length;r++)o(r,n[r])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(n){n(e)})},o.reject=function(e){return new o(function(n,t){t(e)})},o.race=function(e){return new o(function(n,t){for(var o=0,i=e.length;o<i;o++)e[o].then(n,t)})},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){a(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},o._setImmediateFn=function(e){o._immediateFn=e},o._setUnhandledRejectionFn=function(e){o._unhandledRejectionFn=e},"undefined"!=typeof module&&module.exports?module.exports=o:e.Promise||(e.Promise=o)}(this);

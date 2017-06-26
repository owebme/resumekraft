var app=app||{};app.define=function(e){var t,i=e.split("."),n=app;for("app"==i[0]&&(i=i.slice(1)),t=0;t<i.length;t++)"undefined"==typeof n[i[t]]&&(n[i[t]]={}),n=n[i[t]];return n},app.tag=function(e,t){if(window.riot){if(!t||!window.$afterlag)return _.filter(riot.vdom?riot.vdom:riot.util.vdom,function(t){if(t.root.nodeName.toLowerCase()==e)return t})[0];var i=app.tag(e);i&&i.isMounted?t(i):$afterlag.run(function(){var i=app.tag(e);i&&(i.isMounted?t(i):app.tag(e).one("updated",function(){t(i)}))})}},app.domain=function(){return location.protocol+"//"+location.hostname},window.Store=window.store||{},window.$store={},window.$afterlag={run:function(e,t){var i={delay:0,iterations:1};t&&_.extend(i,t);var n=new Afterlag(i);n.run(e)},xs:function(e,t){var i={iterations:2,timeout:200};t&&_.extend(i,t),$afterlag.run(e,i)},s:function(e,t){var i={iterations:3,timeout:300};t&&_.extend(i,t),$afterlag.run(e,i)},m:function(e,t){var i={iterations:5,timeout:500};t&&_.extend(i,t),$afterlag.run(e,i)},l:function(e,t){var i={iterations:7,timeout:700};t&&_.extend(i,t),$afterlag.run(e,i)},xl:function(e,t){var i={iterations:10,timeout:1e3};t&&_.extend(i,t),$afterlag.run(e,i)}},function(e){app.define("config"),app.define("effects"),app.define("sizes"),app.define("utils"),app.define("plugins"),app.define("device"),app.define("events"),app.define("loader"),app.define("$dom"),app.$dom={html:e("html"),body:e("body"),document:e(document),window:e(window),root:e("#app")},app.events={click:document&&"ontouchstart"in document.documentElement?"tap":"click"},app.keys={LEFT:37,UP:38,RIGHT:39,DOWN:40,DEL:8,TAB:9,RETURN:13,ENTER:13,ESC:27,PAGEUP:33,PAGEDOWN:34,SPACE:32},window.KEY=app.keys,app.prefixed={transform:Modernizr.prefixed("transform"),"transform-origin":Modernizr.prefixed("transformOrigin"),"transition-duration":Modernizr.prefixed("transitionDuration")},$$=window.jQuery,window.moment&&moment.locale("ru"),e.fn.api=function(e){return this.data(e)?this.data(e):this.data(e,{}).data(e)}}($),function(e,t){t.init=function(i){if(i){var n,o=i.split("."),r=e;for(n=0;n<o.length;n++)r=r[o[n]];r&&"function"==typeof r.init?(r.init(),t.log("Initialize: <"+i+"> ready")):t.log("ERROR: <"+i+"> initialize")}},t.is=function(i,n){if(i){var o,r=i.split("."),a=e;for(o=0;o<r.length;o++)a=a[r[o]];a?n&&"function"==typeof n&&n():t.log("NOT found: <"+i+">")}},t.log=function(e){e&&("object"==typeof e?console.dir(e):console.log(e))},t.logger=function(e,i){e&&i&&("init"===e?t.log("Initialize: <"+i+"> ready"):"open"===e?t.log("OPEN: <"+i+">"):"close"===e?t.log("CLOSE: <"+i+">"):t.log(e+": <"+i+">"))},t.random=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},t.template=function(i,n,o){if(!e.templates[i])return void t.log("NOT found: <"+i+"> template");var r=Mustache.render(e.templates[i](),n?n:{}),a=$(r).appendTo(o?o:e.$dom.root);return a},t.copyArray=function(e){var i=null===e?null:t.isObject(e)?{}:[];for(var n in e)"object"==typeof e[n]&&"prototype"!==n?i[n]=t.copyArray(e[n]):i[n]=e[n];return i},t.sortArray=function(e,t,i){var n=_.sortBy(e,function(e){return e[t]});return"desc"===i?n.reverse():n},t.sortByDate=function(e,t,i){if(!window.moment)return e;var n=_.sortBy(e,function(e){return moment(e[t]).format("X")});return"desc"===i?n.reverse():n},t.isArray=function(e){if(e&&"[object Array]"===Object.prototype.toString.call(e))return!0},t.isFunction=function(e){if(e&&"function"==typeof e)return!0},t.fixTouchScroll=function(t,i){var n=null,o=null;t.on("touchmove MSPointerMove",function(t){if(0===o){var i=t.changedTouches[0].clientY;i<n?(n=0,t.preventDefault()):e.device&&e.device.isIOS?setTimeout(function(){n=i},1e3):n=i}}),i.on("scroll",function(){o=this.scrollTop})},t.raf=function(e){var t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;return t?t(e):window.setTimeout(e,1e3/60)},t.caf=function(e){var t=window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout;t(e),e=null},t.support={transitions:Modernizr.csstransitions},t.transEndEventNames={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},t.transEndEventName=t.transEndEventNames[Modernizr.prefixed("transition")],t.animEndEventNames={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd",animation:"animationend"},t.animEndEventName=t.animEndEventNames[Modernizr.prefixed("animation")],t.onEndTransition=function(e,i){var n=function(e){if(t.support.transitions){if(e.target!=this)return;this.removeEventListener(t.transEndEventName,n)}i&&"function"==typeof i&&i.call(this)};t.support.transitions?e.addEventListener(t.transEndEventName,n):n()},t.onEndAnimation=function(e,i){var n=function(e){if(t.support.transitions){if(e.target!=this)return;this.removeEventListener(t.animEndEventName,n)}i&&"function"==typeof i&&i.call(this)};t.support.transitions?e.addEventListener(t.animEndEventName,n):n()},t.onLoadImage=function(e,t){function i(){r||(r=!0,t&&t(!0))}function n(){t&&t(!1)}var o=new Image,r=!1;o.src=e,o.onerror=n,o.onload=i,o.complete&&i()},t.getSizeImage=function(e,t){function i(){r||(r=!0,t&&t(o.naturalWidth,o.naturalHeight))}function n(){t&&t(!1)}var o=new Image,r=!1;o.src=e,o.onerror=n,o.onload=i,o.complete&&i()},t.getBoundingClientRect=function(e){var t=e.getBoundingClientRect();return{top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width||t.right-t.left,height:t.height||t.bottom-t.top}},t.getScroll=function(e){var t=e.x*-1,i=e.y*-1,n=e.maxScrollX*-1,o=e.maxScrollY*-1;return{x:t,y:i,maxX:n,maxY:o}},t.throttle=function(e,t){var i=!0;return function(n){i&&(i=!1,setTimeout(function(){i=!0},t),e(n))}},t.debounce=function(e,t,i,n){3==arguments.length&&"boolean"!=typeof i&&(n=i,i=!1);var o;return function(){var r=arguments;n=n||this,i&&!o&&e.apply(n,r),clearTimeout(o),o=setTimeout(function(){!i&&e.apply(n,r),o=null},t)}},t.indexOf=function(e,t,i){for(var n=i||0,o=(e||[]).length;n<o;n++)if(e[n]==t)return n;return-1},t.inArray=function(e,i){return t.indexOf(e,i)!=-1},t.trim=function(e){return(e&&String(e)||"").replace(/^\s+|\s+$/g,"")},t.underscored=function(e){return t.trim(e).replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/[-\s]+/g,"_").toLowerCase()},t.deepExtend=function(e,i){for(var n in i)i.hasOwnProperty(n)&&(e[n]&&"object"==typeof i[n]?t.deepExtend(e[n],i[n]):e[n]=i[n]);return e},t.deepFindWhere=function(e,i,n,o){if(e instanceof Array)for(var r=0;r<e.length;r++)o=t.deepFindWhere(e[r],i,n,o);else for(var a in e)a==i&&e[a]==n&&(o=e),(e[a]instanceof Object||e[a]instanceof Array)&&(o=t.deepFindWhere(e[a],i,n,o));return o},t.numberFormat=function(e,t,i,n){if(isNaN(e)||null==e)return"";e=parseInt(e).toFixed(~~t),n="string"==typeof n?n:",";var o=e.split("."),r=o[0],a=o[1]?(i||".")+o[1]:"";return r.replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+n)+a},t.clean=function(e,i){return e=t.trim(e),e?e:void 0!==i?i:null},t.isObject=function(e){return"[object Object]"===Object.prototype.toString.call(e)},t.isEmail=function(e){return e.match(/.+@.+\..+/i)},t.newId=function(){return String(Math.round((new Date).getTime()/1e3))},t.isJSON=function(e){try{JSON.parse(e)}catch(e){return!1}return!0},t.opener=function(e){var t=window.open();t.opener=null,t.location=e},t.emailLinkProvider=function(e){if(e&&e.length){if(e.match(/gmail\.com/i))return"https://mail.google.com/mail/";if(e.match(/[mail|inbox|list|bk]\.ru/i))return"https://e.mail.ru/messages/inbox/";if(e.match(/[yandex|ya]\.ru/i))return"https://mail.yandex.ru/";if(e.match(/rambler\.ru/i))return"https://mail.rambler.ru/"}},t.getDateNow=function(){var e=new Date,t=e.getHours(),i=e.getMinutes(),n=e.getSeconds(),o=e.getMonth()+1,r=e.getDate(),a=e.getFullYear();return t<10&&(t="0"+t),i<10&&(i="0"+i),n<10&&(n="0"+n),o<10&&(o="0"+o),r<10&&(r="0"+r),a+"-"+o+"-"+r+" "+t+":"+i+":"+n},Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t},t.getDates=function(e,t){for(var i=new Array,n=e;n<=t;)i.push(new Date(n)),n=n.addDays(1);return i},t.hexToRgb=function(e,t){var i=e.replace("#","");i=i.match(new RegExp("(.{"+i.length/3+"})","g"));for(var n=0;n<i.length;n++)i[n]=parseInt(1==i[n].length?i[n]+i[n]:i[n],16);return void 0!==typeof t&&i.push(t),"rgba("+i.join(",")+")"},t.supportClipboard=function(){return!!(window.clipboardData&&window.clipboardData.setData||document.queryCommandSupported&&document.queryCommandSupported("copy"))},t.copyToClip=function(e){if(window.clipboardData&&window.clipboardData.setData)return clipboardData.setData("Text",e);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var t=document.createElement("textarea");t.textContent=e,t.style.position="fixed",document.body.appendChild(t),t.select();try{return document.execCommand("copy")}catch(e){return console.warn("Copy to clipboard failed.",e),!1}finally{document.body.removeChild(t)}}},t.bbUpdate=function(e,t){e.on("update",function(e){var i=e.data&&e.data.transaction&&e.data.transaction.length&&e.data.transaction[0].path?e.data.transaction[0].path[0]:null,n=e.data&&e.data.transaction&&e.data.transaction.length?e.data.transaction[0].value:null;t(i,n,e)})},t.getCookie=function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0},t.setCookie=function(e,t,i){i=i||{};var n=i.expires;if("number"==typeof n&&n){var o=new Date;o.setTime(o.getTime()+1e3*n),n=i.expires=o}n&&n.toUTCString&&(i.expires=n.toUTCString()),t=encodeURIComponent(t);var r=e+"="+t;for(var a in i){r+="; "+a;var s=i[a];s!==!0&&(r+="="+s)}document.cookie=r},window.moment&&(t.moment=window.moment),window._?_.extend(_,t):window._=t,e.utils=window._}(app,app.utils),function(){app.url=function(){return(app.config.domain?app.config.domain:"")+app.config.api},app.fetch=function(e){var t=[],n=[],o=e.split(", ");return new Promise(function(e,r){for(i=0;i<o.length;i++)_.isFunction(app.fetch.API[o[i]])&&t.push(o[i]);o.length!==t.length&&(n=_.difference(o,t)),Promise.all(t.map(app.fetch.API).concat(n.map(app.request))).then(function(t){e(t)})})},app.requestList=function(e,t,n){var o=[],t=t||[],n=n||[],r=e.split(", ");return new Promise(function(e,a){for(i=0;i<r.length;i++)o.push(r[i]);Promise.all(o.map(function(e,i){return app.request(e,t[i],n[i])})).then(function(t){e(t)},function(e){a(e)})})},app.request=function(e,t,i){return new Promise(function(n,o){if(!app.config.request||app.config.request.handler&&!app.config.request.handler(e))return void n(!0);var r=_.underscored(e).replace(/^(get|set|add|del)/g,"").replace(/_/g,"/"),a=null,s=app.config.request.options();if(i&&_.extend(s,i),e.match(/^get/)?a="GET":e.match(/^set/)?a="PUT":e.match(/^add/)?a="POST":e.match(/^del/)&&(a="DELETE"),!a)return void o("Error type request: "+e);"GET"===a&&t&&(r+="/"+t,t=null),s.loader&&window.$LoaderAjax&&$LoaderAjax.show();var c=new XMLHttpRequest;c.open(a,app.url()+r,!0),c.setRequestHeader("Accept","application/json"),c.setRequestHeader("Content-Type","application/json");try{app.request.list&&app.request.list.method===e&&app.request.list.params==JSON.stringify(t)&&app.request.list.xhr.abort(),c.send(t?JSON.stringify(t):{})}catch(e){}c.onload=function(e){try{if(200==this.status){var t=JSON.parse(this.response);n("OK"===t.status&&t.result?t.result:t)}else{s.notify&&app.errHandler(this.status);var i=new Error(this.statusText);i.code=this.status,o(i)}}catch(e){}app.request.list={},s.loader&&window.$LoaderAjax&&$LoaderAjax.hide()},c.onerror=function(){o(new Error("Network Error")),s.loader&&window.$LoaderAjax&&$LoaderAjax.hide()};try{app.request.list={method:e,xhr:c,params:JSON.stringify(t)}}catch(e){}})},app.errHandler=function(e){401==e?window.$Notify?$Notify.show({color:"info",text:"Авторизируйтесь снова"}):alert("Авторизируйтесь снова"):window.$Notify?$Notify.show({color:"danger",text:"Ошибка проведения операции повторите ее чуть позже"}):alert("Ошибка проведения операции повторите ее чуть позже")};var e=function(e,t,i){app.request(app.config.logger.method,{data:{msg:e,line:i,url:t},device:app.device.get(),type:"error"},{loader:!1,notify:!1})},t=_.debounce(e,1e3,!0),n=null;window.onerror=function(e,i,o){if(app&&app.config&&app.config.logger&&app.config.logger.report){var r=e+""+i+o;r!==n&&(t(e,i,o),n=r)}}}(),function(e){e.history=[],e.resources=function(t,i,n){i=i||$.noop,n=n||$.noop;for(var o=[],r=0;r<t.length;r++)e.history.indexOf(t[r])<0&&o.push(t[r]);return o.length?void Modernizr.load({load:o,callback:function(t){e.history.push(t),n()},complete:i}):i()},e.images=function(e,t,i){var n=0;t=t||$.noop,i=i||$.noop,e.imagesLoaded({background:".bg-cover"}).always(t).progress(function(e){n++,i(n,e.images.length)})}}(app.loader),function(e,t){var i=function(){e.width=t.window.width(),e.height=parseInt(window.innerHeight,10),e.width<=735?e.size="small":e.width>=736&&e.width<=1068?e.size="medium":e.width>=1069&&e.width<=1441?e.size="large":e.width>=1442&&(e.size="xlarge")};t.window.on("resize.app orientationchange.app",i),i()}(app.sizes,app.$dom),function(e,t,i){e.support=Modernizr,e.isMobile=e.support.touch,"true"==t.root.attr("demo")&&(app.demo=!0,t.window.width()<1025&&(e.isMobile=!0,t.html.removeClass("m-no-touch").addClass("m-touch"))),t.html.addClass(e.isMobile?"d-mobile":"d-no-mobile"),e.isRetina=window.devicePixelRatio&&window.devicePixelRatio>1,t.html.addClass(e.isRetina?"d-retina":"d-no-retina");var n=function(){var i=app.sizes.width||t.window.width();e.isPhone=i<768,e.isTablet=i<1025&&i>767,e.orientation=e.isTablet&&i<1025&&i>991||e.isPhone&&i>480?"landscape":"portrait",t.html.addClass(e.isPhone?"d-phone":"d-no-phone").removeClass(e.isPhone?"d-no-phone":"d-phone").addClass(e.isTablet?"d-tablet":"d-no-tablet").removeClass(e.isTablet?"d-no-tablet":"d-tablet").addClass(e.isMobile&&"landscape"===e.orientation?"r-landscape":e.isMobile?"r-portrait":null).removeClass(e.isMobile&&"landscape"!==e.orientation?"r-landscape":e.isMobile?"r-portrait":null),!e.isMobile&&e.isTablet&&i>768&&t.html.addClass("r-landscape"),app.sizes.size&&app.sizes.size.match(/large/)?"large"===app.sizes.size?t.html.addClass("d-largeScreen").removeClass("d-xlargeScreen"):"xlarge"===app.sizes.size&&t.html.addClass("d-xlargeScreen").removeClass("d-largeScreen"):t.html.removeClass("d-largeScreen d-xlargeScreen"),e.is=e.isPhone?"phone":e.isTablet?"tablet":"desktop"};if(t.window.on((e.isMobile?"orientationchange":"resize")+".sizeCheck",n),n(),e.ua=navigator.userAgent,navigator.userAgent.match(/(iPhone)/i)&&(e.isPhone=!0),navigator.userAgent.match(/iPad/i)&&(t.html.addClass("d-ipad"),e.isIPad=!0),navigator.userAgent.match(/(iPhone|iPod touch)/i)&&(t.html.addClass("d-iphone"),e.isIPhone=!0),navigator.userAgent.match(/(iPad|iPhone|iPod touch)/i)){t.html.addClass("d-ios"),e.isIOS=!0;var o=navigator.userAgent.match(/.*CPU.*OS (\d)_(\d)/i);e.verOS=!(!o||!o[1])&&o[1]+(o[2]?"."+o[2]:"")}else t.html.addClass("d-no-ios");if(navigator.userAgent.match(/.*CPU.*OS 7_\d/i)&&(t.html.addClass("d-ios7"),e.isIOS7=!0),navigator.userAgent.match(/Android/i)){t.html.addClass("d-android"),e.isAndroid=!0;var o=navigator.userAgent.match(/Android (\d)\.(\d)/i);e.verOS=!(!o||!o[1])&&o[1]+(o[2]?"."+o[2]:"")}app.device.isMobile&&(e.os=e.isAndroid?"android":e.isIOS?"ios":"unknown"),t.html.hasClass("d-ipad d-ios7")&&t.window.on("resize orientationchange focusout",function(){window.scrollTo(0,0)}),e.isWin=navigator.platform.indexOf("Win")>-1,e.isMac=navigator.platform.indexOf("Mac")>-1,e.isLinux=navigator.platform.indexOf("Linux")>-1,t.html.addClass(e.isMac?"d-macOS":"d-no-macOS"),e.platform=e.isWin?"win":e.isMac?"mac":e.isLinux?"linux":"unknown",e.isStorage=void 0!==Storage;var r=e.ua;if(e.browser={version:(r.match(/.+(?:me|ox|on|rv|it|era|opr|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],opera:/opera/i.test(r)||/opr/i.test(r),msie:/msie/i.test(r)&&!/opera/i.test(r)||/trident\//i.test(r),msie6:/msie 6/i.test(r)&&!/opera/i.test(r),msie7:/msie 7/i.test(r)&&!/opera/i.test(r),msie8:/msie 8/i.test(r)&&!/opera/i.test(r),msie9:/msie 9/i.test(r)&&!/opera/i.test(r),mozilla:/firefox/i.test(r),chrome:/chrome/i.test(r),safari:!/chrome/i.test(r)&&/webkit|safari|khtml/i.test(r),iphone:/iphone/i.test(r),ipod:/ipod/i.test(r),iphone4:/iphone.*OS 4/i.test(r),ipod4:/ipod.*OS 4/i.test(r),ipad:/ipad/i.test(r),android:/android/i.test(r),bada:/bada/i.test(r),mobile:/iphone|ipod|ipad|opera mini|opera mobi|iemobile|android/i.test(r),msieMobile:/iemobile/i.test(r),safariMobile:/iphone|ipod|ipad/i.test(r),operaMobile:/opera mini|opera mobi/i.test(r),operaMini:/opera mini/i.test(r),mac:/mac/i.test(r),searchBot:/(yandex|google|stackrambler|aport|slurp|msnbot|bingbot|twitterbot|ia_archiver|facebookexternalhit)/i.test(r)},e.isChrome=e.browser.chrome,t.html.addClass(e.isChrome?"d-chrome":"d-no-chrome"),e.isSafari=e.browser.safari,t.html.addClass(e.isSafari?"d-safari":"d-no-safari"),e.isFirefox=e.browser.mozilla,t.html.addClass(e.isFirefox?"d-firefox":"d-no-firefox"),e.isIE=e.browser.msie,t.html.addClass(e.isIE?"d-ie":null),e.isMobile&&window.FastClick&&"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){FastClick.attach(document.body)},!1),!e.isPhone&&e.isRetina&&!e.isSafari){var a,s=t.body[0];t.window[0].addEventListener("scroll",function(){clearTimeout(a),s.getAttribute("class")&&s.getAttribute("class").match(/disable__hover/)||s.classList.add("disable__hover"),a=setTimeout(function(){s.classList.remove("disable__hover")},300)},!1)}app.device.get=function(){return i.extend(i.omit(app.device,["get","support","browser"]),{screen:app.sizes})}}(app.device,app.$dom,app.utils),function(){"function"!=typeof Object.assign&&!function(){Object.assign=function(e){"use strict";if(void 0===e||null===e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),i=1;i<arguments.length;i++){var n=arguments[i];if(void 0!==n&&null!==n)for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])}return t}}()}(),!function(e){function t(){}function i(e,t){return function(){e.apply(t,arguments)}}function n(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function o(e,t){for(;3===e._state;)e=e._value;return 0===e._state?void e._deferreds.push(t):(e._handled=!0,void n._immediateFn(function(){var i=1===e._state?t.onFulfilled:t.onRejected;if(null===i)return void(1===e._state?r:a)(t.promise,e._value);var n;try{n=i(e._value)}catch(e){return void a(t.promise,e)}r(t.promise,n)}))}function r(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var o=t.then;if(t instanceof n)return e._state=3,e._value=t,void s(e);if("function"==typeof o)return void l(i(o,t),e)}e._state=1,e._value=t,s(e)}catch(t){a(e,t)}}function a(e,t){e._state=2,e._value=t,s(e)}function s(e){2===e._state&&0===e._deferreds.length&&n._immediateFn(function(){e._handled||n._unhandledRejectionFn(e._value)});for(var t=0,i=e._deferreds.length;t<i;t++)o(e,e._deferreds[t]);e._deferreds=null}function c(e,t,i){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=i}function l(e,t){var i=!1;try{e(function(e){i||(i=!0,r(t,e))},function(e){i||(i=!0,a(t,e))})}catch(e){if(i)return;i=!0,a(t,e)}}var d=setTimeout;n.prototype.catch=function(e){return this.then(null,e)},n.prototype.then=function(e,i){var n=new this.constructor(t);return o(this,new c(e,i,n)),n},n.all=function(e){var t=Array.prototype.slice.call(e);return new n(function(e,i){function n(r,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(e){n(r,e)},i)}t[r]=a,0===--o&&e(t)}catch(e){i(e)}}if(0===t.length)return e([]);for(var o=t.length,r=0;r<t.length;r++)n(r,t[r])})},n.resolve=function(e){return e&&"object"==typeof e&&e.constructor===n?e:new n(function(t){t(e)})},n.reject=function(e){return new n(function(t,i){i(e)})},n.race=function(e){return new n(function(t,i){for(var n=0,o=e.length;n<o;n++)e[n].then(t,i)})},n._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){d(e,0)},n._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},n._setImmediateFn=function(e){n._immediateFn=e},n._setUnhandledRejectionFn=function(e){n._unhandledRejectionFn=e},"undefined"!=typeof module&&module.exports?module.exports=n:e.Promise||(e.Promise=n)}(this),function(){app.define("metrics.private"),app.metrics.private={ver:"1.0",offers:{welcome:{show:!1,hide:!1,tutorial:{show:!1,hide:!1,success:!1},success:!1},stat:{show:!1,hide:!1,success:!1},inbox:{show:!1,hide:!1,success:!1},plan:{show:!1,hide:!1,success:!1},votes:{show:!1,hide:!1,score:null,success:!1},popup:{premium:{show:!1,hide:!1,success:!1},jptest:{show:!1,hide:!1,success:!1}}},overview:{premium:{show:!1,hide:!1,success:!1}},jptest:{show:!1,hide:!1,start:!1,score:null,passed:0},resume:{buttonNew:!1,select:{show:!1,hide:!1,template:null,success:!1},create:{show:!1,hide:!1,control:{preview:!1,photo:!1,design:!1,print:!1,pdf:!1,lang:!1},tutorial:{show:!1,hide:!1,success:!1},success:!1}},plan:{show:!1,hide:!1,success:!1},payment:{show:!1,hide:!1,method:null,period:null,success:!1}}}(),function(){app.define("metrics.public"),app.metrics.public={ver:"1.0",plan:{name:"free",period:"month1"},notify:{oauth:!1},views:{home:0,premium:0,jptest:0,blog:0},offers:{popup:{blog:{subscribe:{show:!1,hide:!1,success:!1,email:!1}}}}}}(),function(e,t,i,n,o){e.define("commons.EventEmitter");var r="EventEmitter:propagation",a=function(e){e&&(this.context=e)},s=a.prototype,c=function(){return this.hasOwnProperty("_events")||"object"==typeof this._events||(this._events={}),this._events},l=function(e,t){var i=e[0],n=e[1],o=e[2];if("string"!=typeof i&&"object"!=typeof i||null===i||Array.isArray(i))throw new TypeError("Expecting event name to be a string or object.");if("string"==typeof i&&!n)throw new Error("Expecting a callback function to be provided.");if(n&&"function"!=typeof n){if("object"!=typeof i||"object"!=typeof n)throw new TypeError("Expecting callback to be a function.");o=n}if("object"==typeof i)for(var r in i)t.call(this,r,i[r],o);"string"==typeof i&&(i=i.split(" "),i.forEach(function(e){t.call(this,e,n,o)},this))},d=function(e,t){var i,n,o;if(i=c.call(this)[e],i&&0!==i.length)for(i=i.slice(),this._stoppedImmediatePropagation=!1,n=0,o=i.length;n<o&&!this._stoppedImmediatePropagation&&!t(i[n],n);n++);},u=function(e,t,i){var n=-1;d.call(this,t,function(e,t){if(e.callback===i)return n=t,!0}),n!==-1&&e[t].splice(n,1)};s.on=function(){var e=c.call(this);return l.call(this,arguments,function(t,i,n){e[t]=e[t]||(e[t]=[]),e[t].push({callback:i,context:n})}),this},s.once=function(){return l.call(this,arguments,function(e,t,i){var n=function(o){t.call(i||this,o),this.off(e,n)};this.on(e,n,this)}),this},s.off=function(e,t){var i=c.call(this);if(0===arguments.length)this._events={};else if(!e||"string"!=typeof e&&"object"!=typeof e||Array.isArray(e))throw new TypeError("Expecting event name to be a string or object.");if("object"==typeof e)for(var n in e)u.call(this,i,n,e[n]);if("string"==typeof e){var o=e.split(" ");1===o.length?t?u.call(this,i,e,t):i[e]=[]:o.forEach(function(e){i[e]=[]})}return this},s.trigger=function(e,t,i){if(!e)throw new Error("trigger method requires an event name");if("string"!=typeof e)throw new TypeError("Expecting event names to be a string.");if(i&&"boolean"!=typeof i)throw new TypeError("Expecting doNotPropagate to be a boolean.");return e=e.split(" "),e.forEach(function(e){d.call(this,e,function(e){e.callback.call(e.context||this.context||this,t)}.bind(this)),i||d.call(this,r,function(i){var n=e;i.prefix&&(n=i.prefix+n),i.emitter.trigger(n,t)})},this),this},s.propagateTo=function(e,t){var i=c.call(this);i[r]||(this._events[r]=[]),i[r].push({emitter:e,prefix:t})},s.stopPropagatingTo=function(e){var t=c.call(this);if(!e)return void(t[r]=[]);var i,n=t[r],o=n.length;for(i=0;i<o;i++)if(n[i].emitter===e){n.splice(i,1);break}},s.stopImmediatePropagation=function(){this._stoppedImmediatePropagation=!0},s.has=function(e,t,i){var n=c.call(this),o=n[e];if(0===arguments.length)return Object.keys(n);if(!o)return!1;if(!t)return o.length>0;for(var r=0,a=o.length;r<a;r++){var s=o[r];if(i&&t&&s.context===i&&s.callback===t)return!0;if(t&&!i&&s.callback===t)return!0}return!1},e.commons.EventEmitter=a}(app,$,app.$dom,app.events,app.utils),function(e,t,i,n,o){e.define("commons.EventEmitterMicro"),e.commons.EventEmitterMicro=function(){this._events={}},e.commons.EventEmitterMicro.prototype={on:function(e,t){this._events[e]=this._events[e]||[],this._events[e].unshift(t)},once:function(e,t){function i(o){n.off(e,i),void 0!==o?t(o):t()}var n=this;this.on(e,i)},off:function(e,t){if(e in this._events!=!1){var i=this._events[e].indexOf(t);i!==-1&&this._events[e].splice(i,1)}},trigger:function(e,t){if(e in this._events!=!1)for(var i=this._events[e].length-1;i>=0;i--)void 0!==t?this._events[e][i](t):this._events[e][i]()},destroy:function(){for(var e in this._events)this._events[e]=null;this._events=null}}}(app,$,app.$dom,app.events,app.utils),function(e,t,i,n,o){e.define("features.premium"),e.features.premium={active:!1,init:function(n){this.active||(this.options=n||{},this.scope=this.options.scope?t(this.options.scope):i.body,this.scroll=this.options.scroll?t(this.options.scroll):e.$dom.window,this.render.header(),this.active=!0)},render:{header:function(){var i=r.scope.find(".ovpremium__header"),n=i.find(".ovpremium__header__overlay"),a=i.find(".ovpremium__header__layer"),s=[];if(i.length){a.each(function(e){var i=t(this).children(),n=o.random(12,24),a=o.random(90,105)/100;i[0]._index=e,s.push({elem:i,transform:"translate3d(0px, 0px, 0px) scale3d(1, 1, 1)"}),r.options.imagesLoaded?i.css({transform:"translate3d(0px, 30px, 0px)"}):i.css({transform:"translate3d(0px, "+n+"px, 0px) scale3d("+a+", "+a+", 1)"})}),r.headerParallax=new e.plugins.scroll.parallax({scroll:r.scroll,container:i,items:r.items,fade:{in:{elem:n}}}),r.headerParallax.start();var c=0;if(r.options.imagesLoaded){var l=new e.plugins.imagesLoaded({container:i[0]});l.on("image-load",function(e){if(!e.classList[0].match(/ovpremium__header__layer__inner/)){var i=t(e).parent();if(!s[i[0]._index])return;setTimeout(function(){i.addClass("ovpremium__header__layer__inner--animate").css({transform:s[i[0]._index].transform}),o.onEndTransition(i[0],function(){c++,c==s.length&&(r.render.content(),o.each(o.omit(r.render,["header","content","clouds"]),function(e){o.isFunction(e)&&e()}),r.options.imagesLoaded.load({timeout:1e4}))})},o.random(500,1e3))}}),l.load({imageClassName:"l-progressive"})}else t.each(s,function(){var e=this.elem;e.addClass("ovpremium__header__layer__inner--animate").css({transform:this.transform,"transition-delay":o.random(0,15)/100+"s"}),o.onEndTransition(e[0],function(){c++,c==s.length&&(r.render.content(),o.each(o.omit(r.render,["header","content","clouds"]),function(e){o.isFunction(e)&&e()}))})})}},content:function(){r.contentAnimate=new e.plugins.scroll.animate({scroll:r.scroll,container:r.scope,items:[{elem:".screens",callback:function(t,i){!e.device.isMobile&&t[0].play&&setTimeout(function(){t[0].play.run(!0)},1500)}},{elem:".overview__section[data-section='stat']",callback:function(e,t){r.chartRadial&&r.chartRadial.render([o.random(5,87),o.random(5,87),o.random(5,87)])}},{elem:".overview__section[data-section='clouds']",callback:function(e,t){r.render.clouds(),e.find(".ovpremium__prof__items").attr("data-show",!0)}}]}),r.contentAnimate.start()},chart:function(){r.chartRadial=new e.plugins.chartRadial(r.scope.find(".chart__radial"),{container:"chart__radial__graph mb-m",labels:"chart__radial__labels c-blackLight",labelItem:"chart__radial__label mb-xs"}),r.chartRadial.render([{title:"настольные ПК",value:o.random(5,87)},{title:"планшеты",value:o.random(5,87)},{title:"мобильные телефоны",value:o.random(5,87)}])},ipad:function(){e.device.isMobile||(r.ipadParallax=new e.plugins.scroll.parallax({scroll:r.scroll,items:[{container:".slide8-1__viewport",selector:".slide8-1__screen",viewports:{large:{fromTime:.07720144752714113,toTime:2.2,fromX:0,toX:0,fromY:0,toY:-1500}}}]}),r.ipadParallax.start())},screens:function(){r.screensItems=[],r.scope.find(".screens").each(function(t){var i=new e.plugins.screens(this,{vertical:"true"==this.getAttribute("data-vertical"),mousewheel:!1,phoneEmulate:!0,play:!e.device.isMobile&&{round:"true"==this.getAttribute("data-round")}});i.init(),i.marquee.disableKeyboard(),e.device.isMobile||"true"!=this.getAttribute("data-autorun")||(this.play=i.play),r.screensItems.push(i)})},clouds:function(){var i=r.scope.find(".ovpremium__clouds"),n=i.find(".ovpremium__clouds__fly__item");i.parallax(),n.each(function(){var i=t(this),n=i.width(),o=i.offset().left;TweenMax.to(i,50*o/e.sizes.width,{x:-o-n,ease:Linear.easeNone,onComplete:function(){TweenMax.fromTo(i,45,{left:"100%",x:0},{x:-e.sizes.width-n,ease:Linear.easeNone,repeat:-1})}})})},notebooks:function(){e.device.isMobile||(r.notebooksParallax=new e.plugins.scroll.ParallaxController({scroll:r.scroll,items:[{selector:".slide11-1",from:100,to:-150,off:0}]}),r.notebooksParallax.start())},video:function(){var e=r.scope.find(".slide-video");e.find(".ovpremium__video__play").on("click",function(){r.player.show(this.getAttribute("data-url"))}),e.find(".ovpremium__video__items").on("click",".ovpremium__video__item__image",function(e){r.player.show(e.currentTarget.getAttribute("data-url"))})}},destroy:function(){this.headerParallax.destroy(),e.device.isMobile||(this.ipadParallax.destroy(),this.notebooksParallax.destroy()),this.contentAnimate.destroy(),this.chartRadial.destroy(),this.screensItems&&o.each(this.screensItems,function(e){e.destroy()}),this.active=!1},items:[{selector:".ovpremium__header__layer1",viewports:{large:{fromTime:.07720144752714113,toTime:1,fromX:-645,toX:-645,fromY:-70,toY:-1300},medium:{fromX:-500,toX:-500,fromY:50},small:{fromX:-148,toX:-148,fromY:-18,toY:-1e3,fromTime:0}}},{selector:".ovpremium__header__layer2",viewports:{large:{fromTime:0,toTime:1,fromX:-323,toX:-323,fromY:-245,toY:-1700},medium:{fromX:-252,toX:-252,fromY:-95},small:{fromX:-148,toX:-148,fromY:276,toY:-600,fromTime:0}}},{selector:".ovpremium__header__layer3",viewports:{large:{fromTime:.033,toTime:1,fromX:0,toX:0,fromY:-110,toY:-1e3},medium:{fromY:-63},small:{fromY:28,fromX:0,toX:0,toY:-480,fromTime:0}}},{selector:".ovpremium__header__layer4",viewports:{large:{fromTime:0,toTime:1,fromX:582,toX:582,fromY:466,toY:-400},medium:{fromX:450,toX:450,fromY:462,fromTime:.033,toY:-400},small:{fromX:118,toX:118,fromY:834,fromTime:0,toY:-200,toTime:1}}},{selector:".ovpremium__header__layer5",viewports:{large:{fromTime:.077,toTime:1,fromX:-645,toX:-645,fromY:567,toY:-300},medium:{fromX:-500,toX:-500,fromY:540},small:{toX:148,fromX:148,fromY:-68,toY:-1650,fromTime:0}}},{selector:".ovpremium__header__layer6",viewports:{large:{fromTime:0,toTime:1,fromX:-323,toX:-323,fromY:392,toY:-800},medium:{toX:-252,fromX:-252,fromY:396},small:{fromX:-148,toX:-148,fromY:606,toY:-400,fromTime:0}}},{selector:".ovpremium__header__layer7",viewports:{large:{fromTime:.033,toTime:1,fromX:0,toX:0,fromY:527,toY:0},medium:{fromY:481},small:{toY:-460,fromY:484,fromTime:0}}},{selector:".ovpremium__header__layer8",viewports:{large:{fromTime:0,toTime:1,fromX:323,toX:323,fromY:-175,toY:-1200},medium:{fromX:252,toX:252,fromY:-38,toY:-1200,fromTime:.033},small:{toX:148,fromX:148,fromY:226,fromTime:0,toY:-1200}}},{selector:".ovpremium__header__layer9",viewports:{large:{fromTime:0,toTime:1,fromX:645,
toX:645,fromY:-268,toY:-900},medium:{fromX:500,toX:500,fromY:-126,fromTime:.033,toY:-600},small:{fromX:-148,toX:-148,fromY:896,toY:0,fromTime:0,toTime:1}}},{selector:".ovpremium__header__layer10",viewports:{large:{fromTime:0,toTime:1,fromX:-323,toX:-323,fromY:1126,toY:-200},medium:{toX:-252,fromX:-252,fromY:974,toY:-400},small:{fromX:148,toX:148,fromY:520,fromTime:0,toY:-800}}}]};var r=e.features.premium}(app,$,app.$dom,app.events,app.utils),app.config={domain:null,api:"/private/api",request:{options:function(){return{loader:app.device.isMobile,notify:!0}}},logger:{method:"addLog",report:!0},metrika:{active:!0,report:{method:"addMetrika",interval:30,yametrika:{counter:"27428363"}}},payment:{yamoney:"410012719414223"},profile:{photo:{minWidth:440,maxHeight:620}},resume:{free:{autoSave:{interval:15}}},share:{title:"Создать крутое резюме и получить престижную работу, здесь на ResumeKraft.ru"},changeStyles:!0},app.fetch.API=function(e){return app.fetch.API[e]()},app.fetch.API.getDataInit=function(){return new Promise(function(e,t){app.request("getDataInit").then(function(t){$account=$store.account,$store.account.set(t.account),$store.data.set(t.data?t.data:[]),$store.inbox.set(t.inbox?t.inbox:[]);var i=[];if(_.each(t.data,function(e){e.likes&&i.push({_id:e.id,plan:e.plan,post:e.post,color:e.config.color,likes:e.likes})}),$store.likes.set(i?i:[]),app.config.metrika&&app.config.metrika.active){var n=!1;app.config.metrika.report&&(n={method:app.config.metrika.report.method,interval:app.config.metrika.report.interval}),app.metrika=new app.plugins.metrika({key:$account.get("_id"),data:app.metrics.private,previousData:t.metrika,visits:$account.get("visits"),device:!0,report:n}),app.metrikaPublic=new app.plugins.metrika({key:"public",data:app.metrics.public,readOnly:!0})}else app.metrika=new app.plugins.metrika,app.metrikaPublic=new app.plugins.metrika;e(t)})})},window.$18n={},$i18n=function(e){return i18n.localise(e)},$i18n.lang=function(e){i18n.setLanguage(e)},function(){window.i18n.dictionary({ru:{resume:{basic:{template:{Age:"Возраст",Citizenship:"Гражданство",City:"Город","Business trip":"Командировки",Relocation:"Переезд",Phone:"Телефон","General information":"Общие данные","Main skills":"Ключевые навыки",Education:"Образование",Courses:"Курсы",Specialty:"Специальность",Languages:"Языки",Language:"Владение языками",Experience:"Опыт работы","Until Now":"по настоящее время","About me":"Обо мне","About me, qualities":"О себе, мои качества"}}}}})}();
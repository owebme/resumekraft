var app=app||{};app.define=function(e){var t,n=e.split("."),o=app;for("app"==n[0]&&(n=n.slice(1)),t=0;t<n.length;t++)"undefined"==typeof o[n[t]]&&(o[n[t]]={}),o=o[n[t]];return o},app.tag=function(e,t){if(window.riot){if(!t||!window.$afterlag)return _.filter(riot.vdom?riot.vdom:riot.util.vdom,function(t){if(t.root.nodeName.toLowerCase()==e)return t})[0];var n=app.tag(e);n&&n.isMounted?t(n):$afterlag.run(function(){var n=app.tag(e);n&&(n.isMounted?t(n):app.tag(e).one("updated",function(){t(n)}))})}},window.Store=window.store||{},window.$store={},window.$afterlag={run:function(e,t){var n={delay:0,iterations:1};t&&_.extend(n,t);var o=new Afterlag(n);o.run(e)},xs:function(e,t){var n={iterations:2,timeout:200};t&&_.extend(n,t),$afterlag.run(e,n)},s:function(e,t){var n={iterations:3,timeout:300};t&&_.extend(n,t),$afterlag.run(e,n)},m:function(e,t){var n={iterations:5,timeout:500};t&&_.extend(n,t),$afterlag.run(e,n)},l:function(e,t){var n={iterations:7,timeout:700};t&&_.extend(n,t),$afterlag.run(e,n)},xl:function(e,t){var n={iterations:10,timeout:1e3};t&&_.extend(n,t),$afterlag.run(e,n)}},function(e){app.define("config"),app.define("effects"),app.define("sizes"),app.define("utils"),app.define("plugins"),app.define("device"),app.define("events"),app.define("loader"),app.define("$dom"),app.$dom={html:e("html"),body:e("body"),document:e(document),window:e(window),root:e("#app")},app.events={click:document&&"ontouchstart"in document.documentElement?"tap":"click"},app.keys={LEFT:37,UP:38,RIGHT:39,DOWN:40,DEL:8,TAB:9,RETURN:13,ENTER:13,ESC:27,PAGEUP:33,PAGEDOWN:34,SPACE:32},window.KEY=app.keys,app.prefixed={transform:Modernizr.prefixed("transform"),"transform-origin":Modernizr.prefixed("transformOrigin"),"transition-duration":Modernizr.prefixed("transitionDuration")},$$=window.jQuery,window.moment&&moment.locale("ru"),e.fn.api=function(e){return this.data(e)?this.data(e):this.data(e,{}).data(e)}}($),function(e,t){t.init=function(n){if(n){var o,i=n.split("."),r=e;for(o=0;o<i.length;o++)r=r[i[o]];r&&"function"==typeof r.init?(r.init(),t.log("Initialize: <"+n+"> ready")):t.log("ERROR: <"+n+"> initialize")}},t.is=function(n,o){if(n){var i,r=n.split("."),a=e;for(i=0;i<r.length;i++)a=a[r[i]];a?o&&"function"==typeof o&&o():t.log("NOT found: <"+n+">")}},t.log=function(e){e&&("object"==typeof e?console.dir(e):console.log(e))},t.logger=function(e,n){e&&n&&("init"===e?t.log("Initialize: <"+n+"> ready"):"open"===e?t.log("OPEN: <"+n+">"):"close"===e?t.log("CLOSE: <"+n+">"):t.log(e+": <"+n+">"))},t.random=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},t.template=function(n,o,i){if(!e.templates[n])return void t.log("NOT found: <"+n+"> template");var r=Mustache.render(e.templates[n](),o?o:{}),a=$(r).appendTo(i?i:e.$dom.root);return a},t.copyArray=function(e){var n=null===e?null:t.isObject(e)?{}:[];for(var o in e)"object"==typeof e[o]&&"prototype"!==o?n[o]=t.copyArray(e[o]):n[o]=e[o];return n},t.sortArray=function(e,t,n){var o=_.sortBy(e,function(e){return e[t]});return"desc"===n?o.reverse():o},t.sortByDate=function(e,t,n){if(!window.moment)return e;var o=_.sortBy(e,function(e){return moment(e[t]).format("X")});return"desc"===n?o.reverse():o},t.isArray=function(e){if(e&&"[object Array]"===Object.prototype.toString.call(e))return!0},t.isFunction=function(e){if(e&&"function"==typeof e)return!0},t.fixTouchScroll=function(t,n){var o=null,i=null;t.on("touchmove MSPointerMove",function(t){if(0===i){var n=t.changedTouches[0].clientY;n<o?(o=0,t.preventDefault()):e.device&&e.device.isIOS?setTimeout(function(){o=n},1e3):o=n}}),n.on("scroll",function(){i=this.scrollTop})},t.raf=function(e){var t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;return t?t(e):window.setTimeout(e,1e3/60)},t.caf=function(e){var t=window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout;t(e),e=null},t.support={transitions:Modernizr.csstransitions},t.transEndEventNames={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},t.transEndEventName=t.transEndEventNames[Modernizr.prefixed("transition")],t.animEndEventNames={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd",animation:"animationend"},t.animEndEventName=t.animEndEventNames[Modernizr.prefixed("animation")],t.onEndTransition=function(e,n){var o=function(e){if(t.support.transitions){if(e.target!=this)return;this.removeEventListener(t.transEndEventName,o)}n&&"function"==typeof n&&n.call(this)};t.support.transitions?e.addEventListener(t.transEndEventName,o):o()},t.onEndAnimation=function(e,n){var o=function(e){if(t.support.transitions){if(e.target!=this)return;this.removeEventListener(t.animEndEventName,o)}n&&"function"==typeof n&&n.call(this)};t.support.transitions?e.addEventListener(t.animEndEventName,o):o()},t.onLoadImage=function(e,t){function n(){r||(r=!0,t(!0))}function o(){t(!1)}var i=new Image,r=!1;i.src=e,i.onerror=o,i.onload=n,i.complete&&n()},t.getSizeImage=function(e,t){function n(){r||(r=!0,t(i.naturalWidth,i.naturalHeight))}function o(){t(!1)}var i=new Image,r=!1;i.src=e,i.onerror=o,i.onload=n,i.complete&&n()},t.getBoundingClientRect=function(e){var t=e.getBoundingClientRect();return{top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width||t.right-t.left,height:t.height||t.bottom-t.top}},t.getScroll=function(e){var t=e.x*-1,n=e.y*-1,o=e.maxScrollX*-1,i=e.maxScrollY*-1;return{x:t,y:n,maxX:o,maxY:i}},t.throttle=function(e,t){var n=!0;return function(o){n&&(n=!1,setTimeout(function(){n=!0},t),e(o))}},t.debounce=function(e,t,n,o){3==arguments.length&&"boolean"!=typeof n&&(o=n,n=!1);var i;return function(){var r=arguments;o=o||this,n&&!i&&e.apply(o,r),clearTimeout(i),i=setTimeout(function(){!n&&e.apply(o,r),i=null},t)}},t.indexOf=function(e,t,n){for(var o=n||0,i=(e||[]).length;o<i;o++)if(e[o]==t)return o;return-1},t.inArray=function(e,n){return t.indexOf(e,n)!=-1},t.trim=function(e){return(e&&String(e)||"").replace(/^\s+|\s+$/g,"")},t.underscored=function(e){return t.trim(e).replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/[-\s]+/g,"_").toLowerCase()},t.deepExtend=function(e,n){for(var o in n)n.hasOwnProperty(o)&&(e[o]&&"object"==typeof n[o]?t.deepExtend(e[o],n[o]):e[o]=n[o]);return e},t.deepFindWhere=function(e,n,o,i){if(e instanceof Array)for(var r=0;r<e.length;r++)i=t.deepFindWhere(e[r],n,o,i);else for(var a in e)a==n&&e[a]==o&&(i=e),(e[a]instanceof Object||e[a]instanceof Array)&&(i=t.deepFindWhere(e[a],n,o,i));return i},t.numberFormat=function(e,t,n,o){if(isNaN(e)||null==e)return"";e=parseInt(e).toFixed(~~t),o="string"==typeof o?o:",";var i=e.split("."),r=i[0],a=i[1]?(n||".")+i[1]:"";return r.replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+o)+a},t.clean=function(e,n){return e=t.trim(e),e?e:void 0!==n?n:null},t.isObject=function(e){return"[object Object]"===Object.prototype.toString.call(e)},t.isEmail=function(e){return e.match(/.+@.+\..+/i)},t.newId=function(){return String(Math.round((new Date).getTime()/1e3))},t.getDateNow=function(){var e=new Date,t=e.getHours(),n=e.getMinutes(),o=e.getSeconds(),i=e.getMonth()+1,r=e.getDate(),a=e.getFullYear();return t<10&&(t="0"+t),n<10&&(n="0"+n),o<10&&(o="0"+o),i<10&&(i="0"+i),r<10&&(r="0"+r),a+"-"+i+"-"+r+" "+t+":"+n+":"+o},Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t},t.getDates=function(e,t){for(var n=new Array,o=e;o<=t;)n.push(new Date(o)),o=o.addDays(1);return n},t.supportClipboard=function(){return!!(window.clipboardData&&window.clipboardData.setData||document.queryCommandSupported&&document.queryCommandSupported("copy"))},t.copyToClip=function(e){if(window.clipboardData&&window.clipboardData.setData)return clipboardData.setData("Text",e);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var t=document.createElement("textarea");t.textContent=e,t.style.position="fixed",document.body.appendChild(t),t.select();try{return document.execCommand("copy")}catch(e){return console.warn("Copy to clipboard failed.",e),!1}finally{document.body.removeChild(t)}}},t.bbUpdate=function(e,t){e.on("update",function(e){var n=e.data&&e.data.transaction&&e.data.transaction.length&&e.data.transaction[0].path?e.data.transaction[0].path[0]:null,o=e.data&&e.data.transaction&&e.data.transaction.length?e.data.transaction[0].value:null;t(n,o,e)})},t.getCookie=function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0},t.setCookie=function(e,t,n){n=n||{};var o=n.expires;if("number"==typeof o&&o){var i=new Date;i.setTime(i.getTime()+1e3*o),o=n.expires=i}o&&o.toUTCString&&(n.expires=o.toUTCString()),t=encodeURIComponent(t);var r=e+"="+t;for(var a in n){r+="; "+a;var s=n[a];s!==!0&&(r+="="+s)}document.cookie=r},window.moment&&(t.moment=window.moment),window._?_.extend(_,t):window._=t,e.utils=window._}(app,app.utils),function(){app.url=function(){return(app.config.domain?app.config.domain:"")+app.config.api},app.fetch=function(e){var t=[],n=[],o=e.split(", ");return new Promise(function(e,r){for(i=0;i<o.length;i++)_.isFunction(app.fetch.API[o[i]])&&t.push(o[i]);o.length!==t.length&&(n=_.difference(o,t)),Promise.all(t.map(app.fetch.API).concat(n.map(app.request))).then(function(t){e(t)})})},app.requestList=function(e,t,n){var o=[],t=t||[],n=n||[],r=e.split(", ");return new Promise(function(e,a){for(i=0;i<r.length;i++)o.push(r[i]);Promise.all(o.map(function(e,o){return app.request(e,t[o],n[o])})).then(function(t){e(t)},function(e){a(e)})})},app.request=function(e,t,n){return new Promise(function(o,i){var r=_.underscored(e).replace(/^(get|set|add|del)/g,"").replace(/_/g,"/"),a=null,s=app.config.request();if(n&&_.extend(s,n),e.match(/^get/)?a="GET":e.match(/^set/)?a="PUT":e.match(/^add/)?a="POST":e.match(/^del/)&&(a="DELETE"),!a)return void i("Error type request: "+e);"GET"===a&&t&&(r+="/"+t,t=null),s.loader&&window.$LoaderAjax&&$LoaderAjax.show();var c=new XMLHttpRequest;c.open(a,app.url()+r,!0),c.setRequestHeader("Accept","application/json"),c.setRequestHeader("Content-Type","application/json");try{app.request.list&&app.request.list.method===e&&app.request.list.params==JSON.stringify(t)&&app.request.list.xhr.abort(),c.send(t?JSON.stringify(t):{})}catch(e){}c.onload=function(e){try{if(200==this.status){var t=JSON.parse(this.response);o("OK"===t.status&&t.result?t.result:t)}else{s.notify&&app.errHandler(this.status);var n=new Error(this.statusText);n.code=this.status,i(n)}}catch(e){}app.request.list={},s.loader&&window.$LoaderAjax&&$LoaderAjax.hide()},c.onerror=function(){i(new Error("Network Error")),s.loader&&window.$LoaderAjax&&$LoaderAjax.hide()};try{app.request.list={method:e,xhr:c,params:JSON.stringify(t)}}catch(e){}})},app.errHandler=function(e){401==e?window.$Notify?$Notify.show({color:"info",text:"Авторизируйтесь снова"}):alert("Авторизируйтесь снова"):window.$Notify?$Notify.show({color:"danger",text:"Ошибка проведения операции повторите ее чуть позже"}):alert("Ошибка проведения операции повторите ее чуть позже")};var e=function(e,t,n){app.request(app.config.logger.method,{data:{msg:e,line:n,url:t},device:app.device.get(),type:"error"},{loader:!1,notify:!1})},t=_.debounce(e,1e3,!0);window.onerror=function(e,n,o){app&&app.config&&app.config.logger&&app.config.logger.report&&t(e,n,o)}}(),function(e){e.history=[],e.resources=function(t,n,o){n=n||$.noop,o=o||$.noop;for(var i=[],r=0;r<t.length;r++)e.history.indexOf(t[r])<0&&i.push(t[r]);return i.length?void Modernizr.load({load:i,callback:function(t){e.history.push(t),o()},complete:n}):n()},e.images=function(e,t,n){var o=0;t=t||$.noop,n=n||$.noop,e.imagesLoaded({background:".bg-cover"}).always(t).progress(function(e){o++,n(o,e.images.length)})}}(app.loader),function(e,t){var n=function(){e.width=t.window.width(),e.height=parseInt(window.innerHeight,10)};t.window.on("resize.app",n),n()}(app.sizes,app.$dom),function(e,t,n){e.support=Modernizr,e.isMobile=e.support.touch,"true"==t.root.attr("demo")&&(app.demo=!0,t.window.width()<1025&&(e.isMobile=!0,t.html.removeClass("m-no-touch").addClass("m-touch"))),t.html.addClass(e.isMobile?"d-mobile":"d-no-mobile"),e.isRetina=window.devicePixelRatio&&window.devicePixelRatio>1,t.html.addClass(e.isRetina?"d-retina":"d-no-retina");var o=function(){var n=t.window.width();e.isPhone=n<768,e.isTablet=n<1025&&n>767,e.orientation=e.isTablet&&n<1025&&n>991||e.isPhone&&n>480?"landscape":"portrait",t.html.addClass(e.isPhone?"d-phone":"d-no-phone").removeClass(e.isPhone?"d-no-phone":"d-phone").addClass(e.isTablet?"d-tablet":"d-no-tablet").removeClass(e.isTablet?"d-no-tablet":"d-tablet").addClass("landscape"===e.orientation?"r-landscape":"r-portrait").removeClass("landscape"!==e.orientation?"r-landscape":"r-portrait"),e.is=e.isPhone?"phone":e.isTablet?"tablet":"desktop"};if(t.window.on("resize.sizeCheck",o),o(),e.ua=navigator.userAgent,navigator.userAgent.match(/(iPhone)/i)&&(e.isPhone=!0),navigator.userAgent.match(/iPad/i)&&(t.html.addClass("d-ipad"),e.isIPad=!0),navigator.userAgent.match(/(iPhone|iPod touch)/i)&&(t.html.addClass("d-iphone"),e.isIPhone=!0),navigator.userAgent.match(/(iPad|iPhone|iPod touch)/i)){t.html.addClass("d-ios"),e.isIOS=!0;var i=navigator.userAgent.match(/.*CPU.*OS (\d)_(\d)/i);e.verOS=!(!i||!i[1])&&i[1]+(i[2]?"."+i[2]:"")}else t.html.addClass("d-no-ios");if(navigator.userAgent.match(/.*CPU.*OS 7_\d/i)&&(t.html.addClass("d-ios7"),e.isIOS7=!0),navigator.userAgent.match(/Android/i)){t.html.addClass("d-android"),e.isAndroid=!0;var i=navigator.userAgent.match(/Android (\d)\.(\d)/i);e.verOS=!(!i||!i[1])&&i[1]+(i[2]?"."+i[2]:"")}if(app.device.isMobile&&(e.os=e.isAndroid?"android":e.isIOS?"ios":"unknown"),t.html.hasClass("d-ipad d-ios7")&&t.window.on("resize orientationchange focusout",function(){window.scrollTo(0,0)}),e.isWin=navigator.platform.indexOf("Win")>-1,e.isMac=navigator.platform.indexOf("Mac")>-1,e.isLinux=navigator.platform.indexOf("Linux")>-1,t.html.addClass(e.isMac?"d-macOS":"d-no-macOS"),e.platform=e.isWin?"win":e.isMac?"mac":e.isLinux?"linux":"unknown",e.isChrome=navigator.userAgent.toLowerCase().indexOf("chrome")>-1,t.html.addClass(e.isChrome?"d-chrome":"d-no-chrome"),e.isSafari=!e.isChrome&&navigator.userAgent.toLowerCase().indexOf("safari")>-1,t.html.addClass(e.isSafari?"d-safari":"d-no-safari"),e.isFirefox=navigator.userAgent.toLowerCase().indexOf("firefox")>-1,t.html.addClass(e.isFirefox?"d-firefox":"d-no-firefox"),e.isMobile&&window.FastClick&&"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){FastClick.attach(document.body)},!1),!e.isMobile){var r,a=t.body[0];t.window[0].addEventListener("scroll",function(){clearTimeout(r),a.getAttribute("class")&&a.getAttribute("class").match(/disable__hover/)||a.classList.add("disable__hover"),r=setTimeout(function(){a.classList.remove("disable__hover")},300)},!1)}app.device.get=function(){return n.extend(n.omit(app.device,["get","support"]),{screen:app.sizes})}}(app.device,app.$dom,app.utils),function(){app.define("metrics.private"),app.metrics.private={ver:"1.0",offers:{welcome:{mobile:{show:!1,success:!1},show:!1,hide:!1,tutorial:{show:!1,hide:!1,success:!1},success:!1},stat:{show:!1,hide:!1,success:!1},inbox:{show:!1,hide:!1,success:!1},plan:{show:!1,free:!1,premium:!1},jptest:{show:!1,hide:!1,success:!1},votes:{show:!1,hide:!1,score:null,success:!1},popup:{premium:{show:!1,hide:!1,success:!1},jptest:{show:!1,hide:!1,success:!1}}},overview:{premium:{show:!1,hide:!1,success:!1}},jptest:{show:!1,hide:!1,start:!1,passed:0},resume:{buttonNew:!1,select:{default:"free",show:!1,hide:!1,template:null,success:!1},create:{show:!1,hide:!1,control:{preview:!1,photo:!1,design:!1,print:!1,pdf:!1},settings:{show:!1,hide:!1,logotype:!1,stat:!1,lang:!1},tutorial:{show:!1,hide:!1,success:!1},success:!1}},plan:{show:!1,hide:!1,success:!1},payment:{show:!1,hide:!1,method:null,period:null,success:!1}}}(),function(e,t,n,o,i){e.define("commons.EventEmitter");var r="EventEmitter:propagation",a=function(e){e&&(this.context=e)},s=a.prototype,c=function(){return this.hasOwnProperty("_events")||"object"==typeof this._events||(this._events={}),this._events},l=function(e,t){var n=e[0],o=e[1],i=e[2];if("string"!=typeof n&&"object"!=typeof n||null===n||Array.isArray(n))throw new TypeError("Expecting event name to be a string or object.");if("string"==typeof n&&!o)throw new Error("Expecting a callback function to be provided.");if(o&&"function"!=typeof o){if("object"!=typeof n||"object"!=typeof o)throw new TypeError("Expecting callback to be a function.");i=o}if("object"==typeof n)for(var r in n)t.call(this,r,n[r],i);"string"==typeof n&&(n=n.split(" "),n.forEach(function(e){t.call(this,e,o,i)},this))},d=function(e,t){var n,o,i;if(n=c.call(this)[e],n&&0!==n.length)for(n=n.slice(),this._stoppedImmediatePropagation=!1,o=0,i=n.length;o<i&&!this._stoppedImmediatePropagation&&!t(n[o],o);o++);},p=function(e,t,n){var o=-1;d.call(this,t,function(e,t){if(e.callback===n)return o=t,!0}),o!==-1&&e[t].splice(o,1)};s.on=function(){var e=c.call(this);return l.call(this,arguments,function(t,n,o){e[t]=e[t]||(e[t]=[]),e[t].push({callback:n,context:o})}),this},s.once=function(){return l.call(this,arguments,function(e,t,n){var o=function(i){t.call(n||this,i),this.off(e,o)};this.on(e,o,this)}),this},s.off=function(e,t){var n=c.call(this);if(0===arguments.length)this._events={};else if(!e||"string"!=typeof e&&"object"!=typeof e||Array.isArray(e))throw new TypeError("Expecting event name to be a string or object.");if("object"==typeof e)for(var o in e)p.call(this,n,o,e[o]);if("string"==typeof e){var i=e.split(" ");1===i.length?t?p.call(this,n,e,t):n[e]=[]:i.forEach(function(e){n[e]=[]})}return this},s.trigger=function(e,t,n){if(!e)throw new Error("trigger method requires an event name");if("string"!=typeof e)throw new TypeError("Expecting event names to be a string.");if(n&&"boolean"!=typeof n)throw new TypeError("Expecting doNotPropagate to be a boolean.");return e=e.split(" "),e.forEach(function(e){d.call(this,e,function(e){e.callback.call(e.context||this.context||this,t)}.bind(this)),n||d.call(this,r,function(n){var o=e;n.prefix&&(o=n.prefix+o),n.emitter.trigger(o,t)})},this),this},s.propagateTo=function(e,t){var n=c.call(this);n[r]||(this._events[r]=[]),n[r].push({emitter:e,prefix:t})},s.stopPropagatingTo=function(e){var t=c.call(this);if(!e)return void(t[r]=[]);var n,o=t[r],i=o.length;for(n=0;n<i;n++)if(o[n].emitter===e){o.splice(n,1);break}},s.stopImmediatePropagation=function(){this._stoppedImmediatePropagation=!0},s.has=function(e,t,n){var o=c.call(this),i=o[e];if(0===arguments.length)return Object.keys(o);if(!i)return!1;if(!t)return i.length>0;for(var r=0,a=i.length;r<a;r++){var s=i[r];if(n&&t&&s.context===n&&s.callback===t)return!0;if(t&&!n&&s.callback===t)return!0}return!1},e.commons.EventEmitter=a}(app,$,app.$dom,app.events,app.utils),function(e,t,n,o,i){e.define("commons.EventEmitterMicro"),e.commons.EventEmitterMicro=function(){this._events={}},e.commons.EventEmitterMicro.prototype={on:function(e,t){this._events[e]=this._events[e]||[],this._events[e].unshift(t)},once:function(e,t){function n(i){o.off(e,n),void 0!==i?t(i):t()}var o=this;this.on(e,n)},off:function(e,t){if(e in this._events!=!1){var n=this._events[e].indexOf(t);n!==-1&&this._events[e].splice(n,1)}},trigger:function(e,t){if(e in this._events!=!1)for(var n=this._events[e].length-1;n>=0;n--)void 0!==t?this._events[e][n](t):this._events[e][n]()},destroy:function(){for(var e in this._events)this._events[e]=null;this._events=null}}}(app,$,app.$dom,app.events,app.utils),function(e,t,n,o,i){e.define("features.premium"),e.features.premium={active:!1,init:function(o){this.active||(this.options=o||{},this.scope=this.options.scope?t(this.options.scope):n.body,this.scroll=this.options.scroll?t(this.options.scroll):e.$dom.window,i.each(i.omit(this.render,["content","screens","chart","notebooks"]),function(e){i.isFunction(e)&&e()}),this.active=!0)},render:{header:function(){var n=r.scope.find(".ovpremium__header"),o=n.find(".ovpremium__header__overlay"),a=n.find(".ovpremium__header__layer"),s=[];if(n.length){a.each(function(e){var n=t(this).children(),o=i.random(12,24),r=i.random(90,105)/100;n[0]._index=e,s.push({elem:n,transform:"translate3d(0px, 0px, 0px) scale3d(1, 1, 1)"}),n.css({transform:"translate3d(0px, "+o+"px, 0px) scale3d("+r+", "+r+", 1)"})}),r.headerParallax=new e.plugins.scroll.parallax({scroll:r.scroll,container:n,items:r.items,fade:{in:{elem:o}}}),r.headerParallax.start();var c=0;if(r.options.imagesLoaded){var l=new e.plugins.imagesLoaded({container:n[0]});l.on("image-load",function(e){if(e.classList[0].match(/ovpremium__header__layer/)){var n=t(e).parent();n.addClass("ovpremium__header__layer__inner--animate").css({transform:s[n[0]._index].transform}),i.onEndTransition(n[0],function(){c++,c==s.length&&(r.render.content(),r.render.screens(),r.render.chart(),r.render.notebooks(),r.options.imagesLoaded.load({timeout:1e4}))})}}),l.load({imageClassName:"l-progressive"})}else t.each(s,function(){var e=this.elem;e.addClass("ovpremium__header__layer__inner--animate").css({transform:this.transform,"transition-delay":i.random(0,15)/100+"s"}),i.onEndTransition(e[0],function(){c++,c==s.length&&(r.render.content(),r.render.screens(),r.render.notebooks(),r.render.chart())})})}},content:function(){r.contentAnimate=new e.plugins.scroll.animate({scroll:r.scroll,container:r.scope,items:[{elem:".screens",callback:function(e,t){e[0].play&&setTimeout(function(){e[0].play.run(!0)},1500)}},{elem:".overview__section[data-section='stat']",callback:function(e,t){r.chartRadial&&r.chartRadial.render([i.random(5,87),i.random(5,87),i.random(5,87)])}}]}),r.contentAnimate.start()},chart:function(){r.chartRadial=new e.plugins.chartRadial(r.scope.find(".chart__radial"),{container:"chart__radial__graph mb-m",labels:"chart__radial__labels c-blackLight",labelItem:"chart__radial__label mb-xxs"}),r.chartRadial.render([{title:"настольные ПК",value:i.random(5,87)},{title:"планшеты",value:i.random(5,87)},{title:"мобильные телефоны",value:i.random(5,87)}])},ipad:function(){r.ipadParallax=new e.plugins.scroll.parallax({scroll:r.scroll,items:[{container:".slide8-1__viewport",selector:".slide8-1__screen",viewports:{large:{fromTime:.07720144752714113,toTime:2.2,fromX:0,toX:0,fromY:0,toY:-1500}}}]}),r.ipadParallax.start()},screens:function(){r.screens=[],r.scope.find(".screens").each(function(t){var n=new e.plugins.screens(this,{vertical:"true"==this.getAttribute("data-vertical"),mousewheel:!1,phoneEmulate:!0,play:{round:"true"==this.getAttribute("data-round")}});n.init(),n.marquee.disableKeyboard(),"true"==this.getAttribute("data-autorun")&&(this.play=n.play),r.screens.push(n)})},notebooks:function(){r.notebooksParallax=new e.plugins.scroll.ParallaxController({scroll:r.scroll,items:[{selector:".slide11-1",from:100,to:-150,off:0}]}),r.notebooksParallax.start()}},destroy:function(){this.headerParallax.destroy(),this.ipadParallax.destroy(),this.notebooksParallax.destroy(),this.contentAnimate.destroy(),this.chartRadial.destroy(),this.screens&&i.each(this.screens,function(e){e.destroy()}),this.active=!1},items:[{selector:".ovpremium__header__layer1",viewports:{large:{fromTime:.07720144752714113,toTime:1,fromX:-645,toX:-645,fromY:-70,toY:-1300},medium:{fromX:-500,toX:-500,fromY:50},small:{fromX:-148,toX:-148,fromY:-18,toY:-1e3,fromTime:0}}},{selector:".ovpremium__header__layer2",viewports:{large:{fromTime:0,toTime:1,fromX:-323,toX:-323,fromY:-245,toY:-1700},medium:{fromX:-252,toX:-252,fromY:-95},small:{fromX:-148,toX:-148,fromY:276,toY:-600,fromTime:0}}},{selector:".ovpremium__header__layer3",viewports:{large:{fromTime:.033,toTime:1,fromX:0,toX:0,fromY:-110,toY:-1e3},medium:{fromY:-187},small:{fromY:28,fromX:0,toX:0,toY:-480,fromTime:0}}},{selector:".ovpremium__header__layer4",viewports:{large:{fromTime:0,toTime:1,fromX:582,toX:582,fromY:466,toY:-400},medium:{fromX:450,toX:450,fromY:462,fromTime:.033,toY:-400},small:{fromX:118,toX:118,fromY:834,fromTime:0,toY:-200,toTime:1}}},{selector:".ovpremium__header__layer5",viewports:{large:{fromTime:.077,toTime:1,fromX:-645,toX:-645,fromY:567,toY:-300},medium:{fromX:-500,toX:-500,fromY:540},small:{toX:148,fromX:148,fromY:-68,toY:-1650,fromTime:0}}},{selector:".ovpremium__header__layer6",viewports:{large:{fromTime:0,toTime:1,fromX:-323,toX:-323,fromY:392,toY:-800},medium:{toX:-252,fromX:-252,fromY:396},small:{fromX:-148,toX:-148,fromY:606,toY:-400,fromTime:0}}},{selector:".ovpremium__header__layer7",viewports:{large:{fromTime:.033,toTime:1,fromX:0,toX:0,fromY:527,toY:0},medium:{fromY:535},small:{toY:-460,fromY:484,fromTime:0}}},{selector:".ovpremium__header__layer8",viewports:{large:{fromTime:0,toTime:1,fromX:323,toX:323,fromY:-175,toY:-1200},medium:{fromX:252,toX:252,fromY:-38,toY:-1200,fromTime:.033},small:{toX:148,fromX:148,fromY:226,fromTime:0,toY:-1200}}},{selector:".ovpremium__header__layer9",viewports:{large:{fromTime:0,toTime:1,fromX:645,toX:645,fromY:-268,toY:-900},medium:{fromX:500,toX:500,fromY:-126,fromTime:.033,toY:-600},small:{fromX:-148,toX:-148,fromY:896,toY:0,fromTime:0,toTime:1}}},{selector:".ovpremium__header__layer10",viewports:{large:{fromTime:0,toTime:1,fromX:-323,toX:-323,fromY:1126,toY:-200},medium:{toX:-252,fromX:-252,fromY:974,toY:-400},small:{fromX:148,toX:148,fromY:520,fromTime:0,toY:-800}}}]};var r=e.features.premium}(app,$,app.$dom,app.events,app.utils),app.config={domain:null,api:"/private/api",request:function(){return{loader:!0,notify:!0}},logger:{method:"addLog",report:!0},metrika:{active:!0,report:{method:"addMetrika",interval:30,yametrika:{counter:"27428363"}}},payment:{yamoney:"410012719414223"},profile:{photo:{minWidth:440,maxHeight:620}},resume:{free:{autoSave:{interval:15}}},share:{title:"Создать крутое резюме и получить престижную работу"},changeStyles:!1},app.fetch.API=function(e){return app.fetch.API[e]()},app.fetch.API.getDataInit=function(){return new Promise(function(e,t){app.request("getDataInit").then(function(t){$account=$store.account,$store.account.set(t.account),$store.data.set(t.data?t.data:[]),$store.inbox.set(t.inbox?t.inbox:[]);var n=[];if(_.each(t.data,function(e){e.likes&&n.push({_id:e.id,plan:e.plan,post:e.post,color:e.config.color,likes:e.likes})}),$store.likes.set(n?n:[]),app.config.metrika&&app.config.metrika.active){var o=!1;app.config.metrika.report&&(o={method:app.config.metrika.report.method,interval:app.config.metrika.report.interval}),app.metrika=new app.plugins.metrika({key:$account.get("_id"),data:app.metrics.private,previousData:t.metrika,visits:$account.get("visits"),device:!0,report:o}),app.metrikaPublic=new app.plugins.metrika({key:"public",data:app.metrics.public,readOnly:!0})}else app.metrika=new app.plugins.metrika,app.metrikaPublic=new app.plugins.metrika;e(t)})})},window.$18n={},$i18n=function(e){return i18n.localise(e)},$i18n.lang=function(e){i18n.setLanguage(e)},i18n.dictionary({ru:{resume:{basic:{template:{Age:"Возраст",City:"Город",Phone:"Телефон",Education:"Образование",Specialty:"Специальность",Languages:"Языки",Experience:"Место работы","Until Now":"по настоящее время","About me":"О себе, мои качества"}}}}});
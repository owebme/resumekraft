var app=app||{};app.define=function(e){var t,o=e.split("."),n=app;for("app"==o[0]&&(o=o.slice(1)),t=0;t<o.length;t++)"undefined"==typeof n[o[t]]&&(n[o[t]]={}),n=n[o[t]];return n},app.tag=function(e,t){if(window.riot){if(!t||!window.$afterlag)return _.filter(riot.vdom?riot.vdom:riot.util.vdom,function(t){if(t.root.nodeName.toLowerCase()==e)return t})[0];var o=app.tag(e);o&&o.isMounted?t(o):$afterlag.run(function(){var o=app.tag(e);o&&(o.isMounted?t(o):app.tag(e).one("updated",function(){t(o)}))})}},window.Store=window.store||{},window.$store={},window.$afterlag={run:function(e,t){var o={delay:0,iterations:1};t&&_.extend(o,t);var n=new Afterlag(o);n.run(e)},xs:function(e,t){var o={iterations:2,timeout:200};t&&_.extend(o,t),$afterlag.run(e,o)},s:function(e,t){var o={iterations:3,timeout:300};t&&_.extend(o,t),$afterlag.run(e,o)},m:function(e,t){var o={iterations:5,timeout:500};t&&_.extend(o,t),$afterlag.run(e,o)},l:function(e,t){var o={iterations:7,timeout:700};t&&_.extend(o,t),$afterlag.run(e,o)},xl:function(e,t){var o={iterations:10,timeout:1e3};t&&_.extend(o,t),$afterlag.run(e,o)}},function(e){app.define("config"),app.define("effects"),app.define("sizes"),app.define("utils"),app.define("plugins"),app.define("device"),app.define("events"),app.define("loader"),app.define("$dom"),app.$dom={html:e("html"),body:e("body"),document:e(document),window:e(window),root:e("#app")},app.events={click:document&&"ontouchstart"in document.documentElement?"tap":"click"},app.keys={LEFT:37,UP:38,RIGHT:39,DOWN:40,DEL:8,TAB:9,RETURN:13,ENTER:13,ESC:27,PAGEUP:33,PAGEDOWN:34,SPACE:32},window.KEY=app.keys,app.prefixed={transform:Modernizr.prefixed("transform"),"transform-origin":Modernizr.prefixed("transformOrigin"),"transition-duration":Modernizr.prefixed("transitionDuration")},$$=window.jQuery,window.moment&&moment.locale("ru"),e.fn.api=function(e){return this.data(e)?this.data(e):this.data(e,{}).data(e)}}($),function(e,t){t.init=function(o){if(o){var n,i=o.split("."),r=e;for(n=0;n<i.length;n++)r=r[i[n]];r&&"function"==typeof r.init?(r.init(),t.log("Initialize: <"+o+"> ready")):t.log("ERROR: <"+o+"> initialize")}},t.is=function(o,n){if(o){var i,r=o.split("."),a=e;for(i=0;i<r.length;i++)a=a[r[i]];a?n&&"function"==typeof n&&n():t.log("NOT found: <"+o+">")}},t.log=function(e){e&&("object"==typeof e?console.dir(e):console.log(e))},t.logger=function(e,o){e&&o&&("init"===e?t.log("Initialize: <"+o+"> ready"):"open"===e?t.log("OPEN: <"+o+">"):"close"===e?t.log("CLOSE: <"+o+">"):t.log(e+": <"+o+">"))},t.random=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},t.template=function(o,n,i){if(!e.templates[o])return void t.log("NOT found: <"+o+"> template");var r=Mustache.render(e.templates[o](),n?n:{}),a=$(r).appendTo(i?i:e.$dom.root);return a},t.copyArray=function(e){var o=null===e?null:t.isObject(e)?{}:[];for(var n in e)"object"==typeof e[n]&&"prototype"!==n?o[n]=t.copyArray(e[n]):o[n]=e[n];return o},t.sortArray=function(e,t,o){var n=_.sortBy(e,function(e){return e[t]});return"desc"===o?n.reverse():n},t.sortByDate=function(e,t,o){if(!window.moment)return e;var n=_.sortBy(e,function(e){return moment(e[t]).format("X")});return"desc"===o?n.reverse():n},t.isArray=function(e){if(e&&"[object Array]"===Object.prototype.toString.call(e))return!0},t.isFunction=function(e){if(e&&"function"==typeof e)return!0},t.fixTouchScroll=function(t,o){var n=null,i=null;t.on("touchmove MSPointerMove",function(t){if(0===i){var o=t.changedTouches[0].clientY;o<n?(n=0,t.preventDefault()):e.device&&e.device.isIOS?setTimeout(function(){n=o},1e3):n=o}}),o.on("scroll",function(){i=this.scrollTop})},t.raf=function(e){var t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;return t?t(e):window.setTimeout(e,1e3/60)},t.caf=function(e){var t=window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout;t(e),e=null},t.support={transitions:Modernizr.csstransitions},t.transEndEventNames={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},t.transEndEventName=t.transEndEventNames[Modernizr.prefixed("transition")],t.animEndEventNames={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd",animation:"animationend"},t.animEndEventName=t.animEndEventNames[Modernizr.prefixed("animation")],t.onEndTransition=function(e,o){var n=function(e){if(t.support.transitions){if(e.target!=this)return;this.removeEventListener(t.transEndEventName,n)}o&&"function"==typeof o&&o.call(this)};t.support.transitions?e.addEventListener(t.transEndEventName,n):n()},t.onEndAnimation=function(e,o){var n=function(e){if(t.support.transitions){if(e.target!=this)return;this.removeEventListener(t.animEndEventName,n)}o&&"function"==typeof o&&o.call(this)};t.support.transitions?e.addEventListener(t.animEndEventName,n):n()},t.onLoadImage=function(e,t){function o(){r||(r=!0,t(!0))}function n(){t(!1)}var i=new Image,r=!1;i.src=e,i.onerror=n,i.onload=o,i.complete&&o()},t.getSizeImage=function(e,t){function o(){r||(r=!0,t(i.naturalWidth,i.naturalHeight))}function n(){t(!1)}var i=new Image,r=!1;i.src=e,i.onerror=n,i.onload=o,i.complete&&o()},t.getScroll=function(e){var t=e.x*-1,o=e.y*-1,n=e.maxScrollX*-1,i=e.maxScrollY*-1;return{x:t,y:o,maxX:n,maxY:i}},t.throttle=function(e,t){var o=!0;return function(n){o&&(o=!1,setTimeout(function(){o=!0},t),e(n))}},t.debounce=function(e,t,o,n){3==arguments.length&&"boolean"!=typeof o&&(n=o,o=!1);var i;return function(){var r=arguments;n=n||this,o&&!i&&e.apply(n,r),clearTimeout(i),i=setTimeout(function(){!o&&e.apply(n,r),i=null},t)}},t.indexOf=function(e,t,o){for(var n=o||0,i=(e||[]).length;n<i;n++)if(e[n]==t)return n;return-1},t.inArray=function(e,o){return t.indexOf(e,o)!=-1},t.trim=function(e){return(e&&String(e)||"").replace(/^\s+|\s+$/g,"")},t.underscored=function(e){return t.trim(e).replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/[-\s]+/g,"_").toLowerCase()},t.deepExtend=function(e,o){for(var n in o)o.hasOwnProperty(n)&&(e[n]&&"object"==typeof o[n]?t.deepExtend(e[n],o[n]):e[n]=o[n]);return e},t.deepFindWhere=function(e,o,n,i){if(e instanceof Array)for(var r=0;r<e.length;r++)i=t.deepFindWhere(e[r],o,n,i);else for(var a in e)a==o&&e[a]==n&&(i=e),(e[a]instanceof Object||e[a]instanceof Array)&&(i=t.deepFindWhere(e[a],o,n,i));return i},t.numberFormat=function(e,t,o,n){if(isNaN(e)||null==e)return"";e=parseInt(e).toFixed(~~t),n="string"==typeof n?n:",";var i=e.split("."),r=i[0],a=i[1]?(o||".")+i[1]:"";return r.replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+n)+a},t.clean=function(e,o){return e=t.trim(e),e?e:void 0!==o?o:null},t.isObject=function(e){return"[object Object]"===Object.prototype.toString.call(e)},t.isEmail=function(e){return e.match(/.+@.+\..+/i)},t.newId=function(){return String(Math.round((new Date).getTime()/1e3))},t.getDateNow=function(){var e=new Date,t=e.getHours(),o=e.getMinutes(),n=e.getSeconds(),i=e.getMonth()+1,r=e.getDate(),a=e.getFullYear();return t<10&&(t="0"+t),o<10&&(o="0"+o),n<10&&(n="0"+n),i<10&&(i="0"+i),r<10&&(r="0"+r),a+"-"+i+"-"+r+" "+t+":"+o+":"+n},Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t},t.getDates=function(e,t){for(var o=new Array,n=e;n<=t;)o.push(new Date(n)),n=n.addDays(1);return o},t.supportClipboard=function(){return!!(window.clipboardData&&window.clipboardData.setData||document.queryCommandSupported&&document.queryCommandSupported("copy"))},t.copyToClip=function(e){if(window.clipboardData&&window.clipboardData.setData)return clipboardData.setData("Text",e);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var t=document.createElement("textarea");t.textContent=e,t.style.position="fixed",document.body.appendChild(t),t.select();try{return document.execCommand("copy")}catch(e){return console.warn("Copy to clipboard failed.",e),!1}finally{document.body.removeChild(t)}}},t.bbUpdate=function(e,t){e.on("update",function(e){var o=e.data&&e.data.transaction&&e.data.transaction.length&&e.data.transaction[0].path?e.data.transaction[0].path[0]:null,n=e.data&&e.data.transaction&&e.data.transaction.length?e.data.transaction[0].value:null;t(o,n,e)})},t.getCookie=function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0},t.setCookie=function(e,t,o){o=o||{};var n=o.expires;if("number"==typeof n&&n){var i=new Date;i.setTime(i.getTime()+1e3*n),n=o.expires=i}n&&n.toUTCString&&(o.expires=n.toUTCString()),t=encodeURIComponent(t);var r=e+"="+t;for(var a in o){r+="; "+a;var s=o[a];s!==!0&&(r+="="+s)}document.cookie=r},window.moment&&(t.moment=window.moment),window._?_.extend(_,t):window._=t,e.utils=window._}(app,app.utils),function(){app.url=function(){return(app.config.domain?app.config.domain:"")+app.config.api},app.fetch=function(e){var t=[],o=[],n=e.split(", ");return new Promise(function(e,r){for(i=0;i<n.length;i++)_.isFunction(app.fetch.API[n[i]])&&t.push(n[i]);n.length!==t.length&&(o=_.difference(n,t)),Promise.all(t.map(app.fetch.API).concat(o.map(app.request))).then(function(t){e(t)})})},app.requestList=function(e,t,o){var n=[],t=t||[],o=o||[],r=e.split(", ");return new Promise(function(e,a){for(i=0;i<r.length;i++)n.push(r[i]);Promise.all(n.map(function(e,n){return app.request(e,t[n],o[n])})).then(function(t){e(t)},function(e){a(e)})})},app.request=function(e,t,o){return new Promise(function(n,i){var r=_.underscored(e).replace(/^(get|set|add|del)/g,"").replace(/_/g,"/"),a=null,s=app.config.request();if(o&&_.extend(s,o),e.match(/^get/)?a="GET":e.match(/^set/)?a="PUT":e.match(/^add/)?a="POST":e.match(/^del/)&&(a="DELETE"),!a)return void i("Error type request: "+e);"GET"===a&&t&&(r+="/"+t,t=null),s.loader&&window.$LoaderAjax&&$LoaderAjax.show();var d=new XMLHttpRequest;d.open(a,app.url()+r,!0),d.setRequestHeader("Accept","application/json"),d.setRequestHeader("Content-Type","application/json");try{app.request.list&&app.request.list.method===e&&app.request.list.params==JSON.stringify(t)&&app.request.list.xhr.abort(),d.send(t?JSON.stringify(t):{})}catch(e){}d.onload=function(e){try{if(200==this.status){var t=JSON.parse(this.response);n("OK"===t.status&&t.result?t.result:t)}else{s.notify&&app.errHandler(this.status);var o=new Error(this.statusText);o.code=this.status,i(o)}}catch(e){}app.request.list={},s.loader&&window.$LoaderAjax&&$LoaderAjax.hide()},d.onerror=function(){i(new Error("Network Error")),s.loader&&window.$LoaderAjax&&$LoaderAjax.hide()};try{app.request.list={method:e,xhr:d,params:JSON.stringify(t)}}catch(e){}})},app.errHandler=function(e){401==e?window.$Notify?$Notify.show({color:"info",text:"Авторизируйтесь снова"}):alert("Авторизируйтесь снова"):window.$Notify?$Notify.show({color:"danger",text:"Ошибка проведения операции повторите ее чуть позже"}):alert("Ошибка проведения операции повторите ее чуть позже")};var e=function(e,t,o){app.request(app.config.logger.method,{data:{msg:e,line:o,url:t},device:app.device.get(),type:"error"},{loader:!1,notify:!1})},t=_.debounce(e,1e3,!0);window.onerror=function(e,o,n){app&&app.config&&app.config.logger&&app.config.logger.report&&t(e,o,n)}}(),function(e){e.history=[],e.resources=function(t,o,n){o=o||$.noop,n=n||$.noop;for(var i=[],r=0;r<t.length;r++)e.history.indexOf(t[r])<0&&i.push(t[r]);return i.length?void Modernizr.load({load:i,callback:function(t){e.history.push(t),n()},complete:o}):o()},e.images=function(e,t,o){var n=0;t=t||$.noop,o=o||$.noop,e.imagesLoaded({background:".bg-cover"}).always(t).progress(function(e){n++,o(n,e.images.length)})}}(app.loader),function(e,t){var o=function(){e.width=t.window.width(),e.height=parseInt(window.innerHeight,10)};t.window.on("resize.app",o),o()}(app.sizes,app.$dom),function(e,t,o){e.support=Modernizr,e.isMobile=e.support.touch,"true"==t.root.attr("demo")&&(app.demo=!0,t.window.width()<1025&&(e.isMobile=!0,t.html.removeClass("m-no-touch").addClass("m-touch"))),t.html.addClass(e.isMobile?"d-mobile":"d-no-mobile"),e.isRetina=window.devicePixelRatio&&window.devicePixelRatio>1,t.html.addClass(e.isRetina?"d-retina":"d-no-retina");var n=function(){var o=t.window.width();e.isPhone=o<768,e.isTablet=o<1025&&o>767,e.orientation=e.isTablet&&o<1025&&o>991||e.isPhone&&o>480?"landscape":"portrait",t.html.addClass(e.isPhone?"d-phone":"d-no-phone").removeClass(e.isPhone?"d-no-phone":"d-phone").addClass(e.isTablet?"d-tablet":"d-no-tablet").removeClass(e.isTablet?"d-no-tablet":"d-tablet").addClass("landscape"===e.orientation?"r-landscape":"r-portrait").removeClass("landscape"!==e.orientation?"r-landscape":"r-portrait"),e.is=e.isPhone?"phone":e.isTablet?"tablet":"desktop"};if(t.window.on("resize.sizeCheck",n),n(),e.ua=navigator.userAgent,navigator.userAgent.match(/(iPhone)/i)&&(e.isPhone=!0),navigator.userAgent.match(/iPad/i)&&(t.html.addClass("d-ipad"),e.isIPad=!0),navigator.userAgent.match(/(iPhone|iPod touch)/i)&&(t.html.addClass("d-iphone"),e.isIPhone=!0),navigator.userAgent.match(/(iPad|iPhone|iPod touch)/i)){t.html.addClass("d-ios"),e.isIOS=!0;var i=navigator.userAgent.match(/.*CPU.*OS (\d)_(\d)/i);e.verOS=!(!i||!i[1])&&i[1]+(i[2]?"."+i[2]:"")}else t.html.addClass("d-no-ios");if(navigator.userAgent.match(/.*CPU.*OS 7_\d/i)&&(t.html.addClass("d-ios7"),e.isIOS7=!0),navigator.userAgent.match(/Android/i)){t.html.addClass("d-android"),e.isAndroid=!0;var i=navigator.userAgent.match(/Android (\d)\.(\d)/i);e.verOS=!(!i||!i[1])&&i[1]+(i[2]?"."+i[2]:"")}if(app.device.isMobile&&(e.os=e.isAndroid?"android":e.isIOS?"ios":"unknown"),t.html.hasClass("d-ipad d-ios7")&&t.window.on("resize orientationchange focusout",function(){window.scrollTo(0,0)}),e.isWin=navigator.platform.indexOf("Win")>-1,e.isMac=navigator.platform.indexOf("Mac")>-1,e.isLinux=navigator.platform.indexOf("Linux")>-1,t.html.addClass(e.isMac?"d-macOS":"d-no-macOS"),e.platform=e.isWin?"win":e.isMac?"mac":e.isLinux?"linux":"unknown",e.isChrome=navigator.userAgent.toLowerCase().indexOf("chrome")>-1,t.html.addClass(e.isChrome?"d-chrome":"d-no-chrome"),e.isSafari=!e.isChrome&&navigator.userAgent.toLowerCase().indexOf("safari")>-1,t.html.addClass(e.isSafari?"d-safari":"d-no-safari"),e.isFirefox=navigator.userAgent.toLowerCase().indexOf("firefox")>-1,t.html.addClass(e.isFirefox?"d-firefox":"d-no-firefox"),e.isMobile&&window.FastClick&&"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){FastClick.attach(document.body)},!1),!e.isMobile){var r,a=t.body[0];t.window[0].addEventListener("scroll",function(){clearTimeout(r),a.getAttribute("class")&&a.getAttribute("class").match(/disable__hover/)||a.classList.add("disable__hover"),r=setTimeout(function(){a.classList.remove("disable__hover")},300)},!1)}app.device.get=function(){return o.extend(o.omit(app.device,["get","support"]),{screen:app.sizes})}}(app.device,app.$dom,app.utils),function(){app.define("metrics.private"),app.metrics.private={ver:"1.0",offers:{welcome:{mobile:{show:!1,success:!1},show:!1,hide:!1,tutorial:{show:!1,hide:!1,success:!1},success:!1},stat:{show:!1,hide:!1,success:!1},inbox:{show:!1,hide:!1,success:!1},plan:{show:!1,free:!1,premium:!1},jqtest:{show:!1,hide:!1,success:!1},votes:{show:!1,hide:!1,score:null,success:!1},popup:{premium:{show:!1,hide:!1,success:!1},jqtest:{show:!1,hide:!1,success:!1}}},overview:{premium:{show:!1,hide:!1,success:!1},jqtest:{show:!1,hide:!1,success:!1}},jqtest:{show:!1,hide:!1,new:!1,success:!1},resume:{buttonNew:!1,select:{default:"free",show:!1,hide:!1,template:null,success:!1},create:{show:!1,hide:!1,control:{preview:!1,photo:!1,design:!1,print:!1,pdf:!1},settings:{show:!1,hide:!1,logotype:!1,stat:!1,lang:!1},tutorial:{show:!1,hide:!1,success:!1},success:!1}},plan:{show:!1,hide:!1,success:!1},payment:{show:!1,hide:!1,method:null,period:null,success:!1}}}(),function(e,t,o,n,i){e.define("features.premium"),e.features.premium={active:!1,init:function(n,r){if(!this.active){this.scope=r?t(r):o.body,this.scroll=n?t(n):e.$dom.window;var a=this,s=this.scope.find(".premium__header"),d=s.find(".premium__header__overlay"),m=s.find(".premium__header__layer"),c=[];m.each(function(){var e=t(this),o=e.css("transform").match(/matrix\(\d+, ?\d+, ?\d+, ?\d+, ?(\-?\d+), ?(\-?\d+)/),n=o[1],r=parseInt(o[2])+i.random(12,24),a=i.random(90,105)/100;c.push({elem:e,transform:"translate3d("+n+"px, "+o[2]+"px, 0px) scale3d(1, 1, 1)"}),e.css({transform:"translate3d("+n+"px, "+r+"px, 0px) scale3d("+a+", "+a+", 1)"})}),this.headerParallax=new e.plugins.scroll.parallax({scroll:this.scroll,container:s,scenario:this.items,fade:{in:{elem:d}}});var l=0;t.each(c,function(){var e=this.elem;e.addClass("premium__header__layer--animate").css({transform:this.transform,"transition-delay":i.random(0,15)/100+"s"}),i.onEndTransition(e[0],function(){e.addClass("premium__header__layer--animated").removeClass("premium__header__layer--animate").css("transition-delay","0s"),l++,l==c.length&&a.headerParallax.start()})}),this.contentAnimate=new e.plugins.scroll.animate({scroll:this.scroll,container:this.scope}),this.contentAnimate.start(),this.chartRadial=new e.plugins.chartRadial(this.scope.find(".chart__radial"),{animate:!1,container:"chart__radial__graph mb-m",labels:"chart__radial__labels c-blackLight",labelItem:"chart__radial__label mb-xxs"}),this.chartRadial.render([{title:"настольные ПК",value:i.random(5,87)},{title:"планшеты",value:i.random(5,87)},{title:"мобильные телефоны",value:i.random(5,87)}]),this.active=!0}},destroy:function(){this.headerParallax.destroy(),this.contentAnimate.destroy(),this.chartRadial.destroy(),this.active=!1},items:[{selector:".premium__header__layer1",viewports:{large:{fromTime:.07720144752714113,toTime:1,fromX:-645,toX:-645,fromY:-70,toY:-1300},medium:{fromX:-500,toX:-500,fromY:50},small:{fromX:-148,toX:-148,fromY:-18,toY:-1e3,fromTime:0}}},{selector:".premium__header__layer2",viewports:{large:{fromTime:0,toTime:1,fromX:-323,toX:-323,fromY:-245,toY:-1700},medium:{fromX:-252,toX:-252,fromY:-95},small:{fromX:-148,toX:-148,fromY:276,toY:-600,fromTime:0}}},{selector:".premium__header__layer3",viewports:{large:{fromTime:.033,toTime:1,fromX:0,toX:0,fromY:-110,toY:-1e3},medium:{fromY:-187},small:{fromY:28,fromX:0,toX:0,toY:-480,fromTime:0}}},{selector:".premium__header__layer4",viewports:{large:{fromTime:0,toTime:1,fromX:582,toX:582,fromY:466,toY:-400},medium:{fromX:450,toX:450,fromY:462,fromTime:.033,toY:-400},small:{fromX:118,toX:118,fromY:834,fromTime:0,toY:-200,toTime:1}}},{selector:".premium__header__layer5",viewports:{large:{fromTime:.077,toTime:1,fromX:-645,toX:-645,fromY:567,toY:-300},medium:{fromX:-500,toX:-500,fromY:540},small:{toX:148,fromX:148,fromY:-68,toY:-1650,fromTime:0}}},{selector:".premium__header__layer6",viewports:{large:{fromTime:0,toTime:1,fromX:-323,toX:-323,fromY:392,toY:-800},medium:{toX:-252,fromX:-252,fromY:396},small:{fromX:-148,toX:-148,fromY:606,toY:-400,fromTime:0}}},{selector:".premium__header__layer7",viewports:{large:{fromTime:.033,toTime:1,fromX:0,toX:0,fromY:527,toY:0},medium:{fromY:535},small:{toY:-460,fromY:484,fromTime:0}}},{selector:".premium__header__layer8",viewports:{large:{fromTime:0,toTime:1,fromX:323,toX:323,fromY:-175,toY:-1200},medium:{fromX:252,toX:252,fromY:-38,toY:-1200,fromTime:.033},small:{toX:148,fromX:148,fromY:226,fromTime:0,toY:-1200}}},{selector:".premium__header__layer9",viewports:{large:{fromTime:0,toTime:1,fromX:645,toX:645,fromY:-268,toY:-900},medium:{fromX:500,toX:500,fromY:-126,fromTime:.033,toY:-600},small:{fromX:-148,toX:-148,fromY:896,toY:0,fromTime:0,toTime:1}}},{selector:".premium__header__layer10",viewports:{large:{fromTime:0,toTime:1,fromX:-323,toX:-323,fromY:1126,toY:-200},medium:{toX:-252,fromX:-252,fromY:974,toY:-400},small:{fromX:148,toX:148,fromY:520,fromTime:0,toY:-800}}}]};e.features.premium}(app,$,app.$dom,app.events,app.utils),app.config={domain:null,api:"/private/api",request:function(){return{loader:!0,notify:!0}},logger:{method:"addLog",report:!0},metrika:{active:!0,report:{method:"addMetrika",interval:30,yametrika:{counter:"27428363"}}},payment:{yamoney:"410012719414223"},profile:{photo:{minWidth:440,maxHeight:620}},resume:{free:{autoSave:{interval:15}}},share:{title:"Создать крутое резюме и получить престижную работу"},changeStyles:!1},app.fetch.API=function(e){return app.fetch.API[e]()},app.fetch.API.getDataInit=function(){return new Promise(function(e,t){app.request("getDataInit").then(function(t){$account=$store.account,$store.account.set(t.account),$store.data.set(t.data?t.data:[]),$store.inbox.set(t.inbox?t.inbox:[]);var o=[];if(_.each(t.data,function(e){e.likes&&o.push({_id:e.id,plan:e.plan,post:e.post,color:e.config.color,likes:e.likes})}),$store.likes.set(o?o:[]),app.config.metrika&&app.config.metrika.active){var n=!1;app.config.metrika.report&&(n={method:app.config.metrika.report.method,interval:app.config.metrika.report.interval}),app.metrika=new app.plugins.metrika({key:$account.get("_id"),data:app.metrics.private,previousData:t.metrika,visits:$account.get("visits"),report:n})}e(t)})})},window.$18n={},$i18n=function(e){return i18n.localise(e)},$i18n.lang=function(e){i18n.setLanguage(e)},i18n.dictionary({ru:{resume:{basic:{template:{Age:"Возраст",City:"Город",Phone:"Телефон",Education:"Образование",Specialty:"Специальность",Languages:"Языки",Experience:"Место работы","Until Now":"по настоящее время","About me":"О себе, мои качества"}}}}});
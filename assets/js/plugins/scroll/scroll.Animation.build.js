!function(t,i,s,n,o){t.define("plugins.scroll.math"),t.plugins.scroll.math={lerp:function(t,i,s){return i+(s-i)*t},map:function(t,i,s,n,o){return this.lerp(this.norm(t,i,s),n,o)},norm:function(t,i,s){return(t-i)/(s-i)},clamp:function(t,i,s){return Math.max(i,Math.min(s,t))},randFloat:function(t,i){return Math.random()*(i-t)+t},randInt:function(t,i){return Math.floor(Math.random()*(i-t)+t)}}}(app,$,app.$dom,app.events,app.utils),function(t,i,s,n,o){function e(){r.call(this),this.index=0,this.rafWhenVisible=this.rafWhenVisible||!1}t.define("plugins.scroll.BaseComponent");var r=t.commons.EventEmitterMicro,a=r.prototype,l=e.prototype=Object.create(r.prototype);e.prototype.constructor=e,l.destroy=function(){this.teardownEvents(),a.destroy.call(this)},l.setupEvents=function(){},l.teardownEvents=function(){},l.onSectionWillAppear=function(t,i){},l.activate=function(){},l.animateIn=function(){},l.onRequestAnimationFrame=function(){},l.deactivate=function(){},l.onScroll=function(t,i,s){},l.onSectionWillDisappear=function(t,i){},l.onResize=function(t,i,s){},l.onResizeWillBeCalledAfterDelay=function(t,i,s){},l.onBreakpoint=function(t,i,s,n){},t.plugins.scroll.BaseComponent=e}(app,$,app.$dom,app.events,app.utils),function(t,i,s,n,o){function e(){var t=new a;return t}t.define("plugins.scroll.sharedClock");var r,a=t.plugins.scroll.clock;t.plugins.scroll.sharedClock={getInstance:function(){return r||(r=e()),r}}}(app,$,app.$dom,app.events,app.utils),function(t,i,s,n,o){function e(t){r.call(this),this.options=t||{},this.min=this.options.min||0,this.max=this.options.max||1,this._boundHandleClockUpdate=this._handleClockUpdate.bind(this),this._boundHandleClockDraw=this._handleClockDraw.bind(this),this.options.easingFunction&&(this.easingFunction=this.options.easingFunction),this.clock=this.options.clock||new a,this.usesSharedClock=this.clock===a,this._isRunning=!1,this.specificity=this.options.specificity||4,this.friction=this.options.friction||10,this._targetValue=null,this._currentValue=null,this._shouldUpdate=!1,this._shouldEmitChange=!1}t.define("plugins.scroll.MotionEmitter");var r=t.commons.EventEmitterMicro,a=t.plugins.scroll.clock,l=e.prototype=Object.create(r.prototype);l.destroy=function(){this.trigger("destroy"),this.stop(),this.off(),this.usesSharedClock||this.clock.destroy();var t;for(t in this)this.hasOwnProperty(t)&&(this[t]=null);this._isRunning=!1},l.start=function(){this.clock&&!this._isRunning&&(this._bindEvents(),this._isRunning=!0,this.clock.start())},l.stop=function(){this.clock&&this._isRunning&&(this._unbindEvents(),this._isRunning=!1,this.usesSharedClock||this.clock.stop())},l.isRunning=function(){return this._isRunning},l.setProgress=function(t){this._targetValue!==t&&(this._targetValue=t,this._shouldUpdate=!0)},l.updateValue=function(t){null===this._currentValue&&(this._currentValue=this._targetValue);var i=1;if(this.easingFunction){var s=this.max-this.min,n=this.max-(this.max-this._targetValue)/s,o=this.max-(this.max-this._currentValue)/s,e=1-Math.abs(n-o),r=this.easingFunction(e,0,1,1);i=1+(r-e)}var a=1;t&&t.naturalFps!==t.fps&&(a=t.naturalFps/t.fps);var l=this._targetValue-this._currentValue,h=l*i*a*(1/this.friction),c=parseFloat((this._currentValue+h).toFixed(this.specificity));c===this._currentValue?this._currentValue=this._targetValue:this._currentValue=c,this._shouldEmitChange=!0},l._bindEvents=function(){this.clock.on("update",this._boundHandleClockUpdate),this.clock.on("draw",this._boundHandleClockDraw)},l._unbindEvents=function(){this.clock.off("update",this._boundHandleClockUpdate),this.clock.off("draw",this._boundHandleClockDraw)},l._handleClockUpdate=function(t){this._shouldUpdate&&this.updateValue(t),this._shouldEmitChange&&(t.progress=this._currentValue,this.trigger("update",t))},l._handleClockDraw=function(t){if(this._shouldEmitChange)return t.progress=this._currentValue,this.trigger("draw",t),this._targetValue===this._currentValue?(this._shouldUpdate=!1,void(this._shouldEmitChange=!1)):void(this._shouldUpdate=!0)},t.plugins.scroll.MotionEmitter=e}(app,$,app.$dom,app.events,app.utils),function(t,i,s,n,o){function e(t){return t=t||{},"number"!=typeof t.min||"number"!=typeof t.max?null:(r.call(this,t),this.scroll=this.options.scroll||s.window,this.smooth=this.options.smooth||!1,void(this.options.overrideScroll&&this._bindScrollEvents()))}t.define("plugins.scroll.ScrollMotionEmitter");var r=t.plugins.scroll.MotionEmitter,a=e.prototype=Object.create(r.prototype);a.updateValue=function(t){return this.smooth?r.prototype.updateValue.call(this,t):this._currentValue===this._targetValue?void(this._shouldEmitChange=!1):(this._currentValue=this._targetValue,void(this._shouldEmitChange=!0))},a.handleScroll=function(t){"number"!=typeof t&&(t=window.pageYOffset||(document.documentElement||document.body).scrollTop);var i;i=t<this.min?this.min:t>this.max?this.max:t,i=(i-this.min)/(this.max-this.min);var s=this;this._animationFrame=o.raf(function(){s.setProgress(i)})},a.destroy=function(){return this._boundHandleScroll&&(this.scroll.off("scroll",this._boundHandleScroll),o.caf(this._animationFrame)),r.prototype.destroy.call(this)},a._bindScrollEvents=function(){this._boundHandleScroll=this.handleScroll.bind(this),this.scroll.on("scroll",this._boundHandleScroll)},t.plugins.scroll.ScrollMotionEmitter=e}(app,$,app.$dom,app.events,app.utils),function(t,i,s,n,o){t.define("plugins.scroll.Animation");var e=(document.querySelectorAll,t.plugins.scroll.math.lerp),r=t.dom.getDimensions,a=t.dom.getPagePosition,l=t.plugins.scroll.ScrollMotionEmitter,h={pin:!1,duration:0,delay:0,scrollStart:!1,friction:4,translateTo:[0,0],translateFrom:[0,0],scaleTo:1,scaleFrom:1,rotateTo:0,rotateFrom:0,fadeTo:1,fadeFrom:1,blurTo:0,blurFrom:0,overrideScroll:!1,smooth:!0,scrollMotionEmitter:null},c=["blurTo","blurFrom"],u=["translateTo","translateFrom","scaleTo","scaleFrom","rotateTo","rotateFrom"],p=["fadeTo","fadeFrom"],m=function(t,i){this.el=t,this.options=this._overrideDefaultOptions(i),this.transforms={},this._update=this._update.bind(this),this._memoizeMetrics(),this._setEmitterBounds(),this._initScrollMotionEmitter(),this._setupEvents(),this._isAnimating=!1,this.handleScroll(window.pageYOffset||(document.documentElement||document.body).scrollTop)},d=m.prototype;d.destroy=function(){this._teardownEvents(),this.scrollMotionEmitter.destroy(),this.scrollMotionEmitter=null,this.el=null,this.options=null},d.setOption=function(t,i){this.options[t]=i,"duration"!==t&&"delay"!==t||this._setEmitterBounds()},d.handleScroll=function(t){this.scrollMotionEmitter.handleScroll(t)},d.getTransform=function(t){return this.transforms[t]},d.getOpacity=function(t){return this.opacity},d._overrideDefaultOptions=function(t){var i,s=Object.assign(o.clone(h),t);for(i in t)u.indexOf(i)>-1?this.hasTransform=!0:p.indexOf(i)>-1?this.hasFade=!0:c.indexOf(i)>-1&&(this.hasBlur=!0);return s},d._setEmitterBounds=function(){this.options.scrollStart||0===this.options.scrollStart?this._emitterMin=this.options.scrollStart:this._emitterMin=this.elTop-this.windowHeight+this.options.delay+this.options.translateFrom[1],this._emitterMax=this._emitterMin+this.options.duration,this.scrollMotionEmitter&&(this.scrollMotionEmitter.min=this._emitterMin,this.scrollMotionEmitter.max=this._emitterMax)},d._memoizeMetrics=function(){this.windowHeight=parseInt(window.innerHeight,10),this.elHeight=r(this.el).height,this.elTop=a(this.el).top},d._initScrollMotionEmitter=function(){this.options.scrollMotionEmitter?this.scrollMotionEmitter=this.options.scrollMotionEmitter:this.scrollMotionEmitter=new l({scroll:this.options.scroll,smooth:this.options.smooth,overrideScroll:this.options.overrideScroll,min:this._emitterMin,max:this._emitterMax,friction:this.options.friction}),this.scrollMotionEmitter.isRunning()||this.scrollMotionEmitter.start()},d._setupEvents=function(){this.scrollMotionEmitter.on("draw",this._update)},d._teardownEvents=function(){this.scrollMotionEmitter.off("draw",this._update)},d._setElementTransform=function(){if(this.hasTransform){this.transforms.translateY=e(this._progress,this.options.translateFrom[1],this.options.translateTo[1]),this.transforms.translateX=e(this._progress,this.options.translateFrom[0],this.options.translateTo[0]),this.transforms.rotate=e(this._progress,this.options.rotateFrom,this.options.rotateTo),this.transforms.scale=e(this._progress,this.options.scaleFrom,this.options.scaleTo);var i=1==this.transforms.scale?"":"scale("+this.transforms.scale+","+this.transforms.scale+") ",s=0==this.transforms.rotate?"":" rotate("+this.transforms.rotate+"deg)";this.el.style[t.prefixed.transform]=i+"translate3d("+this.transforms.translateX+"px,"+this.transforms.translateY+"px,0)"+s}},d._setElementOpacity=function(){this.hasFade&&(this.opacity=e(this._progress,this.options.fadeFrom,this.options.fadeTo),this.el.style.opacity=this.opacity)},d._setStatus=function(){this._progress>0&&this._progress<1&&!this._isAnimating?(this._isAnimating=!0,this.el.classList.remove("has-animated"),this.el.classList.remove("has-not-animated"),this.el.classList.add("is-animating")):this._progress>=1&&this._isAnimating?(this._isAnimating=!1,this.el.classList.remove("is-animating"),this.el.classList.remove("has-not-animated"),this.el.classList.add("has-animated")):this._progress<=0&&this._isAnimating&&(this._isAnimating=!1,this.el.classList.remove("is-animating"),this.el.classList.remove("has-animated"),this.el.classList.add("has-not-animated"))},d._update=function(t){isNaN(t.progress)||(this._progress=t.progress,this._setElementTransform(),this._setElementOpacity())},t.plugins.scroll.Animation=m}(app,$,app.$dom,app.events,app.utils),function(t,i,s,n,o){t.define("plugins.scroll.AnimationStarter");var e=t.plugins.scroll.Animation,r=t.plugins.scroll.math,a=function(t,i){this.hasAnimated=!1,i.stagger||(i.stagger=0),e.apply(this,arguments)},l=a.prototype=Object.create(e.prototype);l._update=function(t){isNaN(t.progress)||this.hasAnimated||((t.progress>this._progress||!this._progress)&&(this._progress=t.progress),this._progress>=1&&(this.hasAnimated=!0),this._setElementTransform(),this._setElementOpacity())},l._setElementOpacity=function(){if(this.hasFade){var t=r.map(this._progress,0,1,-this.options.stagger,40);t/=40,t=Math.max(0,t),this.opacity=r.lerp(t,this.options.fadeFrom,this.options.fadeTo),this.el.style.opacity=this.opacity}},l.destroy=function(){e.prototype.destroy.call(this)},t.plugins.scroll.AnimationStarter=a}(app,$,app.$dom,app.events,app.utils),function(t,i,s,n,o){function e(n){var n=n||{};this.element=n.container?n.container&&o.isElement(n.container)?n.container:n.container[0]:s.body[0],this.scroll=n.scroll||s.window,u.call(this);var e;t.sizes.width<=735?e="small":t.sizes.width>=736&&t.sizes.width<=1068?e="medium":t.sizes.width>=1069&&t.sizes.width<=1441?e="large":t.sizes.width>=1442&&(e="xlarge"),this.currentBreakpoint=e,this.animations={},this.animateEls=i("[data-animate], [data-scrollin], [data-scrollin-icon]",this.element),this.windowHeight=t.sizes.height,this.scrollY=this.scroll.scrollTop(),this.friction=n.friction||9,this.getOptions(),this.rafWhenVisible=!0}t.define("plugins.scroll.AnimationController");var r=t.dom.getPagePosition,a=t.dom.getDimensions,l=(document.querySelectorAll,document.querySelector,t.plugins.scroll.Animation),h=t.plugins.scroll.ScrollMotionEmitter,c=t.plugins.scroll.AnimationStarter,u=t.plugins.scroll.BaseComponent,p=t.plugins.scroll.sharedClock.getInstance(),m=u.prototype,d=e.prototype=Object.create(u.prototype);e.prototype.constructor=e,d.getOptions=function(){this.options=this.element.getAttribute("data-sa-options"),this.options?this.options=JSON.parse(this.options):this.options={}},d.determineStartandDuration=function(){var t=r(this.element).top,i=a(this.element).height;this.scrollStart=Math.max(t-this.windowHeight,0),this.duration=t+i-this.scrollStart+(this.options.durationOffset||0)},d.start=function(){var t,i,n,e;for(this.determineStartandDuration(),t=0,i=this.animateEls.length;t<i;t++){if(n=this.animateEls[t],"none"==n.style.display)return;e=n.getAttribute("ID")||t,n.hasAttribute("data-scrollin")||n.hasAttribute("data-scrollin-icon")?this.isAboveFold(n)?(n.style.transform="none",n.style.opacity=1):this.animations[e]=this.createExperienceScrollAnimation(n):this.animations[e]=this.createScrollAnimation(n)}var r=this,a=o.debounce(this.onResize,300);s.window.on("orientationchange",function(){a.call(r)}),this.scroll.on("resize",function(){a.call(r)})},d.isAboveFold=function(t){return this.scrollY>r(t).top-this.windowHeight},d.grabTranslatesForBreakpoint=function(t){var i=this.currentBreakpoint.replace("x","").split("")[0];return t[i]},d.grabFadeForBreakpoint=function(t){if("number"==typeof t)return t;var i=this.currentBreakpoint.replace("x","").split("")[0];return t.l?(t.m||(t.m=t.l),t.s||(t.s=t.m),t[i]):1},d._getEmitterInstance=function(t){var i=this.element.getAttribute("ID");return this.emitters||(this.emitters={}),this.emitters[i]?this.emitters[i]:(this.emitters[i]=this._createEmitterInstance(t),this.emitters[i])},d._createEmitterInstance=function(t){var i=new h({scroll:this.scroll,smooth:!0,overrideScroll:!0,min:t.scrollStart,max:t.scrollStart+t.duration,friction:this.friction,clock:p});return i.start(),i},d.createScrollAnimation=function(t){var i=JSON.parse(t.getAttribute("data-animate"));return i=this.configureOptions(i),i.scrollMotionEmitter=this._getEmitterInstance(i),new l(t,i)},d.createExperienceScrollAnimation=function(t){var s,n,o,e,a,l;if(t.hasAttribute("data-scrollin-icon")){var h=i(t).closest(".headline-icons")[0];s=r(h).top,n=t.getAttribute("data-scrollin-icon"),o=!0}else s=r(t).top,n=t.getAttribute("data-scrollin"),o=!1;return n&&(n=n.replace(/'/gi,'"'),e=JSON.parse(n)),l={},l.fadeFrom=.1,l.translateFrom={l:[0,40],m:[0,40],s:[0,30]},l.duration=240,l.stagger=0,"small"==this.currentBreakpoint&&(l.duration=140),o&&(l.translateFrom={l:[0,30],m:[0,25],s:[0,25]},l.duration=110),e&&e.stagger&&(l.stagger=.4*e.stagger),l=this.configureOptions(l),a=1,l.duration=l.duration*a,l.translateFrom[1]=l.translateFrom[1]+l.stagger*a,l.scrollStart=s-this.windowHeight+l.translateFrom[1],l.scroll=this.scroll,new c(t,l)},d.createKeyboardSnapAnimation=function(t){var i=JSON.parse(t.getAttribute("data-animate"));return i=this.configureOptions(i),i.duration=a(this.element).height+100,new J(t,i)},d.createFlexibleImageAnimation=function(t){var i=JSON.parse(t.getAttribute("data-animate"));return i=this.configureOptions(i),new N(t,i)},d.configureOptions=function(t){return t.overrideScroll=!0,t.duration||(t.duration=this.duration),t.scrollStart||(t.scrollStart=this.scrollStart),t.translateTo&&(t.translateTo=this.grabTranslatesForBreakpoint(t.translateTo)),t.translateFrom&&(t.translateFrom=this.grabTranslatesForBreakpoint(t.translateFrom)),t.fadeTo&&(t.fadeTo=this.grabFadeForBreakpoint(t.fadeTo)),t.fadeFrom&&(t.fadeFrom=this.grabFadeForBreakpoint(t.fadeFrom)),t.friction||(t.friction=this.friction),t},d.destroy=function(){for(var t in this.animations)this.animations[t].el.setAttribute("style",""),this.animations[t].destroy();this.scroll.off(),s.window.off("orientationchange")},d.onSectionWillAppear=function(t,i){m.onSectionWillAppear.call(this,t,i)},d.onRequestAnimationFrame=function(){m.onRequestAnimationFrame.call(this);for(var t in this.animations)this.animations[t].handleScroll(this.scrollPosition)},d.onScroll=function(t,i,s){this.scrollY=i,m.onScroll.call(this,t,i,s)},d.onSectionWillDisappear=function(t,i){m.onSectionWillDisappear.call(this,t,i)},d.onResize=function(){this.windowHeight=t.sizes.height;for(var i in this.animations)this.animations[i]._teardownEvents(),this.animations[i].el=null,this.animations[i].options=null,this.animations[i]=null;this.animations={},this.emitters=null,this.start();for(var i in this.animations)this.animations[i].handleScroll(this.scrollPosition)},d.onBreakpoint=function(t,i,s,n){this.currentBreakpoint=t},t.plugins.scroll.AnimationController=e}(app,$,app.$dom,app.events,app.utils);
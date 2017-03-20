riot.tag2("section-auth",'<div if="{app.device.isPhone}" class="oScreen__buttons" data-pos="top-right"> <div onclick="{close}" class="button__close" data-color="gray"></div> </div> <auth-signin></auth-signin> <auth-remember></auth-remember> <auth-signup></auth-signup>',"",'class="{app.device.isPhone ? \'section\' : \'oScreen\'} zIndex-100 pos-fixed" data-open="false" style="display:none"',function(t){var e=this;e.active=!1,e.ymaps=!1,e.firstOpen=!1,e.on("mount",function(){location.href.match(/\?signin/)?$afterlag.run(function(){e.open("signin")}):location.href.match(/\?signup/)&&$afterlag.run(function(){e.open("signup",!!location.href.match(/\&plan=premium/)&&"premium")}),app.tag("section-notify",function(t){e.notify=t}),window.ymapsReady=function(){e.ymaps=window.ymaps||{},e.ymaps.geolocation&&e.ymaps.geolocation.city&&e.update({location:{country:e.ymaps.geolocation.country,city:e.ymaps.geolocation.city,region:e.ymaps.geolocation.region}})}}),e.open=function(t,i){e.firstOpen?e._open(t,i):(e.firstOpen=!0,e.root.style.display="block",$afterlag.run(function(){e._open(t,i)}))},e._open=function(t,i){e.active=!0,e.root.setAttribute("data-open",!0);var a=e.tags["auth-"+t];if(a&&a.open&&a.open(i),e.ymaps===!1){e.ymaps="load";var o=document.createElement("script");o.src="https://api-maps.yandex.ru/2.0-stable/?load=package.standard&lang=ru-RU&onload=ymapsReady",document.head.appendChild(o)}},e.close=function(){e.root.setAttribute("data-open",!1);var t=e.tags["auth-"+e.section];t&&t.active&&t.close()}}),riot.tag2("auth-social",'<div class="pos-rel anim-group2 anim-{app.device.isPhone ? \'bt\' : \'rl\'} anim-duration-m" data-balloon="Войти через Facebook" data-balloon-pos="left"> <div class="auth__social__button" data-share="fb"> <icon-fb color="white"></icon-fb> </div> </div> <div class="pos-rel anim-group2 anim-{app.device.isPhone ? \'bt\' : \'rl\'} anim-delay-xs anim-duration-m" data-balloon="Войти через ВКонтакте" data-balloon-pos="left"> <div class="auth__social__button" data-share="vk"> <icon-vk color="white"></icon-vk> </div> </div> <div class="pos-rel anim-group2 anim-{app.device.isPhone ? \'bt\' : \'rl\'} anim-delay-s anim-duration-m" data-balloon="Войти через Twitter" data-balloon-pos="left"> <div class="auth__social__button" data-share="tw"> <icon-tw color="white"></icon-tw> </div> </div> <div class="pos-rel anim-group2 anim-{app.device.isPhone ? \'bt\' : \'rl\'} anim-delay-m anim-duration-m" data-balloon="Войти через Одноклассники" data-balloon-pos="left"> <div class="auth__social__button" data-share="dk"> <icon-dk color="white"></icon-dk> </div> </div> <div class="pos-rel anim-group2 anim-{app.device.isPhone ? \'bt\' : \'rl\'} anim-delay-l anim-duration-m" data-balloon="Войти через Google+" data-balloon-pos="left"> <div class="auth__social__button" data-share="gl"> <icon-gl color="white"></icon-gl> </div> </div>',"",'class="section auth__social"',function(t){}),riot.tag2("auth-signin",'<form ref="form" method="post" action="/login" class="auth__form anim-group1 anim-scale{\'-ease\' : app.device.isPhone}" duration-show="m" duration-hide="{app.device.isPhone ? \'s\' : \'m\'}"> <input type="hidden" name="logined" value="true"> <input type="hidden" name="country" riot-value="{parent.location.country}"> <input type="hidden" name="city" riot-value="{parent.location.city}"> <input type="hidden" name="region" riot-value="{parent.location.region}"> <div if="{!app.device.isPhone}" class="auth__close anim-group3 anim-lr anim-delay-xs anim-duration-m"> <div onclick="{close}" onupdate="none" class="auth__close__button"></div> </div> <div if="{app.device.isPhone}" class="auth__logo anim-group1 anim-fadeIn anim-duration-m"></div> <div class="auth__header"> Авторизация </div> <div class="auth__body"> <div class="mb-m input-group input-group-icon" data-errballoon="{!validate.login.valid ? validate.login.text : null}"> <input onkeydown="{onKeydown}" onupdate="none" class="input input-xl {input-error : !validate.login.valid}" type="text" placeholder="Логин (ваш email)" autocomplete="off" name="login" ref="login"> <div class="input-icon"> <svg class="input-svg input-svg-login" viewbox="3 -3 24 24"><path class="input-svg-color" d="M15 11.9c-.9 0-1.7-.2-2.3-.7l-5.7-4.4v8.1c0 .1 0 .3.1.4.1.1.2.2.3.2 2.5.4 5 .5 7.5.5s5-.2 7.5-.5c.1 0 .3-.1.4-.2.2-.1.2-.3.2-.4v-8.1l-5.7 4.4c-.6.5-1.4.7-2.3.7zm-1.3-2.3c.3.3.8.4 1.3.4s1-.1 1.3-.4l6.1-4.7c.3-.3.5-.6.6-1v-.8c0-.1 0-.3-.1-.4-.1-.1-.2-.2-.4-.2-2.5-.3-5-.5-7.5-.5s-5 .2-7.5.5c-.1 0-.2.1-.3.2-.2.1-.2.3-.2.4v.9c.1.3.3.6.6 1l6.1 4.6z"></path></svg> </div> </div> <div class="mb-xs input-group input-group-icon" data-errballoon="{!validate.password.valid ? validate.password.text : null}"> <input onkeydown="{onKeydown}" onupdate="none" class="input input-xl {input-error : !validate.password.valid}" type="password" placeholder="Пароль" autocomplete="off" name="password" ref="password"> <div class="input-icon"> <svg class="input-svg input-svg-password" xmlns="http://www.w3.org/2000/svg" viewbox="0 -6 30 30" enable-background="new 0 -6 30 30"> <path class="input-svg-color" d="M21.6 8.3c-.2-.2-.5-.3-.9-.3h-.7v-2.6c0-1.3-.5-2.4-1.4-3.2-.9-.8-2.1-1.2-3.6-1.2s-2.7.4-3.6 1.2c-.9.8-1.4 1.9-1.4 3.2v2.6h-.7c-.3 0-.7.1-.9.4-.3.2-.4.5-.4.8v6.1c0 .3.1.5.3.7.2.2.4.3.7.4 1.9.4 3.9.6 6 .6 2 0 4-.2 5.9-.6.3-.1.5-.2.7-.4.2-.2.3-.4.3-.7v-6.1c.1-.3 0-.6-.3-.9zm-8.6-2.4c0-1.3.7-1.9 2-1.9s2 .6 2 1.9v2.1h-4v-2.1z"></path> </svg> </div> </div> <div class="mb-m xs-mb-xs pr-xxs pb-xs text-right"> <span onclick="{show.remember}" class="link-gray-hover-primary text-uppercase fontSize-xs fontFamily-helvetica letterSpacing-l cursor-pointer">Забыли пароль?</span> </div> <div onclick="{sendForm}" class="btn btn-xxl btn-{app.device.isPhone ? \'success\' : \'default-hover-success\'} {btn-loading : loading}"><span class="plr-s">Войти</span></div> <div if="{!app.device.isPhone}" class="mt-xs pt-m pb-xs text-center"> <a onclick="{show.signup}" class="link-gray-hover-primary text-uppercase fontSize-s fontFamily-helvetica letterSpacing-l cursor-pointer">У вас нет аккаунта?</a> </div> </div> <auth-social></auth-social> </form>',"",'class="section auth" data-active="false" data-form="signin"',function(t){var e=this;e.active=!1,e.loading=!1,e.validate={login:{valid:!0,text:"Введите свой логин"},password:{valid:!0,text:"Введите свой пароль"}},e.on("mount",function(){e.form=$$(e.refs.form),e.animate=new app.plugins.animate(e.root)}),e.on("updated",function(){!e.active&&e.animate.active&&(e.root.setAttribute("data-active",!1),e.animate.hide())}),e.open=function(){e.active=!0,e.parent.section="signin",e.root.setAttribute("data-active",!0),e.animate.show()},e.show={signup:function(){e.active=!1,e.root.setAttribute("data-active",!1),e.animate.hide(),e.parent.tags["auth-signup"].open()},remember:function(){e.active=!1,e.root.setAttribute("data-active",!1),e.animate.hide(),e.parent.tags["auth-remember"].open()}},e.onKeydown=function(t){return 13==t.which&&e.sendForm(),!0},e.sendForm=function(){if(!e.loading){var t={login:_.clean(e.refs.login.value,[]),password:_.clean(e.refs.password.value,[])},i=e.validator(t);e.update({loading:i}),i&&setTimeout(function(){$$.post({url:"/login",data:t,dataType:"json",success:function(t,i){if(t&&t.status)if("error"==t.status){var a="Не верный логин и/или пароль";e.parent.notify?e.parent.notify.show({color:"danger",text:a}):alert(a)}else"OK"==t.status&&app.tag("section-loader").show().then(function(){e.form.submit()})},error:function(){var t="Ошибка авторизации, повторите попытку чуть позже";e.parent.notify?e.parent.notify.show({color:"danger",text:"Ошибка авторизации, повторите попытку чуть позже"}):alert(t)},complete:function(t,i){e.update({loading:!1})}})},300)}},e.validator=function(t){return e.validate.login.valid=!0,e.validate.password.valid=!0,_.each(t,function(t,i){"login"!==i||t.length?"password"!==i||t.length||(e.validate.password.valid=!1):e.validate.login.valid=!1}),_.every(_.pluck(_.values(e.validate),"valid"))},e.close=function(){e.active=!1,app.device.isPhone?e.root.setAttribute("data-active",!1):e.animate.hide(function(){e.root.setAttribute("data-active",!1)}),e.parent.section=null,e.parent.close()}}),riot.tag2("auth-signup",'<form ref="form" method="post" action="/register" class="auth__form anim-group1 anim-scale{\'-ease\' : app.device.isPhone}" duration-show="m" duration-hide="{app.device.isPhone ? \'s\' : \'m\'}"> <input type="hidden" name="logined" value="true"> <input type="hidden" name="referer" riot-value="{get.referer()}"> <input type="hidden" name="country" riot-value="{parent.location.country}"> <input type="hidden" name="city" riot-value="{parent.location.city}"> <input type="hidden" name="region" riot-value="{parent.location.region}"> <div if="{!app.device.isPhone}" class="auth__close anim-group3 anim-lr anim-delay-xs anim-duration-m"> <div onclick="{close}" onupdate="none" class="auth__close__button"></div> </div> <div if="{app.device.isPhone}" class="auth__logo anim-group1 anim-fadeIn anim-duration-m"></div> <div class="auth__header"> Регистрация </div> <div class="auth__body"> <div class="mb45 xs-mb-m xs-pb-xxs"> <div class="switcher-group"> <div class="switcher-group-container" style="width:240px"> <input onclick="{changePlan}" onupdate="none" type="radio" name="plan" value="free" id="switcher-plan-free" __checked="{plan == ⁗free⁗}"> <label for="switcher-plan-free">Free</label> <input onclick="{changePlan}" onupdate="none" type="radio" name="plan" value="premium" id="switcher-plan-premium" __checked="{plan == ⁗premium⁗}"> <label for="switcher-plan-premium">Premium</label> <span class="switcher-group-switch"></span> </div> </div> </div> <div class="mb-m input-group input-group-icon" data-errballoon="{!validate.login.valid ? validate.login.text : null}"> <input class="input input-xl {input-error : !validate.login.valid}" type="text" placeholder="Ваш email (логин)" autocomplete="off" name="login" ref="login"> <div class="input-icon"> <svg class="input-svg input-svg-login" viewbox="3 -3 24 24"><path class="input-svg-color" d="M15 11.9c-.9 0-1.7-.2-2.3-.7l-5.7-4.4v8.1c0 .1 0 .3.1.4.1.1.2.2.3.2 2.5.4 5 .5 7.5.5s5-.2 7.5-.5c.1 0 .3-.1.4-.2.2-.1.2-.3.2-.4v-8.1l-5.7 4.4c-.6.5-1.4.7-2.3.7zm-1.3-2.3c.3.3.8.4 1.3.4s1-.1 1.3-.4l6.1-4.7c.3-.3.5-.6.6-1v-.8c0-.1 0-.3-.1-.4-.1-.1-.2-.2-.4-.2-2.5-.3-5-.5-7.5-.5s-5 .2-7.5.5c-.1 0-.2.1-.3.2-.2.1-.2.3-.2.4v.9c.1.3.3.6.6 1l6.1 4.6z"></path></svg> </div> </div> <div class="mb-xs input-group input-group-icon" data-errballoon="{!validate.password.valid ? validate.password.text : null}"> <input class="input input-xl {input-error : !validate.password.valid}" type="text" placeholder="Пароль (мин. из 6 сим-ов)" autocomplete="off" name="password" ref="password"> <div class="input-icon"> <svg class="input-svg input-svg-password" xmlns="http://www.w3.org/2000/svg" viewbox="0 -6 30 30" enable-background="new 0 -6 30 30"> <path class="input-svg-color" d="M21.6 8.3c-.2-.2-.5-.3-.9-.3h-.7v-2.6c0-1.3-.5-2.4-1.4-3.2-.9-.8-2.1-1.2-3.6-1.2s-2.7.4-3.6 1.2c-.9.8-1.4 1.9-1.4 3.2v2.6h-.7c-.3 0-.7.1-.9.4-.3.2-.4.5-.4.8v6.1c0 .3.1.5.3.7.2.2.4.3.7.4 1.9.4 3.9.6 6 .6 2 0 4-.2 5.9-.6.3-.1.5-.2.7-.4.2-.2.3-.4.3-.7v-6.1c.1-.3 0-.6-.3-.9zm-8.6-2.4c0-1.3.7-1.9 2-1.9s2 .6 2 1.9v2.1h-4v-2.1z"></path> </svg> </div> </div> <div class="mb-m xs-mb-xs pr-xxs pb-xs text-right"> <span if="{!app.device.isPhone}" onclick="{openSignIn}" class="link-gray-hover-primary text-uppercase fontSize-xs fontFamily-helvetica letterSpacing-l cursor-pointer">У вас уже есть аккаунт?</span> </div> <div onclick="{sendForm}" class="btn btn-xxl btn-{app.device.isPhone ? \'success\' : \'default-hover-success\'} mb-xs xs-mb0 {btn-loading : loading}">Создать аккаунт</div> </div> <auth-social></auth-social> </form>',"",'class="section auth" data-active="false" data-form="signup"',function(t){var e=this;e.active=!1,e.plan="free",e.loading=!1,e.validate={login:{valid:!0,text:null,vars:{v1:"Введите свой email",v2:"Введите корректный email"}},password:{valid:!0,text:null,vars:{v1:"Введите свой пароль",v2:"Введите пароль мин. из 6 символов"}}},e.on("mount",function(){e.form=$$(e.refs.form),e.animate=new app.plugins.animate(e.root)}),e.on("updated",function(){!e.active&&e.animate.active&&(e.root.setAttribute("data-active",!1),e.animate.hide())}),e.get={referer:function(){return!1}},e.open=function(t){e.active=!0,e.parent.section="signup",e.update({plan:t?t:app.metrika.get("plan.name")}),e.root.setAttribute("data-active",!0),e.animate.show(function(){app.device.isPhone||app.metrika.get("tooltips.regSocial")||(app.tag("section-notify").show({text:"Для регистрации вы можете использовать свою социальную сеть",pos:"bottom-left",timeout:5}),app.metrika.set("tooltips.regSocial",!0))})},e.openSignIn=function(){e.active=!1,e.root.setAttribute("data-active",!1),e.animate.hide(),e.parent.tags["auth-signin"].open()},e.changePlan=function(t){app.metrika.set("plan.name",t.target.value)},e.sendForm=function(){if(!e.loading){var t={login:_.clean(e.refs.login.value,[]),password:_.clean(e.refs.password.value,[])},i=e.validator(t);e.update({loading:i}),i&&setTimeout(function(){$$.post({url:"/register",data:t,dataType:"json",success:function(t,i){t&&t.status&&("error"==t.status?app.tag("section-notify").show({color:"info",text:"Указанный email уже используется"}):"OK"==t.status&&app.tag("section-loader").show().then(function(){e.form.submit()}))},error:function(){app.tag("section-notify").show({color:"danger",text:"Ошибка регистрации, повторите попытку чуть позже"})},complete:function(t,i){e.update({loading:!1})}})},300)}},e.validator=function(t){return e.validate.login.valid=!0,e.validate.password.valid=!0,_.each(t,function(t,i){"login"===i?t.length?_.isEmail(t)||(e.validate.login.valid=!1,e.validate.login.text=e.validate.login.vars.v2):(e.validate.login.valid=!1,e.validate.login.text=e.validate.login.vars.v1):"password"===i&&(t.length?t.length<6&&(e.validate.password.valid=!1,e.validate.password.text=e.validate.password.vars.v2):(e.validate.password.valid=!1,e.validate.password.text=e.validate.password.vars.v1))}),_.every(_.pluck(_.values(e.validate),"valid"))},e.close=function(){e.active=!1,app.device.isPhone?e.root.setAttribute("data-active",!1):e.animate.hide(function(){e.root.setAttribute("data-active",!1)}),e.parent.section=null,e.parent.close()}}),riot.tag2("auth-remember",'<form ref="form" method="post" action="/auth" class="auth__form anim-group1 anim-scale{\'-zoom\' : app.device.isPhone}" duration-show="m" duration-hide="{app.device.isPhone ? \'s\' : \'m\'}"> <input type="hidden" name="logined" value="true"> <div if="{!app.device.isPhone}" class="auth__close"> <div onclick="{close}" onupdate="none" class="auth__close__button"></div> </div> <div if="{app.device.isPhone}" class="auth__logo anim-group1 anim-fadeIn anim-duration-m"></div> <div class="auth__header"> Восстановить пароль <div class="auth__subtitle">Отправить на свой email инструкцию по сбросу пароля.</div> </div> <div class="auth__body"> <div class="mb-l input-group input-group-icon"> <input onkeydown="{onKeydown}" onupdate="none" class="input input-xl" type="text" placeholder="Введите свой email (логин)" autocomplete="off" name="login" value=""> <div class="input-icon"> <svg class="input-svg" viewbox="3 -3 24 24"><path class="input-svg-color" d="M15 11.9c-.9 0-1.7-.2-2.3-.7l-5.7-4.4v8.1c0 .1 0 .3.1.4.1.1.2.2.3.2 2.5.4 5 .5 7.5.5s5-.2 7.5-.5c.1 0 .3-.1.4-.2.2-.1.2-.3.2-.4v-8.1l-5.7 4.4c-.6.5-1.4.7-2.3.7zm-1.3-2.3c.3.3.8.4 1.3.4s1-.1 1.3-.4l6.1-4.7c.3-.3.5-.6.6-1v-.8c0-.1 0-.3-.1-.4-.1-.1-.2-.2-.4-.2-2.5-.3-5-.5-7.5-.5s-5 .2-7.5.5c-.1 0-.2.1-.3.2-.2.1-.2.3-.2.4v.9c.1.3.3.6.6 1l6.1 4.6z"></path></svg> </div> </div> <div id="submit" class="btn btn-xxl btn-{app.device.isPhone ? \'success\' : \'default-hover-success\'}">Отправить</div> </div> </form>',"",'class="section auth" data-active="false" data-form="remember"',function(t){var e=this;e.active=!1,e.on("mount",function(){e.form=$$(e.refs.form),e.animate=new app.plugins.animate(e.root)}),e.on("updated",function(){!e.active&&e.animate.active&&(e.root.setAttribute("data-active",!1),e.animate.hide())}),e.open=function(){e.active=!0,e.parent.section="remember",e.root.setAttribute("data-active",!0),e.animate.show()},e.onKeydown=function(t){return!0},e.openAuth=function(){e.parent.tags["auth-form"].open()},e.close=function(){e.active=!1,app.device.isPhone?e.root.setAttribute("data-active",!1):e.animate.hide(function(){e.root.setAttribute("data-active",!1)}),e.parent.section=null,e.parent.close()}}),riot.tag2("section-notify",'<div onclick="{hide}" onupdate="none" ref="notify" class="notify {\'notify-\' + size}" data-color="{color}" riot-style="{width ? \'width:\' + width : null}">{text}</div>',"",'class="notify-wrapper" data-active="{active}" data-pos="{pos}"',function(t){var e=this;e.active=!1,e.interval=null,e.default=function(){return{active:!0,timeout:1.5,pos:"top-left",size:"m",color:"primary"}},e.on("mount",function(){e.notify=e.refs.notify,$afterlag.run(function(){e.update(_.extend(e.default(),{active:!1}))})}),e.show=function(t){if(!e.active)return e.active=!0,clearTimeout(e.interval),e.root.style.display="block",$afterlag.run(function(){e.update(_.extend(e.default(),t))}),new Promise(function(t,i){_.onEndTransition(e.notify,function(){return e.autoHide(),t()})})},e.autoHide=function(){e.timeout!==!1&&(e.interval=setTimeout(function(){e.hide()},1e3*e.timeout))},e.hide=function(){clearTimeout(e.interval),e.update({active:!1}),_.onEndTransition(e.notify,function(){e.root.style.display="none"})}}),riot.tag2("section-loader",'<div class="loader-spinner"></div>',"",'class="loader" data-show="{active}" data-color="{color}"',function(t){var e=this;e.default=function(){return{color:null,active:!0}},e.show=function(t){return e.update(_.extend(e.default(),t)),new Promise(function(t,i){_.onEndTransition(e.root,function(){return t()})})},e.hide=function(){e.update({active:!1})}}),riot.tag2("ui-input",'<input ref="input" oninput="{onInput}" onkeydown="{opts.autosuggest ? autosuggest.navigate : false}" onupdate="{opts.onupdate ? opts.onupdate : ⁗none⁗}" class="input input-{opts.size ? opts.size : \'m\'} {opts.color} {opts.align ? \'text-\' + opts.align : \'\'} {input-rounded : opts.rounded}" riot-value="{value}" placeholder="{opts.placeholder}" __disabled="{typeof opts.disabled !== \'undefined\'}" type="text" autocomplete="off" spellcheck="false"> <div if="{opts.autosuggest}" class="input-autosuggest-items"><div onclick="{autosuggest.select}" onupdate="none" each="{item in autosuggest.items}" no-reorder class="input-autosuggest-item" data-active="{item.active}"> <div class="input-autosuggest-item-title">{item.text}</div> </div></div>',"","class=\"{opts.autosuggestsize ? 'display-block input-autosuggest input-autosuggest-' + opts.autosuggestsize : 'display-block input-autosuggest input-autosuggest-m'}\"",function(t){var e=this;e.on("before-mount",function(){e.opts.update&&e.opts.cursor?e.value=e.opts.cursor.get(e.opts.update):e.value=e.opts.value,e.opts.autosuggest&&(e.suggest=_.debounce(e.autosuggest.request,app.device.isMobile?300:150))}),e.on("mount",function(){if(e.input=e.refs.input,window.$$&&(!window.$$||$$.fn.mask)&&(e.opts.pattern||e.opts.mask)){var t=$$(e.input);e.opts.pattern?t.mask(e.opts.pattern):e.opts.mask&&"phone"==e.opts.mask&&t.mask("(000) 000-0000")}}),e.on("update",function(){e.opts.value&&e.opts.onupdate||!e.opts.update||!e.opts.cursor?e.opts.value&&e.opts.value!==e.value&&(e.value=e.opts.value,e.input.value=e.value):(e.value=e.opts.cursor.get(e.opts.update),e.input.value=e.value)}),e.onInput=function(t){var i=t.target.value;e.onUpdate(this,i),e.opts.autosuggest&&i&&(e.autosuggest.el=t.target,e.suggest(e.opts.autosuggest,i),document.removeEventListener("click",e.autosuggest.handleClickOutside),document.addEventListener("click",e.autosuggest.handleClickOutside))},e.onUpdate=function(t,i){e.opts.update&&e.opts.cursor&&e.opts.cursor.set(e.opts.update,i),e.opts.commit===!0||"true"==e.opts.commit?e.parent.update():_.isFunction(e.opts.commit)?e.opts.commit.call(t,i,e.opts.i):e.opts.commit&&e.parent[e.opts.commit]&&e.parent[e.opts.commit](i,e.opts.i),e.value=i},e.autosuggest={el:null,value:"",items:[],select:function(){e.autosuggest.update([],this.item)},request:function(t,i){i.length>1?app.request(t,i).then(function(t){if(t.items){if("1"==t.items.length&&i==t.items[0].text)return void(e.autosuggest.items=[]);e.autosuggest.update(t.items)}}):e.autosuggest.update([])},update:function(t,i){e.autosuggest.items=t,i?(e.value=i.text,e.update({id:i.id,value:i.text}),e.trigger("autocomplete.select",i),e.onUpdate(this,i.text)):e.update()},navigate:function(t){if([13,38,40].indexOf(t.keyCode)>-1&&_.isEmpty(e.autosuggest.items))return t.preventDefault(),!0;var i=e.autosuggest.items,a=i.length;if(a>0&&[13,38,40].indexOf(t.keyCode)>-1){t.preventDefault();for(var o=null,n=0;n<a;n++){var s=i[n];if(s.active){o=n;break}}null!=o&&(i[o].active=!1),38==t.keyCode?null==o||0==o?i[a-1].active=!0:i[o-1].active=!0:40==t.keyCode?null==o||o==a-1?i[0].active=!0:i[o+1].active=!0:13==t.keyCode&&null!=o&&e.autosuggest.select.call({item:i[o]}),e.update()}return!0},handleClickOutside:function(t){e.autosuggest.el&&!e.autosuggest.el.contains(t.target)&&setTimeout(function(){e.autosuggest.items&&e.autosuggest.items.length&&e.autosuggest.update([])},20),document.removeEventListener("click",e.autosuggest.handleClickOutside)}},e.on("unmount",function(){(e.opts.pattern||e.opts.mask)&&$$(e.input).unmask()})}),riot.tag2("popup-blog-subscribe",'<div onclick="{close}" onupdate="none" class="popup__close"></div> <div class="popup__inner"> <div class="popup__image"> <img src="/public/images/popup/blog.png"> </div> <div class="popup__content"> <div class="popup__title c-blueLight fontWeight-bold">Подпишитесь</div> <div class="popup__text">на наш блог, чтобы получать новые статьи каждую неделю</div> <blog-subscribe-form></blog-subscribe-form> </div> </div>',"",'class="popup popup-m" data-pos="bottom-right" data-active="{active}"',function(t){var e=this;e.on("mount",function(){setTimeout(function(){e.root.style.display="block"},20),e.form=e.tags["blog-subscribe-form"],e.form&&(e.form.one("success",function(){e.hide()}),e.form.one("fail",function(){e.hide()}))}),e.show=function(){e.active||(e.update({active:!0}),!app.device.isMobile&&e.form&&$afterlag.xl(function(){e.form.refs.input.focus()}),app.metrika.set("offers.popup.blog.subscribe.show",!0))},e.close=function(){e.hide(),app.metrika.set("offers.popup.blog.subscribe.hide",!0)},e.hide=function(){e.active&&e.update({active:!1})}}),riot.tag2("blog-subscribe-form",'<div class="input-group input-group-icon"> <div onclick="{success}" onupdate="none" class="input-group-addon flex-centered bg-blue borderRadius-m btn-active"> <svg class="w24 h24" style="margin-top:3px" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 511.99998 639.999975" version="1.1" x="0px" y="0px"><g transform="translate(-91.214475,-152.15558)"><g transform="matrix(0,-1.2428946,1.2437461,0,-150.79005,839.70654)"><rect ry="37.436085" y="250.03104" x="308.55121" height="274.84021" width="74.872169" style="fill:#fff"></rect><rect ry="37.46793" transform="matrix(0.70650574,0.70770731,-0.70650574,0.70770731,0,0)" y="-159.08594" x="570.86584" height="313.4476" width="74.93586" style="fill:#fff"></rect><rect ry="37.46793" transform="matrix(0.70650574,-0.70770731,0.70650574,0.70770731,0,0)" y="332.36725" x="-154.34863" height="313.4476" width="74.93586" style="fill:#fff"></rect></g></g></svg> </div> <input ref="input" class="input input-m {input-error : error}" type="text" placeholder="E-mail" autocomplete="off"> <div class="input-icon"> <svg class="input-svg" viewbox="3 -3 24 24"><path class="{error ? \'fill-red\' : \'input-svg-color\'}" d="M15 11.9c-.9 0-1.7-.2-2.3-.7l-5.7-4.4v8.1c0 .1 0 .3.1.4.1.1.2.2.3.2 2.5.4 5 .5 7.5.5s5-.2 7.5-.5c.1 0 .3-.1.4-.2.2-.1.2-.3.2-.4v-8.1l-5.7 4.4c-.6.5-1.4.7-2.3.7zm-1.3-2.3c.3.3.8.4 1.3.4s1-.1 1.3-.4l6.1-4.7c.3-.3.5-.6.6-1v-.8c0-.1 0-.3-.1-.4-.1-.1-.2-.2-.4-.2-2.5-.3-5-.5-7.5-.5s-5 .2-7.5.5c-.1 0-.2.1-.3.2-.2.1-.2.3-.2.4v.9c.1.3.3.6.6 1l6.1 4.6z"></path></svg> </div> </div>',"","",function(t){var e=this;e.success=function(){if(_.isEmail(e.refs.input.value)){var t=e.refs.input.value;app.request("addBlogSubscribe",{email:t}).then(function(){app.metrika.set("offers.popup.blog.subscribe.success",!0),app.metrika.set("offers.popup.blog.subscribe.email",t),e.trigger("success")},function(){e.trigger("fail")})}else e.update({error:!0})}}),riot.tag2("icon-fb",'<svg class="icon-fb {opts.size ? \'icon-\' + opts.size : \'icon-m\'}" fill-color="{opts.color ?   opts.color : \'blue\'}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewbox="0 0 100 100"><path class="input-svg-color" d="M60.5 32.5c-1.7-.6-4.8-.7-6.5-.7-5.1 0-7.2 4.1-7.2 8.9v3.2h-3v6.4h3V68H53V50.3h6v-6.4h-6v-3.8c0-1.6 2.6-2.4 3.7-2.4 1 0 2 .2 2.9.5l.9-5.7"></path></svg>',"",'class="icon"',function(t){}),riot.tag2("icon-vk",'<svg class="icon-vk {opts.size ? \'icon-\' + opts.size : \'icon-m\'}" fill-color="{opts.color ?   opts.color : \'blue\'}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewbox="0 0 100 100"><path class="input-svg-color" d="M56.7 49.5v-.1c2.3-1 3.5-3.1 3.5-5.6 0-5.6-5.2-6-9.5-6h-9.9v26h10.8c5.1 0 10.3-2 10.3-8 0-3.4-2-5.6-5.2-6.3zm-8.9-7h1.9c1.9 0 3.9.2 3.9 2.6 0 2.7-2 2.9-4.1 2.9h-1.8v-5.5h.1zM50 59h-2.2v-6.5h3c2.3 0 4.5.3 4.5 3.2 0 3.1-2.9 3.3-5.3 3.3z"></path></svg>',"",'class="icon"',function(t){}),riot.tag2("icon-tw",'<svg class="icon-tw {opts.size ? \'icon-\' + opts.size : \'icon-m\'}" fill-color="{opts.color ?   opts.color : \'blue\'}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewbox="0 0 100 100"><path class="input-svg-color" d="M63.8 41.8c1.5-.8 2.6-2.1 3.1-3.6-1.4.7-2.9 1.3-4.5 1.6-1.3-1.3-3.2-2-5.1-2-3.9 0-7 2.9-7 6.5 0 .5 0 1 .2 1.5-5.6-.4-10.9-2.8-14.5-6.9-.6 1-.9 2.1-.9 3.3 0 2.2 1.2 4.2 3.1 5.4-1.2 0-2.2-.3-3.2-.8v.1c-.1 3.1 2.3 5.7 5.6 6.3-.6.2-1.2.2-1.9.2-.4 0-.9 0-1.3-.1.9 2.6 3.6 4.5 6.5 4.5-2.5 1.8-5.5 2.8-8.7 2.8-.5 0-1.1 0-1.6-.1 3.2 1.9 6.9 2.9 10.8 2.9 8.1 0 14.9-4 18.2-10.9 1.1-2.4 1.8-4.9 1.8-7.5v-.9c1.4-.9 2.6-2 3.5-3.3-1.4.5-2.7.9-4.1 1z"></path></svg>',"",'class="icon"',function(t){}),riot.tag2("icon-dk",'<svg class="icon-dk {opts.size ? \'icon-\' + opts.size : \'icon-m\'}" fill-color="{opts.color ?   opts.color : \'blue\'}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewbox="0 0 100 100"><path class="input-svg-color" d="M56.3 52.2c-2 .9-4.1 1.5-6.3 1.5-2.3 0-4.1-.6-6.2-1.5-.4-.2-.8-.3-1.3-.3-1.5 0-2.7 1.2-2.7 2.6 0 2.6 4.5 3.5 6.6 4l-5.3 4.9c-.5.5-.8 1.1-.8 1.8 0 1.4 1.2 2.6 2.7 2.6.7 0 1.4-.2 1.9-.7l5-4.7 5 4.7c.5.5 1.2.7 1.9.7 1.5 0 2.7-1.2 2.7-2.6 0-.7-.3-1.3-.8-1.8l-5.3-4.9c2.2-.4 6.6-1.5 6.6-4 0-1.3-1.2-2.6-2.7-2.6-.2-.1-.6 0-1 .3M50.1 34.3c-5.3 0-9.2 4-9.2 8.7 0 4.6 4 8.7 9.2 8.7 5.3 0 9.2-4 9.2-8.7 0-4.6-4-8.7-9.2-8.7zm0 12.3c-2.2 0-3.8-1.7-3.8-3.6 0-1.9 1.7-3.6 3.8-3.6 2.2 0 3.8 1.7 3.8 3.6 0 1.9-1.7 3.6-3.8 3.6z"></path></svg>',"",'class="icon"',function(t){}),riot.tag2("icon-gl",'<svg class="icon-gl {opts.size ? \'icon-\' + opts.size : \'icon-m\'}" fill-color="{opts.color ?   opts.color : \'blue\'}" enable-background="new 0 0 128 128" version="1.1" viewbox="0 0 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect clip-rule="evenodd" fill="none" fill-rule="evenodd"></rect><path clip-rule="evenodd" d="M40.654,55.935v16.13 c0,0,15.619-0.021,21.979-0.021C59.189,82.5,53.834,88.194,40.654,88.194c-13.338,0-23.748-10.832-23.748-24.194 s10.41-24.194,23.748-24.194c7.052,0,11.607,2.483,15.784,5.944c3.344-3.35,3.065-3.828,11.573-11.877 c-7.222-6.586-16.822-10.6-27.357-10.6C18.201,23.273,0,41.507,0,64c0,22.493,18.201,40.727,40.654,40.727 c33.561,0,41.763-29.275,39.044-48.792H40.654z M113.912,56.742V42.628h-10.063v14.113H89.358v10.081h14.491v14.517h10.063V66.823 H128V56.742H113.912z" fill="#fff" fill-rule="evenodd"></path></svg>',"",'class="icon"',function(t){});
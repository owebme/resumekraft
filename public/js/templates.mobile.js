riot.tag2("section-auth",'<div if="{app.device.isPhone}" class="oScreen__buttons" data-pos="top-right"> <div onclick="{close}" class="button__close" data-color="gray"></div> </div> <auth-signin></auth-signin> <auth-remember></auth-remember> <auth-signup></auth-signup>',"","class=\"{app.device.isPhone ? 'section' : 'oScreen'} zIndex-100 pos-fixed\" data-open=\"false\"",function(t){var i=this;i.active=!1,i.on("mount",function(){location.href.match(/\?signin/)?$afterlag.run(function(){i.open("signin")}):location.href.match(/\?signup/)&&$afterlag.run(function(){i.open("signup",!!location.href.match(/\&plan=premium/)&&"premium")}),$afterlag.xs(function(){i.notify=app.tag("section-notify"),window.ymaps&&ymaps.ready(function(){ymaps.geolocation&&ymaps.geolocation.city&&i.update({location:{country:ymaps.geolocation.country,city:ymaps.geolocation.city,region:ymaps.geolocation.region}})})})}),i.open=function(t,a){i.active=!0,i.root.setAttribute("data-open",!0);var o=i.tags["auth-"+t];o&&o.open&&o.open(a)},i.close=function(){i.root.setAttribute("data-open",!1),i.update({active:!1})}}),riot.tag2("auth-social",'<div class="pos-rel anim-group2 anim-{app.device.isPhone ? \'bt\' : \'rl\'} anim-duration-m" data-balloon="Войти через Facebook" data-balloon-pos="left"> <div class="auth__social__button" data-share="fb"> <icon-fb color="white"></icon-fb> </div> </div> <div class="pos-rel anim-group2 anim-{app.device.isPhone ? \'bt\' : \'rl\'} anim-delay-xs anim-duration-m" data-balloon="Войти через ВКонтакте" data-balloon-pos="left"> <div class="auth__social__button" data-share="vk"> <icon-vk color="white"></icon-vk> </div> </div> <div class="pos-rel anim-group2 anim-{app.device.isPhone ? \'bt\' : \'rl\'} anim-delay-s anim-duration-m" data-balloon="Войти через Twitter" data-balloon-pos="left"> <div class="auth__social__button" data-share="tw"> <icon-tw color="white"></icon-tw> </div> </div> <div class="pos-rel anim-group2 anim-{app.device.isPhone ? \'bt\' : \'rl\'} anim-delay-m anim-duration-m" data-balloon="Войти через Одноклассники" data-balloon-pos="left"> <div class="auth__social__button" data-share="dk"> <icon-dk color="white"></icon-dk> </div> </div> <div class="pos-rel anim-group2 anim-{app.device.isPhone ? \'bt\' : \'rl\'} anim-delay-l anim-duration-m" data-balloon="Войти через Google+" data-balloon-pos="left"> <div class="auth__social__button" data-share="gl"> <icon-gl color="white"></icon-gl> </div> </div>',"",'class="section auth__social"',function(t){}),riot.tag2("auth-signin",'<form id="form" method="post" action="/login" class="auth__form anim-group1 anim-scale{\'-ease\' : app.device.isPhone}" duration-show="m" duration-hide="{app.device.isPhone ? \'s\' : \'m\'}"> <input type="hidden" name="logined" value="true"> <input type="hidden" name="country" value="{location.country}"> <input type="hidden" name="city" value="{location.city}"> <input type="hidden" name="region" value="{location.region}"> <div if="{!app.device.isPhone}" class="auth__close anim-group3 anim-lr anim-delay-xs anim-duration-m"> <div onclick="{close}" onupdate="none" class="auth__close__button"></div> </div> <div if="{app.device.isPhone}" class="auth__logo anim-group1 anim-fadeIn anim-duration-m"></div> <div class="auth__header"> Авторизация </div> <div class="auth__body"> <div class="mb-m input-group input-group-icon" data-errballoon="{!validate.login.valid ? validate.login.text : null}"> <input onkeydown="{onKeydown}" onupdate="none" class="input input-xl {input-error : !validate.login.valid}" type="text" placeholder="Логин (ваш email)" autocomplete="off" name="login" value=""> <div class="input-icon"> <svg class="input-svg input-svg-login" viewbox="3 -3 24 24"><path class="input-svg-color" d="M15 11.9c-.9 0-1.7-.2-2.3-.7l-5.7-4.4v8.1c0 .1 0 .3.1.4.1.1.2.2.3.2 2.5.4 5 .5 7.5.5s5-.2 7.5-.5c.1 0 .3-.1.4-.2.2-.1.2-.3.2-.4v-8.1l-5.7 4.4c-.6.5-1.4.7-2.3.7zm-1.3-2.3c.3.3.8.4 1.3.4s1-.1 1.3-.4l6.1-4.7c.3-.3.5-.6.6-1v-.8c0-.1 0-.3-.1-.4-.1-.1-.2-.2-.4-.2-2.5-.3-5-.5-7.5-.5s-5 .2-7.5.5c-.1 0-.2.1-.3.2-.2.1-.2.3-.2.4v.9c.1.3.3.6.6 1l6.1 4.6z"></path></svg> </div> </div> <div class="mb-xs input-group input-group-icon" data-errballoon="{!validate.password.valid ? validate.password.text : null}"> <input onkeydown="{onKeydown}" onupdate="none" class="input input-xl {input-error : !validate.password.valid}" type="password" placeholder="Пароль" autocomplete="off" name="password"> <div class="input-icon"> <svg class="input-svg input-svg-password" xmlns="http://www.w3.org/2000/svg" viewbox="0 -6 30 30" enable-background="new 0 -6 30 30"> <path class="input-svg-color" d="M21.6 8.3c-.2-.2-.5-.3-.9-.3h-.7v-2.6c0-1.3-.5-2.4-1.4-3.2-.9-.8-2.1-1.2-3.6-1.2s-2.7.4-3.6 1.2c-.9.8-1.4 1.9-1.4 3.2v2.6h-.7c-.3 0-.7.1-.9.4-.3.2-.4.5-.4.8v6.1c0 .3.1.5.3.7.2.2.4.3.7.4 1.9.4 3.9.6 6 .6 2 0 4-.2 5.9-.6.3-.1.5-.2.7-.4.2-.2.3-.4.3-.7v-6.1c.1-.3 0-.6-.3-.9zm-8.6-2.4c0-1.3.7-1.9 2-1.9s2 .6 2 1.9v2.1h-4v-2.1z"></path> </svg> </div> </div> <div class="mb-m xs-mb-xs pr-xxs pb-xs text-right"> <span onclick="{show.remember}" class="link-gray-hover-primary text-uppercase fontSize-xs fontFamily-helvetica letterSpacing-l cursor-pointer">Забыли пароль?</span> </div> <div onclick="{sendForm}" class="btn btn-xxl btn-{app.device.isPhone ? \'success\' : \'default-hover-success\'} {btn-loading : loading}"><span class="plr-s">Войти</span></div> <div if="{!app.device.isPhone}" class="mt-xs pt-m pb-xs text-center"> <a onclick="{show.signup}" class="link-gray-hover-primary text-uppercase fontSize-s fontFamily-helvetica letterSpacing-l cursor-pointer">У вас нет аккаунта?</a> </div> </div> <auth-social></auth-social> </form>',"",'class="section auth" data-active="false" data-form="signin"',function(t){var i=this,a=$$(i.form);i.active=!1,i.loading=!1,i.validate={login:{valid:!0,text:"Введите свой логин"},password:{valid:!0,text:"Введите свой пароль"}},i.on("mount",function(){i.animate=new app.plugins.animate(i.root)}),i.on("updated",function(){!i.active&&i.animate.active&&(i.root.setAttribute("data-active",!1),i.animate.hide())}),i.open=function(){i.active=!0,i.root.setAttribute("data-active",!0),i.animate.show()},i.show={signup:function(){i.active=!1,i.root.setAttribute("data-active",!1),i.animate.hide(),i.parent.tags["auth-signup"].open()},remember:function(){i.active=!1,i.root.setAttribute("data-active",!1),i.animate.hide(),i.parent.tags["auth-remember"].open()}},i.onKeydown=function(t){return 13==t.which&&i.sendForm(),!0},i.sendForm=function(){if(!i.loading){var t={login:_.clean(i.login.value,[]),password:_.clean(i.password.value,[])},o=i.validator(t);i.update({loading:o}),o&&setTimeout(function(){$$.post({url:"/login",data:t,dataType:"json",success:function(t,o){if(t&&t.status)if("error"==t.status){var e="Не верный логин и/или пароль";i.parent.notify?i.parent.notify.show({color:"danger",text:e}):alert(e)}else"OK"==t.status&&app.tag("section-loader").show().then(function(){a.submit()})},error:function(){var t="Ошибка авторизации, повторите попытку чуть позже";i.parent.notify?i.parent.notify.show({color:"danger",text:"Ошибка авторизации, повторите попытку чуть позже"}):alert(t)},complete:function(t,a){i.update({loading:!1})}})},300)}},i.validator=function(t){return i.validate.login.valid=!0,i.validate.password.valid=!0,_.each(t,function(t,a){"login"!==a||t.length?"password"!==a||t.length||(i.validate.password.valid=!1):i.validate.login.valid=!1}),_.every(_.pluck(_.values(i.validate),"valid"))},i.close=function(){i.parent.close()}}),riot.tag2("auth-signup",'<form id="form" method="post" action="/register" class="auth__form anim-group1 anim-scale{\'-ease\' : app.device.isPhone}" duration-show="m" duration-hide="{app.device.isPhone ? \'s\' : \'m\'}"> <input type="hidden" name="logined" value="true"> <input type="hidden" name="referer" value="{get.referer()}"> <input type="hidden" name="country" value="{location.country}"> <input type="hidden" name="city" value="{location.city}"> <input type="hidden" name="region" value="{location.region}"> <div if="{!app.device.isPhone}" class="auth__close anim-group3 anim-lr anim-delay-xs anim-duration-m"> <div onclick="{close}" onupdate="none" class="auth__close__button"></div> </div> <div if="{app.device.isPhone}" class="auth__logo anim-group1 anim-fadeIn anim-duration-m"></div> <div class="auth__header"> Регистрация </div> <div class="auth__body"> <div class="mb45 xs-mb-m xs-pb-xxs"> <div class="switcher-group"> <div class="switcher-group-container" style="width:240px"> <input onclick="{changePlan}" onupdate="none" type="radio" name="plan" value="free" id="switcher-plan-free" __checked="{plan == ⁗free⁗}"> <label for="switcher-plan-free">Free</label> <input onclick="{changePlan}" onupdate="none" type="radio" name="plan" value="premium" id="switcher-plan-premium" __checked="{plan == ⁗premium⁗}"> <label for="switcher-plan-premium">Premium</label> <span class="switcher-group-switch"></span> </div> </div> </div> <div class="mb-m input-group input-group-icon" data-errballoon="{!validate.login.valid ? validate.login.text : null}"> <input class="input input-xl {input-error : !validate.login.valid}" type="text" placeholder="Ваш email (логин)" autocomplete="off" name="login" value=""> <div class="input-icon"> <svg class="input-svg input-svg-login" viewbox="3 -3 24 24"><path class="input-svg-color" d="M15 11.9c-.9 0-1.7-.2-2.3-.7l-5.7-4.4v8.1c0 .1 0 .3.1.4.1.1.2.2.3.2 2.5.4 5 .5 7.5.5s5-.2 7.5-.5c.1 0 .3-.1.4-.2.2-.1.2-.3.2-.4v-8.1l-5.7 4.4c-.6.5-1.4.7-2.3.7zm-1.3-2.3c.3.3.8.4 1.3.4s1-.1 1.3-.4l6.1-4.7c.3-.3.5-.6.6-1v-.8c0-.1 0-.3-.1-.4-.1-.1-.2-.2-.4-.2-2.5-.3-5-.5-7.5-.5s-5 .2-7.5.5c-.1 0-.2.1-.3.2-.2.1-.2.3-.2.4v.9c.1.3.3.6.6 1l6.1 4.6z"></path></svg> </div> </div> <div class="mb-xs input-group input-group-icon" data-errballoon="{!validate.password.valid ? validate.password.text : null}"> <input class="input input-xl {input-error : !validate.password.valid}" type="text" placeholder="Пароль (мин. из 6 сим-ов)" autocomplete="off" name="password"> <div class="input-icon"> <svg class="input-svg input-svg-password" xmlns="http://www.w3.org/2000/svg" viewbox="0 -6 30 30" enable-background="new 0 -6 30 30"> <path class="input-svg-color" d="M21.6 8.3c-.2-.2-.5-.3-.9-.3h-.7v-2.6c0-1.3-.5-2.4-1.4-3.2-.9-.8-2.1-1.2-3.6-1.2s-2.7.4-3.6 1.2c-.9.8-1.4 1.9-1.4 3.2v2.6h-.7c-.3 0-.7.1-.9.4-.3.2-.4.5-.4.8v6.1c0 .3.1.5.3.7.2.2.4.3.7.4 1.9.4 3.9.6 6 .6 2 0 4-.2 5.9-.6.3-.1.5-.2.7-.4.2-.2.3-.4.3-.7v-6.1c.1-.3 0-.6-.3-.9zm-8.6-2.4c0-1.3.7-1.9 2-1.9s2 .6 2 1.9v2.1h-4v-2.1z"></path> </svg> </div> </div> <div class="mb-m xs-mb-xs pr-xxs pb-xs text-right"> <span if="{!app.device.isPhone}" onclick="{openSignIn}" class="link-gray-hover-primary text-uppercase fontSize-xs fontFamily-helvetica letterSpacing-l cursor-pointer">У вас уже есть аккаунт?</span> </div> <div onclick="{sendForm}" class="btn btn-xxl btn-{app.device.isPhone ? \'success\' : \'default-hover-success\'} mb-xs xs-mb0 {btn-loading : loading}">Создать аккаунт</div> </div> <auth-social></auth-social> </form>',"",'class="section auth" data-active="false" data-form="signup"',function(t){var i=this,a=$$(i.form);i.active=!1,i.plan="free",i.loading=!1,i.validate={login:{valid:!0,text:null,vars:{v1:"Введите свой email",v2:"Введите корректный email"}},password:{valid:!0,text:null,vars:{v1:"Введите свой пароль",v2:"Введите пароль мин. из 6 символов"}}},i.on("mount",function(){i.animate=new app.plugins.animate(i.root)}),i.on("updated",function(){!i.active&&i.animate.active&&(i.root.setAttribute("data-active",!1),i.animate.hide())}),i.get={referer:function(){return!1}},i.open=function(t){i.active=!0,i.update({plan:t?t:app.metrika.get("plan.name")}),i.root.setAttribute("data-active",!0),i.animate.show(function(){app.device.isPhone||app.metrika.get("tooltips.regSocial")||(app.tag("section-notify").show({text:"Для регистрации вы можете использовать свою социальную сеть",pos:"bottom-left",timeout:5}),app.metrika.set("tooltips.regSocial",!0))})},i.openSignIn=function(){i.active=!1,i.root.setAttribute("data-active",!1),i.animate.hide(),i.parent.tags["auth-signin"].open()},i.changePlan=function(t){app.metrika.set("plan.name",t.target.value)},i.sendForm=function(){if(!i.loading){var t={login:_.clean(i.login.value,[]),password:_.clean(i.password.value,[])},o=i.validator(t);i.update({loading:o}),o&&setTimeout(function(){$$.post({url:"/register",data:t,dataType:"json",success:function(t,i){t&&t.status&&("error"==t.status?app.tag("section-notify").show({color:"info",text:"Указанный email уже используется"}):"OK"==t.status&&app.tag("section-loader").show().then(function(){a.submit()}))},error:function(){app.tag("section-notify").show({color:"danger",text:"Ошибка регистрации, повторите попытку чуть позже"})},complete:function(t,a){i.update({loading:!1})}})},300)}},i.validator=function(t){return i.validate.login.valid=!0,i.validate.password.valid=!0,_.each(t,function(t,a){"login"===a?t.length?_.isEmail(t)||(i.validate.login.valid=!1,i.validate.login.text=i.validate.login.vars.v2):(i.validate.login.valid=!1,i.validate.login.text=i.validate.login.vars.v1):"password"===a&&(t.length?t.length<6&&(i.validate.password.valid=!1,i.validate.password.text=i.validate.password.vars.v2):(i.validate.password.valid=!1,i.validate.password.text=i.validate.password.vars.v1))}),_.every(_.pluck(_.values(i.validate),"valid"))},i.close=function(){i.parent.close()}}),riot.tag2("auth-remember",'<form method="post" action="/auth" class="auth__form anim anim-scale{\'-zoom\' : app.device.isPhone}" duration-show="m" duration-hide="{app.device.isPhone ? \'s\' : \'m\'}"> <input type="hidden" name="logined" value="true"> <div if="{!app.device.isPhone}" class="auth__close"> <div onclick="{close}" onupdate="none" class="auth__close__button"></div> </div> <div if="{app.device.isPhone}" class="auth__logo anim-group1 anim-fadeIn anim-duration-m"></div> <div class="auth__header"> Восстановить пароль <div class="auth__subtitle">Отправить на свой email инструкцию по сбросу пароля.</div> </div> <div class="auth__body"> <div class="mb-l input-group input-group-icon"> <input onkeydown="{onKeydown}" onupdate="none" class="input input-xl" type="text" placeholder="Введите свой email (логин)" autocomplete="off" name="login" value=""> <div class="input-icon"> <svg class="input-svg" viewbox="3 -3 24 24"><path class="input-svg-color" d="M15 11.9c-.9 0-1.7-.2-2.3-.7l-5.7-4.4v8.1c0 .1 0 .3.1.4.1.1.2.2.3.2 2.5.4 5 .5 7.5.5s5-.2 7.5-.5c.1 0 .3-.1.4-.2.2-.1.2-.3.2-.4v-8.1l-5.7 4.4c-.6.5-1.4.7-2.3.7zm-1.3-2.3c.3.3.8.4 1.3.4s1-.1 1.3-.4l6.1-4.7c.3-.3.5-.6.6-1v-.8c0-.1 0-.3-.1-.4-.1-.1-.2-.2-.4-.2-2.5-.3-5-.5-7.5-.5s-5 .2-7.5.5c-.1 0-.2.1-.3.2-.2.1-.2.3-.2.4v.9c.1.3.3.6.6 1l6.1 4.6z"></path></svg> </div> </div> <div id="submit" class="btn btn-xxl btn-{app.device.isPhone ? \'success\' : \'default-hover-success\'}">Отправить</div> </div> </form>',"",'class="section auth {showAnim : animate}" data-active="{active}" data-form="remember"',function(t){var i=this;i.active=!1,i.on("updated",function(){!i.active&&i.animate&&i.update({animate:!1})}),i.open=function(){i.update({active:!0,animate:!0})},i.onKeydown=function(t){return!0},i.openAuth=function(){i.animate=!1,i.parent.tags["auth-form"].open()},i.close=function(){i.parent.close()}}),riot.tag2("section-notify",'<div onclick="{hide}" onupdate="none" name="notify" class="notify {\'notify-\' + size}" data-color="{color}" riot-style="{width ? \'width:\' + width : null}">{text}</div>',"",'class="notify-wrapper" data-active="{active}" data-pos="{pos}"',function(t){var i=this;i.active=!1,i.interval=null,i.default=function(){return{active:!0,timeout:1.5,pos:"top-left",size:"m",color:"primary"}},i.on("mount",function(){app.device.isPhone||setTimeout(function(){i.root.style.display="block"},20)}),i.show=function(t){if(!i.active)return i.active=!0,clearTimeout(i.interval),app.device.isPhone?(i.root.style.display="block",$afterlag.run(function(){i.update(_.extend(i.default(),t))})):i.update(_.extend(i.default(),t)),new Promise(function(t,a){_.onEndTransition(i.notify,function(){return i.autoHide(),t()})})},i.autoHide=function(){i.timeout!==!1&&(i.interval=setTimeout(function(){i.hide()},1e3*i.timeout))},i.hide=function(){clearTimeout(i.interval),i.update({active:!1}),app.device.isPhone&&_.onEndTransition(i.notify,function(){i.root.style.display="none"})}}),riot.tag2("section-loader",'<div class="loader-spinner"></div>',"",'class="loader" data-show="{active}" data-color="{color}"',function(t){var i=this;i.default=function(){return{color:null,active:!0}},i.show=function(t){return i.update(_.extend(i.default(),t)),new Promise(function(t,a){_.onEndTransition(i.root,function(){return t()})})},i.hide=function(){i.update({active:!1})}}),riot.tag2("blog-subscribe-form",'<div class="input-group input-group-icon"> <div onclick="{success}" onupdate="none" class="input-group-addon flex-centered bg-blue borderRadius-m btn-active"> <svg class="w24 h24" style="margin-top:3px" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 511.99998 639.999975" version="1.1" x="0px" y="0px"><g transform="translate(-91.214475,-152.15558)"><g transform="matrix(0,-1.2428946,1.2437461,0,-150.79005,839.70654)"><rect ry="37.436085" y="250.03104" x="308.55121" height="274.84021" width="74.872169" style="fill:#fff"></rect><rect ry="37.46793" transform="matrix(0.70650574,0.70770731,-0.70650574,0.70770731,0,0)" y="-159.08594" x="570.86584" height="313.4476" width="74.93586" style="fill:#fff"></rect><rect ry="37.46793" transform="matrix(0.70650574,-0.70770731,0.70650574,0.70770731,0,0)" y="332.36725" x="-154.34863" height="313.4476" width="74.93586" style="fill:#fff"></rect></g></g></svg> </div> <input name="input" class="input input-m {input-error : error}" type="text" placeholder="E-mail" autocomplete="off"> <div class="input-icon"> <svg class="input-svg" viewbox="3 -3 24 24"><path class="{error ? \'fill-red\' : \'input-svg-color\'}" d="M15 11.9c-.9 0-1.7-.2-2.3-.7l-5.7-4.4v8.1c0 .1 0 .3.1.4.1.1.2.2.3.2 2.5.4 5 .5 7.5.5s5-.2 7.5-.5c.1 0 .3-.1.4-.2.2-.1.2-.3.2-.4v-8.1l-5.7 4.4c-.6.5-1.4.7-2.3.7zm-1.3-2.3c.3.3.8.4 1.3.4s1-.1 1.3-.4l6.1-4.7c.3-.3.5-.6.6-1v-.8c0-.1 0-.3-.1-.4-.1-.1-.2-.2-.4-.2-2.5-.3-5-.5-7.5-.5s-5 .2-7.5.5c-.1 0-.2.1-.3.2-.2.1-.2.3-.2.4v.9c.1.3.3.6.6 1l6.1 4.6z"></path></svg> </div> </div>',"","",function(t){var i=this;i.success=function(){_.isEmail(i.input.value)?app.request("addBlogSubscribe",{email:i.input.value}).then(function(){app.metrika.set("offers.popup.blog.subscribe.success",!0),i.trigger("success")},function(){i.trigger("fail")}):i.update({error:!0})}}),riot.tag2("icon-fb",'<svg class="icon-fb {opts.size ? \'icon-\' + opts.size : \'icon-m\'}" fill-color="{opts.color ?   opts.color : \'blue\'}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewbox="0 0 100 100"><path class="input-svg-color" d="M60.5 32.5c-1.7-.6-4.8-.7-6.5-.7-5.1 0-7.2 4.1-7.2 8.9v3.2h-3v6.4h3V68H53V50.3h6v-6.4h-6v-3.8c0-1.6 2.6-2.4 3.7-2.4 1 0 2 .2 2.9.5l.9-5.7"></path></svg>',"",'class="icon"',function(t){}),riot.tag2("icon-vk",'<svg class="icon-vk {opts.size ? \'icon-\' + opts.size : \'icon-m\'}" fill-color="{opts.color ?   opts.color : \'blue\'}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewbox="0 0 100 100"><path class="input-svg-color" d="M56.7 49.5v-.1c2.3-1 3.5-3.1 3.5-5.6 0-5.6-5.2-6-9.5-6h-9.9v26h10.8c5.1 0 10.3-2 10.3-8 0-3.4-2-5.6-5.2-6.3zm-8.9-7h1.9c1.9 0 3.9.2 3.9 2.6 0 2.7-2 2.9-4.1 2.9h-1.8v-5.5h.1zM50 59h-2.2v-6.5h3c2.3 0 4.5.3 4.5 3.2 0 3.1-2.9 3.3-5.3 3.3z"></path></svg>',"",'class="icon"',function(t){}),riot.tag2("icon-tw",'<svg class="icon-tw {opts.size ? \'icon-\' + opts.size : \'icon-m\'}" fill-color="{opts.color ?   opts.color : \'blue\'}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewbox="0 0 100 100"><path class="input-svg-color" d="M63.8 41.8c1.5-.8 2.6-2.1 3.1-3.6-1.4.7-2.9 1.3-4.5 1.6-1.3-1.3-3.2-2-5.1-2-3.9 0-7 2.9-7 6.5 0 .5 0 1 .2 1.5-5.6-.4-10.9-2.8-14.5-6.9-.6 1-.9 2.1-.9 3.3 0 2.2 1.2 4.2 3.1 5.4-1.2 0-2.2-.3-3.2-.8v.1c-.1 3.1 2.3 5.7 5.6 6.3-.6.2-1.2.2-1.9.2-.4 0-.9 0-1.3-.1.9 2.6 3.6 4.5 6.5 4.5-2.5 1.8-5.5 2.8-8.7 2.8-.5 0-1.1 0-1.6-.1 3.2 1.9 6.9 2.9 10.8 2.9 8.1 0 14.9-4 18.2-10.9 1.1-2.4 1.8-4.9 1.8-7.5v-.9c1.4-.9 2.6-2 3.5-3.3-1.4.5-2.7.9-4.1 1z"></path></svg>',"",'class="icon"',function(t){}),riot.tag2("icon-dk",'<svg class="icon-dk {opts.size ? \'icon-\' + opts.size : \'icon-m\'}" fill-color="{opts.color ?   opts.color : \'blue\'}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewbox="0 0 100 100"><path class="input-svg-color" d="M56.3 52.2c-2 .9-4.1 1.5-6.3 1.5-2.3 0-4.1-.6-6.2-1.5-.4-.2-.8-.3-1.3-.3-1.5 0-2.7 1.2-2.7 2.6 0 2.6 4.5 3.5 6.6 4l-5.3 4.9c-.5.5-.8 1.1-.8 1.8 0 1.4 1.2 2.6 2.7 2.6.7 0 1.4-.2 1.9-.7l5-4.7 5 4.7c.5.5 1.2.7 1.9.7 1.5 0 2.7-1.2 2.7-2.6 0-.7-.3-1.3-.8-1.8l-5.3-4.9c2.2-.4 6.6-1.5 6.6-4 0-1.3-1.2-2.6-2.7-2.6-.2-.1-.6 0-1 .3M50.1 34.3c-5.3 0-9.2 4-9.2 8.7 0 4.6 4 8.7 9.2 8.7 5.3 0 9.2-4 9.2-8.7 0-4.6-4-8.7-9.2-8.7zm0 12.3c-2.2 0-3.8-1.7-3.8-3.6 0-1.9 1.7-3.6 3.8-3.6 2.2 0 3.8 1.7 3.8 3.6 0 1.9-1.7 3.6-3.8 3.6z"></path></svg>',"",'class="icon"',function(t){}),riot.tag2("icon-gl",'<svg class="icon-gl {opts.size ? \'icon-\' + opts.size : \'icon-m\'}" fill-color="{opts.color ?   opts.color : \'blue\'}" enable-background="new 0 0 128 128" version="1.1" viewbox="0 0 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect clip-rule="evenodd" fill="none" fill-rule="evenodd"></rect><path clip-rule="evenodd" d="M40.654,55.935v16.13 c0,0,15.619-0.021,21.979-0.021C59.189,82.5,53.834,88.194,40.654,88.194c-13.338,0-23.748-10.832-23.748-24.194 s10.41-24.194,23.748-24.194c7.052,0,11.607,2.483,15.784,5.944c3.344-3.35,3.065-3.828,11.573-11.877 c-7.222-6.586-16.822-10.6-27.357-10.6C18.201,23.273,0,41.507,0,64c0,22.493,18.201,40.727,40.654,40.727 c33.561,0,41.763-29.275,39.044-48.792H40.654z M113.912,56.742V42.628h-10.063v14.113H89.358v10.081h14.491v14.517h10.063V66.823 H128V56.742H113.912z" fill="#fff" fill-rule="evenodd"></path></svg>',"",'class="icon"',function(t){});
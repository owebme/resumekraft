<auth-signin class="section auth" data-active="false" data-form="signin">

    <form ref="form" method="post" action="/auth" class="auth__form anim-group1 anim-scale{ '-ease' : app.device.isPhone }" duration-show="m" duration-hide="{ app.device.isPhone ? 's' : 'm' }">
        <input type="hidden" name="oauth" value="false">
        <input type="hidden" name="auth" value="signin">
        <input type="hidden" name="logined" value="true">
        <input type="hidden" name="referer" riot-value={ parent.referer() }>
        <input type="hidden" name="country" riot-value={ parent.location.country }>
        <input type="hidden" name="city" riot-value={ parent.location.city }>
        <input type="hidden" name="region" riot-value={ parent.location.region }>
        <div if={ !app.device.isPhone } class="auth__close anim-group3 anim-lr anim-delay-xs anim-duration-m">
            <div onClick={ close } onUpdate="none" class="auth__close__button"></div>
        </div>
        <div if={ app.device.isPhone } class="auth__logo anim-group1 anim-fadeIn anim-duration-m"></div>
        <div class="auth__header">
            Авторизация
        </div>
        <div class="auth__body">
            <div class="mb-m input-group input-group-icon" data-errballoon={ !validate.login.valid ? validate.login.text : null }>
                <input onKeyDown={ onKeydown } onUpdate="none" class="input input-xl { input-error : !validate.login.valid }" type="text" placeholder="Логин (ваш email)" autocomplete="off" name="login" ref="login">
                <div class="input-icon">
                    <svg class="input-svg input-svg-login" viewBox="3 -3 24 24"><path class="input-svg-color" d="M15 11.9c-.9 0-1.7-.2-2.3-.7l-5.7-4.4v8.1c0 .1 0 .3.1.4.1.1.2.2.3.2 2.5.4 5 .5 7.5.5s5-.2 7.5-.5c.1 0 .3-.1.4-.2.2-.1.2-.3.2-.4v-8.1l-5.7 4.4c-.6.5-1.4.7-2.3.7zm-1.3-2.3c.3.3.8.4 1.3.4s1-.1 1.3-.4l6.1-4.7c.3-.3.5-.6.6-1v-.8c0-.1 0-.3-.1-.4-.1-.1-.2-.2-.4-.2-2.5-.3-5-.5-7.5-.5s-5 .2-7.5.5c-.1 0-.2.1-.3.2-.2.1-.2.3-.2.4v.9c.1.3.3.6.6 1l6.1 4.6z"></path></svg>
                </div>
            </div>
            <div class="mb-xs input-group input-group-icon" data-errballoon={ !validate.password.valid ? validate.password.text : null }>
                <input onKeyDown={ onKeydown } onUpdate="none" class="input input-xl { input-error : !validate.password.valid }" type="password" placeholder="Пароль" autocomplete="off" name="password" ref="password">
                <div class="input-icon">
                    <svg class="input-svg input-svg-password" xmlns="http://www.w3.org/2000/svg" viewBox="0 -6 30 30" enable-background="new 0 -6 30 30">
                        <path class="input-svg-color" d="M21.6 8.3c-.2-.2-.5-.3-.9-.3h-.7v-2.6c0-1.3-.5-2.4-1.4-3.2-.9-.8-2.1-1.2-3.6-1.2s-2.7.4-3.6 1.2c-.9.8-1.4 1.9-1.4 3.2v2.6h-.7c-.3 0-.7.1-.9.4-.3.2-.4.5-.4.8v6.1c0 .3.1.5.3.7.2.2.4.3.7.4 1.9.4 3.9.6 6 .6 2 0 4-.2 5.9-.6.3-.1.5-.2.7-.4.2-.2.3-.4.3-.7v-6.1c.1-.3 0-.6-.3-.9zm-8.6-2.4c0-1.3.7-1.9 2-1.9s2 .6 2 1.9v2.1h-4v-2.1z"></path>
                    </svg>
                </div>
            </div>
            <div class="mb-m xs-mb-xs pr-xxs pb-xs text-right">
                <span onClick={ show.remember } class="link-gray-hover-primary text-uppercase fontSize-xs fontFamily-helvetica letterSpacing-l cursor-pointer">Забыли пароль?</span>
            </div>
            <div onClick={ sendForm } class="btn btn-xxl btn-{ app.device.isPhone ? 'success' : 'default-hover-success' } { btn-loading : loading }"><span class="plr-s">Войти</span></div>
            <div if={ !app.device.isPhone } class="mt-xs pt-m pb-xs text-center">
                <a onClick={ show.signup } class="link-gray-hover-primary text-uppercase fontSize-s fontFamily-helvetica letterSpacing-l cursor-pointer">У вас нет аккаунта?</a>
            </div>
        </div>
        <auth-social></auth-social>
    </form>

<script>

    var $ = this;

    $.active = false;
    $.loading = false;
    $.validate = {
        login: {
            valid: true,
            text: 'Введите свой логин'
        },
        password: {
            valid: true,
            text: 'Введите свой пароль'
        }
    }

    $.on("mount", function(){
        $.auth = $.parent;
        $.form = $$($.refs.form);
        $.animate = new app.plugins.animate($.root);
    });

    $.on("updated", function(){
        if (!$.active && $.animate.active){
            $.root.setAttribute("data-active", false);
            $.animate.hide();
        }
    });

    $.open = function(){
        $.active = true;
        $.auth.section = "signin";
        $.root.setAttribute("data-active", true);
        $.animate.show(function(){
            $.parent.regSocial();
        });
    };

    $.show = {
        signup: function(){
            $.active = false;
            $.root.setAttribute("data-active", false);
            $.animate.hide();
            $.auth.tags["auth-signup"].open();
        },
        remember: function(){
            $.active = false;
            $.root.setAttribute("data-active", false);
            $.animate.hide();
            $.auth.tags["auth-remember"].open();
        }
    };

    $.onKeydown = function(e){
        if (e.which == 13) $.sendForm();
        return true;
    };

    $.sendForm = function(){
        if ($.loading) return;

        var params = {
            auth: "signin",
            login: _.clean($.refs.login.value, []),
            password: _.clean($.refs.password.value, [])
        },
        inValid = $.validator(params);

        $.update({
            loading: inValid
        })

        if (!inValid) return;

        setTimeout(function(){
            $$.post({
                url: '/auth',
                data: params,
                dataType : "json",
                success: function(data, status){
                    if (data && data.status){
                        if (data.status == "error"){
                            var text = "Не верный логин и/или пароль";
                            if ($.auth.notify){
                                $.auth.notify.show({
                                    color: "danger",
                                    text: text
                                })
                            }
                            else {
                                alert(text);
                            }
                        }
                        else if (data.status == "OK"){
                            app.tag("section-loader-user").show({
                                user: data.user
                            })
                            .then(function(){
                                $.parent.submit($.form);
                            });
                        }
                    }
                },
                error: function(){
                    var text = "Ошибка авторизации, повторите попытку чуть позже";
                    if ($.auth.notify){
                        $.auth.notify.show({
                            color: "danger",
                            text: "Ошибка авторизации, повторите попытку чуть позже"
                        })
                    }
                    else {
                        alert(text);
                    }
                },
                complete: function(data, status){
                    $.update({
                        loading: false
                    })
                }
            });
        }, 300);
    };

    $.validator = function(params){
        $.validate.login.valid = true;
        $.validate.password.valid = true;

        _.each(params, function(value, key){
            if (key === "login" && !value.length){
                $.validate.login.valid = false;
            }
            else if (key === "password" && !value.length){
                $.validate.password.valid = false;
            }
        });

        return _.every(_.pluck(_.values($.validate), 'valid'));
    };

    $.close = function(){
        $.active = false;
        if (app.device.isPhone){
            $.root.setAttribute("data-active", false);
        }
        else {
            $.animate.hide(function(){
                $.root.setAttribute("data-active", false);
            });
        }
        $.auth.section = null;
        $.auth.close();
    };

</script>

</auth-signin>

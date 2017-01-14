<auth-signup class="section auth" data-active={ active } data-form="signup">

    <form id="form" method="post" action="/register" class="auth__form anim-group1 anim-scale anim-duration-m">
        <input type="hidden" name="logined" value="true">
        <div class="auth__close anim-group3 anim-lr anim-delay-xs anim-duration-m">
            <div onClick={ close } class="auth__close__button"></div>
        </div>
        <div class="auth__header">
            Регистрация
        </div>
        <div class="auth__body">
            <div class="mb-m input-group input-group-icon" data-errballoon={ !validate.name.valid ? validate.name.text : null }>
                <input class="input input-xl { input-error : !validate.name.valid }" type="text" placeholder="Как вас зовут?" autocomplete="off" name="name">
                <div class="input-icon">
                    <svg class="input-svg input-svg-name" xmlns="http://www.w3.org/2000/svg" viewBox="0 -6 30 30" enable-background="new 0 -6 30 30">
                        <path class="input-svg-color" d="M22.9 16.2c.1-.1.1-.3.1-.4-.2-.8-.5-1.4-.9-1.9s-1-1-1.7-1.4c-.2-.1-.6-.3-1.3-.6-.6-.2-1.1-.4-1.4-.6-.3-.2-.6-.4-.7-.7-.1-.4.1-1 .5-1.7 1.5-2.3 1.8-4.3.8-5.9-.3-.6-.7-1.1-1.3-1.5-.6-.3-1.3-.5-2-.5s-1.4.2-2 .5c-.6.4-1.1.8-1.5 1.5-1 1.6-.7 3.6.8 5.9.5.7.7 1.3.5 1.7-.1.2-.2.4-.5.6-.2.2-.5.3-.7.4-.2.1-.5.2-.9.4-.6.3-1.1.4-1.3.6-.7.4-1.3.9-1.7 1.4-.2.4-.5 1-.7 1.8 0 .1 0 .3.1.4l.3.3c1.6.3 4.1.5 7.6.5 2.3 0 4.2-.1 5.8-.3.2 0 .4 0 .6-.1.2 0 .4-.1.5-.1l.3-.1h.30000000000000004c.2 0 .3-.1.4-.2z"></path>
                    </svg>
                </div>
            </div>
            <div class="mb-m input-group input-group-icon" data-errballoon={ !validate.login.valid ? validate.login.text : null }>
                <input class="input input-xl { input-error : !validate.login.valid }" type="text" placeholder="Введите свой email (логин)" autocomplete="off" name="login" value="">
                <div class="input-icon">
                    <svg class="input-svg input-svg-login" viewBox="3 -3 24 24"><path class="input-svg-color" d="M15 11.9c-.9 0-1.7-.2-2.3-.7l-5.7-4.4v8.1c0 .1 0 .3.1.4.1.1.2.2.3.2 2.5.4 5 .5 7.5.5s5-.2 7.5-.5c.1 0 .3-.1.4-.2.2-.1.2-.3.2-.4v-8.1l-5.7 4.4c-.6.5-1.4.7-2.3.7zm-1.3-2.3c.3.3.8.4 1.3.4s1-.1 1.3-.4l6.1-4.7c.3-.3.5-.6.6-1v-.8c0-.1 0-.3-.1-.4-.1-.1-.2-.2-.4-.2-2.5-.3-5-.5-7.5-.5s-5 .2-7.5.5c-.1 0-.2.1-.3.2-.2.1-.2.3-.2.4v.9c.1.3.3.6.6 1l6.1 4.6z"></path></svg>
                </div>
            </div>
            <div class="mb-xs input-group input-group-icon" data-errballoon={ !validate.password.valid ? validate.password.text : null }>
                <input class="input input-xl { input-error : !validate.password.valid }" type="text" placeholder="Пароль (мин. из 6 символов)" autocomplete="off" name="password">
                <div class="input-icon">
                    <svg class="input-svg input-svg-password" xmlns="http://www.w3.org/2000/svg" viewBox="0 -6 30 30" enable-background="new 0 -6 30 30">
                        <path class="input-svg-color" d="M21.6 8.3c-.2-.2-.5-.3-.9-.3h-.7v-2.6c0-1.3-.5-2.4-1.4-3.2-.9-.8-2.1-1.2-3.6-1.2s-2.7.4-3.6 1.2c-.9.8-1.4 1.9-1.4 3.2v2.6h-.7c-.3 0-.7.1-.9.4-.3.2-.4.5-.4.8v6.1c0 .3.1.5.3.7.2.2.4.3.7.4 1.9.4 3.9.6 6 .6 2 0 4-.2 5.9-.6.3-.1.5-.2.7-.4.2-.2.3-.4.3-.7v-6.1c.1-.3 0-.6-.3-.9zm-8.6-2.4c0-1.3.7-1.9 2-1.9s2 .6 2 1.9v2.1h-4v-2.1z"></path>
                    </svg>
                </div>
            </div>
            <div class="mb-m pr-xxs pb-xs text-right">
                <span onClick={ openSignIn } class="link-gray-hover-primary text-uppercase fontSize-xs fontFamily-helvetica letterSpacing-l cursor-pointer">У вас уже есть аккаунт?</span>
            </div>
            <div onClick={ sendForm } class="btn btn-xxl btn-default-hover-success mb-xs { btn-loading : loading }">Создать аккаунт</div>
        </div>
        <auth-social></auth-social>
    </form>

<script>

    var $ = this,
    $form = $$($.form);

    $.active = false;
    $.loading = false;
    $.validate = {
        name: {
            valid: true,
            text: 'Введите свое имя'
        },
        login: {
            valid: true,
            text: null,
            vars: {
                v1: 'Введите свой email',
                v2: 'Введите корректный email'
            }
        },
        password: {
            valid: true,
            text: null,
            vars: {
                v1: 'Введите свой пароль',
                v2: 'Введите пароль мин. из 6 символов'
            }
        }
    }

    $.on("mount", function(){
        $.animate = new app.plugins.animate($.root);
    });

    $.open = function(){
        $.update({
            active: true
        })
        $.animate.show(function(){
            app.tag("section-notify").show({
                text: "Для регистрации вы можете использовать свою социальную сеть",
                pos: "bottom-left",
                timeout: 5
            });
        });
    };

    $.openSignIn = function(){
        $.active = false;
        $.animate.hide();
        $.parent.tags["auth-signin"].open();
    };

    $.sendForm = function(){
        if ($.loading) return;

        var params = {
            name: _.clean($.name.value, []),
            login: _.clean($.login.value, []),
            password: _.clean($.password.value, [])
        },
        inValid = $.validator(params);

        $.update({
            loading: inValid
        })

        if (!inValid) return;

        setTimeout(function(){
            $$.post({
                url: '/register',
                data: params,
                dataType : "json",
                success: function(data, status){
                    if (data && data.status){
                        if (data.status == "error"){
                            app.tag("section-notify").show({
                                color: "info",
                                text: "Указанный email уже используется"
                            })
                        }
                        else if (data.status == "OK"){
                            app.tag("section-loader").show()
                            .then(function(){
                                $form.submit();
                            });
                        }
                    }
                },
                error: function(){
                    app.tag("section-notify").show({
                        color: "danger",
                        text: "Ошибка регистрации, повторите попытку чуть позже"
                    })
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
        $.validate.name.valid = true;
        $.validate.login.valid = true;
        $.validate.password.valid = true;

        _.each(params, function(value, key){
            if (key === "name" && !value.length){
                $.validate.name.valid = false;
            }
            else if (key === "login"){
                if (!value.length){
                    $.validate.login.valid = false;
                    $.validate.login.text = $.validate.login.vars.v1;
                }
                else if (!_.isEmail(value)){
                    $.validate.login.valid = false;
                    $.validate.login.text = $.validate.login.vars.v2;
                }
            }
            else if (key === "password"){
                if (!value.length){
                    $.validate.password.valid = false;
                    $.validate.password.text = $.validate.password.vars.v1;
                }
                else if (value.length < 6){
                    $.validate.password.valid = false;
                    $.validate.password.text = $.validate.password.vars.v2;
                }
            }
        });

        return _.every(_.pluck(_.values($.validate), 'valid'));
    };

    $.close = function(){
        $.active = false;
        $.animate.hide();
        $.parent.close();
    };

</script>

</auth-signup>

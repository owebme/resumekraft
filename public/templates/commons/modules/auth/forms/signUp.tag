<auth-signup class="section auth__form" data-active="false" data-form="signup">

    <form ref="form" method="post" action="/auth">
        <input type="hidden" name="oauth" value="false">
        <input type="hidden" name="auth" value="signup">
        <input type="hidden" name="logined" value="true">
        <input type="hidden" name="referer" riot-value={ parent.referer() }>
        <input type="hidden" name="country" riot-value={ parent.location.country }>
        <input type="hidden" name="city" riot-value={ parent.location.city }>
        <input type="hidden" name="region" riot-value={ parent.location.region }>
        <div class="pos-abs-full anim anim-bt-ease anim-duration-l anim-delay-s { success ? 'animated' : 'pointerEvents-none' }">
            <div class="flex-column-centered pos-centered w100p">
                <div class="flex-centered w85 h85 bg-green borderRadius-circle anim anim-scale anim-delay-m { success ? 'animated' : 'pointerEvents-none' }">
                    <svg class="w75 h75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                        <path d="M15.57,26.49l-3.87-3.7a2.52,2.52,0,0,1,0-3.49l0,0a2.35,2.35,0,0,1,3.39,0L17,21l8-7.35a2.43,2.43,0,0,1,3.3,0l0,0a2.12,2.12,0,0,1,0,3.12L18.16,26.49a1.91,1.91,0,0,1-2.59,0" class="fill-white"/>
                    </svg>
                </div>
                <div class="c-green fontSize-28 mt-l fontWeight-bold">Осталось активировать аккаунт</div>
                <div class="c-snowA fontSize-22 fontWeight-3 mt-s pb-xl">Проверьте <a if={ emailLink() } href="{ emailLink() }" class="link-success">свой e-mail</a><span if={ !emailLink() }>свой e-mail</span>, на него отправлено письмо для активации аккаунта.</div>
            </div>
        </div>
        <div class="anim anim-scale-ease anim-duration-m { success ? 'pointerEvents-none' : 'animated' }">
            <div class="pos-rel anim-group1 anim-bt-quick" delay-show="0.05" delay-hide="none" data-errballoon={ !validate.login.valid ? validate.login.text : null }>
                <div class="mb-m xs-mb-xs input-group input-group-icon { input-error : !validate.login.valid }">
                    <input class="input input-xl" type="text" placeholder="Ваш e-mail" autocomplete="off" name="login" ref="login">
                    <div class="input-icon">
                        <svg class="input-svg input-svg-login" viewBox="3 -3 24 24"><path class="input-svg-color" d="M15 11.9c-.9 0-1.7-.2-2.3-.7l-5.7-4.4v8.1c0 .1 0 .3.1.4.1.1.2.2.3.2 2.5.4 5 .5 7.5.5s5-.2 7.5-.5c.1 0 .3-.1.4-.2.2-.1.2-.3.2-.4v-8.1l-5.7 4.4c-.6.5-1.4.7-2.3.7zm-1.3-2.3c.3.3.8.4 1.3.4s1-.1 1.3-.4l6.1-4.7c.3-.3.5-.6.6-1v-.8c0-.1 0-.3-.1-.4-.1-.1-.2-.2-.4-.2-2.5-.3-5-.5-7.5-.5s-5 .2-7.5.5c-.1 0-.2.1-.3.2-.2.1-.2.3-.2.4v.9c.1.3.3.6.6 1l6.1 4.6z"></path></svg>
                    </div>
                </div>
            </div>
            <div class="pos-rel anim-group1 anim-bt-quick" delay-show="0.1" delay-hide="none" data-errballoon={ !validate.password.valid ? validate.password.text : null }>
                <div class="mb-xs input-group input-group-icon { input-error : !validate.password.valid }">
                    <input class="input input-xl" type="text" placeholder="Свой пароль" autocomplete="off" name="password" ref="password">
                    <div class="input-icon">
                        <svg class="input-svg input-svg-password" xmlns="http://www.w3.org/2000/svg" viewBox="0 -6 30 30" enable-background="new 0 -6 30 30">
                            <path class="input-svg-color" d="M21.6 8.3c-.2-.2-.5-.3-.9-.3h-.7v-2.6c0-1.3-.5-2.4-1.4-3.2-.9-.8-2.1-1.2-3.6-1.2s-2.7.4-3.6 1.2c-.9.8-1.4 1.9-1.4 3.2v2.6h-.7c-.3 0-.7.1-.9.4-.3.2-.4.5-.4.8v6.1c0 .3.1.5.3.7.2.2.4.3.7.4 1.9.4 3.9.6 6 .6 2 0 4-.2 5.9-.6.3-.1.5-.2.7-.4.2-.2.3-.4.3-.7v-6.1c.1-.3 0-.6-.3-.9zm-8.6-2.4c0-1.3.7-1.9 2-1.9s2 .6 2 1.9v2.1h-4v-2.1z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="mb-m text-right anim-group1 anim-bt-quick" delay-show="0.15" delay-hide="none">
                <span onClick={ openSignIn } onUpdate="none" class="auth__link">Уже есть аккаунт?</span>
            </div>
            <div class="anim-group1 anim-bt-quick" delay-show="0.2" delay-hide="none">
                <div onClick={ sendForm } onUpdate="none" class="btn btn-xl btn-rounded btn-default-hover-success { btn-loading : loading }">Создать аккаунт</div>
            </div>
        </div>
        <iframe name="sendform" class="pos-bl opacity-0 w1px h1px zIndex--1"></iframe>
    </form>

<script>

    var $ = this;

    $.active = false;
    $.plan = app.metrika.get("plan.name") || "free";
    $.loading = false;
    $.validate = {
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
                v1: 'Придумайте свой пароль',
                v2: 'Придумайте пароль мин. из 6 символов'
            }
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

    $.open = function(plan){
        $.active = true;

        $.auth.section = "signup";

        if (plan && plan != $.plan){
            $.update({
                plan: plan
            })
            app.metrika.set("plan.name", plan);
        }

        $.root.setAttribute("data-active", true);

        $.animate.show(function(){
            $.parent.notifyOAuth();
            History.pushState(null, null, "/auth/signup");
        });
    };

    $.openSignIn = function(){
        $.hide();
        $.auth.tags["auth-signin"].open();
        $.auth.title("signin");
    };

    $.changePlan = function(e){
        $.plan = e.target.previousElementSibling.value;
        app.metrika.set("plan.name", $.plan);
    };

    $.sendForm = function(){
        if ($.loading) return;

        var params = {
            auth: "signup",
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
                            $.auth.onNotify("К сожалению, указанный e-mail уже кем-то используется", "warning");
                        }
                        else if (data.status == "OK"){
                            $.update({
                                success: true
                            })
                            $.auth.root.setAttribute("data-open", false);
                            $.auth.root.setAttribute("data-theme", "dark");
                            $.parent.submit($.form);
                        }
                    }
                },
                error: function(){
                    $.auth.onNotify("Ошибка регистрации, повторите попытку чуть позже", "danger");
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
            if (key === "login"){
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

    $.emailLink = function(){
        if ($.refs.login.value && _.isEmail($.refs.login.value)){
            return _.emailLinkProvider($.refs.login.value);
        }
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

    $.hide = function(){
        $.active = false;
        $.root.setAttribute("data-active", false);
        $.animate.hide();
    };

</script>

</auth-signup>

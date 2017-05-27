<auth-remember class="section auth__form" data-active="false" data-form="remember">

    <form ref="form" action="#">
        <input type="hidden" name="logined" value="true">
        <div class="pos-abs-full anim anim-bt-ease anim-duration-l anim-delay-s { success ? 'animated' : 'pointerEvents-none' }">
            <div class="flex-column-centered pos-centered w100p">
                <div class="flex-centered w85 h85 bg-green borderRadius-circle anim anim-scale anim-delay-m { success ? 'animated' : 'pointerEvents-none' }">
                    <svg class="w75 h75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                        <path d="M15.57,26.49l-3.87-3.7a2.52,2.52,0,0,1,0-3.49l0,0a2.35,2.35,0,0,1,3.39,0L17,21l8-7.35a2.43,2.43,0,0,1,3.3,0l0,0a2.12,2.12,0,0,1,0,3.12L18.16,26.49a1.91,1.91,0,0,1-2.59,0" class="fill-white"/>
                    </svg>
                </div>
                <div class="c-green fontSize-28 mt-l fontWeight-bold">Отлично, письмо отправлено!</div>
                <div class="c-snowA fontSize-22 fontWeight-3 mt-s pb-xl">Проверьте <a if={ emailLink() } href="{ emailLink() }" class="link-success">свой e-mail</a><span if={ !emailLink() }>свой e-mail</span>, на него отправлено письмо по сбросу пароля.</div>
            </div>
        </div>
        <div class="anim anim-scale-ease anim-duration-m { success ? 'pointerEvents-none' : 'animated' }">
            <div class="mb-l input-group input-group-icon anim-group1 anim-bt-quick">
                <input onKeyDown={ onKeydown } onUpdate="none" class="input input-xl" type="text" placeholder="Введите свой e-mail" autocomplete="off" ref="login" value="">
                <div class="input-icon">
                    <svg class="input-svg" viewBox="3 -3 24 24"><path class="input-svg-color" d="M15 11.9c-.9 0-1.7-.2-2.3-.7l-5.7-4.4v8.1c0 .1 0 .3.1.4.1.1.2.2.3.2 2.5.4 5 .5 7.5.5s5-.2 7.5-.5c.1 0 .3-.1.4-.2.2-.1.2-.3.2-.4v-8.1l-5.7 4.4c-.6.5-1.4.7-2.3.7zm-1.3-2.3c.3.3.8.4 1.3.4s1-.1 1.3-.4l6.1-4.7c.3-.3.5-.6.6-1v-.8c0-.1 0-.3-.1-.4-.1-.1-.2-.2-.4-.2-2.5-.3-5-.5-7.5-.5s-5 .2-7.5.5c-.1 0-.2.1-.3.2-.2.1-.2.3-.2.4v.9c.1.3.3.6.6 1l6.1 4.6z"></path></svg>
                </div>
            </div>
            <div class="anim-group1 anim-bt-quick" delay-show="0.05" delay-hide="none">
                <div onClick={ sendForm } onUpdate="none" class="btn btn-xl btn-rounded btn-default-hover-success { btn-loading : loading }">Отправить</div>
            </div>
            <div class="auth__footer">
                <div class="rows anim-group1 anim-bt-quick" delay-show="0.2" delay-hide="none">
                    <div class="row">
                        <div class="col-xs-11 text-right">
                            <span onClick={ show.signup } onUpdate="none" class="auth__link">Создать</span>
                        </div>
                        <div class="col-xs-2">
                            <span class="auth__link__divider">|</span>
                        </div>
                        <div class="col-xs-11 text-left">
                            <span onClick={ show.signin } onUpdate="none" class="auth__link">Войти</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>

<script>

    var $ = this;

    $.active = false;

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
        $.parent.section = "remember";
        $.root.setAttribute("data-active", true);

        $.animate.show(function(){
            History.pushState(null, null, "/auth/remember");
        });
    };

    $.show = {
        signup: function(){
            $.hide();
            $.auth.tags["auth-signup"].open();
            $.auth.title("signup");
        },
        signin: function(){
            $.hide();
            $.auth.tags["auth-signin"].open();
            $.auth.title("signin");
        }
    };

    $.onKeydown = function(e){
        if (e.which == 13){
            e.preventDefault();
            $.sendForm();
        }
        return true;
    };

    $.sendForm = function(){
        if ($.loading) return;

        if (!_.isEmail($.refs.login.value)){
            $.auth.onNotify("Введите e-mail, который вы вводили в момент регистрации аккаунта", "primary", 3);
            return;
        }

        $.update({
            loading: true
        })

        setTimeout(function(){
            $$.post({
                url: '/remember',
                data: {
                    login: _.clean($.refs.login.value)
                },
                dataType : "json",
                success: function(data, status){
                    if (data && data.status){
                        if (data.status == "error"){
                            $.auth.onNotify("Указанный e-mail не зарегистрирован", "danger");
                        }
                        else if (data.status == "OK"){
                            $.update({
                                success: true
                            })
                            $.auth.root.setAttribute("data-open", false);
                        }
                    }
                },
                error: function(){
                    $.auth.onNotify("Ошибка проведения операции, повторите попытку чуть позже", "danger");
                },
                complete: function(data, status){
                    $.update({
                        loading: false
                    })
                }
            });
        }, 300);
    };

    $.openAuth = function(){
        $.parent.tags["auth-form"].open();
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
        $.parent.section = null;
        $.parent.close();
    };

    $.hide = function(){
        $.active = false;
        $.root.setAttribute("data-active", false);
        $.animate.hide();
    };

</script>

</auth-remember>

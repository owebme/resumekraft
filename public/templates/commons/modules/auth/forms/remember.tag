<auth-remember class="section auth" data-active="false" data-form="remember">

    <form ref="form" action="#" class="auth__form anim-group1 anim-scale{ '-zoom' : app.device.isPhone }" duration-show="m" duration-hide="{ app.device.isPhone ? 's' : 'm' }">
        <input type="hidden" name="logined" value="true">
        <div if={ !app.device.isPhone } class="auth__close">
            <div onClick={ close } onUpdate="none" class="auth__close__button"></div>
        </div>
        <div if={ app.device.isPhone } class="auth__logo anim-group1 anim-fadeIn anim-duration-m"></div>
        <div class="auth__header">
            Восстановить пароль
            <div class="auth__subtitle">Отправить на свой email инструкцию по сбросу пароля.</div>
        </div>
        <div class="auth__body">
            <div class="pos-abs-full anim anim-bt-ease anim-duration-l anim-delay-xs { success ? 'animated' : 'pointerEvents-none' }">
                <div class="flex-column-centered pos-centered pt-l w80p">
                    <h2 class="mt-l c-green">Отлично, письмо отправлено!</h2>
                    <h3 class="c-gray mt-m fontWeight-normal lineHeight-36">Проверьте <a if={ emailLink() } href="{ emailLink() }" class="link-blue link-underline">свой e-mail</a><span if={ !emailLink() }>свой e-mail</span>, на него отправлено письмо по сбросу пароля.</h3>
                </div>
            </div>
            <div class="anim anim-scale-ease anim-duration-m { success ? 'pointerEvents-none' : 'animated' }">
                <div class="mb-l input-group input-group-icon">
                    <input onKeyDown={ onKeydown } onUpdate="none" class="input input-xl" type="text" placeholder="Введите свой email (логин)" autocomplete="off" ref="login" value="">
                    <div class="input-icon">
                        <svg class="input-svg" viewBox="3 -3 24 24"><path class="input-svg-color" d="M15 11.9c-.9 0-1.7-.2-2.3-.7l-5.7-4.4v8.1c0 .1 0 .3.1.4.1.1.2.2.3.2 2.5.4 5 .5 7.5.5s5-.2 7.5-.5c.1 0 .3-.1.4-.2.2-.1.2-.3.2-.4v-8.1l-5.7 4.4c-.6.5-1.4.7-2.3.7zm-1.3-2.3c.3.3.8.4 1.3.4s1-.1 1.3-.4l6.1-4.7c.3-.3.5-.6.6-1v-.8c0-.1 0-.3-.1-.4-.1-.1-.2-.2-.4-.2-2.5-.3-5-.5-7.5-.5s-5 .2-7.5.5c-.1 0-.2.1-.3.2-.2.1-.2.3-.2.4v.9c.1.3.3.6.6 1l6.1 4.6z"></path></svg>
                    </div>
                </div>
                <div onClick={ sendForm } onUpdate="none" class="btn btn-xxl btn-{ app.device.isPhone ? 'success' : 'default-hover-success' } { btn-loading : loading }">Отправить</div>
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
        $.animate.show();
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
            $.auth.onNotify("Введите e-mail, который вы вводили в момент регистрации аккаунта", "info", 3);
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

</script>

</auth-remember>

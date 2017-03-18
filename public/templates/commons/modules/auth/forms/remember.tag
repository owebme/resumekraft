<auth-remember class="section auth" data-active="false" data-form="remember">

    <form ref="form" method="post" action="/auth" class="auth__form anim-group1 anim-scale{ '-zoom' : app.device.isPhone }" duration-show="m" duration-hide="{ app.device.isPhone ? 's' : 'm' }">
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
            <div class="mb-l input-group input-group-icon">
                <input onKeyDown={ onKeydown } onUpdate="none" class="input input-xl" type="text" placeholder="Введите свой email (логин)" autocomplete="off" name="login" value="">
                <div class="input-icon">
                    <svg class="input-svg" viewBox="3 -3 24 24"><path class="input-svg-color" d="M15 11.9c-.9 0-1.7-.2-2.3-.7l-5.7-4.4v8.1c0 .1 0 .3.1.4.1.1.2.2.3.2 2.5.4 5 .5 7.5.5s5-.2 7.5-.5c.1 0 .3-.1.4-.2.2-.1.2-.3.2-.4v-8.1l-5.7 4.4c-.6.5-1.4.7-2.3.7zm-1.3-2.3c.3.3.8.4 1.3.4s1-.1 1.3-.4l6.1-4.7c.3-.3.5-.6.6-1v-.8c0-.1 0-.3-.1-.4-.1-.1-.2-.2-.4-.2-2.5-.3-5-.5-7.5-.5s-5 .2-7.5.5c-.1 0-.2.1-.3.2-.2.1-.2.3-.2.4v.9c.1.3.3.6.6 1l6.1 4.6z"></path></svg>
                </div>
            </div>
            <div id="submit" class="btn btn-xxl btn-{ app.device.isPhone ? 'success' : 'default-hover-success' }">Отправить</div>
        </div>
    </form>

<script>

    var $ = this;

    $.active = false;

    $.on("mount", function(){
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
        //if (e.which == 13) $.sendForm();
        return true;
    };

    $.openAuth = function(){
        $.parent.tags["auth-form"].open();
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

<auth-social class="section auth__social">

    <div class="pos-rel anim-group2 { app.device.isPhone ? 'anim-bt anim-duration-xs' : 'anim-rl anim-duration-m' }" data-balloon="Войти через Facebook" data-balloon-pos="left">
        <div onClick={ parent.auth.oauth } onUpdate="none" class="auth__social__button" data-social="fb">
            <icon-fb color="white"></icon-fb>
        </div>
    </div>
    <div class="pos-rel anim-group2 { app.device.isPhone ? 'anim-bt anim-duration-xs' : 'anim-rl anim-duration-m' } anim-delay-xs" data-balloon="Войти через ВКонтакте" data-balloon-pos="left">
        <div onClick={ parent.auth.oauth } onUpdate="none" class="auth__social__button" data-social="vk">
            <icon-vk color="white"></icon-vk>
        </div>
    </div>
    <div class="pos-rel anim-group2 { app.device.isPhone ? 'anim-bt anim-duration-xs' : 'anim-rl anim-duration-m' } anim-delay-s" data-balloon="Войти через Twitter" data-balloon-pos="left">
        <div onClick={ parent.auth.oauth } onUpdate="none" class="auth__social__button" data-social="tw">
            <icon-tw color="white"></icon-tw>
        </div>
    </div>
    <div class="pos-rel anim-group2 { app.device.isPhone ? 'anim-bt anim-duration-xs' : 'anim-rl anim-duration-m' } anim-delay-m" data-balloon="Войти через Одноклассники" data-balloon-pos="left">
        <div onClick={ parent.auth.oauth } onUpdate="none" class="auth__social__button" data-social="dk">
            <icon-dk color="white"></icon-dk>
        </div>
    </div>
    <div class="pos-rel anim-group2 { app.device.isPhone ? 'anim-bt anim-duration-xs' : 'anim-rl anim-duration-m' } anim-delay-l" data-balloon="Войти через Google" data-balloon-pos="left">
        <div onClick={ parent.auth.oauth } onUpdate="none" class="auth__social__button" data-social="gl">
            <icon-glc></icon-glc>
        </div>
    </div>

</auth-social>

<auth-social class="section auth__social">

    <div class="auth__social__title">
        <div class="auth__social__title__text anim anim-bt-quick" data-delay="0.35">
            <div class="auth__social__title__text__inner">Быстрый вход и регистрация</div>
        </div>
    </div>
    <div class="auth__social__bracket">
        <div class="auth__social__bracket__item anim anim-rl-quick" data-delay="0.25"></div>
    </div>
    <div class="pos-rel auth__social__item anim anim-lr-quick" data-balloon="Войти через Facebook" data-balloon-pos="left" data-balloon-color="primary">
        <div onClick={ parent.oauth } onUpdate="none" class="auth__social__button" data-social="fb">
            <icon-fb color="snowA"></icon-fb>
        </div>
    </div>
    <div class="pos-rel auth__social__item anim anim-lr-quick" data-delay="0.05" data-balloon="Войти через ВКонтакте" data-balloon-pos="left" data-balloon-color="primary">
        <div onClick={ parent.oauth } onUpdate="none" class="auth__social__button" data-social="vk">
            <icon-vk color="snowA"></icon-vk>
        </div>
    </div>
    <div class="pos-rel auth__social__item anim anim-lr-quick" data-delay="0.1" data-balloon="Войти через Twitter" data-balloon-pos="left" data-balloon-color="primary">
        <div onClick={ parent.oauth } onUpdate="none" class="auth__social__button" data-social="tw">
            <icon-tw color="snowA"></icon-tw>
        </div>
    </div>
    <div class="pos-rel auth__social__item anim anim-lr-quick" data-delay="0.15" data-balloon="Войти через Одноклассники" data-balloon-pos="left" data-balloon-color="primary">
        <div onClick={ parent.oauth } onUpdate="none" class="auth__social__button" data-social="dk">
            <icon-dk color="snowA"></icon-dk>
        </div>
    </div>
    <div class="pos-rel auth__social__item anim anim-lr-quick" data-delay="0.2" data-balloon="Войти через Google" data-balloon-pos="left" data-balloon-color="primary">
        <div onClick={ parent.oauth } onUpdate="none" class="auth__social__button" data-social="gl">
            <icon-glc></icon-glc>
        </div>
    </div>

</auth-social>

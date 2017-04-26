<section-nav class="nav">

    <div class="nav__container container">
        <div class="row">
            <div class="nav__cell col-sm-4 col-md-3">
                <a href="/" class="nav__logotype"></a>
            </div>
            <div class="nav__cell col-sm-14 col-md-16 col-lg-17">
                <div class="nav__menu">
                    <a href="/" class="nav__menu__item" data-active="{ opts.section == 'home' }">Главная</a>
                    <span class="nav__menu__item hidden-sm hidden-md" data-active="{ opts.section == 'examples-resume' }" data-hidden="true"><span class="nav__menu__item__inner">Образцы резюме</span><span class="nav__menu__item__badge">Скоро</span></span>
                    <a href="/premium/" class="nav__menu__item" data-active="{ opts.section == 'premium' }">Premium</a>
                    <a href="/jp-test/" class="nav__menu__item hidden-sm" data-active="{ opts.section == 'jp-test' }">JP-тест 2.0</a>
                    <a href="/jobs/search" class="nav__menu__item hidden-sm" data-active="{ opts.section == 'jobs' }">Найти работу</a>
                    <a href="/blog/" class="nav__menu__item" data-active="{ opts.section == 'blog' }">Блог</a>
                    <span class="nav__menu__item nav__menu__item--opener"></span>
                </div>
            </div>
            <div class="nav__buttons nav__cell col-sm-6 col-md-5 col-lg-4">
                <div class="nav__border"></div>
                <div if={ opts.user } class="fontSize-0 nowrap pos-rel pl-m ml-xxs float-left sm-ml0 sm-pl-s xs-p0 xs-m0">
                    <a href="/private/" class="nav__button btn btn-m btn-upper btn-strong btn-white-hover">Войти</a>
                    <a href="/logout/" class="nav__button nav__button__exit btn btn-m btn-upper btn-strong btn-white-hover ml-xs"></a>
                </div>
                <div if={ !opts.user } class="fontSize-0 nowrap pos-rel pl-m ml-xxs float-left sm-ml0 sm-pl-s xs-p0 xs-m0">
                    <button id="openAuth" class="nav__button btn btn-m btn-upper btn-strong btn-white-hover">Войти</button>
                    <button id="openReg" class="nav__button nav__button__reg btn btn-m btn-upper btn-strong btn-white-hover ml-xs"></button>
                </div>
            </div>
        </div>
        <div class="nav__close visible-xs"></div>
    </div>

    <section-nav-menu class="visible-sm" section={ opts.section } visible={ parent.opts.device.isMobile }></section-nav-menu>

</section-nav>

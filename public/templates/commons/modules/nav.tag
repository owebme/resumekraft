<section-nav class="nav">

    <div class="nav__container container">
        <div class="row">
            <div class="nav__cell col-sm-4 col-md-4 col-lg-3 hidden-xs">
                <a href="/" class="nav__logotype"></a>
            </div>
            <div class="nav__cell col-xs-24 col-sm-12 col-md-14 { opts.user ? 'col-lg-16' : 'col-lg-17' }">
                <div class="nav__menu">
                    <a href="/" class="nav__menu__item" data-active="{ opts.section == 'home' }">Главная</a>
                    <a href="/partnership/" class="nav__menu__item hidden-sm hidden-md" data-active="{ opts.section == 'partnership' }">Компаниям</a>
                    <a href="/premium/" class="nav__menu__item hidden-sm hidden-md" data-active="{ opts.section == 'premium' }">Premium</a>
                    <a href="/jq-test/" class="nav__menu__item hidden-sm hidden-md" data-active="{ opts.section == 'jq-test' }">JQ-тест 2.0</a>
                    <a href="/jobs/search" class="nav__menu__item hidden-sm hidden-md" data-active="{ opts.section == 'jobs' }">Найти работу</a>
                    <a href="/blog/" class="nav__menu__item" data-active="{ opts.section == 'blog' }">Блог</a>
                </div>
            </div>
            <div class="nav__buttons nav__cell col-xs-16 col-sm-8 col-md-6 { opts.user ? 'col-lg-5' : 'col-lg-4' }">
                <div class="nav__border"></div>
                <div class="fontSize-0 nowrap pos-rel pl-m ml-xxs float-left xs-p0 xs-m0">
                    <button if={ !opts.user } id="openAuth" class="nav__button btn btn-m btn-upper btn-strong btn-white-hover">Войти</button>
                    <button if={ !opts.user } id="openReg" class="nav__button nav__button__reg btn btn-m btn-upper btn-strong btn-white-hover ml-xs"></button>
                    <a href="/private/" if={ opts.user } class="nav__button btn btn-m btn-upper btn-strong btn-white-hover">Мой кабинет</a>
                </div>
            </div>
        </div>
        <div class="nav__close visible-xs"></div>
    </div>

</section-nav>

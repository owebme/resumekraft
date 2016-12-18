<section-nav class="nav">

    <div class="nav__container container">
        <div class="row">
            <div class="nav__cell col-sm-4 col-md-4 col-lg-4 hidden-xs">
                <div class="nav__logotype"></div>
            </div>
            <div class="nav__cell col-xs-24 col-sm-12 col-md-14 { opts.user ? 'col-lg-15' : 'col-lg-16' }">
                <div class="nav__menu">
                    <a href="/" class="nav__menu__item" data-active="{ opts.section == 'home' }">Главная</a>
                    <a href="/premium/" class="nav__menu__item hidden-sm hidden-md" data-active="{ opts.section == 'premium' }">Premium аккаунт</a>
                    <a href="/jq-test/" class="nav__menu__item hidden-sm hidden-md" data-active="{ opts.section == 'jq-test' }">JQ-тест</a>
                    <a href="/resume-writing/" class="nav__menu__item" data-active="{ opts.section == 'resume-writing' }">Помощь</a>
                    <a href="/blog/" class="nav__menu__item" data-active="{ opts.section == 'blog' }">Блог</a>
                </div>
            </div>
            <div class="nav__buttons nav__cell col-xs-16 col-sm-8 col-md-6 { opts.user ? 'col-lg-5' : 'col-lg-4' }">
                <div class="nav__border"></div>
                <div class="pos-rel pl-m ml-xxs float-left xs-p0 xs-m0">
                    <button if={ !opts.user } id="openAuth" class="nav__button btn btn-m btn-upper btn-strong btn-white-hover">Войти</button>
                    <a href="/private/" if={ opts.user } class="nav__button btn btn-m btn-upper btn-strong btn-white-hover">Мой кабинет</a>
                    <div class="nav__langs">
                        <div class="nav__langs__item" data-active="true">RU</div>
                        <div class="nav__langs__item">EN</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav__close visible-xs"></div>
    </div>

</section-nav>

<section-nav-menu if={ opts.visible } class="menu visible-sm" data-open="false">

    <div class="menu__close"></div>
    <div class="menu__items">
        <div class="menu__item">
            <a class="menu__item__link" href="/" data-active="{ opts.section == 'home' }">Главная</a>
        </div>
        <div class="menu__item">
            <a class="menu__item__link" href="/?signup&plan=premium">Регистрация</a>
        </div>
        <div class="menu__item">
            <a class="menu__item__link" href="/premium/" data-active="{ opts.section == 'premium' }">Premium функционал</a>
        </div>
        <div class="menu__item">
            <a class="menu__item__link" href="/jp-test/" data-active="{ opts.section == 'jp-test' }">JP-тест 2.0</a>
        </div>
        <div class="menu__item">
            <a class="menu__item__link" href="/jobs/search/" data-active="{ opts.section == 'jobs' }">Найти работу</a>
        </div>
        <div class="menu__item">
            <a class="menu__item__link" href="/blog" data-active="{ opts.section == 'blog' }">Блог</a>
        </div>
    </div>

</section-nav-menu>

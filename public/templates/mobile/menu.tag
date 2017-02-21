<section-menu-mobile class="section">

    <div class="menu__opener" data-navbar={ opts.navbar } data-color={ opts.color } data-animate={ opts.animate }>
        <div class="menu__opener__line"></div>
        <div class="menu__opener__line"></div>
        <div class="menu__opener__line"></div>
    </div>

    <div class="menu" data-open="false">
        <div class="menu__close"></div>
        <div class="menu__items">
            <div class="menu__item">
                <a class="menu__item__link" href="/" data-active="{ opts.section == 'home' }">Главная</a>
            </div>
            <div class="menu__item">
                <div class="menu__item__link" data-event="signin">Войти</div>
            </div>
            <div class="menu__item">
                <div class="menu__item__link" data-event="signup">Создать аккаунт</div>
            </div>
            <div class="menu__item">
                <a class="menu__item__link" href="/jq-test/" data-active="{ opts.section == 'jq-test' }">JQ-тест 2.0</a>
            </div>
            <div class="menu__item">
                <a class="menu__item__link" href="/partnership/" data-active="{ opts.section == 'partnership' }">Компаниям</a>
            </div>
            <div class="menu__item">
                <a class="menu__item__link" href="/blog/" data-active="{ opts.section == 'blog' }">Блог</a>
            </div>
        </div>
    </div>

</section-menu-mobile>

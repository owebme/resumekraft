<section-nav class="main__nav" data-color={ opts.color }>

    <div class="container">
        <div class="row">
            <div class="col-md-4 main__nav__logo { 'anim-group1 anim-tb' : opts.section == 'home' }">
                <a href="/" class="logotype logotype-m">
                    <div class="logotype__label"></div>
                    <div class="logotype__title">resume<span>Kraft</span></div>
                </a>
                <div class="main__nav__menu__opener">
                    <div class="main__nav__menu__opener__lines"></div>
                    <div class="main__nav__menu__opener__label">Меню</div>
                </div>                
            </div>
            <div class="col-md-16 main__nav__menu { 'anim-group1 anim-tb anim-delay-xs' : opts.section == 'home' }">
                <a href="/" class="main__nav__menu__item btn btn-xl btn-link-primary">Начать сейчас</a>
                <a href="/premium" class="main__nav__menu__item btn btn-xl btn-link-primary" data-active={ opts.section == 'premium' }>Премиум акканут</a>
                <a href="/blog" class="main__nav__menu__item btn btn-xl btn-link-primary" data-active={ opts.section == 'blog' }>Новости & Блог</a>
            </div>
            <nav-buttons user={ opts.user } section={ opts.section }></nav-buttons>
        </div>
    </div>

</section-nav>

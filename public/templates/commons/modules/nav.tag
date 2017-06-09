<global-nav class="main__nav" data-color={ opts.color }>

    <div class="main__nav__wrapper">
        <div class="container">
            <div class="row">
                <nav-logo section={ opts.section }></nav-logo>
                <div class="col-md-16 main__nav__menu { 'anim-group1 anim-tb anim-delay-xs' : opts.section == 'home' }">
                    <a href="/" class="main__nav__menu__item btn btn-xl btn-link-primary">Начать сейчас</a>
                    <a href="/premium" class="main__nav__menu__item btn btn-xl btn-link-primary" data-active={ opts.section == 'premium' }>Премиум акканут</a>
                    <a href="/blog" class="main__nav__menu__item btn btn-xl btn-link-primary" data-active={ opts.section == 'blog' }>Новости & Блог</a>
                </div>
                <nav-buttons user={ opts.user } section={ opts.section }></nav-buttons>
            </div>
        </div>
    </div>
    <global-dropmenu>
        <div class="wrapper">
            <div class="container">
                <global-menu></global-menu>
            </div>
        </div>
    </global-dropmenu>

</global-nav>

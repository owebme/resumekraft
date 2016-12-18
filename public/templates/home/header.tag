<home-header class="screen screen--active home__header zIndex-0">

    <video id="video" class="home__header__video" autoplay loop muted>
        <source src="/public/video/background.mp4" type="video/mp4"/>
    </video>
    <div class="container">
        <div class="row">
            <div class="home__header__text col-sm-24 col-md-24 col-lg-20 centered rellax" data-rellax-speed="-2.25">
                <h1 if={ !parent.opts.device.phone() } class="home__header__title anim-group1 anim-scale-soft">Создайте <span class="c-lime">крутое резюме</span> и <span class="c-lime">получите</span> престижную <span class="c-lime">работу.</span></h1>
                <h1 if={ parent.opts.device.phone() } class="home__header__title">Создать <span class="c-lime">классное резюме</span></h1>
                <div if={ !parent.opts.device.phone() } class="home__header__subtitle plr-xl mlr-l sm-mlr0 anim-group1 anim-bt" data-delay="s">Понастоящему уникальная возможность создать классное резюме самому за несколько минут.</div>
                <div class="inline">
                    <div class="anim-group1 anim-bt" data-delay="m">
                        <button class="btn btn-larger btn-white-hover mlr-s mb-m"><strong>Создать резюме</strong></button>
                    </div>
                    <div class="anim-group1 anim-bt" data-delay="l">
                        <button class="btn btn-larger btn-white-hover-black c-blue mlr-s mb-m" data-delay="l"><strong>Premium</strong> аккаунт</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="nav__opener visible-xs"></div>

</home-header>

<home-jp-test class="screen home__jptest overflow-hidden zIndex-1">

    <div class="pos-rel rows">
        <div class="pos-abs-full zIndex-2">
            <div class="pos-abs-full bg-overlay opacity-80"></div>
            <div class="pos-abs-full bg-radial-black"></div>
            <div class="pos-centered">
                <div class="anim anim-scale">
                    <div class="home__jptest__container">
                        <small class="c-white mb-l pb-m sm-pb-l">совершенно бесплатно</small>
                        <h1 class="c-white nowrap textShadow-light mb-m pb-xs">Пройти новейший <span class="c-lime">JP<sup class="pl-xxs">2</sup></span> тест</h1>
                        <p class="c-white mb-m sm-mb-l">Получить ответы на профессиональные вопросы + рекомендации.</p>
                        <div class="inline">
                            <a href="/jp-test/" class="btn btn-danger btn-upper btn-xl mlr-s">перейти к тесту</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div if={ !parent.opts.device.isMobile } class="row">
            <div each={ item, i in (parent.opts.utils.range(1, 9)) } class="home__jptest__grid__item progressive-image col-md-6" style="background-image:url(/assets/images/promo/peoples/team{ i + 1 }.jpg)"></div>
        </div>
        <div if={ parent.opts.device.isMobile } class="visible-md row">
            <div each={ item, i in ["1", "2", "3", "5", "6", "7"] } class="home__jptest__grid__item progressive-image col-md-8" style="background-image:url(/assets/images/promo/peoples/team{ item }.jpg)"></div>
        </div>
        <div if={ parent.opts.device.isMobile } class="visible-sm row">
            <div each={ item, i in ["1", "2", "6", "3"] } class="home__jptest__grid__item progressive-image col-sm-12" style="background-image:url(/assets/images/promo/peoples/team{ item }.jpg)"></div>
        </div>
    </div>

</home-jp-test>

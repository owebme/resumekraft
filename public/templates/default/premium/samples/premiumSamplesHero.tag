<premium-samples-hero>

    <div class="hero__bg"></div>
    <div class="hero__overlay"></div>
    <div class="hero__caption">
        <h1 class="mb-m">Премиальные резюме</h1>
        <p class="text c-silver">Не оставят вас не замеченными</p>
    </div>
    <div class="hero__phone">
        <div class="hero__text">
            <div class="hero__text__slider">
                <div each={ item in opts.utils.range(40) } class="hero__text__slider__item">
                    { parent.parent.titles[item] }
                </div>
            </div>
        </div>
        <div class="hero__phone__wrapper">
            <div class="hero__phone__screen">
                <phone-screen-nav data-color="#0084ff"></phone-screen-nav>
                <div class="screens screens-tablet screens-desktop">
                    <div each={ item, i in opts.utils.range(40) } no-reorder class="screen { screen--active : i == 0 } bg-cover" style="background-image:url(/public/images/samples/{ item + 1 }.jpg)"></div>
                </div>
            </div>
        </div>
    </div>

</premium-samples-hero>

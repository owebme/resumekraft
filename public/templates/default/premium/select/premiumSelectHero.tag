<premium-select-hero class="hero">

    <div class="hero__bg"></div>
    <div class="hero__overlay"></div>
    <div class="hero__caption">
        <h1 class="mb-m">Премиальные резюме</h1>
        <p class="text c-silver">Не оставят вас не замеченными</p>
    </div>
    <div class="hero__phone">
        <div class="hero__text">
            <div class="hero__text__slider">
                <div each={ item in opts.utils.range(42) } class="hero__text__slider__item">
                    { parent.opts.utils.shuffle(parent.titles)[0] }
                </div>
            </div>
        </div>        
        <div class="hero__phone__wrapper">
            <div class="hero__phone__screen">
                <div class="hero__phone__screen__nav">
                    <div class="hero__phone__screen__nav__item hero__phone__screen__nav__info">
                        <svg class="hero__phone__screen__nav__info__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path class="hero__phone__screen__nav__info__icon__color" d="M 25 0 C 11.204726 0 0 11.204726 0 25 C 0 38.795274 11.204726 50 25 50 C 38.795274 50 50 38.795274 50 25 C 50 11.204726 38.795274 0 25 0 z M 25 2 C 37.714394 2 48 12.285606 48 25 C 48 37.714394 37.714394 48 25 48 C 12.285606 48 2 37.714394 2 25 C 2 12.285606 12.285606 2 25 2 z M 23.78125 12.90625 C 23.56625 12.90625 23.4375 13.035 23.4375 13.25 L 23.4375 15.875 C 23.4375 16.09 23.56525 16.25 23.78125 16.25 L 26.21875 16.25 C 26.43275 16.25 26.5625 16.09 26.5625 15.875 L 26.5625 13.25 C 26.5625 13.035 26.43375 12.90625 26.21875 12.90625 L 23.78125 12.90625 z M 23.71875 20.125 C 23.587969 20.175578 23.5 20.3075 23.5 20.46875 L 23.5 36.9375 C 23.5 37.1525 23.62875 37.28125 23.84375 37.28125 L 26.15625 37.28125 C 26.37125 37.28125 26.5 37.1535 26.5 36.9375 L 26.5 20.46875 C 26.5 20.25375 26.37225 20.125 26.15625 20.125 L 23.84375 20.125 C 23.79025 20.125 23.762344 20.108141 23.71875 20.125 z"></path>
                        </svg>
                    </div>
                    <div class="hero__phone__screen__nav__item hero__phone__screen__nav__sendmail">
                        <svg class="hero__phone__screen__nav__sendmail__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 100;" xml:space="preserve"><path class="hero__phone__screen__nav__sendmail__icon__color" d="M94,31.8c-0.9-1.2-2.3-1.8-3.9-1.8H37.9H5v3.1h27.2c-0.5,0.7-0.9,1.5-1.2,2.4l-1.1,3.9H12v3.1h17.1L26.8,51h-8v3h7.1  l-2.7,9.7c-0.4,1.6-0.2,3.3,0.7,4.4c0.9,1.2,2.3,1.8,3.9,1.8h52.8c3.1,0,6.1-2.4,6.9-5.5l7.2-28.3C95.2,34.6,94.9,33,94,31.8z   M84.6,63.7c-0.4,1.7-2.2,3.2-3.9,3.2H27.8c-0.6,0-1.1-0.2-1.4-0.6s-0.4-1.1-0.2-1.8l5.9-21.4l20.4,9.6c1.8,0.8,3.9,1.3,6,1.3  s4.4-0.4,6.6-1.3l24.8-9.3L84.6,63.7z M91.8,35.5l-1.1,4.3L63.9,49.9c-3.6,1.4-7.4,1.4-10.2,0.1l-20.8-9.9l1.1-3.8  c0.5-1.7,2.3-3.2,4-3.2h52.2c0.6,0,1.1,0.2,1.4,0.6C91.9,34.1,92,34.8,91.8,35.5z"/></svg>
                    </div>
                    <div class="hero__phone__screen__nav__item hero__phone__screen__nav__salary"><span>&#8381;</span></div>
                </div>
                <div class="screens screens-tablet screens-desktop">
                    <div each={ item, i in opts.utils.shuffle(opts.utils.range(42)) } no-reorder class="screen { screen--active : i == 0 }">
                        <div class="screen__content pos-abs-full bg-cover" style="background-image:url(/preview/images/prof/{ item + 1 }.jpg)"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<script>

    this.titles = ["Специалист по взысканию просроченной задолжности", "Менеджер по продажам", "Бухгалтер", "Автомеханик специалист", "Менеджер туркомпании", "Юрисконсульт"];

</script>

</premium-select-hero>

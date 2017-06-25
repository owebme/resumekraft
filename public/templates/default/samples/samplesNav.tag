<section-nav-samples class="main__nav">

    <div class="main__nav__wrapper">
        <div class="container">
            <div class="row">
                <nav-logo section={ opts.section }></nav-logo>
                <div class="col-md-16 main__nav__search">
                    <div class="main__nav__search__container">
                        <input type="text" placeholder="Название профессии..." class="main__nav__search__input">
                        <svg class="main__nav__search__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path class="main__nav__search__icon__color" d="M 21 3 C 11.623004 3 4 10.623004 4 20 C 4 29.376996 11.623004 37 21 37 C 24.709505 37 28.140329 35.803849 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460556 28.087561 38 24.221313 38 20 C 38 10.623004 30.376996 3 21 3 z M 21 5 C 29.296116 5 36 11.703884 36 20 C 36 28.296116 29.296116 35 21 35 C 12.703884 35 6 28.296116 6 20 C 6 11.703884 12.703884 5 21 5 z"></path>
                        </svg>
                    </div>
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
    <div class="samples__nav">
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <samples-clusters cluster={ opts.cluster } clusters={ opts.clusters }></samples-clusters>
                </div>
                <div class="col-md-15">
                    <samples-alphabet alpha={ opts.alpha }></samples-alphabet>
                </div>
                <div class="col-md-4">
                    <div class="samples__nav__share">
                        <div class="samples__nav__share__item" data-share="fb" data-balloon="Поделиться в Facebook" data-balloon-pos="down">
                            <div class="samples__nav__share__item__button" data-ripple>
                                <icon-fb color="smokeDark"></icon-fb>
                            </div>
                        </div>
                        <div class="samples__nav__share__item" data-share="vk" data-balloon="Поделиться в ВКонтакте" data-balloon-pos="down">
                            <div class="samples__nav__share__item__button" data-ripple>
                                <icon-vk color="smokeDark"></icon-vk>
                            </div>
                        </div>
                        <div class="samples__nav__share__item" data-share="tw" data-balloon="Поделиться в Twitter" data-balloon-pos="down">
                            <div class="samples__nav__share__item__button" data-ripple>
                                <icon-tw color="smokeDark"></icon-tw>
                            </div>
                        </div>
                        <div class="samples__nav__share__item" data-share="gl" data-balloon="Поделиться в Google+" data-balloon-pos="down">
                            <div class="samples__nav__share__item__button" data-ripple>
                                <icon-glc></icon-glc>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section-nav-samples>

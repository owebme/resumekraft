<section-nav-search class="main__nav" data-color={ opts.color }>

    <div class="container">
        <div class="row">
            <div class="col-md-4 main__nav__logo">
                <a href="/" class="logotype logotype-m">
                    <div class="logotype__label"></div>
                    <div class="logotype__title">resume<span>Kraft</span></div>
                </a>
                <div class="main__nav__menu__opener">
                    <div class="main__nav__menu__opener__lines"></div>
                    <div class="main__nav__menu__opener__label">Меню</div>
                </div>
            </div>
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
    <div class="samples__nav">
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <div class="samples__nav__select" data-ripple>
                        <div class="samples__nav__select__label">Выбрать направление</div>
                        <span class="samples__nav__select__chevron"></span>
                    </div>
                </div>
                <div class="col-md-16">
                    <div class="samples__nav__items">
                        <div each={ item in items } class="samples__nav__item">{ item }</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<script>

    this.items = ['а', 'б', 'в', 'г', 'д', 'е', 'з', 'и', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х'];

</script>

</section-nav-search>

<section-nav-samples class="main__nav">

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
    <div class="samples__nav">
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <div class="samples__nav__select" data-ripple>
                        <div class="samples__nav__select__label">Выбрать направление</div>
                        <span class="samples__nav__select__chevron"></span>
                    </div>
                    <div class="samples__nav__options section-scroll">
                        <div class="samples__nav__options__scroll">
                            <div class="samples__nav__options__container">
                                <a href="#" each={ item, i in options } class="samples__nav__options__item" data-ripple data-active={ i == 5 }>{ item }<span class="samples__nav__options__item__count">{ parent.parent.opts.utils.random(1, 20) }</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-15">
                    <div class="samples__nav__items">
                        <a href="#" each={ item, i in alphabet } class="samples__nav__item" data-ripple data-active={ i == 7 }>{ item }</a>
                    </div>
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

<script>

    this.alphabet = ['а', 'б', 'в', 'г', 'д', 'е', 'з', 'и', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х'];

    this.options = ['Авиация',
    'Агропромышленный комплекс',
    'Архитектура и строительство',
    'Безопасность и Силовые структуры',
    'Бухгалтерия и банковское дело',
    'Ветеринария и животноводство',
    'Воспитание',
    'Государственное управление',
    'Делопроизводство',
    'Дизайн',
    'Издательcтво и типография',
    'Инженерное дело',
    'Информационные технологии',
    'Искусство',
    'Коммуникации (СМИ)',
    'Кадры',
    'Красота',
    'Кулинария',
    'Легкая промышленность',
    'Лингвистика',
    'Маркетинг и PR',
    'Медицина и психология',
    'Менеджмент',
    'Налоги',
    'Наука и образование',
    'Недвижимость',
    'Склад логистика таможня',
    'Социальная сфера',
    'Спорт',
    'Страхование',
    'Торговля',
    'Транспорт',
    'Туризм и гостиничная деятельность',
    'Экономика и Финансы',
    'Экология',
    'Энергетика',
    'Юриспруденция'];

</script>

</section-nav-samples>

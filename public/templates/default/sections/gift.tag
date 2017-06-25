<section-gift>

    <graffiti-2></graffiti-2>

    <div class="pos-abs-full zIndex-0">
        <div class="container">
            <div class="row">
                <div class="col-md-24 header__container">
                    <div class="phone__wrapper">
                        <div class="section__phone__figure">
                            <div class="phone__figure__screen">
                                <phone-screen-nav data-color="#0084ff"></phone-screen-nav>
                                <div class="screens screens-tablet screens-desktop" data-slide="13">
                                    <div each={ item, i in opts.utils.range(1, 42) } no-reorder class="screen { screen--active : i == 0 }">
                                        <div class="screen__content pos-abs-full bg-cover" style="background-image:url(/public/images/samples/{ item }.jpg)">
                                            <div class="phone__figure__screen__title">
                                                <div class="phone__figure__screen__title__text">
                                                    { parent.titles[item - 1] }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <canvas class="fireworks"></canvas>

    <div class="container header">
        <div class="row">
            <div class="col-md-24 header__container">
                <a href="/" class="logo__wrapper">
                    <div class="logotype logotype-xl">
                        <div class="logotype__label"></div>
                    </div>
                </a>
                <div class="title">Поздравляем<br> вы обладатель подарка</div>
                <div class="text">
                    <div class="text__inner">3 месяца премиум аккаунта</div>
                </div>
                <div class="code">
                    <a class="code__button">
                        <div class="code__button__border">
                            <svg viewBox="0 0 180 70">
                                <path d="M10,10 C10,10 60,9.98999977 90,9.98999977 C130,9.98999977 170,10 170,10 C170,10 170.009995,20 170.009995,30 C170.009995,40 170,60 170,60 C170,60 130,60.0099983 90,60.0099983 C50,60.0099983 10,60 10,60 C10,60 9.98999977,40 9.98999977,30 C9.98999977,20 10,10 10,10 Z"></path>
                            </svg>
                        </div>
                        <span>ninarobumu</span>
                    </a>
                    <div class="code__label" data-back="Активировать" data-front="Ваш промокод">&nbsp;</div>
                </div>
            </div>
        </div>
    </div>

    <div class="container footer">
        <div class="row">
            <div class="menu col-md-24">
                <a href="/" class="menu__item">О проекте</a>
                <a href="/premium/" class="menu__item">Премиум аккаунт</a>
                <a href="/premium/samples" class="menu__item">Примеры резюме</a>
            </div>
        </div>
    </div>

<script>

    this.titles = ["Автомеханик, техник, автослесарь","Архитектор-проектировщик","Инженер-строитель, эксперт-универсал","Охранник на премиум-объекты","Заместитель главного бухгалтера","Ведущий специалист юридической службы банка","Менеджер по страхованию и кредитованию","Педагог-воспитатель со знанием английского","Помощник руководителя, секретарь-референт","Дизайнер интерьера, 3D-визуализация","SEO копирайтер, SMM-менеджер, контент-менеджер","Инженер-технолог, начальник производства","Ведущий инженер-конструктор РЭА","Web-Designer, Art-director, Illustrator","Frontend/back-end разработчик","Системный администратор Linux/Windows","Менеджер по подбору персонала","Парикмахер-универсал","Повар, заместитель шеф-повара","Переводчик-редактор, английский язык","Digital-маркетолог, аналитик","Врач стоматолог-терапевт, микроскопист","Офис менеджер со знанием английского языка","Старший менеджер по туризму","Менеджер логистики и ВЭД","Региональный менеджер по продажам","Продавец продовольственных товаров","Кассир-операционист","Администратор на ресепшен","Менеджер по продаже недвижимости","Водитель-курьер на личном автомобиле","Кладовщик на склад торгового оборудования","Персональный тренер по фитнесу","Менеджер по страхованию, страховой агент","Управляющий в гостиницу, отель","Горничная, уборщик в гостиницу","Экономист по финансовой работе","Финансовый аналитик, аудитор отчетности","Специалист, налоговый инспектор","Слесарь-электрик, универсальный мастер","Юрисконсульт, специалист по согласованию","Помощник нотариуса, юрист"];

</script>

</section-gift>

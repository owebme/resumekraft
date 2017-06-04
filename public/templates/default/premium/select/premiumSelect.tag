<premium-select>

    <section-nav section="premiumSelect" user={ opts.user }></section-nav>

    <div id="content">

        <premium-select-hero utils={ opts.utils }></premium-select-hero>

        <premium-select-slider utils={ opts.utils }></premium-select-slider>

        <div class="section1">
            <div class="container text-center">
                <div class="row">
                    <div class="col-md-16 centered">
                        <icon-device-phones color="primary"></icon-device-phones>
                        <h1 class="mb-m">Резюме доступно в вашем смартфоне</h1>
                        <p class="text c-silver">Это еще новинка которая приятно удивит вашего работодателя.</p>
                    </div>
                </div>
                <div class="phones row">
                    <div class="col-sm-8">
                        <div class="phone">
                            <div class="phone__screen">
                                <phone-screen-nav data-color="#0084ff"></phone-screen-nav>
                                <div class="screens screens-tablet screens-desktop" data-interval="6">
                                    <div each={ item, i in opts.utils.range(0, 21) } no-reorder class="screen { screen--active : i == 0 }">
                                        <div class="screen__content pos-abs-full bg-cover" style="background-image:url(/preview/images/prof/{ item + 1 }.jpg)">
                                            <div class="phone__screen__title">
                                                <div class="phone__screen__title__text">
                                                    { parent.titles[item] }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="phone pointerEvents-none">
                            <div class="phone__screen">
                                <phone-screen-nav data-color="#0084ff"></phone-screen-nav>
                                <div class="screens screens-tablet screens-desktop" data-vertical="true" data-interval="5">
                                    <div each={ item, i in opts.utils.range(12) } no-reorder class="screen { screen--active : i == 0 }">
                                        <div class="screen__content pos-abs-full bg-cover" style="background-image:url(/public/images/promo/premium/mobile_resume_screen{ item + 1 }.png)"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8">
                        <div class="phone">
                            <div class="phone__screen">
                                <phone-screen-nav data-color="#0084ff"></phone-screen-nav>
                                <div class="screens screens-tablet screens-desktop" data-interval="7">
                                    <div each={ item, i in opts.utils.range(21, 42) } no-reorder class="screen { screen--active : i == 0 }">
                                        <div class="screen__content pos-abs-full bg-cover" style="background-image:url(/preview/images/prof/{ item + 1 }.jpg)">
                                            <div class="phone__screen__title">
                                                <div class="phone__screen__title__text">
                                                    { parent.titles[item] }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="button">
                        <div class="btn btn-xl btn-rounded btn-success">Смотреть подробнее</div>
                    </div>
                </div>
            </div>
        </div>

    </div>

<script>

    this.titles = ["Автомеханик, техник, автослесарь","Архитектор-проектировщик","Инженер-строитель, эксперт-универсал","Охранник на премиум-объекты","Заместитель главного бухгалтера","Ведущий специалист юридической службы банка","Менеджер по страхованию и кредитованию","Педагог-воспитатель со знанием английского","Помощник руководителя, секретарь-референт","Дизайнер интерьера, 3D-визуализация","SEO копирайтер, SMM-менеджер, контент-менеджер","Инженер-технолог, начальник производства","Ведущий инженер-конструктор РЭА","Web-Designer, Art-director, Illustrator","Frontend/back-end разработчик","Системный администратор Linux/Windows","Менеджер по подбору персонала","Парикмахер-универсал","Повар, заместитель шеф-повара","Переводчик-редактор, английский язык","Digital-маркетолог, аналитик","Врач стоматолог-терапевт, микроскопист","Офис менеджер со знанием английского языка","Старший менеджер по туризму","Менеджер логистики и ВЭД","Региональный менеджер по продажам","Продавец продовольственных товаров","Кассир-операционист","Администратор на ресепшен","Менеджер по продаже недвижимости","Водитель-курьер на личном автомобиле","Кладовщик на склад торгового оборудования","Персональный тренер по фитнесу","Менеджер по страхованию, страховой агент","Управляющий в гостиницу, отель","Горничная, уборщик в гостиницу","Экономист по финансовой работе","Финансовый аналитик, аудитор отчетности","Специалист, налоговый инспектор","Слесарь-электрик, универсальный мастер","Юрисконсульт, специалист по согласованию","Помощник нотариуса, юрист"];

</script>

</premium-select>

<overview-promo class="overview overflowX-hidden text-center bg-white">

    <section-nav data-fixed="true" section="premium" user={ opts.user }></section-nav>

    <div class="pos-br-fixed pr-l pb-l zIndex-2" delay-show="l" delay-hide="none">
        <button onClick={ hide } class="btn btn-l btn-upper btn-default-hover-success">Хочу Premium</button>
    </div>

    <section class="overview__section" data-bg="gradient-tb">
        <div class="container pt-xl pb-xl">
            <div class="row pt-xs">
                <div class="col-md-offset-4 col-md-16 pt-l">
                    <small class="mb-xl">premium аккаунт</small>
                    <!-- <h1 class="main mb-l mlr-m plr-l pt-m">Для тех кто хочет видеть свое резюме ещё современней.</h1> -->
                    <h1 class="main mb-l mlr-m plr-l pt-m">Для продвинутых соискателей идущих в ногу со временем.</h1>
                    <p class="fontSize-xxl lineHeight-xxxl c-gray">Всё, что вы любите в iPhone и iPad, было бы невозможно без iOS — операционной системы, которая обеспечивает уникальные функции этих устройств. Она прекрасно выглядит и отлично работает. Её предложения разумны и полезны. А передовые технологии гарантируют надёжную защиту и полную конфиденциальность ваших данных. Вы сразу поймёте, почему так много людей любят iPhone и iPad, как только познакомитесь с iOS.</p>
                </div>
            </div>
        </div>

        <div class="clear"></div>

        <div class="pos-rel overflow-hidden w100p" style="height:464px">
            <div class="pos-centered-h h100p bg-cover" style="width:1362px; background-image:url(/assets/images/promo/section1_1.png)"></div>
        </div>
        <!-- <div class="pos-rel overflow-hidden w100p" style="height:539px">
            <div class="pos-centered-h h100p bg-cover" style="width:1841px; background-image:url(/assets/images/promo/section1_1.png)"></div>
        </div> -->
    </section>

    <section class="overview__section">
        <div class="container">
            <div class="row">
                <div class="col-md-offset-4 col-md-16">
                    <small class="mb-l">Легко пользоваться</small>
                    <div class="ptb-l">
                        <icon-control size="xl"></icon-control>
                    </div>
                    <h1 class="mb-l pt-m">Не нужно объяснять.</h1>
                    <p class="pb-l">Зачем что-то объяснять когда все работает интуитивно понятно для вас. Вы легко освоитесь в нем со своим устройством iOS, как только возьмёте его в руки. Включите камеру, смахнув от правого края экрана блокировки. Или пролистайте весь ваш фотоальбом за считаные секунды. В iOS всё великолепно смотрится и работает выше всяких похвал.</p>
                    <div class="mlr-auto bg-cover" style="width:734px; height:907px; background-image:url(/assets/images/promo/section2_1.jpg)"></div>
                </div>
            </div>
        </div>
    </section>

    <section class="overview__section mb0" data-bg="gradient-tb">
        <div class="container">
            <div class="row">
                <div class="col-md-offset-4 col-md-16">
                    <small class="mb-l">стильный дизайн</small>
                    <div class="ptb-l">
                        <icon-glass size="xl"></icon-glass>
                    </div>
                    <h1 class="mb-l pt-m">Качественный дизайн адаптированный под все современные устройства.</h1>
                    <p class="pb-l">iOS создана специально для iPhone и iPad, именно поэтому они работают так быстро и плавно. Чтобы получить максимум графической производительности, мы применили технологию Metal. Пользуйтесь интернетом, работайте в нескольких приложениях, спасайте мир в игре со сложной 3D-графикой — картинка на дисплее всегда будет безупречной, а отклик устройства мгновенным.</p>
                </div>
                <div class="col-md-24">
                    <div class="mlr-auto bg-cover mt-m" style="width:921px; height:591px; background-image:url(/assets/images/promo/section9_1.png)"></div>
                    <!-- <div class="mlr-auto bg-cover mt-s" style="width:864px; height:584px; background-image:url(/assets/images/promo/section3_1.jpg)"></div> -->
                </div>
            </div>
        </div>
    </section>

    <section class="overview__section" data-bg="gradient-tb">
        <div class="container pt-xl">
            <div class="row pt-l">
                <div class="col-md-offset-4 col-md-16">
                    <p>На iPad Air 2 установлены мощные приложения для ежедневных задач: просмотра веб-﻿страниц, работы с электронной почтой, редактирования фотографий и фильмов, написания отчётов и чтения книг. А в магазине App Store вы найдёте сотни тысяч приложений, созданных для большого дисплея Retina.</p>
                </div>
            </div>
        </div>
        <div class="pos-rel overflow-hidden w100p" style="height:1160px">
            <div class="pos-centered-h h100p bg-cover" style="width:1952px; height:1160px; background-image:url(/assets/images/promo/section10_1.png)"></div>
        </div>
    </section>

    <section class="overview__section">
        <div class="container">
            <div class="row">
                <div class="col-md-offset-4 col-md-16">
                    <small class="mb-l">Привлекательные цвета</small>
                    <h1 class="mb-l pt-m">Стильные и яркие цвета на выбор, легко сменить и настроить.</h1>
                    <div class="pt-l mb-xl inline">
                        <div each={ color in colors } no-reorder class="w40 h40 borderRadius-circle mlr-xxs bg-{ color }"></div>
                        <script>
                            this.colors = ['red', 'orange', 'green', 'emerald', 'blue', 'blueLight', 'violet', 'violetLight', 'blackLight', 'gray'];
                        </script>
                    </div>
                    <p class="pb-l">В iOS вы найдёте множество приложений, которыми будете пользоваться каждый день — Фото, Карты, Сообщения, Здоровье и многие другие. Все они разработаны Apple с огромным вниманием к деталям. Например, теперь при отправке сообщения вы сможете выразить гораздо больше эмоций.</p>
                </div>
            </div>
        </div>
        <div class="bg-cover mt-m mlr-auto" style="width:1000px; height:615px; background-image:url(/assets/images/promo/section6_1_org.jpg)"></div>
    </section>

    <section class="overview__section bg-snow pb-xl mb0">
        <div class="container pt-xl">
            <div class="row pt-l">
                <div class="col-md-10 text-left zIndex-1">
                    <small class="mb-l">Доступная статистика</small>
                    <h1 class="mb-l pt-l">Отслеживате просмотры вашего резюме.</h1>
                    <p class="pb-l">Какой бы iPad Pro вы ни выбрали, для него есть клавиатура Smart Keyboard.2 Сочетание новых технологий и материалов позволило нам создать компактную и удивительно тонкую клавиатуру, которая также служит прочной и лёгкой обложкой. А благодаря интерфейсу Smart Connector вы забудете о проводах, разъёмах и необходимости создавать пару. Просто присоедините клавиатуру и начинайте работать.</p>
                    <div class="chart__radial mt-m anim anim-scale" name="chartRadial">
                        <div class="chart__radial__graph mb-m">
                            <div class="chart__radial__graph1"></div>
                            <div class="chart__radial__graph2"></div>
                            <div class="chart__radial__graph3"></div>
                        </div>
                        <div class="chart__radial__labels c-blackLight">
                            <div class="chart__radial__label mb-xxs">
                                <div class="chart__radial__label__color"></div> &mdash; настольные ПК
                            </div>
                            <div class="chart__radial__label mb-xxs">
                                <div class="chart__radial__label__color"></div> &mdash; планшеты
                            </div>
                            <div class="chart__radial__label mb-xxs">
                                <div class="chart__radial__label__color"></div> &mdash; мобильные телефоны
                            </div>
                        </div>
                    </div>
                    <small class="pos-bl w100p" style="transform:translate3d(280px, 140px, 0); line-height:38px;">Какой бы iPad Pro вы ни выбрали, для него есть клавиатура Smart Keyboard. Какой бы iPad Pro вы ни выбрали, для него есть клавиатура Smart Keyboard.</small>
                </div>
                <div class="col-md-14 zIndex-0" style="height:1007px">
                    <div class="pos-abs" style="left:-150px; top:120px; width:1065px; height:897px">
                        <div class="pos-rel bg-cover zIndex-1" style="left:210px; bottom:0; width:854px; height:739px; background-image:url(/assets/images/promo/section4_1.jpg); -webkit-mask-size:854px height:739px; -webkit-mask-image:url(/assets/images/promo/section4_1_mask.svg)"></div>
                        <div class="pos-bl bg-cover zIndex-0" style="width:1049px; height:523px; background-image:url(/assets/images/promo/section4_2.jpg)"></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="bg-cover mlr-auto mt-m mb-xl" style="transform:translateX(-6vw); width:1208px; height:586px; background-image:url(/assets/images/promo/section4_1.jpg)"></div> -->
    </section>

    <section class="overview__section bg-snow pt-xl mb0">
        <div class="container pt-xl">
            <div class="row pt-l">
                <div class="col-md-14 zIndex-0" style="height:1433px">
                    <div class="pos-abs" style="left:-543px; top:65px; width:1858px; height:1433px">
                        <div class="pos-abs bg-cover zIndex-0" style="width:1036px; height:388px; top:1039px; left:842px; background-image:url(/assets/images/promo/section13_2_shadow.png);"></div>
                        <div class="pos-abs bg-cover zIndex-0" style="left:0; top:0; width:1349px; height:1179px; background-image:url(/assets/images/promo/section13_1.jpg);"></div>
                        <div class="pos-abs bg-cover zIndex-1" style="left:840px; top:535px; width:828px; height:856px; background-image:url(/assets/images/promo/section13_2.jpg); -webkit-mask-size:828px height:856px; -webkit-mask-image:url(/assets/images/promo/section13_2_mask.svg)"></div>
                    </div>
                </div>
                <div class="col-md-10 pl0 text-left zIndex-1">
                    <small class="mb-l">Резюме на 2-х языках</small>
                    <h1 class="mb-l pt-l">На русском и английских языках.</h1>
                    <p class="pb-l">Какой бы iPad Pro вы ни выбрали, для него есть клавиатура Smart Keyboard.2 Сочетание новых технологий и материалов позволило нам создать компактную и удивительно тонкую клавиатуру, которая также служит прочной и лёгкой обложкой.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="overview__section bg-snow pt-xl">
        <div class="container pt-l">
            <div class="row pt-m">
                <div class="col-md-16 zIndex-0" style="height:874px">
                    <div class="pos-abs bg-cover zIndex-0" style="left:-25px; top:0; width:729px; height:874px; background-image:url(/assets/images/promo/section12_1.jpg);"></div>
                </div>
                <div class="col-md-8 pl0 pt-xl text-left zIndex-1">
                    <small class="mb-l mt-l">работайте на планшете</small>
                    <h1 class="mb-l pt-l">Приятно создавать на любимом устройстве.</h1>
                    <p class="pb-l">Какой бы iPad Pro вы ни выбрали, для него есть клавиатура Smart Keyboard.2 Сочетание новых технологий и материалов позволило нам создать компактную и удивительно тонкую клавиатуру, которая также служит прочной и лёгкой обложкой.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="overview__section text-left" style="margin-bottom:105px">
        <div class="container">
            <div class="row mb-l">
                <div class="col-md-12">
                    <div class="pr-xl">
                        <small class="mb-l">100% мобильная соместимость</small>
                        <h1>На любом современном мобильном устройстве.</h1>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="w80 h2px bg-blue mt-xxs mb-l"></div>
                    <p class="pt-m">Этому вопросу мы уделил особое внимание, чтобы просмотр и редактирование ваших резюме, с использованием мобильных устройств, были максимально удобным и комфортны.</p>
                </div>
            </div>
            <div class="row pt-m">
                <div class="col-md-12">
                    <div class="overview__phone" data-align="left">
                        <img src="/assets/images/promo/phone_screen1.png" class="overview__phone__screen">
                    </div>
                </div>
                <div class="col-md-12 pt-xl pr-xl">
                    <h1 class="mt-xl">Web-приложение которое не нужно скачивать.</h1>
                    <p class="pt-m">Просто заходите на сайт сервиса с любого доступного устройства и пользуйтесь им. Одинаково удобно и просмотр и редактирование.</p>

                    <div class="w80 h2px bg-blue mtb-xl"></div>

                    <h3 class="mb-xs">Совместимость</h3>
                    <p>Для продукции Apple отличная совместимость начиная с версии iOS 7 и девайсов от iPhone 3S до iPhone 7 и 7 Plus. Для девайсов под ОС Android отличная совместимость с версии Android 4.3.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 pt-xl pl-xl pr-l">
                    <h1 class="mt-xl">Загрузить свое фото также легко.</h1>
                    <p class="pt-m">Ваши музыкальные предпочтения постоянно меняются, и алгоритмы Apple Music это учитывают. Каждую неделю мы создаём плейлисты из песен, похожих на те, что вы слушаете.</p>

                    <div class="w80 h2px bg-blue mtb-xl"></div>

                    <h3 class="mb-xs">Микс из новой музыки</h3>
                    <p class="mb-m">Мало найти новую музыку. Главное, чтобы она вам понравилась. Каждую пятницу наши кураторы составляют плейлист из новых композиций — приятный сюрприз к выходным.</p>
                </div>
                <div class="col-md-12">
                    <div class="overview__phone" data-align="right">
                        <img src="/assets/images/promo/phone_screen2.png" class="overview__phone__screen">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="overview__phone" data-align="left">
                        <img src="/assets/images/promo/phone_screen3.png" class="overview__phone__screen">
                    </div>
                </div>
                <div class="col-md-12 pt-xl pr-xl">
                    <h1 class="mt-xl pt-m">Ключевые навыки.</h1>
                    <p class="pt-m">Найдите идеальный плейлист для любого занятия и настроения. Все миксы тщательно сведены — каждый трек плавно переходит в следующий.</p>

                    <div class="w80 h2px bg-blue mtb-xl"></div>

                    <h3 class="mb-xs">Занятия</h3>
                    <p>Каждое занятие заслуживает своего саундтрека. Готовьте ужин, бегайте, танцуйте, занимайтесь спортом или отдыхайте под музыку, подобранную специально для этого.</p>
                </div>
            </div>
            <div class="row pb-xl">
                <div class="col-md-12 pt-xl pl-xl pr-l">
                    <div class="pos-rel pt-m zIndex-1">
                        <h1 class="mt-xl">Укажите силу ваших компетенций.</h1>
                        <p class="pt-m">Ваши музыкальные предпочтения постоянно меняются, и алгоритмы Apple Music это учитывают. Каждую неделю мы создаём плейлисты из песен, похожих на те, что вы слушаете.</p>

                        <div class="w80 h2px bg-blue mtb-xl"></div>

                        <h3 class="mb-xs">Микс из новой музыки</h3>
                        <p class="mb-m">Мало найти новую музыку. Главное, чтобы она вам понравилась. Каждую пятницу наши кураторы составляют плейлист из новых композиций — приятный сюрприз к выходным.</p>
                    </div>
                </div>
                <div class="col-md-12" style="height:1000px">
                    <div class="pos-tl bg-cover" style="transform:translateX(-110px); width:1380px; height:1140px; background-image:url(/assets/images/promo/section5_1.jpg)"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="overview__phone" data-align="left">
                        <img src="/assets/images/promo/phone_screen3.png" class="overview__phone__screen">
                    </div>
                </div>
                <div class="col-md-12 pt-xl pr-xl">
                    <h1 class="mt-xl pt-m">Добавьте свои проекты.</h1>
                    <p class="pt-m">Найдите идеальный плейлист для любого занятия и настроения. Все миксы тщательно сведены — каждый трек плавно переходит в следующий.</p>

                    <div class="w80 h2px bg-blue mtb-xl"></div>

                    <h3 class="mb-xs">Занятия</h3>
                    <p>Каждое занятие заслуживает своего саундтрека. Готовьте ужин, бегайте, танцуйте, занимайтесь спортом или отдыхайте под музыку, подобранную специально для этого.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="overview__section mb-xl">
        <div class="container">
            <div class="row">
                <div class="col-md-9 fontSize-0 text-right">
                    <div class="pt-l pr-l">
                        <icon-feedback size="large"></icon-feedback>
                    </div>
                    <!-- <div class="display-inlineBlock bg-cover borderRadius-circle" style="width:330px; height:330px; background-image:url(/assets/images/promo/circle.jpg)"></div> -->
                </div>
                <div class="col-md-15 text-left">
                    <div class="pl-l pr-xl ml-m">
                        <small class="mb-l">форма обратной связи</small>
                        <h1 class="mb-l pt-m">Получайте обратную связь.</h1>
                        <p class="pb-l">iPad Air 2 имеет толщину всего 6,1 мм и весит менее 450 г — это позволяет ученикам брать его с собой повсюду. Учебные материалы на нём буквально оживают благодаря мощному процессору A8X с 64-битной архитектурой уровня настольных компьютеров. Образовательные проекты, презентации, приложения — на дисплее Retina всё выглядит просто великолепно.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="overview__section">
        <div class="container">
            <div class="row">
                <div class="col-md-24 mb-xl">
                    <div class="m0-auto bg-cover" style="width:1050px; height:742px; background-image:url(/assets/images/promo/section15_1.jpg)"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-offset-4 col-md-16">
                    <small class="mb-l">конвертация в pdf</small>
                    <div class="pt-m">
                        <icon-pdf size="large"></icon-pdf>
                    </div>
                    <h1 class="mb-l pt-l">Сохранить резюме в PDF в точности каким его сделали вы? Легко!</h1>
                    <p>iOS — самая совершенная в мире мобильная операционная система. Она помогает использовать максимум возможностей iPad. Ведь приложения работают безотказно. Сайты открываются мгновенно. И видео загружается очень быстро. В iOS также предусмотрены специальные функции, которые отлично работают друг с другом и идеально подходят для образования.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="overview__section">
        <div class="container pb-l">
            <div class="row">
                <div class="col-md-15" style="height:698px">
                    <div class="pos-tr bg-cover" style="transform:translateX(58px); width:1219px; height:698px; background-image:url(/assets/images/promo/section16_1.jpg)"></div>
                </div>
                <div class="col-md-9 text-left pt-xl">
                    <div class="pl-xs pt-l">
                        <small class="mb-l">Сообщения</small>
                        <h1 class="mb-l pt-m">Оживите беседу.</h1>
                        <p>Выражайте свои эмоции по‑новому. Отправьте смайлик или другой значок эмодзи в огромном размере. Прикрепите к ответу собеседника сердечко или «палец вверх», если вам понравилось сообщение.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="overview__section">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-left zIndex-1">
                    <div class="pt-xl pr-l">
                        <small class="mb-l">адаптация под ноутбуки и лаптопы</small>
                        <h1 class="mb-l pt-l">Одинаково удобно на любом экране.</h1>
                        <p>iCloud хранит ваш контент и предоставляет вам доступ к музыке, фотографиям, календарям, контактам и документам, независимо от того, каким устройством вы пользуетесь. С iCloud Drive вы можете безопасно хранить свои презентации, электронные таблицы, файлы PDF, изображения и любые другие документы в iCloud и открывать их со своего iPhone, iPad, iPod touch, Mac или PC.</p>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="float-right bg-cover" style="transform:translate3d(665px, 0, 0); width:1236px; height:668px; background-image:url(/assets/images/promo/section14_1.jpg)"></div>
                    <!-- <div class="float-right bg-cover" style="transform:translate3d(320px, 0, 0); width:930px; height:1069px; background-image:url(/assets/images/promo/section7_1.jpg)"></div> -->
                </div>
            </div>
        </div>
        <!-- <div class="float-right bg-cover mt-l mb-l" style="transform:translateX(70px); width:1198px; height:900px; background-image:url(/assets/images/promo/section7_1.jpg)"></div>
        <div class="clear"></div> -->
        <!-- <div class="bg-cover mlr-auto mt-l" style="width:840px; height:698px; background-image:url(/assets/images/promo/section7_2.jpg)"></div> -->
    </section>

    <section class="overview__section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="bg-cover" style="transform:translateX(-350px); width:894px; height:759px; background-image:url(/assets/images/promo/section8_1.jpg)"></div>
                </div>
                <div class="col-md-12 text-left pt-xl">
                    <div class="pt-m pl-m ml-xxs">
                        <small class="mb-l">адаптация под большие экраны</small>
                        <h1 class="mb-l pt-m">На больших мониторах также приятно смотреть.</h1>
                        <p class="pb-l">iCloud хранит ваш контент и предоставляет вам доступ к музыке, фотографиям, календарям, контактам и документам, независимо от того, каким устройством вы пользуетесь. С iCloud Drive вы можете безопасно хранить свои презентации, электронные таблицы, файлы PDF, изображения и любые другие документы в iCloud и открывать их со своего iPhone, iPad, iPod touch, Mac или PC.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="overview__section pt-l mb0">
        <div class="container">
            <div class="row">
                <div class="col-md-offset-4 col-md-16">
                    <h1 class="mb-m pt-m">Как начать.</h1>
                    <p class="pb-l mb-m">Вы можете выбрать ежемесячную подписку или оплатить один раз и навсегда.</p>
                </div>
            </div>
        </div>
        <div id="section" class="pos-rel" style="height:505px">
            <div class="pos-tl w50p h100p bg-blackLight">
                <small class="pos-tr p-xl c-white">ежемесячно</small>
                <div class="pos-centered">
                    <div class="c-white fontWeight-8 mb-m" style="font-size:100px; line-height:100px; letter-spacing:-1.4px">169 ₽</div>
                    <button class="btn btn-white-hover btn-upper btn-xl">попробовать</button>
                </div>
            </div>
            <div class="pos-tr w50p h100p bg-blue">
                <small class="pos-tl p-xl c-white">единоразово</small>
                <div class="pos-centered">
                    <div class="c-white fontWeight-8 textShadow-light mb-m" style="font-size:100px; line-height:100px; letter-spacing:-1.4px">469 ₽</div>
                    <button class="btn btn-white-hover btn-upper btn-xl">подключить</button>
                </div>
            </div>
            <div class="pos-bl pos-centered-h pb-l">
                <small><span class="c-white">premium</span> &nbsp;<span class="c-white">аккаунт</span></small>
            </div>
        </div>
    </section>

</overview-promo>

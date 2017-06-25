<premium-mobile-overview>

    <div class="overflow-hidden">
        <div class="section__hero container">
            <div class="row">
                <div class="col-md-20 centered" data-section="section1">
                    <p class="text -light mb-xxs anim-text anim">Мобильное</p>
                    <h1 class="bold anim-text anim">Резюме эффектно на любом девайсе</h1>
                    <div class="section__hero__double__ipad">
                        <div class="section__hero__double__ipad__back">
                            <div class="section__hero__double__ipad__back__image l-progressive anim" data-delta="s"></div>
                        </div>
                        <div class="section__hero__double__ipad__front">
                            <div class="section__hero__double__ipad__front__image l-progressive anim" data-delta="s"></div>
                        </div>
                    </div>
                    <p class="text -large pt30 w75p anim-text anim" data-delta="xs">Ваше резюме — это ваша авторская работа — книга о вас. Сделайте ее максимально интересной для читателя.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-20 centered pt50" data-section="section2">
                    <div class="section__hero__devices">
                        <div class="section__hero__ipad__hand anim"></div>
                        <div class="section__hero__ipad anim">
                            <div class="section__hero__iphone anim"></div>
                        </div>
                    </div>
                    <p class="pos-rel text -large w50p zIndex-1 mt--s anim-text anim" data-delta="xs">Первый экран и обложка вашего резюме.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="section__phone__track">
        <div class="section__phone__track__bg"></div>
        <div class="section__phone__track__icons">
            <div each={ item in items } no-reorder class="section__phone__track__icons__item"  data-item="{ item.id }"></div>
        </div>
        <div class="container">
            <div class="section__phone__track__wrapper row">
                <div class="col-md-12 centered clear">
                    <div class="section__phone__track__viewport">
                        <div class="section__phone__track__screen">
                            <div class="section__phone__track__screen__content progressive-image"></div>
                        </div>
                    </div>
                    <div class="section__phone__track__figure sticky">
                        <div class="section__phone__track__figure__device progressive-image"></div>
                        <phone-screen-nav data-color="#0084ff"></phone-screen-nav>
                        <div class="section__phone__track__captions">
                            <div each={ item in items } no-reorder class="section__phone__track__caption" data-item="{ item.id }">
                                <h2 class="bold">{ item.title }</h2>
                                <p class="text -light">{ item.text }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="section__overview">
        <div class="container">
            <div class="mb50">
                <div class="col-md-20 centered">
                    <p class="text -large w50p">Любой может оставить свой лайк на ваше резюме.</p>
                </div>
            </div>
            <div class="section__phone row" data-pos="right">
                <div class="col-md-21 centered">
                    <div class="row">
                        <div class="col-md-10 section__phone__text">
                            <h2 class="bold -gradient-blue">Приятные детали</h2>
                            <p class="text -light">На любом экране резюме быстрый доступ к информация о вас, вашим зарплатным ожиданиям, контактам и форме обратной связи с вами.</p>
                        </div>
                        <div class="col-md-12 section__phone__wrapper anim anim-scale-soft">
                            <div class="section__phone__figure progressive-image">
                                <div class="phone__figure__screen" data-section="overview-btn-info">
                                    <div class="screen pos-abs-full bg-cover progressive-image" style="background-image: url(/public/images/premium/samples/overview/phone_screen_woman1_large_2x.jpg);"></div>
                                    <phone-screen-nav data-color="#0084ff"></phone-screen-nav>
                                    <div class="phone__figure__screen__pointer" data-item="info"></div>
                                    <phone-screen-popup photo="/public/images/premium/samples/overview/phone_screen_popup_photo1.jpg"></phone-screen-popup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section__phone row" data-pos="left" data-section="overview-video">
                <div class="col-md-21 centered">
                    <div class="row">
                        <div class="col-md-12 section__phone__wrapper anim anim-scale-soft">
                            <div class="section__phone__figure progressive-image">
                                <div class="phone__figure__screen progressive-image" style="background-image:url(/public/images/premium/samples/overview/phone_screen_woman2_large_2x.jpg)">
                                    <phone-screen-nav data-color="#0084ff"></phone-screen-nav>
                                    <div class="ovpremium__video">
                                        <div class="ovpremium__video__play" data-url="https://www.youtube.com/watch?v=2wtiT2rjFrE">
                                            <div class="ovpremium__video__play__rings"></div>
                                        </div>
                                        <div class="ovpremium__video__title">
                                            <div class="ovpremium__video__title__text">
                                                Телеведущая, Редактор, Журналист
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-10 section__phone__text">
                            <h2 class="bold -gradient-emerald">Добавьте видео интервью</h2>
                            <p class="text -light">Запишите свое интервью, и добавьте его на главный экран резюме, это сильно выделит вас и станет вашим большим преимуществом.</p>
                            <div class="ovpremium__video__items anim" data-delta="xs">
                                <div each={ item in videoList } class="ovpremium__video__item">
                                    <div class="ovpremium__video__item__image progressive-image" data-url="{ item.url }" data-lang="{ item.lang }" style="background-image:url(/public/images/premium/samples/overview/video/{ item.id }.jpg)">
                                        <div class="ovpremium__video__item__play"></div>
                                    </div>
                                </div>
                                <script>
                                    this.videoList = [
                                        {
                                            id: "2wtiT2rjFrE",
                                            lang: "uk",
                                            url: "https://www.youtube.com/watch?v=2wtiT2rjFrE"
                                        },
                                        {
                                            id: "zh-YcI6TobY",
                                            lang: "en",
                                            url: "https://www.youtube.com/watch?v=zh-YcI6TobY"
                                        },
                                        {
                                            id: "CtLvNfSctZw",
                                            lang: "ru",
                                            url: "https://www.youtube.com/watch?v=CtLvNfSctZw"
                                        },
                                        {
                                            id: "_p6M9vWjVUg",
                                            lang: "ru",
                                            url: "https://www.youtube.com/watch?v=_p6M9vWjVUg"
                                        },
                                        {
                                            id: "pKoYDMfzcPg",
                                            lang: "ru",
                                            url: "https://www.youtube.com/watch?v=pKoYDMfzcPg"
                                        },
                                        {
                                            id: "iq4DY6iTTgg",
                                            lang: "ru",
                                            url: "https://www.youtube.com/watch?v=iq4DY6iTTgg"
                                        }
                                    ];
                                </script>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section__devices row">
                <div class="col-md-21 centered">
                    <div class="row">
                        <div class="col-md-14 col-md-offset-10 section__devices__text">
                            <h2 class="bold -gradient-pink">Удовольствие от создания</h2>
                            <p class="text -light">Настройка оформления резюме в несколько кликов. С визуальным редактором резюме, функция «Предпросмотр» просто не нужна.</p>
                        </div>
                    </div>
                </div>
                <div class="section__devices__wrapper">
                    <div class="section__devices__figure progressive-image">
                        <div class="phone__figure__screen" data-section="overview-colors">
                            <div class="slick-slider">
                                <div each={ item in sliderColors } class="slick-slide bg-cover progressive-image" style="background-image: url(/public/images/premium/samples/overview/phone_screen_jobs@{ item }_large_2x.png);" data-color="#{ item }"></div>
                            </div>
                            <phone-screen-nav data-color="#0084ff"></phone-screen-nav>
                            <script>
                                this.sliderColors = ['0084ff', 'ab81cd', '5856d6', 'ff7272', 'c1a16b', '0bb5b7', '74b027', 'ea7f07', '265cdc'];
                            </script>
                        </div>
                        <div class="ipad__figure__screen progressive-image" style="background-image: url(/public/images/premium/samples/overview/ipad_red_large_2x.jpg);"></div>
                    </div>
                </div>
            </div>
            <div class="section__phone row" data-pos="left">
                <div class="col-md-21 centered">
                    <div class="row">
                        <div class="col-md-12 section__phone__wrapper anim anim-scale-soft">
                            <div class="section__phone__figure progressive-image">
                                <div class="phone__figure__screen" data-section="overview-salary">
                                    <div class="screens screens-tablet screens-desktop" data-vertical="false" data-play="true" data-autorun="false">
                                        <div class="screen screen--active">
                                            <div class="screen__content pos-abs-full bg-cover progressive-image" style="background-image:url(/public/images/premium/samples/overview/phone_screen_salary_large_2x.png)"></div>
                                        </div>
                                        <div class="screen">
                                            <div class="screen__content pos-abs-full bg-cover progressive-image" style="background-image:url(/public/images/premium/samples/overview/phone_screen_man1_large_2x.jpg)">
                                                <phone-screen-nav data-color="#0084ff"></phone-screen-nav>
                                                <div class="phone__figure__screen__pointer" data-item="salary"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-10 section__phone__text">
                            <h2 class="bold -gradient-green">Желаемый график заработной платы</h2>
                            <p class="text -light">Выстраивайте желаемый график заработной платы на ближайшие 2 года. Любому работодателю будут интересны ваши амбиции по данному вопросу.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row pl60">
                <div class="col-md-12 pt-m pb35 sm-pb0 pr-l">
                    <div class="pos-rel zIndex-1">
                        <h2 class="bold -gradient-blue">Укажите силу ваших компетенций.</h2>
                        <p class="text -light pt-m">Расскажите о своих навыках, наглядно показав свои компетенции.</p>

                        <div class="ovpremium__divider anim mtb-xl" data-delta="xs"></div>

                        <p class="text -caption mb-s">Отбросьте лишнее</p>
                        <p class="text -light mb-m mr-m">Чем бы вы не занимались система автоподсказок поможет вам быстро и без сложностей выбрать нужные компетенции.</p>
                    </div>
                </div>
                <div class="col-md-12 pb-xl mb-xl">
                    <div class="ovpremium__divider anim mtb-xl" data-delta="xs"></div>
                    <div class="ovpremium__tags__items pb-m">
                        <div class="ovpremium__tags__item">Adobe Photoshop</div>
                        <div class="ovpremium__tags__item">InDesign</div>
                        <div class="ovpremium__tags__item">Illustrator</div>
                        <div class="ovpremium__tags__item">Sketch App</div>
                        <div class="ovpremium__tags__item">MS PowerPoint</div>
                        <div class="ovpremium__tags__item">HTML5</div>
                        <div class="ovpremium__tags__item">JavaScript</div>
                        <div class="ovpremium__tags__item">jQuery</div>
                        <div class="ovpremium__tags__item">UI/UX</div>
                    </div>
                    <div class="ovpremium__progress__items mt-l anim" data-delta="xs">
                        <div class="ovpremium__progress__item">
                            <div class="ovpremium__progress__title">Креативность</div>
                            <div class="ovpremium__progress__score">90%</div>
                            <div class="ovpremium__progress__line" style="width:90%">
                                <div class="ovpremium__progress__line__peg"></div>
                            </div>
                        </div>
                        <div class="ovpremium__progress__item">
                            <div class="ovpremium__progress__title">Управление проектами</div>
                            <div class="ovpremium__progress__score">95%</div>
                            <div class="ovpremium__progress__line" style="width:95%">
                                <div class="ovpremium__progress__line__peg"></div>
                            </div>
                        </div>
                        <div class="ovpremium__progress__item">
                            <div class="ovpremium__progress__title">Графический дизайн</div>
                            <div class="ovpremium__progress__score">79%</div>
                            <div class="ovpremium__progress__line" style="width:79%">
                                <div class="ovpremium__progress__line__peg"></div>
                            </div>
                        </div>
                        <div class="ovpremium__progress__item">
                            <div class="ovpremium__progress__title">Векторная графика</div>
                            <div class="ovpremium__progress__score">86%</div>
                            <div class="ovpremium__progress__line" style="width:86%">
                                <div class="ovpremium__progress__line__peg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section__phone row" data-pos="right">
                <div class="col-md-21 centered">
                    <div class="row">
                        <div class="col-md-10 section__phone__text">
                            <h2 class="bold -gradient-violet">Управляйте с своего смартфона</h2>
                            <p class="text -light">Теперь это легко и доступно в вашем кармане, без установки приложений. Мобильное web-приложение находится в облаке, это быстро и современно.</p>
                        </div>
                        <div class="col-md-12 section__phone__wrapper anim anim-scale-soft">
                            <div class="section__phone__figure progressive-image">
                                <div class="phone__figure__screen" data-section="overview-simple">
                                    <div class="screens screens-tablet screens-desktop" data-vertical="false" data-play="true" data-autorun="false">
                                        <div class="screen screen--active">
                                            <div class="screen__content pos-abs-full bg-cover progressive-image" style="background-image:url(/public/images/premium/samples/overview/phone_screen_hobby1_large_2x.png)"></div>
                                        </div>
                                        <div class="screen">
                                            <div class="screen__content pos-abs-full bg-cover progressive-image" style="background-image:url(/public/images/premium/samples/overview/phone_screen_hobby2_large_2x.png)">
                                                <phone-screen-nav data-color="#0084ff"></phone-screen-nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section__phone row" data-pos="left">
                <div class="col-md-21 centered">
                    <div class="row">
                        <div class="col-md-12 section__phone__wrapper anim anim-scale-soft">
                            <div class="section__phone__figure progressive-image">
                                <div class="phone__figure__screen" data-section="overview-inbox">
                                    <div class="screens screens-tablet screens-desktop" data-vertical="false">
                                        <div class="screen screen--active">
                                            <div class="screen__content pos-abs-full bg-cover progressive-image" style="background-image:url(/public/images/premium/samples/overview/phone_screen_inbox1_large_2x.png)">
                                                <div class="phone__figure__screen__pointer" data-item="inbox"></div>
                                            </div>
                                        </div>
                                        <div class="screen">
                                            <div class="screen__content pos-abs-full bg-cover progressive-image" style="background-image:url(/public/images/premium/samples/overview/phone_screen_inbox2_large_2x.png)"></div>
                                        </div>
                                    </div>
                                    <div class="screens screens-tablet screens-desktop" data-vertical="true">
                                        <div class="screen screen--active">
                                            <div class="screen__content pos-abs-full bg-cover progressive-image" style="background-image:url(/public/images/premium/samples/overview/phone_screen_man2_large_2x.jpg)">
                                                <div class="phone__figure__screen__pointer" data-item="feedback"></div>
                                            </div>
                                        </div>
                                        <div class="screen">
                                            <div class="screen__content pos-abs-full bg-cover progressive-image" style="background-image:url(/public/images/premium/samples/overview/phone_screen_feedback_large_2x.png)"></div>
                                        </div>
                                        <div class="screen">
                                            <div class="screen__content pos-abs-full bg-cover progressive-image" style="background-image:url(/public/images/premium/samples/overview/phone_screen_inbox1_large_2x.png)">
                                                <div class="phone__figure__screen__pointer" data-item="inbox"></div>
                                            </div>
                                        </div>
                                        <phone-screen-nav data-color="#0084ff"></phone-screen-nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-10 section__phone__text">
                            <h2 class="bold -gradient-orange">Получайте приглашения</h2>
                            <p class="text -light">Получайте приглашения и отклики от ваших потенциальных работодателей. Не пропустите ни одного сообщения, все входящие в вашем кармане, в вашем мобильном телефоне.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pos-rel">
            <div class="slider__pointer anim" data-delta="xs">
                <div class="slider__pointer__line"></div>
                <p class="text -light slider__pointer__text">Примеры резюме в смартфоне</p>
            </div>
            <div class="slick-slider" data-section="samples" data-theme="default">
                <div each={ item, i in opts.utils.range(0, 41) } no-reorder class="slick-slide">
                    <div class="section__phone__figure -centered">
                        <div class="phone__figure__screen bg-cover progressive-image" style="background-image:url(/public/images/samples/{ item + 1 }.jpg)">
                            <phone-screen-nav data-color="{ parent.opts.utils.shuffle(parent.colors)[0] }"></phone-screen-nav>
                            <div class="opener"></div>
                            <div class="phone__figure__screen__title">
                                <div class="phone__figure__screen__title__text">
                                    { parent.parent.titles[item] }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="section__phone row" data-pos="right" data-section="mobile-office">
                <div class="col-md-21 centered">
                    <div class="row">
                        <div class="col-md-10 section__phone__text">
                            <h2 class="bold -gradient-blue">Мобильный офис</h2>
                            <p class="text -light">Отслеживайте входящие предложения в своем кармане, оценивайте эффективность своих резюме, создавайте и управляйте ими там же.</p>
                        </div>
                        <div class="col-md-12 section__phone__wrapper">
                            <div class="figure progressive-image"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<script>

    this.colors = ['#d93663', '#ea7f07', '#74b027', '#0bb5b7', '#265cdc', '#0084ff', '#5856d6', '#ab81cd', '#c1a16b', '#ff7272'];

    this.items = [
        {
            id: "photo",
            title: "Ваша фотография",
            text: "Первый экран и обложка вашего резюме: фотография, должность и краткая информация о вас."
        },
        {
            id: "commons",
            title: "О себе",
            text: "Подробная информация о вас, желаемая зарплата, ваши ключевые навыки, ваше обращение к работодателю и ссылки в социальных медиа."
        },
        {
            id: "works",
            title: "Ваше портфолио",
            text: "Есть свои или проекты в которых вы учавствовали? Расскажите о них, прикрепив фото и видео материалы."
        },
        {
            id: "skills",
            title: "Основные компетенции",
            text: "Расскажите подробнее о своих навыках, также укажите силу ваших компетенций, примерно сориентировав работодателя в каком векторе вы двигаетесь."
        },
        {
            id: "education",
            title: "Ваше образование",
            text: "У вас есть возможность подробнее рассказать о своем образовании."
        },
        {
            id: "courses",
            title: "Курсы",
            text: "Посещали курсы? Отлично, укажите их. Работодателю эта информация не будет лишней."
        },
        {
            id: "languages",
            title: "Владение языками",
            text: "Владеете иностранными языками? Хорошо. Укажите уровень владениями ими."
        },
        {
            id: "jobs",
            title: "Опыт работы",
            text: "Тут все как обычно, расскажите кем и где вы работали, ваши функциональные обязанности."
        },
        {
            id: "hobby",
            title: "Поделитесь увлечениями",
            text: "Да, большинству работодателей интересно знать о ваших увлечениях и видеть список ваших хобби в резюме."
        },
        {
            id: "contacts",
            title: "Контакты",
            text: "Общая контактная информация и предпочитаемый вид для связи с вами."
        },
        {
            id: "businessTrip",
            title: "Командировки",
            text: "Ваше гражданство, график работы, готовность к командировкам и переезду."
        },
        {
            id: "feedback",
            title: "Форма связи",
            text: "Любой работодатель может написать вам и пригласить на собеседование."
        },
        {
            id: "likes",
            title: "Собирайте лайки",
            text: "Получайте одобрения от ваших работодателей на ваши резюме."
        }
    ];

</script>

</premium-mobile-overview>

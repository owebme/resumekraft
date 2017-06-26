<home-video class="content__section">

    <div class="container">
        <div class="row text-center mb55">
            <div class="col-md-16 centered">
                <h1 class="mb-m">Резюме в смартфоне</h1>
                <p class="c-gray text mb-s">Запишите свое интервью, и добавьте его на первый экран резюме, ёмко рассказав о себе, это сильно выделит вас и станет вашим большим преимуществом.</p>
                <a href="/premium/mobile" class="link-primary link-m">Узнать больше о мобильном резюме</a>
            </div>
        </div>
        <div class="row">
            <div class="col-md-20 centered">
                <div class="section__phone__figure -centered progressive-image">
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
                <div class="video__items">
                    <div each={ item in videoList } class="video__item">
                        <div class="video__item__image progressive-image" data-url="{ item.url }" data-lang="{ item.lang }" style="background-image:url(/public/images/premium/samples/overview/video/{ item.id }.jpg)">
                            <div class="video__item__play"></div>
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

</home-video>

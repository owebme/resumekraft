<premium-samples-gallery>

    <div class="container text-center">
        <div class="row">
            <div class="col-md-15 centered">
                <icon-device-phones color="primary"></icon-device-phones>
                <h1 class="mb-m">Любая профессия может стать ещё заметней</h1>
                <p class="text c-silver">Резюме также доступно в вашем смартфоне.</p>
                <a href="/premium/samples/mobile" class="link-primary link-m mt-m">Подробнее о предложении</a>
            </div>
        </div>
        <div class="phones row">
            <div class="col-sm-8">
                <div class="phone progressive-image">
                    <div class="phone__screen">
                        <phone-screen-nav data-color="#0084ff"></phone-screen-nav>
                        <div class="screens screens-tablet screens-desktop" data-interval="6">
                            <div each={ item, i in opts.utils.range(0, 21) } no-reorder class="screen { screen--active : i == 0 }">
                                <div class="screen__content pos-abs-full bg-cover { progressive-image : i == 0 }" style="background-image:url(/preview/images/prof/{ item + 1 }.jpg)">
                                    <div class="phone__screen__title">
                                        <div class="phone__screen__title__text">
                                            { parent.parent.titles[item] }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="phone progressive-image pointerEvents-none">
                    <div class="phone__screen">
                        <phone-screen-nav data-color="#0084ff"></phone-screen-nav>
                        <div class="screens screens-tablet screens-desktop" data-vertical="true" data-interval="5">
                            <div each={ item, i in opts.utils.range(1, 12) } no-reorder class="screen { screen--active : i == 0 }">
                                <div class="screen__content pos-abs-full bg-cover { progressive-image : i == 0 }" style="background-image:url(/public/images/premium/samples/overview/gallery/mobile_resume_screen{ item + 1 }.png)"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="phone progressive-image">
                    <div class="phone__screen">
                        <phone-screen-nav data-color="#0084ff"></phone-screen-nav>
                        <div class="screens screens-tablet screens-desktop" data-interval="7">
                            <div each={ item, i in opts.utils.range(21, 42) } no-reorder class="screen { screen--active : i == 0 }">
                                <div class="screen__content pos-abs-full bg-cover { progressive-image : i == 0 }" style="background-image:url(/preview/images/prof/{ item + 1 }.jpg)">
                                    <div class="phone__screen__title">
                                        <div class="phone__screen__title__text">
                                            { parent.parent.titles[item] }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="button">
                <a href="/premium/samples/mobile" class="btn btn-xl btn-rounded btn-success">Смотреть подробнее</a>
            </div>
        </div>
    </div>

</premium-samples-gallery>

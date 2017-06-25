<premium-samples-slider>

    <div class="slider__total">
        <div class="slider__total__title">42</div>
        <div class="slider__total__text">примера резюме</div>
    </div>
    <div class="slider" data-theme="default">

        <div each={ item, i in opts.utils.shuffle(opts.utils.range(42)) } no-reorder class="slider__item">
            <div class="slider__item__share">
                <div class="slider__item__share__link" data-item="fb" data-url="" data-title=""></div>
                <div class="slider__item__share__link" data-item="vk" data-url="" data-title=""></div>
                <div class="slider__item__share__link" data-item="gl" data-url="" data-title=""></div>
                <div class="slider__item__share__link" data-item="tw" data-url="" data-title=""></div>
            </div>
            <div class="slider__item__photo" style="background-image:url(/public/images/samples/small/{ item + 1 }.jpg)"></div>
            <div class="slider__item__title">{ parent.parent.titles[item] }</div>
            <div class="slider__item__text">Я графический дизайнер. В дизайне предпочитаю лаконичный стиль. В тексте — информационный. Убираю всё, что мешает увидеть суть.<span>&nbsp;</span></div>
            <div class="btn btn-l btn-rounded btn-primary-hover">Смотреть</div>
            <div class="btn btn-l btn-rounded btn-violet-hover ml-s">Редактирование</div>
            <div class="slider__item__icons">
                <a href="/premium/demo" class="slider__item__icon" data-balloon="Desktop версия">
                    <div class="slider__item__icon__desktop"></div>
                </a>
                <a href="/premium/workflow" class="slider__item__icon" data-balloon="Mobile версия">
                    <div class="slider__item__icon__phones"></div>
                </a>
            </div>
        </div>

    </div>

    <div class="c-dots -horizontal">
        <div class="c-dots_list js-family-dots">
            <div each={ item, i in opts.utils.range(42) } no-reorder class="c-dots_item">
                <div class="c-dots_image" style="background-image:url(/public/images/samples/small/{ item + 1 }.jpg)"></div>
                <button class="c-dots_link" type="button">
                    <span class="c-dots_dot"></span>
                </button>
            </div>
        </div>
    </div>

</premium-samples-slider>

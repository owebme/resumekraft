<blog-content class="section blog">

    <section-nav section="blog" data-color="blueLight" user={ opts.user }></section-nav>

    <div class="blog__header">
        <div class="blog__header__corner"></div>
        <div class="blog__header__image" style="background-image:url({ get.image( opts.data.item.image) })"></div>
        <div class="container">
            <div class="blog__header__container row">
                <div class="col-md-offset-8 col-md-16">
                    <div class="blog__item">
                        <div class="blog__item__image" style="background-image:url({ get.image( opts.data.item.image) })"></div>
                        <a class="blog__item__back" href="/blog/">Блог</a>
                        <h1 class="blog__item__title">{ opts.data.item.name }</h1>
                        <div class="blog__item__tags">{ opts.data.item.keywords }</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-offset-4 col-md-18">
                <div class="blog__item__avatar">
                    <img class="blog__item__avatar__image" src="http://resumekraft.ru/assets/img/testimonials/testimonial9.jpg">
                    <span class="blog__item__avatar__title">Опубликовано: <span class="c-blue">Ирина Лата</span>, { opts.data.item.date }</span>
                </div>
                <blog-social-buttons data-pos="right"></blog-social-buttons>
                <div class="blog__content__wrapper">
                    <div class="blog__content" name="content">
                        { get.content(opts.data.item.text) }
                    </div>
                    <div if={ opts.data.item.source } class="text-right c-gray fontSize-16 pt-m">
                        Источник: { opts.data.item.source }
                    </div>
                    <div class="text-center mt-l mb-m">
                        <blog-social-buttons data-pos="center"></blog-social-buttons>
                    </div>
                    <img class="display-block m0-auto blog__item__avatar__image" src="http://resumekraft.ru/assets/img/testimonials/testimonial9.jpg">
                    <div class="text-center mt-m mb-xl fontSize-20 c-gray fontFamily-futura">
                        Ирина Лата
                    </div>
                    <div class="fontFamily-futura">
                        <a if={ opts.data.prevItem } href="/blog/{ opts.data.prevItem.alias }" class="blog__item__nearby float-left pos-rel w50p borderRadius-xl bg-cover overflow-hidden" style="background-image:url({ get.image( opts.data.prevItem.image) });">
                            <div class="pos-abs-full bg-overlay opacity-70"></div>
                            <div class="blog__item__nearby__title pos-tr pos-centered-v w100p fontWeight-8 fontSize-28 c-white text-right pr-l pl-m">{ opts.data.prevItem.name }</div>
                        </a>
                        <a if={ opts.data.nextItem } href="/blog/{ opts.data.nextItem.alias }" class="blog__item__nearby float-right pos-rel w50p borderRadius-xl bg-cover overflow-hidden" style="background-image:url({ get.image( opts.data.nextItem.image) });">
                            <div class="pos-abs-full bg-overlay opacity-70"></div>
                            <div class="blog__item__nearby__title pos-tr pos-centered-v w100p fontWeight-8 fontSize-28 c-white text-left pl-l pr-m">{ opts.data.nextItem.name }</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="blog__social__panel" data-pos="left">
        <div class="blog__social__panel__item" data-share="fb" data-balloon="Поделиться в Facebook" data-balloon-pos="right">
            <icon-fb></icon-fb>
        </div>
        <div class="blog__social__panel__item" data-share="vk" data-balloon="Поделиться в ВКонтакте" data-balloon-pos="right">
            <icon-vk></icon-vk>
        </div>
        <div class="blog__social__panel__item" data-share="tw" data-balloon="Поделиться в Twitter" data-balloon-pos="right">
            <icon-tw></icon-tw>
        </div>
        <div class="blog__social__panel__item" data-share="dk" data-balloon="Поделиться в Одноклассниках" data-balloon-pos="right">
            <icon-dk></icon-dk>
        </div>
    </div>

<script>

    var $ = this;

    this.get = {
        content: function(text){
            var content = text.replace(/src="\/files\/blog\/images/g, "src=\"http://resumekraft.ru/files/blog/images/");
            content = content.replace(/<[p|strong|span|em|i]*?><\/[p|strong|span|em|i]*?>/gi, "");
            content = content.replace(/<[^\/]>[\s|\r|\n]{0,}<\/.+?>/gi, "");
            content = content.replace(/<p>\s*<br>\s*<\/p>/gi, "");
            content = content.replace(/<p.+>\s*<br>\s*<\/p>/gi, "");
            content = content.replace(/<br>/gi, "");
            $.content.innerHTML = content;
        },
        image: function(url){
            return "http://resumekraft.ru/" + url.replace(/http:\/\/resumekraft\.ru\//g, "");
        }
    }

</script>

</blog-content>

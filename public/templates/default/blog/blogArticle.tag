<blog-article class="section">

    <global-nav user={ opts.user }></global-nav>

    <div id="content">

        <div class="container blog__article">
            <div class="row">
                <div class="col-md-13 centered">
                    <div class="blog__article__header">
                        <div class="anim anim-bt" data-duration="m">
                            <div class="blog__article__header__tags">{ opts.data.item.keywords }</div>
                            <div class="blog__article__header__date">{ opts.data.item.date }</div>
                        </div>
                        <h1 class="blog__article__header__title anim anim-bt" data-duration="m" data-delay="xs">{ opts.data.item.name }</h1>
                        <div class="blog__article__header__image anim anim-bt" data-duration="m" data-delay="m">
                            <div class="blog__article__header__image__item" style="background-image:url({ get.image( opts.data.item.image) })"></div>
                        </div>
                        <div class="blog__article__header__share anim anim-bt" data-duration="m" data-delay="s">
                            <div class="blog__grid__item__share__link" data-item="fb"></div>
                            <div class="blog__grid__item__share__link" data-item="vk"></div>
                            <div class="blog__grid__item__share__link" data-item="gl"></div>
                            <div class="blog__grid__item__share__link" data-item="tw"></div>
                        </div>
                        <div class="blog__article__header__line anim anim-bt" data-duration="m" data-delay="m"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-13 centered">
                    <div class="blog__article__content anim anim-bt" data-duration="m" data-delay="m" name="article">
                        { get.content(opts.data.item.text) }
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-16 centered fontFamily-myriad">
                    <div if={ opts.data.item.source } class="text-right c-silver fontSize-18 pt-m">
                        Источник: { opts.data.item.source }
                    </div>
                    <div class="text-center mt-l mb50">
                        <blog-social-buttons data-pos="center"></blog-social-buttons>
                    </div>
                    <img class="display-block m0-auto w64 h64 borderRadius-circle" src="/public/images/blog/avatar.jpg">
                    <div class="text-center mt-m mb-xl fontSize-18 c-gray">
                        Ирина Лата
                    </div>
                    <div>
                        <a if={ opts.data.prevItem } href="/blog/{ opts.data.prevItem.alias }" class="blog__article__nearby float-left pos-rel w50p borderRadius-xl bg-cover overflow-hidden" style="background-image:url({ get.image( opts.data.prevItem.image) });">
                            <div class="pos-abs-full bg-overlay opacity-70"></div>
                            <div class="blog__article__nearby__title pos-tr pos-centered-v w100p c-white text-right pr-l pl-m">{ opts.data.prevItem.name }</div>
                        </a>
                        <a if={ opts.data.nextItem } href="/blog/{ opts.data.nextItem.alias }" class="blog__article__nearby float-right pos-rel w50p borderRadius-xl bg-cover overflow-hidden" style="background-image:url({ get.image( opts.data.nextItem.image) });">
                            <div class="pos-abs-full bg-overlay opacity-70"></div>
                            <div class="blog__article__nearby__title pos-tr pos-centered-v w100p c-white text-left pl-l pr-m">{ opts.data.nextItem.name }</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <btn-arrow-back url="/blog/"></btn-arrow-back>
    <btn-arrow-top></btn-arrow-top>

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
        <div class="blog__social__panel__item" data-share="gl" data-balloon="Поделиться в Google+" data-balloon-pos="right">
            <icon-glc></icon-glc>
        </div>
    </div>

    <global-footer section="Блог[/blog/]//{ opts.data.item.name }"></global-footer>

<script>

    var $ = this;

    this.get = {
        content: function(text){
            var content = text.replace(/src="http:\/\/resumekraft\.ru\//g, "src=\"/").replace(/\/files\/blog\/images/g, "/public/files/blog/images");
            content = content.replace(/<[p|strong|span|em|i]*?><\/[p|strong|span|em|i]*?>/gi, "");
            content = content.replace(/<[^\/]>[\s|\r|\n]{0,}<\/.+?>/gi, "");
            content = content.replace(/(&nbsp;)+/gi, " ");
            content = content.replace(/\s+/gi, " ");
            content = content.replace(/(<br \/>)+/gi, "");
            content = content.replace(/<br>/gi, "");
            content = content.replace(/<\/(\w+)>\s+<(\w+)/gi, "</$1><$2");
            content = content.replace(/<h\d>\s+?<\/h\d>/gi, "");
            content = content.replace(/<p>\s*<br>\s*<\/p>/gi, "");
            content = content.replace(/<p.+>\s*<br>\s*<\/p>/gi, "");
            content = content.replace(/<p>\s*<\/p>/gi, "");
            $.article.innerHTML = content;
        },
        image: function(url){
            return url.replace(/http:\/\/resumekraft\.ru\//g, "/").replace(/\/files\/blog\/images/g, "/public/files/blog/images");
        }
    }

</script>

</blog-article>

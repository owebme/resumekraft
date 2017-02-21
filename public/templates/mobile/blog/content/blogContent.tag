<blog-content-mobile class="section blog">

    <section-nav-blog-mobile section="content" params={ { image: opts.data.item.image, title: opts.data.item.name, alias: opts.data.item.alias } }></section-nav-blog-mobile>

    <section-menu-mobile section="blog" navbar="true" animate="true"></section-menu-mobile>

    <blog-cover-mobile subscribe={ true } params={ { color: opts.data.item.color, image: opts.data.item.image, title: opts.data.item.name, tags: opts.data.item.keywords, alias: opts.data.item.alias, date: opts.data.item.date } }></blog-cover-mobile>

    <div class="blog__content__wrapper">
        <div class="blog__content" name="content">
            { get.content(opts.data.item.text) }
        </div>
        <div if={ opts.data.item.source } class="text-center text-truncate m0-auto maxW-90p c-gray fontSize-xl pb50">
            Источник: { opts.data.item.source }
        </div>
        <div class="text-center mb25">
            <blog-social-buttons data-pos="center"></blog-social-buttons>
        </div>
        <img class="display-block m0-auto blog__item__avatar__image" src="http://resumekraft.ru/assets/img/testimonials/testimonial9.jpg">
        <div class="text-center mt-m mb-xl fontSize-22 c-gray fontFamily-futura">
            Ирина Лата
        </div>
        <div class="fontFamily-futura">
            <a if={ opts.data.prevItem } href="/blog/{ opts.data.prevItem.alias }" class="blog__item__nearby float-left pos-rel w50p borderRadiusRight-xxl bg-cover overflow-hidden" style="background-image:url({ get.image( opts.data.prevItem.image) });">
                <div class="pos-abs-full bg-overlay opacity-70"></div>
                <div class="blog__item__nearby__title pos-tr pos-centered-v c-white text-right pr-m pl-m">{ opts.data.prevItem.name }</div>
            </a>
            <a if={ opts.data.nextItem } href="/blog/{ opts.data.nextItem.alias }" class="blog__item__nearby float-right pos-rel w50p borderRadiusLeft-xxl bg-cover overflow-hidden" style="background-image:url({ get.image( opts.data.nextItem.image) });">
                <div class="pos-abs-full bg-overlay opacity-70"></div>
                <div class="blog__item__nearby__title pos-tr pos-centered-v c-white text-left pl-m pr-m">{ opts.data.nextItem.name }</div>
            </a>
        </div>
    </div>

    <ui-photoswipe></ui-photoswipe>

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

</blog-content-mobile>

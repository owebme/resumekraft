<blog-cover-mobile class="section blog__cover">

    <a href="/blog/{ opts.params.alias }" class="blog__cover__image" style="background-image:url({ get.image( opts.params.image) })"></a>
    <div class="blog__cover__content cover__bg{ opts.params.color }">
        <div class="blog__cover__content__bg"></div>
        <img class="blog__cover__avatar" src="/public/images/blog/avatar.jpg">
        <div class="blog__cover__avatar__name">Ирина Лата</div>
        <div class="blog__cover__date">{ opts.params.date }</div>
        <div class="blog__cover__title">{ opts.params.title }</div>
        <div class="blog__cover__tag">{ opts.params.tags }</div>
        <a if={ !opts.subscribe } href="/blog/{ opts.params.alias }" class="btn btn-white btn-l2 c-blue">Подробнее</a>
        <div if={ opts.subscribe } class="blog__subscribe w80p m0-auto">
            <div class="blog__subscribe__button btn btn-white btn-l2 c-blue"><svg style="margin-top:-3px" class="btn-svg w25 h25" viewBox="3 -3 24 24"><path class="fill-blue" d="M15 11.9c-.9 0-1.7-.2-2.3-.7l-5.7-4.4v8.1c0 .1 0 .3.1.4.1.1.2.2.3.2 2.5.4 5 .5 7.5.5s5-.2 7.5-.5c.1 0 .3-.1.4-.2.2-.1.2-.3.2-.4v-8.1l-5.7 4.4c-.6.5-1.4.7-2.3.7zm-1.3-2.3c.3.3.8.4 1.3.4s1-.1 1.3-.4l6.1-4.7c.3-.3.5-.6.6-1v-.8c0-.1 0-.3-.1-.4-.1-.1-.2-.2-.4-.2-2.5-.3-5-.5-7.5-.5s-5 .2-7.5.5c-.1 0-.2.1-.3.2-.2.1-.2.3-.2.4v.9c.1.3.3.6.6 1l6.1 4.6z"></path></svg>Подписаться</div>
            <div class="blog__subscribe__form"></div>
        </div>
    </div>

<script>

    var $ = this;

    this.get = {
        image: function(url){
            return url.replace(/http:\/\/resumekraft\.ru\//g, "/").replace(/\/files\/blog\/images/g, "/public/files/blog/images");
        }
    }

</script>

</blog-cover-mobile>

<section-nav-blog-mobile class="nav">

    <a if={ opts.section == 'index' } href="/" class="nav__logotype nav__front"></a>

    <a href="/blog/{ opts.params.alias }" class="nav__content { opts.section == 'content' ? 'nav__front' : 'nav__side' }">
        <div class="nav__image" style="background-image:url({ get.image(opts.params.image) })"></div>
        <div class="nav__title">{ opts.params.title }</div>
    </a>

    <div if={ opts.section == 'content' } class="nav__content nav__side">
        <a href="/blog/" class="nav__grid"></a>
        <blog-social-buttons color="white"></blog-social-buttons>
    </div>

<script>

    var $ = this;

    this.get = {
        image: function(url){
            return url.replace(/http:\/\/resumekraft\.ru\//g, "/").replace(/\/files\/blog\/images/g, "/public/files/blog/images");
        }
    }

</script>

</section-nav-blog-mobile>

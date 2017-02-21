<section-blog-mobile class="section blog">

    <section-nav-blog-mobile section="index" params={ { image: opts.data.headers[0].image, title: opts.data.headers[0].name, alias: opts.data.headers[0].alias } }></section-nav-blog-mobile>

    <section-menu-mobile section="blog" navbar="true" animate="true"></section-menu-mobile>

    <blog-cover-mobile params={ { color: opts.data.headers[0].color, image: opts.data.headers[0].image, title: opts.data.headers[0].name, tags: opts.data.headers[0].keywords, alias: opts.data.headers[0].alias, date: opts.data.headers[0].date } }></blog-cover-mobile>

    <blog-grid-mobile params={ opts }></blog-grid-mobile>

</section-blog-mobile>

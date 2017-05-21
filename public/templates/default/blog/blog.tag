<section-blog class="section bg-snow7" data-page={ opts.data.page } data-pages={ opts.data.pages }>

    <section-nav section="blog" color="snow" user={ opts.user }></section-nav>

    <div id="content">

        <blog-grid domain={ opts.domain } items={ opts.data.items }></blog-grid>

        <div class="loading"></div>

    </div>

    <btn-arrow-top></btn-arrow-top>

</section-blog>

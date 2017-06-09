<section-blog class="section" data-page={ opts.data.page } data-pages={ opts.data.pages }>

    <global-nav section="blog" color="snow" user={ opts.user }></global-nav>

    <div id="content">

        <blog-grid domain={ opts.domain } items={ opts.data.items }></blog-grid>

        <div class="loading"></div>

    </div>

    <btn-arrow-top></btn-arrow-top>

</section-blog>

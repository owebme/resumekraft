<section-employer class="section jobs">

    <jobs-search-nav></jobs-search-nav>

    <div class="employer container">
        <div class='row'>
            <employer-content item={ opts.item } items={ opts.items }></employer-content>
            <div class="col-md-5 visible-lg">
                <jobs-search-aside></jobs-search-aside>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-22 col-lg-20 centered">
                <employer-vacancies items={ opts.items } currency={ opts.currency } utils={ opts.utils }></employer-vacancies>
            </div>
        </div>
    </div>

    <jobs-footer></jobs-footer>

    <sidebar-favorites></sidebar-favorites>

</section-employer>

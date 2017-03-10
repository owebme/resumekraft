<section-jobs-search class="section jobs" data-list={ opts.modeView } font-soft="false">

    <jobs-search-nav></jobs-search-nav>

    <div class="container jobs__search">
        <div class='row'>
            <div class="col-md-6 jobs__search__filter__screen">
                <jobs-search-filter></jobs-search-filter>
            </div>
            <div class="col-md-15 col-lg-13">
                <jobs-search-content items={ opts.items } utils={ opts.utils } currency={ opts.currency }></jobs-search-content>
            </div>
            <div class="col-md-5 visible-lg">
                <jobs-search-aside></jobs-search-aside>
            </div>
        </div>
    </div>

    <div class="jobs__search__progress">
        <div class="jobs__search__progress__line"></div>
    </div>

    <jobs-search-pages page={ opts.page } pages={ opts.pages } utils={ opts.utils }></jobs-search-pages>

    <sidebar-favorites></sidebar-favorites>

</section-jobs-search>

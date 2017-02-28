<section-jobs-search class="section jobs jobs__search" data-list={ opts.modeView } font-soft="false">

    <jobs-search-nav></jobs-search-nav>

    <div class="container">
        <div class='row'>
            <div class="col-md-6">
                <jobs-search-filter></jobs-search-filter>
            </div>
            <div class="col-md-13">
                <jobs-search-content items={ opts.items }></jobs-search-content>
            </div>
            <div class="col-md-5">
                <jobs-search-aside></jobs-search-aside>
            </div>
        </div>
    </div>

    <div class="section__overlay"></div>

    <div class="jobs__search__progress">
        <div class="jobs__search__progress__line"></div>
    </div>

    <jobs-search-pages page={ opts.page } pages={ opts.pages }></jobs-search-pages>

</section-jobs-search>

<section-jobs-search class="section jobs jobs__search">

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

</section-jobs-search>

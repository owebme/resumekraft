<section-vacancy class="section jobs jobs__search vacancy">

    <jobs-search-nav></jobs-search-nav>

    <div class="container">
        <div class='row'>
            <vacancy-content item={ opts.item }></vacancy-content>
            <div class="col-md-5">
                <jobs-search-aside></jobs-search-aside>
            </div>
        </div>
    </div>

    <vacancy-response item={ opts.item }></vacancy-response>

    <div class="section__overlay"></div>

</section-vacancy>

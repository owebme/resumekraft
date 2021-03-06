<section-vacancy class="section jobs">

    <jobs-search-nav></jobs-search-nav>

    <div class="vacancy container">
        <div class='row'>
            <vacancy-content item={ opts.item } utils={ opts.utils } currency={ opts.currency } isPhone={ opts.device.type == "phone" }></vacancy-content>
            <div class="col-md-5 visible-lg">
                <jobs-search-aside></jobs-search-aside>
            </div>
        </div>
    </div>

    <vacancy-similary items={ opts.items } utils={ opts.utils } currency={ opts.currency }></vacancy-similary>

    <jobs-footer></jobs-footer>

    <vacancy-panel item={ opts.item }></vacancy-panel>

    <sidebar-favorites></sidebar-favorites>

</section-vacancy>

<section-samples class="samples section" data-section="{ opts.data.item ? 'sample' : 'samples' }">

    <section-nav-samples section="samples" cluster={ opts.data.cluster } clusters={ opts.data.clusters } alpha={ opts.data.alpha } user={ opts.user }></section-nav-samples>

    <div id="content">

        <samples-items utils={ opts.utils } alpha={ opts.data.alpha } item={ opts.data.item } items={ opts.data.items }></samples-items>

        <div class="sample__wrapper">

            <sample-content item={ opts.data.item }></sample-content>

            <section-sample-offer utils={ opts.utils }></section-sample-offer>

            <sample-button-word></sample-button-word>

            <btn-arrow-back url="/samples/"></btn-arrow-back>
            <btn-arrow-top></btn-arrow-top>

        </div>

    </div>

    <sample-modal></sample-modal>

    <global-footer data-color="dark" section="Образцы резюме"></global-footer>

</section-samples>

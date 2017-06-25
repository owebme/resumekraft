<sample-content class="sample container">

    <div if={ sample } class="row">
        <div class="col-md-offset-4 col-md-19">
            <h1 class="sample__title">Образец резюме <strong>«{ sample.post }»</strong></h1>
            <div if={ sample._seo.shorttext } class="sample__text">{ sample._seo.shorttext } <span class="opener c-primary cursor-pointer">>></span></div>

            <div class="sample__page__wrapper">

                <sample-page item={ sample }></sample-page>

                <div class="sample__fulltext">
                    { sample._seo.fulltext }
                </div>
            </div>
        </div>
    </div>

<script>

    var $ = this;

    try {
        $.sample = $.opts.item || $store.resume.get();
    }
    catch(e){
        $.sample = $.opts.item;
    }

</script>

</sample-content>

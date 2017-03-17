<overview-premium class="overview text-center bg-white">

    <section-nav data-fixed="true" section="premium" user={ opts.user }></section-nav>

    <div class="pos-br-fixed pr-l pb-l zIndex-2" delay-show="l" delay-hide="none">
        <button onClick={ hide } class="btn btn-l btn-upper btn-default-hover-success">Хочу Premium</button>
    </div>

    <overview-premium-content utils={ opts.utils }></overview-premium-content>

</overview-premium>

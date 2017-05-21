<overview-premium class="overview text-center bg-white" data-auth="{ opts.user ? 'true' : 'false' }">

    <section-nav section="premium" user={ opts.user }></section-nav>

    <div class="pos-br-fixed pr-l pb-l zIndex-2">
        <button class="createAccount btn btn-l btn-default-hover-success btn-rounded">Создать аккаунт</button>
    </div>

    <overview-premium-content utils={ opts.utils }></overview-premium-content>

</overview-premium>

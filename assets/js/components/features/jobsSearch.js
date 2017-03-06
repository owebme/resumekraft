(function(app, $, $dom, EV, _){

    app.define("features.jobsSearch");

    app.features.jobsSearch = {

        init: function(){

            $store.jobs.apiUrl = "https://api.hh.ru/vacancies?";

            var params = Url.parseQuery();

            var state = {
                area: null,
                metro: null,
                salary: null,
                specialization: null,
                industry: null,
                experience: null,
                employment: null,
                schedule: null,
                label: null,
                order_by: params.order_by ? params.order_by : "relevance",
                period: params.period ? params.period : "30",
                page: params.page ? parseInt(params.page) : 0,
                pages: $store.jobs.pages ? parseInt($store.jobs.pages) : 0,
                per_page: 20
            };

            if ($store.jobs.state){
                _.extend(state, $store.jobs.state);
            }

            $State = new Baobab(state);
        }
    };

    var WD = app.features.jobsSearch;

})(app, $, app.$dom, app.events, app.utils);

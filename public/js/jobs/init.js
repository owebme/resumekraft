(function(){

    $Sections = {};

    $store.jobs.apiUrl = "https://api.hh.ru/vacancies?";

    var state = {
        area: null,
        metro: null,
        salary: null,
        specialization: null,
        industry: null,
        experience: null,
        employment: null,
        schedule: null,
        label: null
    };

    if ($store.jobs.state){
        _.extend(state, $store.jobs.state);
    }

    $State = new Baobab(state, { autoCommit: true });

    app.metrika = new app.plugins.metrika({
        key: "public",
        data: app.metrics.public
    });

    app.sections.init();

    riot.compile(function(e){
        app.sections.trigger("beforeMounted");
        riot.mount("*", {app: true});
        app.sections.trigger("afterMounted");
    });

})();

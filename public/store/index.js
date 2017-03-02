module.exports = function() {

    app.store.jobs = {};

    app.utils.fs.readFile(process.cwd() + '/public/json/dictionary.json', "utf8", function(err, data){
        if (!err){
            var data = JSON.parse(data);
            app.store.jobs.currency = data.currency;
            app.store.jobs.experience = data.experience;
            app.store.jobs.employment = data.employment;
            app.store.jobs.employerType = data.employer_type;
            app.store.jobs.schedule = data.schedule;
            app.store.jobs.label = data.vacancy_label;
        }
    });

    app.utils.fs.readFile(process.cwd() + '/public/json/area.json', "utf8", function(err, data){
        if (!err) app.store.jobs.area = JSON.parse(data);
    });

    app.utils.fs.readFile(process.cwd() + '/public/json/metro.json', "utf8", function(err, data){
        if (!err) app.store.jobs.metro = JSON.parse(data);
    });

    app.utils.fs.readFile(process.cwd() + '/public/json/specialization.json', "utf8", function(err, data){
        if (!err) app.store.jobs.specialization = JSON.parse(data);
    });

    app.utils.fs.readFile(process.cwd() + '/public/json/industry.json', "utf8", function(err, data){
        if (!err) app.store.jobs.industry = JSON.parse(data);
    });

}

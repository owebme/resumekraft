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

    app.store.migrate = {};

    app.utils.fs.readFile(process.cwd() + '/migrate/users.json', "utf8", function(err, data){
        if (!err) app.store.migrate.users = JSON.parse(data);
    });

    app.utils.fs.readFile(process.cwd() + '/migrate/city.json', "utf8", function(err, data){
        if (!err) app.store.migrate.city = JSON.parse(data);
    });

    app.utils.fs.readFile(process.cwd() + '/migrate/langList.json', "utf8", function(err, data){
        if (!err) app.store.migrate.langList = JSON.parse(data);
    });

    app.utils.fs.readFile(process.cwd() + '/migrate/resumes2.json', "utf8", function(err, data){
        if (!err) app.store.migrate.resumes = JSON.parse(data);
    });

    app.utils.fs.readFile(process.cwd() + '/migrate/resumesEducation.json', "utf8", function(err, data){
        if (!err) app.store.migrate.resumesEducation = JSON.parse(data);
    });

    app.utils.fs.readFile(process.cwd() + '/migrate/resumesJob2.json', "utf8", function(err, data){
        if (!err) app.store.migrate.resumesJob = JSON.parse(data);
    });

    app.utils.fs.readFile(process.cwd() + '/migrate/resumesLanguage.json', "utf8", function(err, data){
        if (!err) app.store.migrate.resumesLanguage = JSON.parse(data);
    });

}

module.exports = function(){

    app.controllers = {};

    app.controllers.resume = require('./resume');

    app.controllers.jobs = {
        index: require('./jobs')(),
        search: require('./jobs/search')(),
        vacancy: require('./jobs/vacancy')(),
        employer: require('./jobs/employer')()
    }

    app.controllers.blog = {
        index: require('./blog')(),
        content: require('./blog/content')()
    }

    app.controllers.parser = require('./parser')();

    app.controllers.auth = require('./auth')();

    app.controllers.payment = require('./payment')();

}

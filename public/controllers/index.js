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

    app.controllers.samples = {
        index: require('./samples')()
    }

    app.controllers.parser = require('./parser')();

    app.controllers.auth = {
        index: require('./auth')(),
        activate: require('./auth/activate')()
    }

    app.controllers.payment = require('./payment')();

}

module.exports = function(){

    app.controllers = {};

    app.controllers.resume = require('./resume');

    app.controllers.jobs = {
        index: require('./jobs')(),
        search: require('./jobs/search')()
    }

    app.controllers.blog = {
        index: require('./blog')(),
        content: require('./blog/content')()
    }

    app.controllers.parser = require('./parser')();

    app.controllers.auth = {
        login: require('./auth/login')(),
        register: require('./auth/register')()
    }

    app.controllers.payment = require('./payment')();

}

module.exports = function(app){

    app.controllers = {};

    app.controllers.blog = {
        index: require('./blog')(app),
        content: require('./blog/content')(app)
    }

    app.controllers.parser = require('./parser')(app);

    app.controllers.auth = {
        login: require('./auth/login')(app),
        register: require('./auth/register')(app)
    }

    app.controllers.payment = require('./payment')(app);

}

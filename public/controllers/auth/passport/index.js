var passport = require('passport');

module.exports = function(url){

    require('./vkontakte')(url);
    require('./facebook')(url);
    require('./twitter')(url);
    require('./odnoklassniki')(url);
    require('./google')(url);

    app.get(url + '/fail', function (req, res) {
        API.auth.passport.fail(req, res);
    });

    passport.serializeUser(function (user, done) {
        done(null, JSON.stringify(user));
    });
    passport.deserializeUser(function (data, done) {
        try {
            done(null, JSON.parse(data));
        } catch (e) {
            done(err)
        }
    });
}

var passport = require('passport'),
    Strategy = require('passport-facebook').Strategy;

module.exports = function(url){

	var route = app.express.Router();

    passport.use('fb', new Strategy({
        clientID: app.config.public.get("auth:fb:clientID"),
        clientSecret: app.config.public.get("auth:fb:clientSecret"),
        callbackURL: app.config.public.get("auth:fb:callbackURL"),
        profileFields: ['photos', 'birthday', 'email', 'gender', 'first_name', 'last_name']
    },
    function (accessToken, refreshToken, profile, done) {
        var data = {
            profileId: profile.id,
            url: "https://facebook.com/" + profile.id,
            email: profile._json.email || null,
            name: profile._json.first_name || null,
            surname: profile._json.last_name || null,
            gender: profile.gender || null,
            avatar: profile.photos && profile.photos.length && profile.photos[0].value || null,
            birthday: profile._json.birthday && profile._json.birthday.match(/(.+)-(.+)-(.+)/) || null
        }
        return done(null, data);
    }));

    route.get('/fb', passport.authenticate('fb', {
        scope: ['user_photos', 'user_birthday', 'email']
    }));

    route.get('/fb/callback', passport.authenticate('fb', {
        failureRedirect: url + '/fail'
    }),
    function (req, res) {
        API.auth.passport.callback("fb", req, res);
    });

    app.use(url, route);
};

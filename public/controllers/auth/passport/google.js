var passport = require('passport'),
    Strategy = require('passport-google-oauth20').Strategy;

module.exports = function(url){

	var route = app.express.Router();

    passport.use('gl', new Strategy({
        clientID: app.config.public.get("auth:gl:clientID"),
        clientSecret: app.config.public.get("auth:gl:clientSecret"),
        callbackURL: app.config.public.get("auth:gl:callbackURL")
    },
    function (accessToken, refreshToken, profile, done) {
        var data = {
            profileId: profile.id,
            url: "https://plus.google.com/" + profile.id,
            email: profile._json.emails && profile._json.emails.length && profile._json.emails[0].value || null,
            name: profile._json.name && profile._json.name.givenName || null,
            surname: profile._json.name && profile._json.name.familyName || null,
            gender: profile._json.gender || null,
            avatar: profile._json.image && profile._json.image.url || null,
            birthday: profile._json.birthday || null
        }
        return done(null, data);
    }));

    route.get('/gl', passport.authenticate('gl', {
        scope: ['profile', 'email']
    }));

    route.get('/gl/callback', passport.authenticate('gl', {
        failureRedirect: url + '/fail'
    }),
    function (req, res) {
        API.auth.passport.callback("gl", req, res);
    });

    app.use(url, route);
};

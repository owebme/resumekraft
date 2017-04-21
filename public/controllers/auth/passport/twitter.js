var passport = require('passport'),
    Strategy = require('passport-twitter').Strategy;

module.exports = function(url){

	var route = app.express.Router();

    passport.use('tw', new Strategy({
        consumerKey: app.config.public.get("auth:tw:consumerKey"),
        consumerSecret: app.config.public.get("auth:tw:consumerSecret"),
        callbackURL: app.config.public.get("auth:tw:callbackURL")
    },
    function (accessToken, refreshToken, profile, done) {
        var data = {
            profileId: profile.id,
            url: "https://twitter.com/" + profile.username,
            email: profile._json.email || null,
            name: profile._json.name.split(" ")[0] || null,
            surname: profile._json.name.split(" ")[1] || null,
            gender: profile._json.gender || null,
            avatar: profile._json.profile_image_url_https && !profile._json.profile_image_url_https.match(/default_profile/) && profile._json.profile_image_url_https || null
        }
        return done(null, data);
    }));

    route.get('/tw', passport.authenticate('tw'));

    route.get('/tw/callback', passport.authenticate('tw', {
        failureRedirect: url + '/fail'
    }),
    function (req, res) {
        API.auth.passport.callback("tw", req, res);
    });

    app.use(url, route);
};

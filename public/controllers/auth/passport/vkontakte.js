var passport = require('passport'),
    Strategy = require('passport-vkontakte').Strategy;

module.exports = function(url){

	var route = app.express.Router();

    passport.use('vk', new Strategy({
        clientID: app.config.public.get("auth:vk:clientID"),
        clientSecret: app.config.public.get("auth:vk:clientSecret"),
        callbackURL: app.config.public.get("auth:vk:callbackURL"),
        scope: ['email'],
        profileFields: ['email', 'bdate', 'photo_big'],
        lang: 'ru'
    },
    function (accessToken, refreshToken, profile, done) {
        var data = {
            profileId: profile.id,
            url: "https://vk.com/" + profile.username,
            email: profile._json.email || null,
            name: profile._json.first_name || null,
            surname: profile._json.last_name || null,
            gender: profile.gender || null,
            avatar: profile._json.photo_big && !profile._json.photo_big.match(/camera_/) && profile._json.photo_big || null,
            birthday: profile.birthday || null
        }
        return done(null, data);
    }));

    route.get('/vk', passport.authenticate('vk', {
        display: 'popup'
    }));

    route.get('/vk/callback', passport.authenticate('vk', {
        failureRedirect: url + '/fail'
    }),
    function (req, res) {
        API.auth.passport.callback("vk", req, res);
    });

    app.use(url, route);
};

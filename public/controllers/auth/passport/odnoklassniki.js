var passport = require('passport'),
    Strategy = require('passport-odnoklassniki').Strategy;

module.exports = function(url){

	var route = app.express.Router();

    passport.use('dk', new Strategy({
        clientID: app.config.public.get("auth:dk:clientID"),
        clientPublic: app.config.public.get("auth:dk:clientPublic"),
        clientSecret: app.config.public.get("auth:dk:clientSecret"),
        callbackURL: app.config.public.get("auth:dk:callbackURL")
    },
    function (accessToken, refreshToken, profile, done) {
        var data = {
            profileId: profile.id,
            url: "https://ok.ru/profile/" + profile.id,
            email: profile._json.email || null,
            name: profile._json.first_name,
            surname: profile._json.last_name || null,
            gender: profile._json.gender || null,
            avatar: profile._json.pic_3 && !profile._json.pic_3.match(/stub_/) && profile._json.pic_3 || null,
            birthday: profile._json.birthday || null
        }
        return done(null, data);
    }));

    route.get('/dk', passport.authenticate('dk'));

    route.get('/dk/callback', passport.authenticate('dk', {
        failureRedirect: url + '/fail'
    }),
    function (req, res) {
        API.auth.passport.callback("dk", req, res);
    });

    app.use(url, route);
};

module.exports = function(){

    app.get('/', function(req, res) {
        var output = app.riot.render(app.tags("home"), app.appClient);
        res.render(app.device.type == "phone" ? 'index-mobile' : 'index', {content: output});
    });

    app.post('/login', app.controllers.auth.login);
    app.post('/register', app.controllers.auth.register);
    app.get('/logout', function(req, res) {
        delete req.session.user;
        res.redirect('/');
    });

    app.get('/private/', app.checkAuth('/?signin'), function(req, res) {
        res.render('private');
    });

    app.get('/private/resume/:alias', app.checkAuth('/?signin'), app.controllers.resume("editing"));
    app.get('/resume/:alias', app.controllers.resume("view"));

    app.get('/premium/', function(req, res) {
        var output = app.riot.render(app.tags("premium"), app.appClient);
        res.render(app.device.type == "phone" ? 'index-mobile' : 'index', {content: output});
    });
    app.get('/premium/workflow', function(req, res) {
        res.render('workflow');
    });
    app.get('/premium/promo', function(req, res) {
        if (app.device.type == "phone"){
            res.redirect('/');
        }
        else {
            res.render('premiumSlider');
        }
    });
    app.get('/premium/demo', app.controllers.resume("demo"));
    app.get('/premium/editing', app.controllers.resume("demo-editing"));

    app.get('/jq-test/', function(req, res) {
        var output = app.riot.render(app.tags("jqtest"), app.appClient);
        res.render(app.device.type == "phone" ? 'index-mobile' : 'index', {content: output});
    });

    app.get('/blog/', app.controllers.blog.index);
    app.get('/blog/page_:page', app.controllers.blog.index);
    app.get('/blog/:alias', app.controllers.blog.content);

    app.get('/parser/all', app.controllers.parser);

    app.post('/payment/?pay=yamoney', app.controllers.payment);

    require(process.cwd() + '/public/API')('/public/api');
    require(process.cwd() + '/assets/API')('/private/api');
}

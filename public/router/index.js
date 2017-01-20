module.exports = function(app){

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

    app.get('/private/', function(req, res) {
        res.render('private');
    });

    // app.get('/private/', app.checkAuth('/?signin'), function(req, res) {
    //     res.render('private');
    // });

    app.get('/premium/', function(req, res) {
        var output = app.riot.render(app.tags("premium"), app.appClient);
        res.render(app.device.type == "phone" ? 'index-mobile' : 'index', {content: output});
    });

    app.get('/premium/workflow', function(req, res) {
        res.render('workflow');
    });

    app.get('/premium/editing', function(req, res) {
        res.render('editing');
    });

    app.get('/jq-test/', function(req, res) {
        var output = app.riot.render(app.tags("jqtest"), app.appClient);
        res.render(app.device.type == "phone" ? 'index-mobile' : 'index', {content: output});
    });

    app.get('/blog/', app.controllers.blog.index);
    app.get('/blog/page_:page', app.controllers.blog.index);
    app.get('/blog/:alias', app.controllers.blog.content);

    app.get('/parser/all', app.controllers.parser);

    app.post('/payment/?pay=yamoney', app.controllers.payment);

    require(process.cwd() + '/assets/API')(app);
}

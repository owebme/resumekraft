module.exports = function(){

    app.get('/', function(req, res) {
        var output = app.riot.render(app.tags("home", req.device), req.appClient);
        res.render('index', {
            content: output,
            device: req.device.type,
            isMobile: req.device.isMobile
        });
    });

    app.post('/auth', app.controllers.auth);
    app.get('/logout', function(req, res) {
        delete req.session.user;
        res.redirect('/');
    });

    app.get('/private/', app.checkAuth('/?signin'), function(req, res) {
        res.render('private', {
            device: req.device.type,
            isMobile: req.device.isMobile,
            user: {
                oauth: req.account.oauth,
                photo: req.account.photo,
                name: req.account.name,
                surname: req.account.surname
            }
        });
    });

    app.get('/private/resume/:alias', app.checkAuth('/?signin'), app.controllers.resume("editing"));
    app.get('/resume/:alias', app.controllers.resume("view"));

    app.get('/premium/', function(req, res) {
        if (req.device.type == "phone"){
            res.redirect('/');
        }
        else {
            var output = app.riot.render(app.tags("premium", req.device), req.appClient);
            res.render('index', {
                title: app.config.get('title:premium'),
                content: output,
                device: req.device.type,
                isMobile: req.device.isMobile
            });
        }
    });
    app.get('/premium/workflow', function(req, res) {
        res.render('workflow');
    });
    app.get('/premium/promo', function(req, res) {
        if (req.device.type == "phone"){
            res.redirect('/');
        }
        else {
            res.render('premiumSlider');
        }
    });
    app.get('/premium/demo', app.controllers.resume("demo"));
    app.get('/premium/editing', app.controllers.resume("demo-editing"));

    app.get('/jq-test/', function(req, res) {
        res.redirect(301, '/jp-test/');
    });
    app.get('/jp-test/', function(req, res) {
        var output = app.riot.render(app.tags("jptest", req.device), req.appClient);
        res.render('index', {
            title: app.config.get('title:jp-test'),
            section: "jp-test",
            content: output,
            device: req.device.type,
            isMobile: req.device.isMobile
        });
    });

    app.get('/jobs/', function(req, res) {
        res.redirect(301, '/jobs/search');
    });
    app.get('/jobs/search', app.controllers.jobs.search);
    app.get('/jobs/vacancy/:alias/:name', app.controllers.jobs.vacancy);
    app.get('/jobs/employer/:alias/:name', app.controllers.jobs.employer);

    app.get('/blog/', app.controllers.blog.index);
    app.get('/blog/page_:page', app.controllers.blog.index);
    app.get('/blog/:alias', app.controllers.blog.content);

    app.get('/parser/all', app.controllers.parser);

    app.post('/payment/?pay=yamoney', app.controllers.payment);

    require(process.cwd() + '/public/controllers/auth/passport')('/auth');
    require(process.cwd() + '/assets/API')('/private/api');
    require(process.cwd() + '/public/API')('/public/api');
}

module.exports = function(){

    app.get('/', function(req, res) {
        if (req.session.user && (req.query.signin !== undefined || req.query.signup !== undefined)){
            res.redirect('/private');
        }
        else {
            var output = app.riot.render(app.tags("home", req.device), req.appClient);
            res.render('index', {
                content: output,
                device: req.device.type,
                isMobile: req.device.isMobile
            });
        }
    });

    app.get(['/auth/signin', '/auth/signup', '/auth/remember'], function(req, res) {
        res.render('index', {
            section: 'auth',
            content: '<section-auth data-theme="' + (req.url.match(/signup/) ? 'white' : 'dark') + '"></section-auth>',
            device: req.device.type,
            isMobile: req.device.isMobile
        });
    });
    app.get('/auth/', function(req, res) {
        res.redirect(301, '/auth/signin');
    });
    app.get('/remember/', function(req, res) {
        res.redirect(301, '/?signin');
    });
    app.get('/feadback/', function(req, res) {
        res.redirect(302, '/');
    });
    app.post('/auth', app.controllers.auth.index);
    app.get('/activate/:id/:hash', app.controllers.auth.activate);
    app.get('/logout', function(req, res) {
        delete req.session.user;
        res.redirect('/');
    });

    app.get('/test_mailer', function(req, res){
        var compile = app.swig.compileFile(process.cwd() + '/public/templates/mailer/test.html');
        var output = compile({
            //cover: "bg",
            //text: "Мы рады, что вы обратились к нам за услугой. Наши специалисты с удовольствием вам помогут в написании резюме и свяжутся с вами 10 мая 2017 г. На майские праздники у нас действует акция - в подарок ",
            //button: "Подтвердить активацию",
            domain: "https://resumekraft.ru"
        });
        // var body = {
        //     to: "workkraft@yandex.ru, owebme@gmail.com, maxfull@mail.ru, i-domashova@mail.ru",
        //     subject: 'Ваш заказ принят!',
        //     html: output
        // }
        // API.mailer.send(body, function(err, data){
        //     res.send(data);
        // });
        res.end(output);
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

    app.get('/premium/slider', function(req, res) {
        res.render('premiumSlider', {
            title: app.config.get('title:premium'),
            device: req.device.type,
            isMobile: req.device.isMobile
        });
    });
    app.get('/premium/', function(req, res) {
        if (req.device.type == "phone"){
            res.redirect(302, '/');
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
        if (req.device.type == "phone"){
            res.redirect(302, '/premium/demo');
        }
        else {
            res.render('workflow', {
                device: req.device.type
            });
        }
    });
    app.get('/premium/promo', function(req, res) {
        if (req.device.type == "phone"){
            res.redirect(302, '/');
        }
        else {
            res.render('promoSlider', {
                device: req.device.type
            });
        }
    });
    app.get('/premium/demo', app.controllers.resume("demo"));
    app.get('/premium/editing', app.controllers.resume("demo-editing"));

    app.get('/jq-test/', function(req, res) {
        res.redirect(301, '/jp-test/');
    });
    app.get('/jq-test/example', function(req, res) {
        res.redirect(301, '/jp-test/');
    });
    app.get('/jp-test/', function(req, res) {
        var output = app.riot.render(app.tags("jptest", req.device), req.appClient);
        res.render('index', {
            title: app.config.get('title:jp-test'),
            image: app.config.public.get('domain') + "/public/images/popup/jptest.png",
            section: "jp-test",
            content: output,
            device: req.device.type,
            isMobile: req.device.isMobile
        });
    });

    app.get('/jobs/', function(req, res) {
        res.redirect(302, '/jobs/search');
    });
    app.get('/jobs/search', app.controllers.jobs.search);
    app.get('/jobs/vacancy/:alias/:name', app.controllers.jobs.vacancy);
    app.get('/jobs/employer/:alias/:name', app.controllers.jobs.employer);

    app.get('/blog/', app.controllers.blog.index);
    app.get('/blog/page_:page', app.controllers.blog.index);
    app.get('/blog/:alias', app.controllers.blog.content);

    app.get('/samples/', app.controllers.samples.index);

    app.get('/parser/all', app.controllers.parser);

    app.post('/payment/yamoney', app.controllers.payment);

    app.get('/applicant/resumes/*', function(req, res) {
        res.redirect(301, '/');
    });

    require(process.cwd() + '/public/controllers/auth/passport')('/auth');
    require(process.cwd() + '/public/controllers/auth/remember')('/remember');
    require(process.cwd() + '/public/controllers/support')('/private/support');
    require(process.cwd() + '/assets/API')('/private/api');
    require(process.cwd() + '/public/API')('/public/api');
}

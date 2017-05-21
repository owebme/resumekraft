var log             = require('./libs/log')(module),
    express         = require('express'),
    http            = require('http'),
    request         = require('request'),
    url             = require('url'),
    glob            = require('glob'),
    path            = require('path'),
    fs              = require('fs'),
    swig            = require('swig'),
    riot            = require('riot'),
    favicon         = require('serve-favicon'),
    logger          = require('morgan'),
    bodyParser      = require('body-parser'),
    cookieParser    = require('cookie-parser'),
    session         = require('express-session'),
    memoryStore     = session.MemoryStore,
    underscore      = require('underscore'),
    passport        = require('passport'),
    device          = require('express-device'),
    redis           = require('redis');


var config = require('./libs/config')({
    global: "./config.json",
    public: "./public/config.json",
    private: "./assets/config.json"
});

global.app = express();
app.express = express;
app.req = request;
app.swig = swig;
app.config = config.use("global");
app.config.public = config.use("public");
app.config.private = config.use("private");
app.riot = riot;
app.store = {};
app._tags = {
    commons: {},
    default: {},
    mobile: {}
};
app.async = require('async');
app.db = require('./libs/db/mongoose')(log, app.config);
app.mysql = require('./libs/db/mysql')(log, app.config);
app.redis = redis.createClient();
app.log = log;
app.errHandler = require('./libs/errHandler');
app.utils = require('./libs/utils');
app.utils.fs = fs;
app.utils.url = url;
underscore.extend(app.utils, underscore);
app.moment = require('moment');
app.moment.locale('ru');
app.utils.moment = app.moment;

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + (process.env.NODE_ENV == "production" ? "/views/production" : "/views"));
swig.setDefaults({ cache: false });
app.set('view cache', false);
app.swig = swig;

// require all the riot tags
require('./public/templates')();

// require all store
require('./public/store')();

app.use(favicon(path.join(__dirname, '/', 'favicon.ico')));
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json({limit: '2mb'}));
app.use(bodyParser.urlencoded({ limit: '2mb', extended: false }));
app.use(device.capture());
app.use(session({
    secret: app.config.get('session:secret'),
	key: app.config.get('session:key'),
    cookie: app.config.get('session:cookie'),
    store: new memoryStore(),
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
// app.use(passport.session());
app.use(express.static(path.join(__dirname, '/')));

if (process.env.NODE_ENV == "production"){
    app.use(function(req, res, next) {
        if (req.headers.host.slice(0, 4) === 'www.') {
            var newHost = req.headers.host.slice(4);
            return res.redirect(301, req.protocol + '://' + newHost + req.originalUrl);
        }
        next();
    });
}

app.checkAuth = require('./public/router/checkAuth');

app.use(function(req, res, next) {
    var device = {
        ua: req.headers['user-agent'],
        type: req.device.type,
        isMobile: req.device.type.match(/tablet|phone/) ? true : false
    };
    req.device.ua = device.ua;
    req.device.isMobile = device.isMobile;
    delete req.device.parser;
    delete req.device.name;

    req.appClient = {
        domain: app.config.public.get("domain"),
        utils: app.utils,
        moment: app.moment,
        device: device,
        user: req.session.user,
        isServer: true
    };

    //if (process.env.NODE_ENV == "production"){
        req.account = req.session.user;
        req.accountId = req.session.user ? app.utils.ObjectId(req.session.user.accountID) : null;
    //}
    // else {
    //     req.account = {
    //         plan: "premium"
    //     }
    //     req.accountId = app.utils.ObjectId('58febc8f54e905a282ccf040');
    // }
    req.device.type = req.query.debug ? req.query.debug : req.device.type;
    req.clientIP = app.utils.getClientAddress(req);
    next();
});

require('./public/controllers')();
require('./public/router')();

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  app.log.error('Internal error(%d): %s', (err.status || 500), err.message);
  res.status(err.status || 500);
  res.render('error', {
    message: err.status || "Error",
    error: {
        status: err.message
    }
  });
});

// app.db.collection('accounts').drop();
// app.db.collection('resumes').drop();
//API.migrate.accounts();

var server = http.createServer(app),
    ipTables = {};

// server.on('connection', function(socket){
//     var ip = socket.address().address;
//     var time = Date.now();
//     if (ip in ipTables) {
//         if (time - ipTables[ip].time > 3000) {
//             ipTables[ip] = {
//                 count: 1,
//                 time: time
//             };
//             return;
//         }
//         ipTables[ip].count++;
//         ipTables[ip].time = time;
//         if (ipTables[ip].count > 100) { // более 100 запросов подряд
//             socket.end('HTTP/1.1 429 Too Many Requests\n\n');
//             socket.destroy(); // Обрываем соеденение
//         }
//         return;
//     }
//     ipTables[ip] = {
//         count: 1,
//         time: time
//     };
// });

server.listen(app.config.get('port'), function(){
	app.log.info('Express server listening on port ' + app.config.get('port'));
});

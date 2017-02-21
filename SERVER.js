var config          = require('./libs/config'),
    log             = require('./libs/log')(module),
    express         = require('express'),
    http            = require('http'),
    request         = require('request'),
    glob            = require('glob'),
    path            = require('path'),
    fs              = require('fs'),
    swig            = require('swig'),
    riot            = require('riot'),
    favicon         = require('serve-favicon'),
    logger          = require('morgan'),
    bodyParser      = require('body-parser'),
    session         = require('express-session'),
    memoryStore     = session.MemoryStore,
    deflate         = require('permessage-deflate'),
    underscore      = require('underscore'),
    device          = require('express-device');

// global.api = {};
//
// ['fs', 'os', 'util', 'http'].map(function(m) {
//     api[m] = require(m);
// });

if (!global.app){
    global.app = express();
    app.express = express;
    app.config = config;
    app.riot = riot;
    app.cache = {};
    app._tags = {
        commons: {},
        default: {},
        mobile: {}
    };
    app.async = require('async');
    app.db = require('./libs/db/mongoose')(log, config);
    app.mysql = require('./libs/db/mysql')(log, config);
    app.log = log;
    app.errHandler = require('./libs/errHandler');
    app.utils = require('./libs/utils');
    app.utils.fs = fs;
    underscore.extend(app.utils, underscore);
    app.moment = require('moment');
    app.moment.locale('ru');
}

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + (process.env.NODE_ENV == "production" ? "/views/production" : "/views"));
swig.setDefaults({ cache: false });
app.set('view cache', false);
app.swig = swig;

// require all the riot tags
require('./public/templates')();

app.use(favicon(path.join(__dirname, '/', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({limit: '2mb'}));
app.use(bodyParser.urlencoded({ limit: '2mb', extended: false }));
app.use(device.capture());
app.use(session({
    secret: config.get('session:secret'),
	key: config.get('session:key'),
    cookie: config.get('session:cookie'),
    store: new memoryStore(),
    resave: true,
    saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, '/')));

app.checkAuth = require('./public/router/checkAuth');

app.appClient = {
    utils: app.utils,
    moment: app.moment,
    isServer: true
}
app.use(function(req, res, next) {
    app.device = {
        ua: req.headers['user-agent'],
        type: req.device.type,
        isMobile: req.device.type.match(/tablet|phone/) ? true : false
    };
    app.appClient.device = app.device;
    app.appClient.user = req.session.user;

    if (process.env.NODE_ENV == "production"){
        app.account = req.session.user;
        app.accountId = req.session.user ? app.utils.ObjectId(req.session.user.accountID) : null;
    }
    else {
        app.account = {
            plan: "premium"
        }
        app.accountId = app.utils.ObjectId('588658bf07f3cad6d6f3aaa1');
    }
    app.device.type = req.query.debug ? req.query.debug : app.device.type;
    app.clientIP = app.utils.getClientAddress(req);
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

var server = http.createServer(app);
server.listen(config.get('port'), function(){
	app.log.info('Express server listening on port ' + config.get('port'));
});

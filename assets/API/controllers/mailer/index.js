var nodemailer = require('nodemailer');

module.exports = function(){

    var API = {},
    $default = {
        from: {
            name: "ResumeKraft",
            email: app.config.public.get('email:noreply')
        }
    },
    transporter = nodemailer.createTransport({
        host: 'mail.resumekraft.ru',
        port: 465,
        secure: true,
        auth: {
            // user: app.config.public.get('email:inbox'),
            // pass: 'W0AnQjs4pBtCZwcn'
            user: app.config.public.get('email:noreply'),
            pass: 'QMkUuttuyKsCbB78'
        },
        tls: {
            rejectUnauthorized: false
        }
        // service: 'gmail',
        // auth: {
        //     user: 'owebme@gmail.com',
        //     pass: 'web1235741'
        // }
    });

    API.send = function(options, callback){
        var options = options || {},
            from = {
            name: options.from && options.from.name || $default.from.name,
            email: options.from && options.from.email || $default.from.email
        }
        var html = null;
        if (options.html){
            if (app.utils.isObject(options.html)){
                var template = options.html.template || "simple",
                    compile = app.swig.compileFile(process.cwd() + '/public/templates/mailer/' + template + '.html'),
                    params = options.html;

                params.subject = options.subject;
                params.cover = params.cover && params.cover !== false ? params.cover : params.cover === undefined ? "bg" : false;
                params.domain = params.domain || app.config.public.get('domain');
                html = compile(params);
            }
            else {
                html = options.html;
            }
        }
        transporter.sendMail({
		    from: '"' + from.name + '" <' + from.email + '>',
		    to: options.to,
		    subject: options.subject + ' ✔',
		    text: options.text,
		    html: html,
            attachments: options.attach
		},
        function(err, data){
            callback(err, data);
		})
    };

    return API;
}

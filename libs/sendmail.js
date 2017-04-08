var nodemailer = require('nodemailer');

module.exports = function(){

    var API = {},
    $default = {
        from: {
            name: "ResumeKraft",
            email: "inbox@resumekraft.ru"
        }
    };

    API.transporter = nodemailer.createTransport({
        host: 'mail.resumekraft.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'inbox@resumekraft.ru',
            pass: 'W0AnQjs4pBtCZwcn'
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
        API.transporter.sendMail({
		    from: '"' + from.name + '" <' + from.email + '>',
		    to: options.to,
		    subject: options.subject + ' ✔',
		    text: options.text,
		    html: options.html,
            attachments: options.attach
		},
        function(err, data){
            callback(err, data);
		})
    };

    return API;
}

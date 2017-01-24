var fs = require('fs');
var pdf = require('html-pdf');

module.exports = function(app){

	return function(req, res, next){

        var id = req.body.id,
            pathPdf = app.config.get('path:pdf') + app.accountId + '.pdf',
            output = app.swig.renderFile(process.cwd() + app.config.get('path:template:basic'), {
                num: req.body.template,
                content: req.body.content
            });

        var options = {
            width: '1218px',
            height: 'auto',
            base: 'http://192.168.1.64:3000',
            timeout: 10000
        };

        pdf.create(output, options).toFile(process.cwd() + pathPdf, function(err, data) {
            if (!err) {
                app.db.collection('accounts').update({
                    "_id": app.accountId
                },{
                    $push: {
                        "history.events": {
                            name: "resumeConvertPdf",
                            device: app.device,
                            date: app.moment().format()
                        }
                    }
                });
                res.statusCode = 200;
                res.send({
                    pdf: pathPdf
                });
            }
            else {
                res.statusCode = 404;
                res.send(err);
            }
        });
    }
}

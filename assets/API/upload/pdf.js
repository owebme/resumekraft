var fs = require('fs');
var pdf = require('html-pdf');

module.exports = function(app){

	return function(req, res, next){

        var id = req.body.id,
            pathPdf = app.config.get('path:pdf') + id + '.pdf',
			options = app.config.get('resume:pdf'),
            output = app.swig.renderFile(process.cwd() + app.config.get('path:template:basic'), {
                num: req.body.template,
				stamp: req.body.stamp,
				width: options.width,
                content: req.body.content
            });

		options.width = options.width + "px";

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

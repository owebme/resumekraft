var fs = require('fs');
var pdf = require('html-pdf');
var FileSaver = require('file-saver');

module.exports = function() {

	return function(req, res, next){

        var id = req.body.id,
			plan = req.body.plan,
            output = app.swig.renderFile(process.cwd() + '/public/templates/resume/basic/index.html', {
            num: req.body.template,
            content: req.body.content
        });

        var options = {
            width: '1218px',
            height: 'auto',
            base: 'http://192.168.1.64:3000',
            timeout: 10000
        };

        pdf.create(output, options).toFile(process.cwd() + '/assets/files/pdf/example.pdf', function(err, data) {
            if (err) {
                //console.log(err);
                res.statusCode = 404;
                res.send(err);
            }
            else {
                //console.log(data); // { filename: '/app/businesscard.pdf' }
                res.statusCode = 200;
                res.send({
                    filename: '/assets/files/pdf/example.pdf'
                });
            }
        });
    }
}

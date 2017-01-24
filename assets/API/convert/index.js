var fs = require('fs');
var pdf = require('html-pdf');

module.exports = function(app) {

	return function(req, res, next){

        var id = req.body.id,
			photo = req.body.photo,
			photoSave = false,
			plan = req.body.plan,
            output = app.swig.renderFile(process.cwd() + '/public/templates/resume/basic/index.html', {
            num: req.body.template,
            content: req.body.content
        });

		if (photo){
			var base64Data = photo.replace(/^data:image\/jpeg;base64,/,"");
			fs.writeFile(process.cwd() + '/public/files/photo/' + app.accountId + '.jpg', base64Data, 'base64', function(err){
				if (!err) photoSave = true;
	        })
		}

        var options = {
            width: '1218px',
            height: 'auto',
            base: 'http://192.168.1.64:3000',
            timeout: 10000
        };

        pdf.create(output, options).toFile(process.cwd() + '/public/files/pdf/' + app.accountId + '.pdf', function(err, data) {
            if (err) {
                //console.log(err);
                res.statusCode = 404;
                res.send(err);
            }
            else {
                //console.log(data); // { filename: '/app/businesscard.pdf' }
                res.statusCode = 200;
                res.send({
                    pdf: '/public/files/pdf/' + app.accountId + '.pdf',
					photo: photoSave ? '/public/files/photo/' + app.accountId + '.jpg' : null
                });
            }
        });
    }
}

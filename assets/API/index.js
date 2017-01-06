module.exports = function(app){

	app.post('/private/api/resume/convert/pdf', require('./convert')(app));

	//app.post('/api/resume/print', require('./print')(app));

}

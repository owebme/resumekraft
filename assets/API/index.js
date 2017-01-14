module.exports = function(app){

	// Initialize
	app.get('/private/api/data/init', app.checkAuth(), require('./data/init')(app));

	app.post('/private/api/resume/convert/pdf', require('./convert')(app));

	//app.post('/api/resume/print', require('./print')(app));

}

module.exports = function(app){

	// Initialize
	app.get('/private/api/data/init', app.checkAuth(), require('./data/init')(app));

	// Profile data
	app.post('/private/api/data/profile', app.checkAuth(), require('./data/profile')(app));

	// Upload photo profile
	app.post('/private/api/upload/photo', app.checkAuth(), require('./upload/photo')(app));

	// Convert PDF resume
	app.post('/private/api/upload/pdf', app.checkAuth(), require('./upload/pdf')(app));

	// Report metrika
	app.post('/private/api/metrika', app.checkAuth(), require('./metrika')(app));

	// Report log
	app.post('/private/api/log', app.checkAuth(), require('./log')(app));

}

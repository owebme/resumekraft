module.exports = function(app){

	// Initialize
	app.get('/private/api/data/init', app.checkAuth(), require('./data/init')(app));

	// Profile data
	app.put('/private/api/data/profile', app.checkAuth(), require('./data/profile')(app));

	// Upload photo profile & resume
	app.put('/private/api/upload/photo', app.checkAuth(), require('./upload/photo')(app));

	// Resume create
	require('./resume')(app, '/private/api/resume');

	// Convert PDF resume
	app.post('/private/api/convert/pdf', app.checkAuth(), require('./upload/pdf')(app));

	// Report metrika
	app.post('/private/api/metrika', app.checkAuth(), require('./metrika')(app));

	// Report log
	app.post('/private/api/log', app.checkAuth(), require('./log')(app));

}

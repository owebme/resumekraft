module.exports = function(url){

	// Initialize
	app.get(url + '/data/init', app.checkAuth(), require('./data/init')());

	// Profile data
	app.put(url + '/data/profile', app.checkAuth(), require('./data/profile')());

	// Upload photo profile & resume
	app.put(url + '/upload/photo', app.checkAuth(), require('./upload/photo')());

	// Resume private API
	require('./resume')(url + '/resume');

	// Convert PDF resume
	app.post(url + '/convert/pdf', app.checkAuth(), require('./upload/pdf')());

	// Report metrika
	app.post(url + '/metrika', app.checkAuth(), require('./metrika')());

	// Report log
	app.post(url + '/log', app.checkAuth(), require('./log')());

}

module.exports = function(url){

	// Global API
	require('./controllers')(url);

	// Initialize
	app.get(url + '/data/init', app.checkAuth(), require('./data/init')());

	// Upload photo profile
	app.put(url + '/upload/photo', app.checkAuth(), require('./upload/photo')());

	// Profile
	require('./profile')(url + '/profile');

	// Resume private API
	require('./resume')(url + '/resume');

	// Inbox private API
	require('./inbox')(url + '/inbox');

	// Autosuggest
	require('./suggest')(url + '/suggest');

	// Orders private API
	require('./orders')(url + '/orders');

	// JPtest private API
	require('./jptest')(url + '/jptest');

	// Report metrika
	app.post(url + '/metrika', app.checkAuth(), require('./metrika')());

	// Report log
	app.post(url + '/log', app.checkAuth(), require('./log')());

}

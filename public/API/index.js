module.exports = function(url){

	// Resume public API
	require('./resume')(url + '/resume');

	// Autosuggest
	require(process.cwd() + '/assets/API/suggest')(url + '/suggest');

	// Jobs search public API
	require('./jobs/search')(url + '/jobs/search');

	// Jobs vacancy public API
	require('./jobs/vacancy')(url + '/jobs/vacancy');

	// Jobs employer public API
	require('./jobs/employer')(url + '/jobs/employer');

	// Blog public API
	require('./blog')(url + '/blog');

}

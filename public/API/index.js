module.exports = function(url){

	// Resume public API
	require('./resume')(url + '/resume');

	// Autosuggest
	require(process.cwd() + '/assets/API/suggest')(url + '/suggest');

	// Jobs search public API
	require('./jobs/search')(url + '/jobs/search');

	// Blog public API
	require('./blog')(url + '/blog');

}

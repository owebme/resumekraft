module.exports = function(url){

	// Resume public API
	require('./resume')(url + '/resume');

	// Autosuggest
	require(process.cwd() + '/assets/API/suggest')(url + '/suggest');

	// Jobs public API
	// require('./jobs')(url + '/jobs');

	// Blog public API
	require('./blog')(url + '/blog');

}

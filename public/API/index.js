module.exports = function(url){

	// Resume public API
	require('./resume')(url + '/resume');

	// Blog public API
	require('./blog')(url + '/blog');

}

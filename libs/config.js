var nconf = require('nconf');

module.exports = function(paths){

	nconf.env().argv();

	for (var key in paths){
		nconf.file(key, paths[key]);
	}

	return nconf;
}

var libs = process.cwd() + '/libs/';
var config = require(libs + 'config');
var crypto = require('crypto');
var sha1Hex = require('sha1-hex');
var md5 = require('md5');
var iconv = require('iconv-lite');

var utils = {

	convert: function(data, from, to){
		return iconv.encode(iconv.decode(new Buffer(data, 'binary'), from), to).toString();
	},

	cryptoPass: function(pass){
		return crypto.createHash('sha256').update(pass + "." + config.get('session:secret')).digest('hex');
	},

	cryptoHash: function(login, pass, id){
		return crypto.createHash('sha256').update(login + "." + pass + "." + id).digest('hex');
	},

	cryptoCheck: function(login, pass, id, hash){
		if (crypto.createHash('sha256').update(login + "." + pass + "." + id).digest('hex') !== hash){
			return false;
		}
		else {
			return true;
		}
	},

	sha1Hex: function(value){
		return sha1Hex(value);
	},

	md5: function(value){
		return md5(value);
	},

	copyArray: function(data){
		return JSON.parse(JSON.stringify(data));
	},

	newId: function(){
		return String(Math.round(new Date().getTime() / 1000));
	}

}

module.exports = utils;

var libs = process.cwd() + '/libs/';
var config = require(libs + 'config');
var utils = require(libs + 'utils');
var validator = require('validator');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

MongoClient.connect(config.get('mongodb:uri'), function(err, db) {

	db.collection('accounts').drop();
	db.collection('accounts').insert(accounts);
});

var ACCOUNT_ID = ObjectId();

var accounts = [
	{
		_id: ACCOUNT_ID,
        name: "Александр",
        surname: "Юртаев",
        gender: "male",
        birthday: {
            day: "25",
            month: "8",
            year: "1986",
            hidden: false
        },
        contacts: {
            city: "Москва",
            email: "owebme@gmail.com",
            phone: "9260172086",
            site: "http://web-projects.me",
            skype: null
        },
        balance: "0.00",
        login: "maxfull@mail.ru",
        password: utils.cryptoPass("123456"),
        create: validator.toDate("2016-04-22 11:21"),
        visite: validator.toDate("2016-04-22 11:21")
	}
];

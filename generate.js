var libs = process.cwd() + '/libs/';
var config = require(libs + 'config');
var utils = require(libs + 'utils');
var validator = require('validator');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var ACCOUNT_ID = ObjectId('588658bf07f3cad6d6f3aaa1');
var resume = require(libs + 'resume')(ACCOUNT_ID, validator.toDate("2017-01-12 13:21"), validator.toDate("2017-01-12 14:21"));

MongoClient.connect(config.get('mongodb:uri'), function(err, db) {

	// db.collection('accounts').drop();
	// db.collection('accounts').insert(accounts);
	// db.collection('resumes').drop();
	// db.collection('resumes').insert([resume]);
	// db.collection('inbox').drop();
	// db.collection('inbox').insert(inbox);

	db.collection('likes').drop();
	db.collection('likes').insert(likes);
});

var accounts = [
	{
		_id: ACCOUNT_ID,
		plan: "free",
        balance: 0,
        photo: "/preview/images/photo/photo_phone.jpg",
        name: "Виктория",
        surname: "Юртаева",
        gender: "female",
        birthday: {
            day: "25",
            month: "8",
            year: "1986",
            hidden: true
        },
        contacts: {
			city: "Москва",
			email: "owebme@gmail.com",
			phone: "(926) 017-2086",
			primary: "any",
			relocate: true,
			site: "http://web-projects.me",
			skype: "owebme"
        },
		history: {
			events: [],
			visits: []
		},
		payment: [],
		metrika: [],
		log: [],
		visits: 0,
        login: "maxfull@mail.ru",
        password: utils.cryptoPass("123456"),
        create: validator.toDate("2017-01-12 11:21"),
		update: validator.toDate("2017-01-12 12:21"),
        visite: validator.toDate("2017-01-12 12:21")
	}
];

var likes = [
	{
		_id: "343435325435",
		accountId: ACCOUNT_ID,
		resumeId: ObjectId("588becda9f1df3915186166b"),
		ua: '',
		ip: '',
		create: validator.toDate("2017-01-09 12:00")
	},
	{
		_id: "343435345435",
		accountId: ACCOUNT_ID,
		resumeId: ObjectId("588becda9f1df3915186566b"),
		ua: '',
		ip: '',
		create: validator.toDate("2017-01-10 12:00")
	},
	{
		_id: "2343242342111112",
		accountId: ACCOUNT_ID,
		resumeId: ObjectId("588becda9f1df3915186566b"),
		ua: '',
		ip: '',
		create: validator.toDate("2017-01-11 11:00")
	}
];

var inbox = [
	{
		_id: "343435345435",
		accountId: ACCOUNT_ID,
		resumeId: "1243242424332",
		new: false,
		title: "YouDo",
		from: "info@webinspired.ru",
		text: 'Мы ознакомились с резюме и ваша кандидатура нас очень заинтересовала.',
		color: 'blueLight',
		create: validator.toDate("2017-01-10 12:00")
	},
	{
		_id: "2343242342111112",
		accountId: ACCOUNT_ID,
		resumeId: "1243242424332",
		new: false,
		title: "FTL-consulting",
		from: "info@webinspired.ru",
		text: 'Компания FTL-consulting ищет кандидата на вакансию "Разработчик Perl".',
		color: 'emerald',
		create: validator.toDate("2017-01-11 11:00")
	},
	{
		_id: "234234234",
		accountId: ACCOUNT_ID,
		resumeId: "1243242424332",
		new: true,
		title: "С&L Consulting Co Ltd",
		from: "info@webinspired.ru",
		text: 'Компания С&L Consulting Co Ltd ищет кандидата на вакансию "Ведущий Frontend Разработчик".',
		color: 'pink',
		create: validator.toDate("2017-01-11 12:00")
	},
	{
		_id: "111423423423",
		accountId: ACCOUNT_ID,
		resumeId: "1243242424332",
		new: true,
		title: "Independent developers LTD",
		from: "info@webinspired.ru",
		text: 'Здравствуйте, Александр!\n\nКомпания FTL-consulting ищет кандидата на вакансию "Разработчик Perl".\nВаше резюме показалось нам очень интересным.\nПодробное описание вакансии Вы можете найти на сайте https://hh.ru\nЗайдите под своим логином и паролем, и на странице "Отклики на вакансии" Вы найдете ссылку на описание вакансии.\nЕсли наше предложение Вам интересно, перезвоните, пожалуйста, в рабочее время по телефону +7 (495) 544-48-63 (Кобякова Мария).\n\nС уважением,\nКобякова Мария\nМосква, Мосфильмовская улица, 38А',
		color: 'blue',
		create: validator.toDate("2017-01-12 14:00")
	}
];

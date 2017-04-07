module.exports = function(){

	var API = {};

    var handlerRequest = function(url, callback){
        app.req({
            url: url,
            headers: {
                'User-Agent': 'request'
            },
            timeout: 3000,
        }, function (err, response, data) {
            callback(err, data ? JSON.parse(data) : null);
        })
	};

	API.gethh = function(id, callback){
        handlerRequest(app.config.public.get('hh:api') + "/resumes/" + id, function(err, data){
            if (data && !data.errors){
				data = resumeBuild.get(data);
			}
			else {
				data = null;
			}
			callback(err, data);
        });
    };

	var resumeBuild = {
		get: function(data){
			return {
				idhh: data.id,
				lang: this._lang(data.resume_locale),
				post: data.title,
				create: app.utils.moment().format(),
				update: app.utils.moment().format(),
				commons: {
					photo: this._photo(data.photo),
					name: null,
					surname: null,
                    gender: this._gender(data.gender),
					birthday: this._birthday(),
					citizenship: this._citizenship(data.citizenship),
					businessTrip: this._businessTrip(data.business_trip_readiness),
					relocation: this._relocation(data.relocation),
					relocationCity: this._relocationCity(data.relocation),
					travelTime: this._travelTime(data.travel_time),
					specialization: this._specialization(data.specialization),
					employments: this._employments(data.employments),
					schedules: this._schedules(data.schedules),
					contacts: this._contacts(data.area, data.metro)
				},
				social: null,
				salary: this._salary(data.salary),
				tags: data.skill_set || null,
				about: data.skills && data.skills.replace(/<.*?>/gi, "") || null,
				education: this._education(data.education),
				courses: this._courses(data.education),
				languages: this._languages(data.language),
				jobs: this._jobs(data.experience, data.total_experience)
			}
		},
		_lang: function(value){
			if (value && value.id){
				return value.id.toLowerCase();
			}
			else {
				return "ru";
			}
		},
		_photo: function(value){
			return value && (value["500"] || value["100"] || value["40"]) || null;
		},
        _gender: function(value){
			return value && value.id || null;
		},
        _birthday: function(){
            return {
                day: app.utils.shuffle(app.utils.range(1, 29))[0],
                month: app.utils.shuffle(app.utils.range(1, 13))[0],
                year: app.utils.shuffle(app.utils.range(1970, 1996))[0],
                hidden: false
            }
        },
		_citizenship: function(value){
			if (value && !app.utils.isEmpty(value)){
				return value[0].id;
			}
			else {
				return null;
			}
		},
		_specialization: function(value){
            if (value && value.length){
    			return app.utils.map(value, function(item, i){
    				return {
    					parent: item.profarea_id || "0",
    			        id: item.id,
    			        laboring: item.laboring,
    			        name: item.name
    				}
    			});
            }
            else {
                return null;
            }
		},
        _businessTrip: function(value){
			return value && value.id || null;
		},
        _relocation: function(value){
            return value && value.type && value.type.id || null;
        },
		_relocationCity: function(value){
			if (value && value.area && !app.utils.isEmpty(value.area)){
				return app.utils.map(value.area, function(item, i){
					return {
						id: item.id,
						name: item.name
					}
				})
			}
            else {
				return null
			}
        },
        _travelTime: function(value){
            return value && value.id || null;
        },
        _employments: function(value){
            if (value && value.length){
                return app.utils.pluck(value, "id");
            }
            else {
                return null;
            }
        },
        _schedules: function(value){
            if (value && value.length){
                return app.utils.pluck(value, "id");
            }
            else {
                return null;
            }
        },
		_contacts: function(area, metro){
			return {
				city: area && {
					id: area.id,
					name: area.name
				} || null,
				metro: metro && {
					id: metro.id,
					name: metro.name
				} || null,
				email: null,
				phone: null,
				primary: "any",
				site: null,
				skype: null
			}
		},
		_salary: function(value){
			var amount = value && value.amount || null,
				currency = "1";

			if (amount){
				if (resumeBuild._currencyList.indexOf(value.currency) > -1){
					if (value.currency == "USD") currency = "2";
					if (value.currency == "EUR") currency = "3";
				}
				else {
					var item = app.utils.findWhere(resumeBuild._currencyDictionary, {"code": value.currency});
					amount *= item && item.rate && (1 / item.rate) || 1;
				}
			}
			return {
				amount: amount && String(parseInt(amount)) || "50000",
				currency: currency,
				worktime: "1",
				active: amount ? true : false
			}
		},
		_currencyList: ['USD', 'EUR', 'RUR'],
		_education: function(value){
			if (value && value.primary && value.primary.length){
				return {
					title: null,
					text: null,
					level: value.level && value.level.id && String(value.level.id) || "higher",
					items: app.utils.map(value.primary, function(item, i){
						return {
							id: String(i + 1),
		                    title: item.name,
		                    faculty: item.organization,
		                    speciality: item.result,
		                    year: item.year
		                }
					})
				}
			}
			else {
				return null;
			}
		},
		_courses: function(value){
			if (value && value.additional && value.additional.length){
				return {
					title: null,
					text: null,
					items: app.utils.map(value.additional, function(item, i){
						return {
		                    id: String(i + 1),
		                    name: item.organization,
		                    title: item.name,
		                    year: item.year
		                }
					})
				}
			}
			else {
				return null;
			}
		},
		_languages: function(value){
			if (value && value.length){
				var items = [
				    {
				        title: "native",
				        value: "rus"
				    },
				    {
				        title: "eng",
				        value: "not"
				    },
				    {
				        title: "deu",
				        value: "not"
				    },
				    {
				        title: "fra",
				        value: "not"
				    }
				];
				app.utils.each(value, function(item, i){
					if (item.level.id == 'native' || resumeBuild._languagesList.indexOf(item.id) > -1){
						if (item.level.id == 'native'){
							items[0] = {
								title: item.level.id,
								value: item.id
							}
						}
						else {
							app.utils.each(items, function(prop, i){
								if (prop.title == item.id){
									items[i] = {
										title: item.id,
										value: item.level.id
									}
								}
							});
						}
					}
				})
				return {
					title: null,
					text: null,
					items: items
				}
			}
			else {
				return null;
			}
		},
		_languagesList: ['rus', 'eng', 'deu', 'fra'],
		_jobs: function(value, experience){
			if (value && value.length){
				return {
					title: null,
					text: null,
					experience: experience && String(experience.months) || null,
					items: app.utils.map(value, function(item, i){
						return {
							id: String(i + 1),
		                    title: item.company,
		                    city: item.area && item.area.name || null,
		                    post: item.position,
		                    from: {
		                        month: String(parseInt(item.start.match(/(\d+)-(\d+)-(\d+)/)[2])),
		                        year: item.start.match(/(\d+)-(\d+)-(\d+)/)[1]
		                    },
		                    to: {
								month: item.end && String(parseInt(item.end.match(/(\d+)-(\d+)-(\d+)/)[2])) || "1",
							    year: item.end && item.end.match(/(\d+)-(\d+)-(\d+)/)[1] || "2000"
		                    },
		                    text: item.description,
		                    last: item.end ? false : true
		                }
					})
				}
			}
			else {
				return null;
			}
		},
		_currencyDictionary: [{
	        "rate": 1.0,
	        "code": "RUR",
	        "abbr": "руб.",
	        "in_use": true,
	        "default": true,
	        "name": "Рубли"
	    }, {
	        "rate": 0.030266,
	        "code": "AZN",
	        "abbr": "AZN",
	        "in_use": false,
	        "default": false,
	        "name": "Манаты"
	    }, {
	        "rate": 0.03273,
	        "code": "BYR",
	        "abbr": "бел. руб.",
	        "in_use": false,
	        "default": false,
	        "name": "Белорусские рубли"
	    }, {
	        "rate": 0.016165,
	        "code": "EUR",
	        "abbr": "EUR",
	        "in_use": true,
	        "default": false,
	        "name": "Евро"
	    }, {
	        "rate": 0.0344,
	        "code": "GEL",
	        "abbr": "GEL",
	        "in_use": false,
	        "default": false,
	        "name": "Грузинский лари"
	    }, {
	        "rate": 1.206919,
	        "code": "KGS",
	        "abbr": "KGS",
	        "in_use": false,
	        "default": false,
	        "name": "Киргизский сом"
	    }, {
	        "rate": 5.514686,
	        "code": "KZT",
	        "abbr": "KZT",
	        "in_use": false,
	        "default": false,
	        "name": "Тенге"
	    }, {
	        "rate": 0.472358,
	        "code": "UAH",
	        "abbr": "грн.",
	        "in_use": false,
	        "default": false,
	        "name": "Гривны"
	    }, {
	        "rate": 0.017414,
	        "code": "USD",
	        "abbr": "USD",
	        "in_use": true,
	        "default": false,
	        "name": "Доллары"
	    }, {
	        "rate": 61.854777,
	        "code": "UZS",
	        "abbr": "UZS",
	        "in_use": false,
	        "default": false,
	        "name": "Узбекский сум"
	    }]
	}

    return API;
};

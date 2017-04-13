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
				lang: this.lang(data.resume_locale),
				post: data.title,
				create: app.utils.moment().format(),
				update: app.utils.moment().format(),
				commons: {
					photo: this.photo(data.photo),
					name: null,
					surname: null,
                    gender: this.gender(data.gender),
					birthday: this.birthday(data.birth_date),
					citizenship: this.citizenship(data.citizenship),
					businessTrip: this.businessTrip(data.business_trip_readiness),
					relocation: this.relocation(data.relocation),
					relocationCity: this.relocationCity(data.relocation),
					travelTime: this.travelTime(data.travel_time),
					specialization: this.specialization(data.specialization),
					employments: this.employments(data.employments),
					schedules: this.schedules(data.schedules),
					contacts: this.contacts(data.area, data.metro)
				},
				social: null,
				salary: this.salary(data.salary),
				tags: data.skill_set || null,
				about: data.skills && data.skills.replace(/<.*?>/gi, "") || null,
				education: this.education(data.education),
				courses: this.courses(data.education),
				languages: this.languages(data.language),
				jobs: this.jobs(data.experience, data.total_experience)
			}
		},
		lang: function(value){
			if (value && value.id){
				return value.id.toLowerCase();
			}
			else {
				return "ru";
			}
		},
		photo: function(value){
			return value && (value["500"] || value["100"] || value["40"]) || null;
		},
        gender: function(value){
			return value && value.id || null;
		},
        birthday: function(value){
			if (value && value.match(/\d+-\d+-\d+/)){
	            return {
	                day: parseInt(value.match(/(\d+)-(\d+)-(\d+)/)[3]),
	                month: parseInt(value.match(/(\d+)-(\d+)-(\d+)/)[2]),
	                year: parseInt(value.match(/(\d+)-(\d+)-(\d+)/)[1]),
	                hidden: false
	            }
			}
			else {
				return {
	                day: "1",
	                month: "1",
	                year: "1990",
	                hidden: true
	            }
			}
        },
		citizenship: function(value){
			if (value && !app.utils.isEmpty(value)){
				return value[0].id;
			}
			else {
				return null;
			}
		},
		specialization: function(value){
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
        businessTrip: function(value){
			return value && value.id || null;
		},
        relocation: function(value){
            return value && value.type && value.type.id || null;
        },
		relocationCity: function(value){
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
        travelTime: function(value){
            return value && value.id || null;
        },
        employments: function(value){
            if (value && value.length){
                return app.utils.pluck(value, "id");
            }
            else {
                return null;
            }
        },
        schedules: function(value){
            if (value && value.length){
                return app.utils.pluck(value, "id");
            }
            else {
                return null;
            }
        },
		contacts: function(area, metro){
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
		salary: function(value){
			var amount = value && value.amount || null,
				currency = "1";

			if (amount){
				if (resumeBuild.currencyList.indexOf(value.currency) > -1){
					if (value.currency == "USD") currency = "2";
					if (value.currency == "EUR") currency = "3";
				}
				else {
					var item = app.utils.findWhere(resumeBuild.currencyDictionary, {"code": value.currency});
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
		currencyList: ['USD', 'EUR', 'RUR'],
		education: function(value){
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
		courses: function(value){
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
		languages: function(value){
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
					if (item.level.id == 'native' || resumeBuild.languagesList.indexOf(item.id) > -1){
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
		languagesList: ['rus', 'eng', 'deu', 'fra'],
		jobs: function(value, experience){
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
		currencyDictionary: [{
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

$store.account = _.extend(new Baobab([]),
    {
        onPhotoUpload: function(){
            $Sections.photoUpload.show(function(image){
                app.request("setProfilePhoto", {
                    image: image
                }, {
                    loader: false
                })
                .then(function(data){
                    if (data && data.image){
                        $store.account.select("commons", "photo").set(image);
                    }
                });
            });
        },
        onSaveData: function(data, callback){
            var surname = $store.account.get("commons", "surname");

            data.select("surname").set(
                surname && surname.length ? surname : data.get("surname")
            );

            $store.account.select("commons").set(data.get());

            if (_.isFunction(callback)) callback();

            app.request("setProfile", {
                commons: data.get()
            });
        },
        take: {
            lastVisit: function(){
                var date = $store.account.get("visite"),
                    days = moment(date).diff(moment(), 'days');

                if (days === 0) return "сегодня в " + moment(date).format('HH:mm');
                else if (days === -1) return "вчера в " + moment(date).format('HH:mm');
                else {
                    return moment(date).format('D MMMM') + " в " + moment(date).format('HH:mm');
                }
            },
            age: function(birthday){
                var lang = 'ru',
                    b = birthday,
                    month = b.month < 10 ? "0" + b.month : b.month,
                    day = b.day < 10 ? "0" + b.day : b.day,
                    years = moment().diff(moment(b.year + "-" + month + "-" + day), 'years');

                if (years == "1") years = years + (lang == "ru" ? " год" : " year");
                else if (years > 1 && years < 5) years = years + (lang == "ru" ? " года" :  "year");
                else years = years + (lang == "ru" ? " лет" : " year");

                return years;
            },
            phone: function(){
                var phone = $store.account.get("commons", "contacts", "phone");
                if (phone && phone.number){
                    return "+" + phone.code + " " + phone.number;
                }
                else {
                    return "";
                }
            }
        }
    }
);

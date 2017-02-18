$store.account = _.extend(new Baobab([]),
    {
        onPhotoUpload: function(){
            $Sections.photoUpload.show(function(image){
                app.request("setUploadPhoto", {
                    profile: true,
                    image: image
                })
                .then(function(data){
                    if (data && data.image){
                        $store.account.select("photo").set(image);
                    }
                });
            });
        },
        onSaveData: function(data, callback){
            data.select("name").set(
                $store.account.get("name").length ? $store.account.get("name") : data.get("name")
            );
            data.select("surname").set(
                $store.account.get("surname").length ? $store.account.get("surname") : data.get("surname")
            );

            $store.account.set(data.get());

            if (_.isFunction(callback)) callback();

            app.request(
                "setDataProfile", _.pick($store.account.get(),
                    ['name', 'surname', 'gender', 'birthday', 'contacts']
                )
            );
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
                    years = moment().diff(moment(b.year + "-" + b.month + "-" + b.day), 'years');

                if (years == "1") years = years + (lang == "ru" ? " год" : " year");
                else if (years > 1 && years < 5) years = years + (lang == "ru" ? " года" :  "year");
                else years = years + (lang == "ru" ? " лет" : " year");

                return years;
            }
        }
    }
);

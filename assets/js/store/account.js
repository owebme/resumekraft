$store.account = _.extend(new Baobab([]),
    {
        changePhoto: function(){
            $Sections.photoUpload.show(function(image){
                app.request("setUploadPhoto", {
                    profile: true,
                    image: image
                })
                .then(function(data){
                    if (data && data.image){
                        $account.select("photo").set(image);
                    }
                });
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
        }
    }
);

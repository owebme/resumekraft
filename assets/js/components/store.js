$store = {};

$store.data = _.extend(new Baobab([
    {
        _id: _.newId(),
        photo: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/18235126033139.5634e8d8b1adc.jpg",
        name: "Виктория Юртаева",
        post: "Web-Designer, Art-director, Illustrator",
        salary: {
            amount: "125000",
            currency: "1",
            worktime: "1"
        }
    }]),
    {
        getTitleById: function(id){
            return _.findWhere($store.data.get(), {"_id": id}).title;
        }
    }
);

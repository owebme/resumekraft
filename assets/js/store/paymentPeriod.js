$store.paymentPeriod = _.extend(new Baobab([
    {
        period: "month1",
        title: "1 месяц",
        price: "369"
    },
    {
        period: "month3",
        title: "3 месяца",
        price: "869",
        sale: "-20%"
    },
    {
        period: "month6",
        title: "6 месяцев",
        price: "1369",
        sale: "-40%"
    },
    {
        period: "year1",
        title: "на 1 год",
        price: "1769",
        sale: "-60%"
    },
    {
        period: "year2",
        title: "на 2 года",
        price: "3569",
        sale: "-60%"
    }
    ]),
    {
        getTitleByPeriod: function(period){
            return _.findWhere($store.paymentPeriod.get(), {"period": period}).title;
        },
        getPriceByPeriod: function(period){
            return _.findWhere($store.paymentPeriod.get(), {"period": period}).price;
        },
        getSaleByPeriod: function(period){
            return _.findWhere($store.paymentPeriod.get(), {"period": period}).sale;
        }
    }
);

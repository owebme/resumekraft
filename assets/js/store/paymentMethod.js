$store.paymentMethod = _.extend(new Baobab([
    {
        method: 'yamoney',
        title: 'Яндекс.Деньги',
        text: 'Оплатить электронными деньгами платежной системы яндекс денег.',
        value: 'PC',
        pos: 2,
    },
    {
        method: 'bankcard',
        title: 'Банковcкой картой',
        text: 'Оплата всеми пластиковыми картами Visa и MasterCard.',
        value: 'AC',
        pos: 1
    },
    {
        method: 'mobile',
        title: 'Со счета мобильного',
        text: 'Оплатить со счета мобильного телефона сотовых операторов: Мегафон, МТС, Билайн, Tele2.',
        value: 'MC',
        pos: 3
    }
    ]),
    {
        getValueByMethod: function(method){
            return _.findWhere($store.paymentMethod.get(), {"method": method}).value;
        }
    }
);

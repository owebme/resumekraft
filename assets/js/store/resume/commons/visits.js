$store.visits = _.extend(new Baobab({}),
    {
        request: function(id, options){
            var options = options || {};

            return new Promise(function(resolve, reject){
                app.request("getResumeVisits", id).then(function(data){
                    if (data.visits && !_.isEmpty(data.visits)){
                        var all = {
                            visits: 0,
                            hits: 0
                        },
                        visits = {
                            labels: [],
                            counts: [],
                            hits: []
                        };

                        var dates = _.getDates((new Date()).addDays(options.table ? -13 : -20), new Date());

                        _.each(dates, function(item){
                            var day = item.getDate(),
                                month = item.getMonth() + 1,
                                year = item.getFullYear();

                            if (day < 10) day = "0" + day;
                            if (month < 10) month = "0" + month;

                            var findDay = _.findWhere(data.visits, {"_id": year + "-" + month + "-" + day});

                            if (options.table && !findDay){
                                visits.labels.push(moment(item).format("D MMMM YYYY"));
                                visits.counts.push(0);
                                visits.hits.push(0);
                            }
                            if (findDay){
                                visits.labels.push(moment(item).format(options.table ? "D MMMM YYYY" : "D MMM"));
                                visits.counts.push(findDay.counts);
                                visits.hits.push(findDay.hits);
                                all.visits += findDay.counts;
                                all.hits += findDay.hits;
                            }
                        });

                        var devices = {
                            desktop: _.findWhere(data.devices, {"_id": "desktop"}),
                            tablet: _.findWhere(data.devices, {"_id": "tablet"}),
                            phone: _.findWhere(data.devices, {"_id": "phone"})
                        };

                        devices.desktop = devices.desktop ? devices.desktop.percentage : 0;
                        devices.phone = devices.phone ? devices.phone.percentage : 0;
                        devices.tablet = devices.tablet ? devices.tablet.percentage : 0;

                        return resolve({
                            all: all,
                            visits: visits,
                            devices: devices
                        });
                    }
                    else {
                        return resolve(null);
                    }
                },
                function(err){
                    return reject(err);
                })
            });
        }
    }
);

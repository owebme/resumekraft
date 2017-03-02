module.exports = function(){

    gulp.task('jobs.libs', function() {
    	return gulp.src(['assets/js/libs/jquery.min.js',
            'assets/js/libs/jquery.mobile.custom.min.js',
            'assets/js/libs/modernizr.custom.js',
            'assets/js/libs/fastclick.min.js',
            'assets/js/libs/riot/riot+compiler.update.js',
            'assets/js/libs/baobab.js',
            'assets/js/libs/underscore-min.js',
            'assets/js/libs/moment.min.js',
            'assets/js/libs/moment.ru.js',
            'assets/js/libs/store.min.js',
            'assets/js/libs/url.min.js',
            'assets/js/libs/afterlag-js/dist/afterlag.min.js'])
    		.pipe(concat('app.jobs.libs.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./public/js'));
    });

    gulp.task('jobs.app', function() {
    	return gulp.src(['assets/js/components/commons/app.js',
            'assets/js/components/commons/request.js',
            'assets/js/components/commons/afterlag.js',
            'assets/js/components/commons/common.js',
            'assets/js/components/commons/utils.js',
            'assets/js/components/commons/modules.js',
            'public/js/commons/config.js',
            'public/js/commons/metrika.js',
            'public/js/commons/sections.js',
            'public/js/store/jobs/dictionary.js',
            'assets/js/plugins/metrika.js',
            'assets/js/plugins/share.js',
            'assets/js/plugins/eventsEmitter.js',
            'public/js/sections/jobs/jobsHome.js',
            'public/js/sections/jobs/jobsSearch.js'])
    		.pipe(concat('app.jobs.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./public/js'));
    });

    gulp.task('jobs.templates', function() {
    	return gulp.src(['public/templates/commons/modules/auth/auth.tag',
            'public/templates/commons/modules/auth/authSocial.tag',
            'public/templates/commons/modules/auth/forms/signIn.tag',
            'public/templates/commons/modules/auth/forms/signUp.tag',
            'public/templates/commons/modules/auth/forms/remember.tag',
            'assets/templates/modules/notify.html',
            'assets/templates/modules/loader.html',
            'assets/templates/ui/input.html',
            'assets/templates/ui/textarea.html',
            'assets/templates/ui/checkbox.html',
            'public/templates/client/jobs/favorites.html',
            'public/templates/client/jobs/search/searchVacancyForm.html',
            'public/templates/client/jobs/search/panel/searchPanel.html',
            'public/templates/client/jobs/search/panel/searchPanelSettings.html',
            'public/templates/client/jobs/search/panel/searchPanelViews.html',
            'public/templates/client/jobs/search/filter/searchFilter.html',
            'public/templates/client/jobs/search/filter/searchFilterBlock.html',
            'public/templates/client/jobs/search/filter/searchFilterSalary.html',
            'public/templates/client/jobs/search/searchContent.html',
            'public/templates/client/jobs/search/searchPages.html',
            'assets/templates/ui/icons/icon-like.html',
            'assets/templates/ui/icons/icon-location.html',
            'public/templates/commons/icons/social/icon-fb.tag',
            'public/templates/commons/icons/social/icon-vk.tag',
            'public/templates/commons/icons/social/icon-tw.tag',
            'public/templates/commons/icons/social/icon-dk.tag',
            'public/templates/commons/icons/social/icon-gl.tag'])
    		.pipe(riot())
    		.pipe(concat('templates.jobs.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./public/js'));
    });

    gulp.task('jobs.app.build', function() {
    	return gulp.src(['public/js/app.jobs.libs.js',
            'public/js/app.jobs.js',
            'public/js/templates.jobs.js'])
    		.pipe(concat('app.build.jobs.js'))
    		.pipe(gulp.dest('./public/js'));
    });
}

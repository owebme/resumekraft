module.exports = function(){

    gulp.task('jobs.libs', function() {
    	return gulp.src(['assets/js/libs/jquery.min.js',
            'assets/js/libs/jquery.mobile.custom.min.js',
            'assets/js/libs/modernizr.custom.js',
            'assets/js/libs/fastclick.js',
            'assets/js/libs/riot-3.3.2/riot+compiler.update.js',
            'assets/js/libs/baobab.js',
            'assets/js/libs/underscore-min.js',
            'assets/js/libs/moment.min.js',
            'assets/js/libs/moment.ru.js',
            'assets/js/libs/store.min.js',
            'assets/js/libs/url.min.js',
            'assets/js/libs/theia-sticky-sidebar/dist/theia-sticky-sidebar.js',
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
            'assets/js/components/commons/EventEmitterMicro.js',
            'assets/js/components/features/links.js',
            'assets/js/components/features/jobsSearch.js',
            'public/js/commons/config.js',
            'public/js/commons/metrika.js',
            'public/js/commons/sections.js',
            'public/js/store/jobs/dictionary.js',
            'public/js/store/jobs/favorites.js',
            'assets/js/plugins/define.js',
            'assets/js/plugins/sections.js',
            'assets/js/plugins/metrika.js',
            'assets/js/plugins/share.js',
            'assets/js/plugins/scroll/scroll.RefreshFix.js',
            'public/js/sections/jobs/*.js',
            'public/js/sections/jobs/**/*.js',
            'public/js/jobs/metrika.js',
            'assets/js/libs/history.js/scripts/bundled/html4+html5/jquery.history.js'])
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
            'assets/templates/v3/modules/notify.html',
            'assets/templates/v3/ui/input.html',
            'assets/templates/ui/dropMenu.html',
            'public/templates/client/**/*.html',
            'public/templates/default/jobs/search/jobsSearchContent.tag',
            'public/templates/default/jobs/search/jobsSearchListitem.tag',
            'public/templates/default/jobs/search/jobsSearchPages.tag',
            'public/templates/default/jobs/vacancy/vacancyContent.tag',
            'public/templates/default/jobs/vacancy/vacancySimilary.tag',
            'public/templates/mobile/jobs/employer/employerVacancies.tag',
            'public/templates/default/jobs/employer/employerContent.tag',
            'public/templates/default/jobs/raw.tag',
            'assets/templates/ui/icons/icon-like.html',
            'assets/templates/ui/icons/icon-replyMail.html',
            'assets/templates/ui/icons/icon-location.html',
            'assets/templates/ui/icons/icon-control.html',
            'assets/templates/ui/icons/social/icon-fb.html',
            'assets/templates/ui/icons/social/icon-vk.html',
            'assets/templates/ui/icons/social/icon-tw.html',
            'assets/templates/ui/icons/social/icon-dk.html',
            'assets/templates/ui/icons/social/icon-gl.html'])
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

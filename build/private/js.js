module.exports = function(){

    gulp.task('private.libs', function() {
    	return gulp.src(['assets/js/libs/jquery.min.js',
    		'assets/js/libs/jquery.mobile.custom.min.js',
    		'assets/js/libs/jquery.swipeUpDown.js',
    		'assets/js/libs/modernizr.custom.js',
    		'assets/js/libs/fastclick.min.js',
    		'assets/js/libs/riot/riot+compiler.update.js',
    		'assets/js/libs/riot/riot-i18n.js',
    		'assets/js/libs/baobab.js',
    		'assets/js/libs/underscore-min.js',
    		'assets/js/libs/iscroll.js',
    		'assets/js/libs/iscroll.static.js',
    		'assets/js/libs/rangeslider.js',
    		'assets/js/libs/jquery.cropit.js',
    		'assets/js/libs/moment.min.js',
    		'assets/js/libs/moment.ru.js',
    		'assets/js/libs/jquery.mask.min.js',
    		'assets/js/libs/chartist.min.js',
    		'assets/js/libs/circliful/js/jquery.circliful.js',
    		'assets/js/libs/peity/jquery.peity.min.js',
    		'assets/js/libs/TweenLite-1.19.0.min.js',
    		'assets/js/libs/file-saver/FileSaver.min.js',
    		'assets/js/libs/afterlag-js/dist/afterlag.min.js',
    		'assets/js/libs/imagesloaded/imagesloaded.pkgd.min.js',
    		'assets/js/libs/mouseweel.js',
    		'assets/js/libs/store.min.js',
    		'assets/js/libs/url.min.js'])
    		.pipe(concat('libs.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./assets/js'));
    });

    gulp.task('private.commons', function() {
    	return gulp.src(['assets/js/components/commons/app.js',
    	    'assets/js/components/commons/afterlag.js',
    	    'assets/js/components/commons/common.js',
    	    'assets/js/components/commons/utils.js',
    	    'assets/js/components/commons/request.js',
    	    'assets/js/components/commons/modules.js',
    	    'assets/js/components/commons/metrika.js',
    	    'assets/js/components/features/premium.js',
    	    'assets/js/components/config.js',
    	    'assets/js/components/fetch.js',
    	    'assets/js/components/i18n/i18n.js',
    	    'assets/js/components/i18n/resume/basic/template/ru.js'])
    		.pipe(concat('commons.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./assets/js'));
    });

    gulp.task('private.plugins', function() {
    	return gulp.src(['assets/js/plugins/**/*.js',
    	    'assets/js/plugins/*.js'])
    		.pipe(concat('plugins.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./assets/js'));
    });

    gulp.task('private.app', function() {
    	return gulp.src(['assets/js/components/commons/app.js',
    		'assets/js/components/commons/common.js',
    		'assets/js/components/commons/request.js',
    		'assets/js/components/commons/modules.js',
    		'assets/js/components/commons/utils.js',
    		'assets/js/components/commons/afterlag.js',
    		'assets/js/components/config.js',
    		'assets/js/components/fetch.js',
    		'assets/js/components/tutorial/welcome.js',
    		'assets/js/components/tutorial/resume/free/interface.js',
    		'assets/js/store/*.js',
    		'assets/js/store/**/*.js'])
    		.pipe(concat('app.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./assets/js'));
    });

    gulp.task('private.templates', function() {
    	return gulp.src(['assets/templates/modules/*.html',
    	    'assets/templates/sections/**/*.html',
    		'assets/templates/sections/**/*.tag',
    		'assets/templates/ui/*.html',
    		'assets/templates/ui/**/*.html',
    		'assets/templates/appResume/basic/*.html',
    		'assets/templates/appResume/basic/**/*.html',
    		'assets/templates/root.html'])
    		.pipe(riot())
    		.pipe(concat('templates.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./assets/js'));
    });

    gulp.task('private.sections.templates', function() {
    	return gulp.src(['assets/templates/sections/*.html',
    		'assets/templates/sections/**/*.html'])
    		.pipe(riot())
    		.pipe(concat('templates.sections.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./assets/js'));
    });

    gulp.task('private.modules.templates', function() {
    	return gulp.src(['assets/templates/modules/*.html'])
    		.pipe(riot())
    		.pipe(concat('templates.modules.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./assets/js'));
    });

    gulp.task('private.resume.templates', function() {
    	return gulp.src(['assets/templates/appResume/basic/*.html',
            'assets/templates/appResume/basic/**/*.html',
            'assets/templates/appResume/commons/*.html',
            'assets/templates/appResume/commons/**/*.html'])
    		.pipe(riot())
    		.pipe(concat('templates.resume.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./assets/js'));
    });

    gulp.task('private.ui.templates', function() {
    	return gulp.src(['assets/templates/ui/*.html',
    		'assets/templates/ui/**/*.html'])
    		.pipe(riot())
    		.pipe(concat('templates.ui.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./assets/js'));
    });

    gulp.task('private.app.build', function() {
    	return gulp.src(['assets/js/templates.js',
    		'assets/js/app.js',
    		'assets/js/init.js'])
    		.pipe(concat('app.build.js'))
    		.pipe(gulp.dest('./assets/js'));
    });
}

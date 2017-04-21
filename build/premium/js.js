module.exports = function(){

    gulp.task('premium.app', function() {
    	return gulp.src(['assets/js/components/commons/app.js',
    		'assets/js/components/commons/afterlag.js',
    		'assets/js/components/commons/common.js',
    		'assets/js/components/commons/utils.js',
    		'assets/js/components/commons/request.js',
    		'assets/js/components/commons/modules.js',
            'assets/js/components/commons/EventEmitter.js',
            'assets/js/components/commons/EventEmitterMicro.js',
    		'assets/js/components/help/resume/premium/*.js',
    		'assets/js/components/i18n/i18n.js',
    		'assets/js/plugins/eventsEmitter.js',
    		'assets/js/plugins/marquee.js',
    	    'assets/js/plugins/marquee.effects.js',
    	    'assets/js/plugins/screens.js',
    	    'assets/js/plugins/styles.js',
            'assets/js/plugins/share.js',
            'assets/js/plugins/scroll/scroll.RefreshFix.js',
    	    'assets/js/plugins/scroll/scroll.Slider.js',
    	    'assets/js/plugins/scroll/scroll.Content.js',
            'assets/js/plugins/scroll/scroll.Parallax.build.js',
            'assets/js/plugins/scroll/scroll.Animation.build.js',
            'assets/js/plugins/scroll/scroll.Animate.js',
            'assets/js/components/i18n/resume/premium/template/ru.js',
    		'assets/js/store/*.js',
    		'assets/js/store/**/*.js'])
    		.pipe(concat('app.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./assets/js/premium'));
    });

    gulp.task('premium.ui.templates', function() {
    	return gulp.src(['assets/templates/appResume/premium/ui/*.html',
    		'assets/templates/appResume/premium/ui/**/*.html',
    		'assets/templates/appResume/commons/**/*.html',
            'assets/templates/modules/loader.html',
            'assets/templates/modules/notify.html',
            'assets/templates/modules/textEdit.html',
            'assets/templates/modules/tutorial.html',
    		'assets/templates/ui/slider.html',
    		'assets/templates/ui/switcher.html',
    		'assets/templates/ui/checkbox.html',
    		'assets/templates/ui/input.html',
            'assets/templates/ui/phone.html',
    		'assets/templates/ui/textarea.html',
    		'assets/templates/ui/select.html',
    		'assets/templates/ui/checkbox.html',
    		'assets/templates/ui/icons/social/*.html',
    		'assets/templates/ui/icons/icon-city.html',
    		'assets/templates/ui/icons/icon-feedback.html',
    		'assets/templates/ui/icons/icon-phone.html',
    		'assets/templates/ui/icons/icon-email.html',
    		'assets/templates/ui/icons/icon-skype.html',
    		'assets/templates/ui/icons/icon-arrow.html',
    		'assets/templates/ui/icons/icon-bubble.html'])
    		.pipe(riot())
    		.pipe(concat('templates.ui.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./assets/js/premium'));
    });

    gulp.task('premium.control.templates', function() {
    	return gulp.src(['assets/templates/appResume/premium/control/*.html'])
    		.pipe(riot())
    		.pipe(concat('templates.control.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./assets/js/premium'));
    });

    gulp.task('premium.sections.templates', function() {
    	return gulp.src(['assets/templates/appResume/premium/sections/*.html',
    		'assets/templates/appResume/premium/sections/**/*.html'])
    		.pipe(riot())
    		.pipe(concat('templates.sections.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./assets/js/premium'));
    });

    gulp.task('premium.editable.templates', function() {
    	return gulp.src(['assets/templates/appResume/premium/editable/*.html'])
    		.pipe(riot())
    		.pipe(concat('templates.editable.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./assets/js/premium'));
    });

    gulp.task('premium.components.templates', function() {
    	return gulp.src(['assets/templates/appResume/premium/components/*.html'])
    		.pipe(riot())
    		.pipe(concat('templates.components.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./assets/js/premium'));
    });

    gulp.task('premium.templates', function() {
    	return gulp.src(['assets/templates/appResume/premium/*.html',
    		'assets/templates/appResume/premium/templates/*.html'])
    		.pipe(riot())
    		.pipe(concat('templates.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./assets/js/premium'));
    });

    gulp.task('premium.app.build', function() {
    	return gulp.src(['assets/js/premium/templates.js',
            'assets/js/premium/templates.ui.js',
            'assets/js/premium/templates.control.js',
            'assets/js/premium/templates.sections.js',
            'assets/js/premium/templates.editable.js',
            'assets/js/premium/templates.components.js',
    		'assets/js/premium/app.js'])
    		.pipe(concat('app.build.js'))
    		.pipe(gulp.dest('./assets/js/premium'));
    });
}

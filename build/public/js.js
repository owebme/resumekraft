module.exports = function(){

    gulp.task('public.libs', function() {
    	return gulp.src(['assets/js/libs/jquery.min.js',
    		'assets/js/libs/jquery.mobile.custom.min.js',
    		'assets/js/libs/jquery.swipeUpDown.js',
    		'assets/js/libs/modernizr.custom.js',
    		'assets/js/libs/fastclick.js',
    		'assets/js/libs/riot-3.3.2/riot+compiler.update.js',
            'assets/js/libs/baobab.js',
    		'assets/js/libs/underscore-min.js',
    		'assets/js/libs/iscroll.js',
    		'assets/js/libs/TweenLite-1.19.0.min.js',
    		'assets/js/libs/afterlag-js/dist/afterlag.min.js',
    		'assets/js/libs/imagesloaded/imagesloaded.pkgd.min.js',
    		'assets/js/libs/store.min.js'])
    		.pipe(concat('libs.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./public/js'));
    });

    gulp.task('public.app', function() {
    	return gulp.src(['assets/js/components/commons/app.js',
            'assets/js/components/commons/request.js',
            'assets/js/components/commons/afterlag.js',
            'assets/js/components/commons/common.js',
            'assets/js/components/commons/utils.js',
            'assets/js/components/commons/modules.js',
            'assets/js/components/features/premium.js',
            'assets/js/components/features/navbar.js',
            'public/js/commons/config.js',
            'public/js/commons/metrika.js',
            'public/js/commons/sections.js',
            'assets/js/plugins/chartRadial.js',
            'assets/js/plugins/animate.js',
            'assets/js/plugins/slider.js',
            'assets/js/plugins/metrika.js',
            'assets/js/plugins/share.js',
            'assets/js/plugins/eventsEmitter.js',
            'assets/js/plugins/marquee.js',
            'assets/js/plugins/marquee.effects.js',
            'assets/js/plugins/marquee.play.js',
            'assets/js/plugins/screens.js',
            'assets/js/plugins/scroll/scroll.Animate.js',
            'assets/js/plugins/scroll/scroll.Parallax.js',
            'assets/js/libs/skycons/skycons.js',
            'public/js/sections/nav.js',
            'public/js/sections/home.js',
            'public/js/sections/premium.js',
            'public/js/sections/jqtest.js',
            'public/js/sections/blog.js',
            'public/js/sections/blogContent.js',
            'public/js/sections/jobs/jobsHome.js'])
    		.pipe(concat('app.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./public/js'));
    });

    gulp.task('public.templates', function() {
    	return gulp.src(['public/templates/commons/modules/auth/auth.tag',
            'public/templates/commons/modules/auth/authSocial.tag',
            'public/templates/commons/modules/auth/forms/signIn.tag',
            'public/templates/commons/modules/auth/forms/signUp.tag',
            'public/templates/commons/modules/auth/forms/remember.tag',
            'assets/templates/v3/modules/notify.html',
            'assets/templates/modules/loader.html',
            'assets/templates/v3/ui/input.html',
            'public/templates/commons/popup/blogSubscribe.tag',
            'public/templates/commons/popup/blogSubscribeForm.tag',
            'public/templates/commons/icons/social/icon-fb.tag',
            'public/templates/commons/icons/social/icon-vk.tag',
            'public/templates/commons/icons/social/icon-tw.tag',
            'public/templates/commons/icons/social/icon-dk.tag',
            'public/templates/commons/icons/social/icon-gl.tag'])
    		.pipe(riot())
    		.pipe(concat('templates.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./public/js'));
    });

    gulp.task('public.app.build', function() {
    	return gulp.src(['public/js/libs.js',
            'public/js/app.js',
            'public/js/templates.js'])
    		.pipe(concat('app.build.js'))
    		.pipe(gulp.dest('./public/js'));
    });
}

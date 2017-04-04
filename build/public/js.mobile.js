module.exports = function(){

    gulp.task('public.libs.mobile', function() {
    	return gulp.src(['assets/js/libs/jquery.min.js',
            'assets/js/libs/jquery.mobile.custom.min.js',
            'assets/js/libs/modernizr.custom.js',
            'assets/js/libs/fastclick.js',
            'assets/js/libs/riot-3.3.2/riot+compiler.update.js',
            'assets/js/libs/baobab.js',
            'assets/js/libs/underscore-min.js',
            'assets/js/libs/store.min.js',
            'assets/js/libs/iscroll.js',
            'assets/js/libs/iscroll.static.js',
            'assets/js/libs/imagesloaded/imagesloaded.pkgd.min.js',
            'assets/js/libs/circliful/js/jquery.circliful.js',
            'assets/js/libs/afterlag-js/dist/afterlag.min.js'])
    		.pipe(concat('app.libs.mobile.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./public/js'));
    });

    gulp.task('public.app.mobile', function() {
    	return gulp.src(['assets/js/components/commons/app.js',
            'assets/js/components/commons/request.js',
            'assets/js/components/commons/afterlag.js',
            'assets/js/components/commons/common.js',
            'assets/js/components/commons/utils.js',
            'assets/js/components/commons/modules.js',
            'assets/js/components/commons/EventEmitterMicro.js',
            'assets/js/components/features/links.js',
            'assets/js/plugins/imagesLoaded/imagesLoaded.js',
            'assets/js/plugins/imagesLoaded/imagesLoaded.LiveQueue.js',
            'assets/js/plugins/imagesLoaded/imagesLoaded.Queue.js',
            'assets/js/plugins/imagesLoaded/imagesLoaded.QueueItem.js',
            'assets/js/plugins/marquee.js',
            'assets/js/plugins/marquee.static.js',
            'assets/js/plugins/marquee.effects.js',
            'assets/js/plugins/screens.js',
            'assets/js/plugins/animate.js',
            'assets/js/plugins/chartRadial.js',
            'assets/js/plugins/sliderElastic.js',
            'assets/js/plugins/styles.js',
            'assets/js/plugins/metrika.js',
            'assets/js/plugins/share.js',
            'assets/js/plugins/define.js',
            'assets/js/plugins/eventsEmitter.js',
            'assets/js/plugins/scroll/scroll.Animate.js',
            'assets/js/plugins/scroll/scroll.RefreshFix.js',
            'assets/js/libs/photoswipe/dist/photoswipe.js',
            'assets/js/libs/photoswipe/dist/photoswipe-ui-default.min.js',
            'public/js/commons/*.js',
            'public/js/sections/mobile/*.js'])
    		.pipe(concat('app.mobile.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./public/js'));
    });

    gulp.task('public.templates.mobile', function() {
    	return gulp.src(['public/templates/commons/modules/auth/auth.tag',
            'public/templates/commons/modules/auth/authSocial.tag',
            'public/templates/commons/modules/auth/forms/signIn.tag',
            'public/templates/commons/modules/auth/forms/signUp.tag',
            'public/templates/commons/modules/auth/forms/remember.tag',
            'assets/templates/modules/notify.html',
            'assets/templates/modules/loader.html',
            'assets/templates/modules/oScreenLoader.html',
            'assets/templates/sections/jptest/*.html',
            'assets/templates/sections/jptest/**/*.html',
            '!assets/templates/sections/jptest/jptest.html',
            'assets/templates/ui/icons/icon-replyMail.html',
            'public/templates/client/blog/popup/blogSubscribeForm.html',
            'public/templates/commons/icons/social/icon-fb.tag',
            'public/templates/commons/icons/social/icon-vk.tag',
            'public/templates/commons/icons/social/icon-tw.tag',
            'public/templates/commons/icons/social/icon-dk.tag',
            'public/templates/commons/icons/social/icon-gl.tag'])
    		.pipe(riot())
    		.pipe(concat('templates.mobile.js'))
    		.pipe(uglify())
    		.pipe(gulp.dest('./public/js'));
    });

    gulp.task('public.app.build.mobile', function() {
    	return gulp.src(['public/js/app.libs.mobile.js',
            'public/js/app.mobile.js',
            'public/js/templates.mobile.js'])
    		.pipe(concat('app.build.mobile.js'))
    		.pipe(gulp.dest('./public/js'));
    });
}

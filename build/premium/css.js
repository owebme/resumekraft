module.exports = function(){

    gulp.task('premium.css', function() {
    	return combiner(
    		gulp.src('assets/css/premium.scss'),
    		sass(),
    		csso(),
    		autoprefixer({
    			browsers: ['last 2 versions'],
    			cascade: false
    		}),
            base64({
                baseDir: './',
                extensions: ['svg'],
                maxImageSize: 16*1024, // bytes
                debug: false
            }),
    		gulp.dest('assets/css'),
    		browserSync.stream()
    	).on('error', notify.onError({
    		"sound": false,
    	}));
    });

    gulp.task('premium.css.largeScreen', function() {
    	return combiner(
    		gulp.src('assets/css/premium.css'),
    		px2vw({
    			width: 1400,
    			minPx: 2,
    			maxPx: 10000,
    			replace: true
    		}),
    		rename("premium.largeScreen.css"),
    		gulp.dest('assets/css'),
    		browserSync.stream()
    	).on('error', notify.onError({
    		"sound": false,
    	}));
    });

    gulp.task('premium.css.smallScreen', function() {
    	return combiner(
    		gulp.src('assets/css/premium.css'),
    		px2vw({
    			width: 360,
    			minPx: 2,
    			maxPx: 10000,
    			replace: true
    		}),
    		rename("premium.smallScreen.css"),
    		gulp.dest('assets/css'),
    		browserSync.stream()
    	).on('error', notify.onError({
    		"sound": false,
    	}));
    });    
}

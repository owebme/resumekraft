module.exports = function(){

    gulp.task('templates.basic', function() {
    	return combiner(
    		gulp.src('assets/css/appResume/basic/templates/style.scss'),
    		sass(),
    		csso(),
    		autoprefixer({
    			browsers: ['last 2 versions'],
    			cascade: false
    		}),
    		gulp.dest('assets/css/appResume/basic/templates'),
    		browserSync.stream()
    	).on('error', notify.onError({
    		"sound": false,
    	}));
    });

    gulp.task('templates.basic.view', function() {
    	return combiner(
    		gulp.src('assets/css/appResume/basic/templates/style.css'),
    		px2vw({
    			width: 1280,
    			minPx: 2,
    			maxPx: 10000,
    			replace: true
    		}),
    		rename("style.view.css"),
    		gulp.dest('assets/css/appResume/basic/templates'),
    		browserSync.stream()
    	).on('error', notify.onError({
    		"sound": false,
    	}));
    });    
}

module.exports = function(){

    gulp.task('styleguide', function() {
    	return combiner(
    		gulp.src('assets/css/styleguide.scss'),
    		sass(),
    		csso(),
    		autoprefixer({
    			browsers: ['last 2 versions'],
    			cascade: false
    		}),
            base64({
                baseDir: './',
                extensions: ['svg', 'png', 'jpg'],
                maxImageSize: 16*1024, // bytes
                debug: false
            }),
    		gulp.dest('assets/css'),
    		browserSync.stream()
    	).on('error', notify.onError({
    		"sound": false,
    	}));
    });
}

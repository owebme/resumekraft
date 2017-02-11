module.exports = function(){
    
    gulp.task('cachebust', function() {
      return gulp.src('./craft/templates/_layouts/*.html')
        .pipe(replace(/screen.min.css\?([0-9]*)/g, 'screen.min.css?' + getStamp()))
        .pipe(replace(/print.min.css\?([0-9]*)/g, 'print.min.css?' + getStamp()))
        .pipe(replace(/webstoemp.min.js\?([0-9]*)/g, 'webstoemp.min.js?' + getStamp()))
        .pipe(gulp.dest('./craft/templates/_layouts/'))
        .pipe(notify({ message: 'CSS/JS Cachebust task complete' }));
    });

    // Datestamp for cache busting
    var getStamp = function() {
    	var myDate = new Date();

    	var myYear = myDate.getFullYear().toString();
    	var myMonth = ('0' + (myDate.getMonth() + 1)).slice(-2);
    	var myDay = ('0' + myDate.getDate()).slice(-2);
    	var mySeconds = myDate.getSeconds().toString();

    	var myFullDate = myYear + myMonth + myDay + mySeconds;

    	return myFullDate;
    };
}

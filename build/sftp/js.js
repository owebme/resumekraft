module.exports = function(){

    var path = "/var/www/resume/data/www/v2.resumekraft.ru",
        gulpSSH = new GulpSSH({
    	ignoreErrors: false,
    	sshConfig: {
        	host: '5.101.124.21',
        	port: 22,
        	username: 'root',
        	password: '6T9Qxia2XyrrD68W'
        }
    })

    gulp.task('sftp-clear-cache', function () {
      return gulpSSH
        .exec(['uptime', 'ls -a', 'pwd'], {filePath: 'sftp.log'})
        .pipe(gulp.dest('./logs'))
    });
    gulp.task('sftp-app.js', function () {
    	return gulp.src('public/js/app.build.js')
          .pipe(gulpSSH.sftp('write', path + '/public/js/app.build.js'));
    });
    gulp.task('sftp-css', function () {
    	return gulp.src('public/css/style.css')
    	  .pipe(gulpSSH.sftp('write', path + '/public/css/style.css'));
    });
    gulp.task('sftp-css.largeScreen', function () {
    	return gulp.src('public/css/style.largeScreen.css')
    	  .pipe(gulpSSH.sftp('write', path + '/public/css/style.largeScreen.css'));
    });
    gulp.task('sftp-css.smallScreen', function () {
    	return gulp.src('public/css/style.smallScreen.css')
    	  .pipe(gulpSSH.sftp('write', path + '/public/css/style.smallScreen.css'));
    });
}

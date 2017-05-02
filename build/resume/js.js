module.exports = function(){

    gulp.task('resumeView.build', function() {
        return gulp.src(['assets/js/libs/modernizr.custom.js',
            'assets/js/libs/riot-3.3.2/riot+compiler.update.js',
            'assets/js/libs/riot/riot-i18n.js',
            'assets/js/libs/baobab.js',
            'assets/js/libs/underscore-min.js',
            'assets/js/libs/moment.min.js',
            'assets/js/libs/moment.ru.js',
            'assets/js/components/i18n/i18n.js',
            'assets/js/components/i18n/resume/basic/template/ru.js',
            'assets/js/components/commons/utils.js',
            'assets/js/store/resume/commons/education.js',
            'assets/js/store/resume/commons/languages.js',
            'assets/js/store/resume/commons/resume.js',
            'assets/js/store/resume/premium/resume.demo.js',
            'assets/js/store/resume/commons/salary.js',
            'assets/js/store/resume/commons/country.js',
            'assets/js/store/resume/commons/dictionary.js',
            'assets/js/store/month.js',
            'public/js/resume/init.js'])
            .pipe(concat('app.build.resume.js'))
            .pipe(uglify())
            .pipe(gulp.dest('./public/js'));
    });

}

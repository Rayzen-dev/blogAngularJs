const gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    cleanCSS = require('gulp-clean-css'),
    public = './public/';

gulp.task('default', ['compressCSS'], () => {
    // body...
});


gulp.task('appSass', () => {
    return sass('scss/app.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest(public + 'css'))
});

gulp.task('compressCSS', ['appSass'], () => {
    return gulp.src(public + 'css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(public+'css'))
});

gulp.task('watch', function () {
    gulp.watch('scss/*.scss', ['default']);
});
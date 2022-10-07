'use strict'
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass')(require('sass'));


gulp.task('sass', function () {
    return gulp.src('./Assets/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber({
            errorHandler: function (err) {
                notify.onError({
                    title: "Gulp error in " + err.plugin,
                    message: err.toString()
                })(err);
                gutil.beep();
            }
        }))
        .pipe(sass())
        // .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./Assets/css'))
        .pipe(browserSync.stream());
});

// Static Server  
gulp.task('serve', gulp.series('sass', function () {

    browserSync.init({
        port: 3000,
        server: "./",
        ghostMode: false,
        notify: false
    });

    gulp.watch('./Assets/scss/**/*.scss', gulp.series('sass'));
    gulp.watch(['./Assets/scripts/*.js', './**/*.html', './Assets/css/**/*.css']).on('change', browserSync.reload);

}));
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var uglify = require('gulp-uglifycss');
var rename = require('gulp-rename');

var CSS = './css',
    SASS = CSS + '/scss',
    JS = './js';

gulp.task('sass', function(){
    return gulp.src(SASS + '/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(CSS));
});

gulp.task('css', function(){
    return gulp.src(CSS + '/*.css')
    .pipe(uglify({
        "uglifyComments": true
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/'));
});

/* gulp.task('js', function(){
    return gulp.src(JS + '/theme.js')
    .pipe(uglify({
        "uglifyComments": true
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/'));
}); */

// gulp.task('run', ['sass', 'css']);

gulp.task('watch', function(){
    gulp.watch(SASS + '/**/*.scss', gulp.series('sass'));
    gulp.watch(CSS + '/*.css', gulp.series('css'));
    // gulp.watch(JS + '/*.js', gulp.series('js'));
});

// gulp.task('default', ['run', 'watch']);
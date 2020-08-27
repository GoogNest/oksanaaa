const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('watch', function() {

    browserSync.init({
        server: "./source"
    });

    gulp.watch('./source/scss/**/*.scss', gulp.series('sass-compile'));
    gulp.watch('./source/scss/**/*.scss').on('change', browserSync.reload);
    gulp.watch('./source/**/*.html').on('change', browserSync.reload);
});

gulp.task('sass-compile', function() {

    return gulp.src('./source/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
        autoprefixer()
    ]))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./source/css/'))
    .pipe(browserSync.stream());
})

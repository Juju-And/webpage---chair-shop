var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('task-name', function () {
    // Ciało naszego zadania.
});


gulp.task('pranie', function () {
    console.log("Robię pranie");
});


gulp.task('sass', function () {
    return gulp.src('scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'expanded'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
});


gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['sass']);
});


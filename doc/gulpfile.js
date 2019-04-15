 var gulp = require('gulp');
 var sass = require('gulp-sass');
 var watch = require('gulp-watch');

 gulp.task("sass", function() {
     return gulp.src("src/scss/*.scss")
         .pipe(sass({outputStyle:'expanded'}).on("error", sass.logError))
        .pipe(gulp.dest("src/css"));
 });

 gulp.task('watch', function () {
     return watch("src/scss/*.scss", gulp.series('sass'));
 });
// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var watch = require('gulp-watch');

// gulp.task('csssass',function(){
//     gulp.src('./src/sass/*.scss')
//     .pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
//     .pipe(gulp.dest('./src/css'))
// })


// gulp.task('jt',function(){
//     watch('./src/sass/*.scss',gulp.series("csssass"))
// })



// 局部安装gulp，是为了这里能够引入
// 全局安装gulp，目的是执行任意位置都能gulp任务
// ================================
// 三、gulp任务的书写步骤：
// 1.(1)引入gulp包，返回的是一个对象
//   (2)引入其他包,一般都是返回方法
//          * htmlmin 压缩html
// 2.开启gulp任务 gulp.task()
// 3.书写gulp任务的具体流程
//      从哪里来 --- 管道运输（经历什么改变） ----- 管道运输（到哪里去）
//      gulp.src()    gulp.pipe(经历什么)   ----   gulp.pipe(gulp.dest(目录))
// npmjs.com
// 
// 主任务：
const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const cleanCss = require("gulp-clean-css");
const rename = require("gulp-rename");
const jsUglify = require("gulp-uglify");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const sass = require("gulp-sass");
const watch = require("gulp-watch");

//扩展：pump() 泵
const pump = require("pump");

// 任务1： html文件的传递
// gulp.task("copyhtml",function(){
//     gulp.src("./src/index.html")
//     .pipe(gulp.dest("./dist/index.html"))
// })

// // 任务2： js多个文件的传递
// gulp.task("copyAllJs",function(){
//     // gulp.src(["./src/js/a.js","./src/js/b.js"]) //
//     // gulp.src("./src/js/*.js")
//     gulp.src(["./src/js/**/*.js","!./src/js/a.js"])
//     .pipe(gulp.dest("./dist/js"))
// })

// //任务3： 压缩html文件
// gulp.task("htmlCompress",function(){
//     return gulp.src("./src/index.html")
//     .pipe(htmlmin({ collapseWhitespace: true }))
//     .pipe(gulp.dest("./dist"))
// })

// 任务4： css压缩
// gulp.task("cssCompress",function(){
//     return gulp.src("./src/css/*")
//     .pipe(cleanCss())
//     .pipe(gulp.dest("./dist/css"))
// })
// 任务5：js压缩
// gulp.task("jsCompress",function(){
//     gulp.src("./src/js/*")
//     .pipe(jsUglify())
//     .pipe(gulp.dest("./dist/js"))
// })
//
/*
* @Author: huanting
* @Date:   2016-08-27 15:04:41
* @Last Modified by:   huanting
* @Last Modified time: 2016-08-27 17:55:38
*/
var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('script',function(){
   // 代码写在这里
   // 2.匹配我们要处理的文件
    gulp.src('./app.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))// 指定文件最终输出到dist目录

});


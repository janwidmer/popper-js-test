'use strict';

const gulp = require('gulp');
const getTask = require('./gulp/utils').getTask;

gulp.task('sync-githooks', getTask('sync-githooks'));
gulp.task('compile-css', getTask('compile-css'));
gulp.task('compile-js', getTask('compile-js'));
gulp.task('minify-css', ['compile-css'], getTask('minify-css'));
gulp.task('minify-js', ['compile-js'], getTask('minify-js'));
gulp.task('minify-img', getTask('minify-img'));
gulp.task('copy-assets', getTask('copy-assets'));
gulp.task('clean-assets', getTask('clean-assets'));
gulp.task('assets', ['copy-assets', 'minify-img', 'minify-js', 'minify-css']);
gulp.task('watch-assets', ['assets'], getTask('watch-assets'));
gulp.task('serve', getTask('serve'));
gulp.task('serve-stop', getTask('serve-stop'));
gulp.task('watch-serve', ['serve'], getTask('watch-serve'));
gulp.task('test', ['compile-css', 'compile-js'], getTask('test'));
gulp.task('develop', ['watch-assets', 'watch-serve']);
gulp.task('build', ['clean-assets'], getTask('build'));
gulp.task('production', ['assets'], getTask('production'));

var gulp   = require('gulp');
var config = require('../config').watch;

/*
 * Watches over src assets
 */

gulp.task('watch', ['browsersync'], function() {
  gulp.watch(config.scss, ['styles']);
  gulp.watch(config.js, ['scripts']);
  gulp.watch(config.html, ['deps']);
});

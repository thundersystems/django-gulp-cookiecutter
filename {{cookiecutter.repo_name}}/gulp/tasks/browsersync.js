var gulp        = require('gulp');
var browsersync = require('browser-sync').create();
var config      = require('../config').browsersync.dev;

/**
 * Run the build task and start a server with BrowserSync
 */
gulp.task('browsersync', ['build'], function() {
  browsersync.init(config);
});

var gulp        = require('gulp');
var bowerFiles  = require('main-bower-files');
var gulpFilter  = require('gulp-filter');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var cssnano     = require('gulp-cssnano');
var config      = require('../config').optimize;


gulp.task('optimize', function () {
  // creates stream of main bower files
  var files = bowerFiles();
  // project js and css files
  files.push(config.js.src);
  files.push(config.css.src);

  // filters
  var mainFilter = gulpFilter(['**/*.js', '**/*.css']);
  var jsFilter = gulpFilter('**/*.js', {restore: true});
	var cssFilter = gulpFilter('**/*.css', {restore: true});

  return gulp.src(files)
    // gets rid of non .js or .css files
    .pipe(mainFilter)
    // work only on js
		.pipe(jsFilter)
    // concat js files (name of resulting file, options)
		.pipe(concat(config.js.fileName, config.js.concat))
    // uglify js
    .pipe(uglify(config.js.uglify))
    // restores files stream
		.pipe(jsFilter.restore)
    // work only on css
		.pipe(cssFilter)
    // concat css (name of resulting file, options)
    .pipe(concat(config.css.fileName, config.css.concat))
    // minify css (options)
    .pipe(cssnano(config.css.cssnano))
    // restores files stream
		.pipe(cssFilter.restore)
    // saves bundled files
		.pipe(gulp.dest(config.dest));
});

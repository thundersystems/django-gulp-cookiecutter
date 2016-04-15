Tasks
=====

We have developed two automation chains: one for development, one for production.

config
------

We decide to keep all the config of the tasks together in a config.js file.
This allow us to make the tasks more reusable.

default
-------

The default task, which is called when the gulp command is called without a param, calls the dev task.

dev
---

The dev task is the access point for the dev chain. The task has two deps: runserver and watch

runserver
---------

The runserver task lanches a child process, running the default django runserver. The process uses the stdout, allowing
the normal use of the debugging tools like ipdb.
By default, the task executes django runserver on port 8010, passing the parameter --settings=<project-name>.settings.dev

watch
-----

THe watch tasks sets a three watcher on style, script and html files.
On modification, respectivelly the styles, scripts and deps tasks are run.

browsersync
-----------

Runs a browsersync wrapper around the standard runserver on port 8000. Browsersync ui runs on port 8080.

Check Browsersync docs @ https://www.browsersync.io/docs/

build
-----

Uses 'run-sequence' module to run subtasks in strict sequence. The subtasks are, in order

* bower
* delete
* scripts
* styles
* deps

Check run-sequence docs @ https://www.npmjs.com/package/run-sequence

bower
-----

Runs a bower install command in a child process.

Check 'bower' docs @ http://bower.io/

delete
------

Deletes the content of the 'templates_dev' and 'static/dev' folders using 'del' module.

Check 'del' docs @ https://www.npmjs.com/package/del

scripts
-------

The tasks compiles the es2015 scripts in es5 scripts and copies the results in the dest folder.
Uses gulp-babel to compile and gulp-sourcemaps to write sourcemaps of the compiled scripts.

Check 'gulp-babel' docs @ https://www.npmjs.com/package/gulp-babel
Check 'gulp-sourcemaps' docs @ https://www.npmjs.com/package/gulp-sourcemaps

styles
------

The task compiles scss and sass stylesheets in css, then passes them through autoprefixer and mqpacker.
Finally copies the files in the dest folder.

Check packages docs:

* gulp-plumber: https://www.npmjs.com/package/gulp-plumber
* gulp-inject: https://www.npmjs.com/package/gulp-inject
* main-bower-files: https://www.npmjs.com/package/main-bower-files
* gulp-sourcemaps: https://www.npmjs.com/package/gulp-sourcemaps
* gulp-sass: https://www.npmjs.com/package/gulp-sass
* gulp-postcss: https://www.npmjs.com/package/gulp-postcss
* autoprefixer: https://www.npmjs.com/package/autoprefixer
* css-mqpacker: https://www.npmjs.com/package/css-mqpacker

deps
----

Installs bower dependencies and project assets in the 'templates_dev/base.html' folder using

Check packages docs:

* gulp-inject: https://www.npmjs.com/package/gulp-inject
* main-bower-files: https://www.npmjs.com/package/main-bower-files

prod
----

The prod task is the access point for the prod chain.
Uses 'runSequence' module to run subtasks in strict sequence. The subtasks are, in order:

* bower
* delete:prod
* scripts
* styles
* optimize
* inject

Check run-sequence docs @ https://www.npmjs.com/package/run-sequence

delete:prod
-----------

Deletes the content of the 'templates_prod' and 'static/prod' folders.

Check 'del' docs @ https://www.npmjs.com/package/del

optimize
--------

Concats and minifies css and contacts and uglifies js, both from bower and project deps.

Check packages docs:

* main-bower-files: https://www.npmjs.com/package/main-bower-files
* gulp-filter: https://www.npmjs.com/package/gulp-filter
* gulp-concat: https://www.npmjs.com/package/gulp-concat
* gulp-uglify: https://www.npmjs.com/package/gulp-uglify
* gulp-cssnano: https://www.npmjs.com/package/gulp-cssnano

inject
------

Injects optimized assets files inside 'templates_prod/base.html'.

Check 'gulp-inject' docs @ https://www.npmjs.com/package/gulp-inject

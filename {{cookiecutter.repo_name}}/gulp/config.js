var srcAssets         = '{{ cookiecutter.repo_name }}/static/src';
var devAssets         = '{{ cookiecutter.repo_name }}/static/dev';
var prodAssets        = '{{ cookiecutter.repo_name }}/static/prod';

var srcTemplates      = '{{ cookiecutter.repo_name }}/templates';
var devTemplates      = '{{ cookiecutter.repo_name }}/templates_dev';
var prodTemplates     = '{{ cookiecutter.repo_name }}/templates_prod';

var baseTemplate      = srcTemplates + '/base.html';
var baseScss          = srcAssets + '/styles/styles.scss';
{% raw %}

var injectTransform = function (filepath, file, index, length, targetFile) {
  if (filepath.slice(-3) === '.js') {
      return '<script src="\{% static \''+ filepath +'\' %\}"></script>';
  } else if (filepath.slice(-4) === '.css') {
      return '<link rel="stylesheet" href="\{% static \'' + filepath + '\' %\}">';
  } else {
    return inject.transform.apply(inject.transform, arguments);
  }
};

module.exports = {
  browsersync: {
    dev: {
      port: 8000,
      ui: {
        port: 8080
      },
      proxy: 'localhost:8010',
      open: false,
      files: [
        devAssets + '/styles/*.css',
      ]
    }
  },
  delete: {
    dev: [devAssets, devTemplates],
    prod: [devAssets, prodAssets, prodTemplates]
  },
  deps: {
    src: baseTemplate,
    dest: devTemplates,
    bower: {
      options: {
        name: 'bower',
        addRootSlash: false,
        ignorePath: 'bower_components/',
        transform: injectTransform
      }
    },
    project: {
      assets: [devAssets + '/**/*.js', devAssets + '/**/*.css'],
      options: {
        addRootSlash: false,
        ignorePath: '{{ cookiecutter.repo_name }}/static/',
        transform: injectTransform
      }
    }
  },
  inject: {
    src: baseTemplate,
    dest: prodTemplates,
    assets: [prodAssets + '/**/*.js', prodAssets + '/**/*.css'],
    options: {
      addRootSlash: false,
      ignorePath: '{{ cookiecutter.repo_name }}/static/',
      transform: injectTransform
    }
  },
  optimize: {
    dest: prodAssets,
    mainBowerFiles: {},
    js:{
      src: devAssets + '/**/*.js',
      fileName: 'scripts/bundle.js',
      concat: {},
      uglify: {}
    },
    css: {
      src: devAssets + '/**/*.css',
      fileName: 'styles/bundle.css',
      concat: {},
      cssnano: {}
    }
  },
  scripts: {
    src: srcAssets + '/scripts/*.js',
    dest: devAssets + '/scripts'
  },
  styles: {
    src: baseScss,
    dest: devAssets + '/styles/',
    postcss: {
      autoprefixer: {
        browsers: [
          'last 2 versions',
          'safari 5',
          'ie 8',
          'ie 9',
          'opera 12.1',
          'ios 6',
          'android 4'
        ],
        cascade: true
      },
      mqpacker: {}
    },
    inject: {
      options: {
        relative: true
      }
    }
  },
  watch: {
    scss: srcAssets  + '/styles/*.scss',
    js: srcAssets + '/scripts/*.js',
    html: baseTemplate
  },
};
{% endraw %}

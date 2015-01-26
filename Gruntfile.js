'use strict';

module.exports = function(grunt) {

  var jsFiles = [
    'lib/**/*.js',
    'test/**/*.js',
    'Gruntfile.js',
    '!test/browser/chai/**/*',
    '!test/browser/mocha/**/*',
    '!test/browser/extend-with-super.js'
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      all: [
        'dist',
        'test/browser/extend-with-super.js'
      ]
    },

    copy: {
      post_build: {
        files: [{
          'test/browser/extend-with-super.js': 'dist/extend-with-super.js'
        }]
      }
    },

    jsvalidate: {
      options: {
        globals: {},
        esprimaOptions: {},
        verbose: false
      },
      targetName: {
        files: {
          src: jsFiles
        }
      }
    },

    jsbeautifier: {
      options: {
        js: {
          indentSize: 2
        }
      },
      modify: {
        src: jsFiles
      },
      verify: {
        src: jsFiles,
        options: {
          mode: 'VERIFY_ONLY'
        }
      }
    },

    jscs: {
      options: {
        config: 'node_modules/grunt-jscs/node_modules/jscs/presets/grunt.json'
      },
      files: jsFiles
    },

    jshint: {
      options: {
        node: true
      },
      all: jsFiles
    },

    browserify: {
      main: {
        src: ['lib/extend-with-super.js'],
        dest: 'dist/extend-with-super.js',
        options: {
          browserifyOptions: {
            standalone: 'extendWithSuper'
          }
        }
      }
    },

    uglify: {
      bundle: {
        options: {
          report: 'gzip'
        },
        files: [{
          'dist/extend-with-super.min.js': ['dist/extend-with-super.js']
        }]
      }
    },

    mocha: {
      options: {
        reporter: 'Spec',
        run: true
      },
      unit: {
        src: ['test/browser/index.html']
      }
    },

    mochaTest: {
      unit: {
        options: {
          reporter: 'spec'
        },
        src: [
          'test/node/**/*-test.js'
        ]
      }
    }

  });

  require('load-grunt-tasks')(grunt, {
    scope: 'devDependencies'
  });

  require('time-grunt')(grunt);

  grunt.registerTask('pre-commit', [
    'jsvalidate',
    'jshint',
    'jsbeautifier:verify',
    'jscs',
    'test'
  ]);

  grunt.registerTask('test', [
    'mocha',
    'mochaTest'
  ]);

  grunt.registerTask('build', [
    'clean',
    'jsbeautifier:modify',
    'browserify',
    'uglify',
    'copy'
  ]);

  grunt.registerTask('default', ['clean', 'build', 'copy', 'test']);

};

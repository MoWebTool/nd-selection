/**
 * Description: Gruntfile.js
 * Author: lzhengms <lzhengms@gmail.com>
 * Date: 2015-02-12 14:37:39
 */

'use strict';

module.exports = function(grunt) {

  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    server: {
      develop: {
        options: {
          config: false,
          release: false
        }
      }
    },

    jshint: {
      files: ['index.js', 'src/**/*.js'],
      options: {
        jshintrc: true
      }
    },

    exec: {
      'spm-publish': 'spm publish',
      'spm-test': 'spm test'
    }

  });

  grunt.registerTask('test', ['jshint','exec:spm-test']);

  grunt.registerTask('publish', ['test', 'exec:spm-publish']);

  grunt.registerTask('default', ['server']);

};

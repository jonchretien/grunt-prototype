/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      files: ['js/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint'
    },
    jshint: {
      options: {
        asi: false,
        curly: true,
        devel: false,
        eqeqeq: true,
        forin: false,
        newcap: true,
        noempty: true,
        strict: true,
        undef: true,
        browser: true
      },
      globals: {}
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint');

};

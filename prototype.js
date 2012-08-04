/*
 * grunt
 * https://github.com/cowboy/grunt
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 * http://benalman.com/about/license/
 */

// Basic template description.
exports.description = 'Create basic scaffolding for prototypes.';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'Very much a work in progress.';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  grunt.helper('prompt', {type: 'prototype'}, [
    // Prompt for these values.
    grunt.helper('prompt_for', 'name'),
    grunt.helper('prompt_for', 'title'),
    grunt.helper('prompt_for', 'description', 'Application Prototype'),
    grunt.helper('prompt_for', 'version'),
    grunt.helper('prompt_for', 'author_name'),
    grunt.helper('prompt_for', 'author_email'),
  ], function(err, props) {

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // All done!
    done();
  });

};
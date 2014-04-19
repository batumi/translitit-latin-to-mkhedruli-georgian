/* global module */
'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // lint
        jshint: {
            all: [
                './*.js',
                'lib/**/*.js',
                'test/**/*.js'
            ],
            options: {
                jshintrc: './.jshintrc'
            }
        },

        // test
        buster: {
            test: {
                config: './test/buster.js'
            }
        },

        // Automatically run tasks when files changes
        watch: {
            scripts: {
                files: '<%= jshint.all %>',
                tasks: ['clear', 'jshint', 'buster']
            }
        },
        browserify: {
            src: {
                src: ['index.js'],
                dest: '<%= pkg.name %>.js',
                options: {
                    ignore: [],
                    shim: {}
                }
            }
        }
    });


    // load tasks from grunt plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-clear');
    grunt.loadNpmTasks('grunt-buster');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-browserify');

    // Shortcuts to tasks
    grunt.registerTask('test', 'buster');

    grunt.registerTask('default', ['jshint:all', 'buster', 'browserify']);
};

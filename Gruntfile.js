'use strict';
var multiline = require('multiline');

module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        svgstore: {
            options: {
                prefix : 'icon-', // This will prefix each ID
                svg: { // will add and overide the the default xmlns="http://www.w3.org/2000/svg" attribute to the resulting SVG
                    viewBox : '0 0 100 100',
                    xmlns: 'http://www.w3.org/2000/svg'
                }
            },

            default:{
                files: {
                    './html-parts/sprite.html': ['./svg/*.svg']
                }
            }
        },

        concat: {
            options: {
                separator: '.'
            },
            dist: {
                src: ['js/controller.js', 'js/icons.js', 'js/hsvg.js'],
                dest: 'app.js'
            }
        },
        includes: {
            files: {
                src: ['./html-parts/index-part.html'], // Source files
                dest: './index.html' // Destination directory
            }
        }

    });



    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-svgstore');
    grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default',  ['svgstore', 'concat', 'includes']);

};
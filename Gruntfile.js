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
    grunt.registerTask('default',  ['svgstore', 'includes']);

};
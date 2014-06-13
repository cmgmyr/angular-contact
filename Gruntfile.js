module.exports = function (grunt) {

    //Initializing the configuration object
    grunt.initConfig({

        // Task configuration
        less: {
            development: {
                options: {
                    compress: true,  //minifying the result
                },
                files: {
                    //compiling app.less into app.css
                    "./app/css/app.css": "./app/css/app.less"
                }
            }
        },
        watch: {
            less: {
                files: ['./app/css/*.less'], //watched files
                tasks: ['less'], //tasks to run
                options: {
                    livereload: true //reloads the browser
                }
            }
        },
        karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            }
        },
        yuidoc: {
            app: {
                name: 'angular-contact',
                description: 'A simple contact app built with AngularJS',
                version: '0.0.1',
                options: {
                    paths: 'app/js/',
                    outdir: 'app/docs'
                }
            }
        }
    });

    // Plugin loading
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-yuidoc');
    grunt.loadNpmTasks('grunt-karma');

    // Task definition
    grunt.registerTask('test', ['karma']);
    grunt.registerTask('docs', 'yuidoc');
    grunt.registerTask('init', ['less']);
    grunt.registerTask('default', ['watch']);

};

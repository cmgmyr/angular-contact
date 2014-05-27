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
        }
    });

    // Plugin loading
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Task definition
    grunt.registerTask('init', ['less']);
    grunt.registerTask('default', ['watch']);

};

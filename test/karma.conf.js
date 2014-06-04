module.exports = function (config) {
    config.set({

        basePath: '../',

        files: [
            // libraries
            'app/js/lib/angular/angular.min.js',
            'app/js/lib/angular/angular-route.min.js',
            'app/js/lib/angular/angular-mocks.js',

            // app files
            'app/js/app.js',
            'app/js/controllers.js',
            'app/js/contactlistcontroller.js',
            'app/js/contactdetailcontroller.js',
            'app/js/contactcreatecontroller.js',
            'app/js/services.js',
            'app/js/directives.js',
            'app/js/emaildirective.js',

            // catch all
            'app/js/**/*.js',
            'test/unit/**/*.js'
        ],

        logLevel: config.LOG_DEBUG,

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
        ]

    });
};
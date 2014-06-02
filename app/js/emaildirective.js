'use strict';

/**
 * Initializes contactEmail which will handle all
 * formatting of email addresses
 *
 * @class contactEmail
 * @constructor
 * @module contactDirectives
 */
angular.module('contactDirectives').directive('contactEmail', function() {
    return {
        restrict: 'E',
        scope: {
            contact: '='
        },
        templateUrl: 'partials/contact-email.html'
    };
});
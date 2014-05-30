'use strict';

angular.module('contactDirectives').directive('contactEmail', function() {
    return {
        restrict: 'E',
        scope: {
            contact: '='
        },
        templateUrl: 'partials/contact-email.html'
    };
});
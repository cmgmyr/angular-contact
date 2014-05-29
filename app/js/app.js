'use strict';

var app = angular.module('contactApp', [
    'ngRoute',

    'contactControllers',
    'contactServices',
    'contactDirectives'
]);

app.config(['$routeProvider',
    function($roueProvider) {
        $roueProvider.
            when('/contacts', {
                templateUrl: 'partials/contact-list.html',
                controller: 'ContactListCtrl'
            }).
            when('/contacts/:contactId', {
                templateUrl: 'partials/contact-detail.html',
                controller: 'ContactDetailCtrl'
            }).
            otherwise({
                redirectTo: '/contacts'
            });
    }
]);
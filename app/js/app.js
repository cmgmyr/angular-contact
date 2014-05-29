'use strict';

angular.module('contactApp', [
    'ngRoute',

    'contactControllers',
    'contactServices',
    'contactDirectives'
])

.config(['$routeProvider',
    function($roueProvider) {
        $roueProvider.
            when('/contacts', {
                templateUrl: 'partials/contact-list.html',
                controller: 'ContactListCtrl'
            }).
            when('/contacts/create', {
                templateUrl: 'partials/contact-create.html',
                controller: 'ContactCreateCtrl'
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
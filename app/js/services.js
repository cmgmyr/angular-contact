'use strict';

var contactServices = angular.module('contactServices', []);

contactServices.service('Contact', ['$http', function($http) {

    var urlBase = '/app/data/contacts.json';

    this.getContacts = function() {
        return $http.get(urlBase);
    };
}]);
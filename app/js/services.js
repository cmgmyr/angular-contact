'use strict';

var contactServices = angular.module('contactServices', []);

contactServices.service('Contact', ['$http', function($http) {

    var urlBase = 'http://angular-contact-api.dev/api/contacts';

    this.getContacts = function() {
        return $http.get(urlBase);
    };

    this.getContact = function(id) {
        return $http.get(urlBase + '/' + id);
    }
}]);
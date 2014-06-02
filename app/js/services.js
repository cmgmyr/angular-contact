'use strict';

/**
 * The contactServices module controls all app services
 *
 * @module contactServices
 */
angular.module('contactServices', [])

/**
 * Initializes Contact service which will handle getting, inserting,
 * updating, and deleting contacts in the data source
 *
 * @class Contact
 * @constructor
 * @module contactServices
 */
.service('Contact', ['$http', function($http) {

    /**
     * The base URL of the API server to call
     *
     * @property urlBase
     * @type string
     * @default 'http://angular-contact-api.dev/api/contacts'
     */
    var urlBase = 'http://angular-contact-api.dev/api/contacts';

    /**
     * Gets all contacts from data source
     *
     * @method getContacts
     * @param sortBy string
     * @param direction string
     * @param query string
     * @returns HttpPromise
     */
    this.getContacts = function(sortBy, direction, query) {
        if (direction == '') {
            direction = 'asc';
        } else {
            direction = 'desc';
        }
        return $http.get(urlBase + '?sortBy=' + sortBy + '&direction=' + direction + '&query=' + query);
    };

    /**
     * Gets a specific contact from data source by id
     *
     * @method getContact
     * @param id integer
     * @returns HttpPromise
     */
    this.getContact = function(id) {
        return $http.get(urlBase + '/' + id);
    };

    /**
     * Inserts a contact object into data source
     *
     * @method insertContact
     * @param contact object
     * @returns HttpPromise
     */
    this.insertContact = function(contact) {
        return $http.post(urlBase, contact);
    };

    /**
     * Updates a contact object in data source
     *
     * @method updateContact
     * @param contact object
     * @returns HttpPromise
     */
    this.updateContact = function(contact) {
        return $http.put(urlBase + '/' + contact.id, contact);
    };

    /**
     * Deletes a contact from data source
     *
     * @method deleteContact
     * @param id integer
     * @returns HttpPromise
     */
    this.deleteContact = function(id) {
        return $http.delete(urlBase + '/' + id);
    };
}]);
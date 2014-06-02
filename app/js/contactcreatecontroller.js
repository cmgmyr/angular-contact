'use strict';

/**
 * Initializes ContactCreateCtrl which will handle
 * all functionality to create a new contact
 *
 * @class ContactCreateCtrl
 * @constructor
 * @module contactControllers
 */
angular.module('contactControllers').controller('ContactCreateCtrl', ['$scope', '$location', 'Contact', function($scope, $location, Contact) {

    /**
     * Contact object to be possibly persisted
     *
     * @property contact
     * @type object
     * @default {}
     */
    $scope.contact = {};

    /**
     * Attempts to insert a new contact through the Contact service
     *
     * @method insertContact
     */
    $scope.insertContact = function() {
        Contact.insertContact($scope.contact)
            .success(function() {
                $location.path("/contacts");
            })
            .error(function() {
                alert('Unable to add contact!');
            });
    };
}]);
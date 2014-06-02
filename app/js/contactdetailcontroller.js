'use strict';

/**
 * Initializes ContactDetailCtrl which will handle all
 * functionality to show, update, and delete a contact
 *
 * @class ContactDetailCtrl
 * @constructor
 * @module contactControllers
 */
angular.module('contactControllers').controller('ContactDetailCtrl', ['$scope', '$routeParams', '$location', 'Contact', function($scope, $routeParams, $location, Contact) {

    /**
     * Contact object to be possibly persisted
     *
     * @property contact
     * @type object
     * @default {}
     */
    $scope.contact = {};

    getContact();

    /**
     * Uses the Contact service in order to grab specific contact object
     *
     * @method getContact
     */
    function getContact() {
        Contact.getContact($routeParams.contactId)
            .success(function(data) {
                $scope.contact = data;
            });
    }

    /**
     * Uses the Contact service in order to persist the contact's data
     *
     * @method updateContact
     */
    $scope.updateContact = function() {
        Contact.updateContact($scope.contact)
            .success(function(data) {
                $scope.contact = data;
                alert('Contact Saved!');
            })
            .error(function() {
                alert('Unable to update contact!');
            });
    };

    /**
     * Uses the Contact service in order to remove the contact from the data source
     *
     * @method deleteContact
     */
    $scope.deleteContact = function() {
        Contact.deleteContact($routeParams.contactId)
            .success(function() {
                $location.path("/contacts");
            });
    };
}]);
'use strict';

/**
 * Initializes ContactListCtrl which will handle all
 * functionality to show, sort, and search contacts
 *
 * @class ContactListCtrl
 * @constructor
 * @module contactControllers
 */
angular.module('contactControllers').controller('ContactListCtrl', ['$scope', 'Contact', function($scope, Contact) {

    /**
     * Show or hide the contact list data. If hidden, show the loader image
     *
     * @property showContacts
     * @type boolean
     * @default false
     */
    $scope.showContacts = false;

    /**
     * Main scope object that holds all contact data
     *
     * @property contacts
     * @type object
     * @default {}
     */
    $scope.contacts = {};

    /**
     * Provides the property that the contacts will be sorted by
     *
     * @property sortOrder
     * @type string
     * @default 'last_name'
     */
    $scope.sortOrder = 'last_name';

    /**
     * Provides the direction that the contacts will be sorted by
     *
     * @property direction
     * @type string
     * @default ''
     */
    $scope.direction = '';

    /**
     * Provides the text query that the contacts will be searched by
     *
     * @property query
     * @type string
     * @default ''
     */
    $scope.query = '';

    getContacts();

    /**
     * Uses the Contact service in order to grab all contacts in data source
     *
     * @method getContacts
     */
    function getContacts() {
        $scope.showContacts = false;
        Contact.getContacts($scope.sortOrder, $scope.direction, $scope.query)
            .success(function (data) {
                $scope.contacts = data;
                $scope.showContacts = true;
            });
    }

    /**
     * Changes the direction of the sort order
     *
     * @method changeDirection
     */
    $scope.changeDirection = function(direction) {
        $scope.direction = direction;
        getContacts();
    };

    /**
     * Watches the sortOrder property, then runs getContacts if changed
     */
    $scope.$watch('sortOrder', getContacts);

    /**
     * Watches the direction property, then runs getContacts if changed
     */
    $scope.$watch('direction', getContacts);

    /**
     * Watches the query property, then runs getContacts if string length
     * is greater than or equal to 3, or equal to 0
     */
    $scope.$watch('query', function(newValue) {
        if (newValue.length >= 3 || newValue.length == 0) {
            getContacts();
        }
    });
}]);
'use strict';

contactControllers.controller('ContactDetailCtrl', ['$scope', '$routeParams', 'Contact', function($scope, $routeParams, Contact) {

    $scope.contact = {};

    getContact();

    function getContact() {
        Contact.getContact($routeParams.contactId)
            .success(function(data) {
                $scope.contact = data;
            });
    }

    $scope.updateContact = function(id) {
        Contact.updateContact(contact)
            .success(function(data) {
                $scope.contact = data;
            });
    }
}]);
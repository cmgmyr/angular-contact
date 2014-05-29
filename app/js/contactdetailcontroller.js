'use strict';

contactControllers.controller('ContactDetailCtrl', ['$scope', '$routeParams', '$location', 'Contact', function($scope, $routeParams, $location, Contact) {

    $scope.contact = {};

    getContact();

    function getContact() {
        Contact.getContact($routeParams.contactId)
            .success(function(data) {
                $scope.contact = data;
            });
    }

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

    $scope.deleteContact = function() {
        Contact.deleteContact($routeParams.contactId)
            .success(function() {
                $location.path("/contacts");
            });
    };
}]);
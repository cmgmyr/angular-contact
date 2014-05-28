'use strict';

contactControllers.controller('ContactDetailCtrl', ['$scope', '$routeParams', 'Contact', function($scope, $routeParams, Contact) {

    $scope.contacts = {};
    $scope.contactId = $routeParams.contactId;

    getContacts();

    function getContacts() {
        Contact.getContacts()
            .success(function (data) {
                $scope.contacts = data;
            });
    }
}]);
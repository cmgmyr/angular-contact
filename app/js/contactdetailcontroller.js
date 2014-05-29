'use strict';

contactControllers.controller('ContactDetailCtrl', ['$scope', '$routeParams', 'Contact', function($scope, $routeParams, Contact) {

    $scope.contact = {};
    $scope.contactId = $routeParams.contactId;

    getContact();

    function getContact() {
        Contact.getContact($scope.contactId)
            .success(function (data) {
                $scope.contact = data;
            });
    }
}]);
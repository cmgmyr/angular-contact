'use strict';

contactControllers.controller('ContactCreateCtrl', ['$scope', '$location', 'Contact', function($scope, $location, Contact) {

    $scope.contact = {};

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
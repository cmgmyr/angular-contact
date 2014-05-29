'use strict';

contactControllers.controller('ContactListCtrl', ['$scope', 'Contact', function($scope, Contact) {

    $scope.contacts = {};
    $scope.sortOrder = 'last_name';
    $scope.direction = '';

    getContacts();

    function getContacts() {
        Contact.getContacts()
            .success(function (data) {
                $scope.contacts = data;
            });
    }

    $scope.changeDirection = function(direction) {
        $scope.direction = direction;
    };
}]);
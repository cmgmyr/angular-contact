'use strict';

angular.module('contactControllers').controller('ContactListCtrl', ['$scope', 'Contact', function($scope, Contact) {

    $scope.showContacts = false;
    $scope.contacts = {};
    $scope.sortOrder = 'last_name';
    $scope.direction = '';
    $scope.query = '';

    getContacts();

    function getContacts() {
        $scope.showContacts = false;
        Contact.getContacts($scope.sortOrder, $scope.direction, $scope.query)
            .success(function (data) {
                $scope.contacts = data;
                $scope.showContacts = true;
            });
    }

    $scope.changeDirection = function(direction) {
        $scope.direction = direction;
        getContacts();
    };

    $scope.$watch('sortOrder', getContacts);
    $scope.$watch('direction', getContacts);

    $scope.$watch('query', function(newValue) {
        if (newValue.length >= 3 || newValue.length == 0) {
            getContacts();
        }
    });
}]);
'use strict';

contactControllers.controller('ContactListCtrl', ['$scope', 'Contact', function($scope, Contact) {

    $scope.contacts = {};
    $scope.sortOrder = 'last_name';
    $scope.direction = '';
    $scope.query = '';

    getContacts();

    function getContacts() {
        Contact.getContacts($scope.sortOrder, $scope.direction, $scope.query)
            .success(function (data) {
                $scope.contacts = data;
            });
    }

    $scope.changeDirection = function(direction) {
        $scope.direction = direction;
        getContacts();
    };

    $scope.$watchCollection(['sortOrder', 'direction'], getContacts);

    $scope.$watch('query', function(newValue) {
        if (newValue.length >= 3 || newValue.length == 0) {
            getContacts();
        }
    });
}]);
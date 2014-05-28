'use strict';

contactControllers.controller('ContactListCtrl', ['$scope', 'Contact', function($scope, Contact) {

    $scope.contacts = {};
    $scope.sortOrder = 'last_name';

    getContacts();

    function getContacts() {
        Contact.getContacts()
            .success(function (data) {
                $scope.contacts = data;
            });
    }
}]);
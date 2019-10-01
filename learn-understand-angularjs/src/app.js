let app = angular.module('myApp', []);

app.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    $scope.handle = '';

    $scope.lowercaseLetter = function() {
        return $filter('lowercase')($scope.handle);
    } 

    $scope.characters = 5;

    $scope.rules = [
        { rulename: "Must be 5 characters"},
        { rulename: "Must not be used elsewhere"},
        { rulename: "Must be cool"},
    ];

    console.log($scope.rules);
}]);
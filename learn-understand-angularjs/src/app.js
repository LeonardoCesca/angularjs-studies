let app = angular.module('myApp', []);

app.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    $scope.handle = '';

    $scope.lowercaseLetter = function() {
        return $filter('lowercase')($scope.handle);
    } 

    $scope.characters = 5;
}]);
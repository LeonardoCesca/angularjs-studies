let app = angular.module('myApp', []);

app.controller('mainController', function($scope) {
    $scope.name = 'Leo';
    $scope.occupation = 'Coder';

    $scope.getname = function() {
        return 'Leo Cesca'
    }

    console.log($scope)
});
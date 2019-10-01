let app = angular.module('myApp', ['ngMessages', 'ngResource']);

app.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {

   $scope.name= 'Leo';

   $timeout(function() {
    $scope.name = 'Leonardo';
   },3000);
}]);
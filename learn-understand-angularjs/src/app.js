let app = angular.module('myApp', ['ngMessages']);

app.controller('mainController', function($scope, $log, $filter) {
    
$scope.name = 'Leonardo';
$scope.formattedname = $filter('uppercase')($scope.name);

$log.info($scope.name);
$log.info($scope.formattedname);

});
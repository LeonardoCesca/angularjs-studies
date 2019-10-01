let app = angular.module('myApp', []);

app.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {
    $scope.handle = '';

    $scope.lowercaseLetter = function() {
        return $filter('lowercase')($scope.handle);
    } 

    $scope.$watch('handle', function(newValue, oldValue) {
        console.info('Changed!');
        console.log('Old: ' +oldValue);
        console.log('New: ' +newValue);
    })

    $timeout(function() {
        $scope.handle = 'new';
        console.log('Scope changed')
    }, 3000)
}]);
let app = angular.module('app',[]);

app.controller('appController', function($scope) {
    $scope.isOpen = false;

    $scope.showBox = function() {
        $scope.isOpen = !$scope.isOpen;
    }
})
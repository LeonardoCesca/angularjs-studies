
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })

    .when('/second/', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.service('nameService', function() {
    let self = this;
    this.name = 'Leo';

    this.namelength = function() {
        return self.name.length;
    };
});

myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService) {
    
    $scope.name = nameService.name;

    $scope.$watch('name', function() {
        nameService.name = $scope.name;
    });

    $log.main = 'Property from main';
    $log.log($scope.name)
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    $scope.name = 'Second';
    $scope.num = $routeParams.num || 1;
    $log.second = 'Property from main';
    $log.log($log);
    
}]);

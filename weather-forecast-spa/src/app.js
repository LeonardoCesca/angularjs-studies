let weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/', {
            templateUrl: 'src/pages/home.html',
            controller: 'homeController'
        })

        .when('/forecast', {
            templateUrl: 'src/pages/forecast.html',
            controller: 'forecastController'
        })
});

weatherApp.service('cityService', function() {
    this.city = 'New York, NY'
});

weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {

    $scope.city = cityService.city;

    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    })

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', 'cityService', function($scope, $resource, cityService) {

    $scope.city = cityService.city;

    $scope.weatherApi = $resource("https://samples.openweathermap.org/data/2.5/forecast/", {
        callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }
    
    });    
}]);
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

weatherApp.controller('homeController', ['$scope', function() {

}]);

weatherApp.controller('forecastController', ['$scope', function() {
    
}]);
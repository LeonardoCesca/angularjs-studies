angular
  .module('app')
  .config((
      $locationProvider,
      $routeProvider,
    ) => {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: './src/components/home/home.html',
        controller: 'HomeController',
      })
      .when('/movies', {
        templateUrl: './src/components/main-movie/main-movie.html',
        controller: function () {
          console.log('object');
        }
      })
  });
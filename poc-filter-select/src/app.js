let app = angular.module('app',[]);

app.controller('appController', function($scope) {
   $scope.products = [
      {name: 'productA', type: 1},
      {name: 'productB', type: 1},
      {name: 'productC', type: 2},
      {name: 'productD', type: 2}
   ]

   $scope.productTypes = [
      {name: 'typeAlpha', type: 1},
      {name: 'typeBravo', type: 2}
    ];
    
})
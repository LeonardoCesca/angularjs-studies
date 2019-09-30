let app = angular.module('myApp', []);

app.controller('mainController', function($scope) {
    console.log($scope)
});

let searchPeople = function(firstName, lastName, height, age, occupation){
    return 'Leo Cesca'
}

console.log(angular.injector().annotate(searchPeople));
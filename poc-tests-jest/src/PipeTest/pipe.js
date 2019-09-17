var app = angular.module('app', []); 
	app.controller('geek', function($scope) { 
		$scope.string1 = "geeksforgeeks is the computer science portal for geeks."; 
	$scope.upper = function() { 
		$scope.string2 = angular.uppercase($scope.string1); 
	} 
}); 
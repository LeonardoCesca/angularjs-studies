angular.module('mathModule', [])
    .factory('mathService', function() {
        
        let addTwoNumbers = function(num1, num2) {
            return num1 + num2;
        };

        let addMultiplyNumbers = function(num1, num2) {
            return num1 * num2;
        }

        let addDivisionNumbers = function(num1, num2) {
            return num1 / num2;
        }

        return {
            addTwoNumbers,
            addMultiplyNumbers,
            addDivisionNumbers
        };
    });
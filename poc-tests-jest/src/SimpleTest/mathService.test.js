require('../../node_modules/angular/angular.min.js');
require('../../node_modules/angular-mocks/angular-mocks.js');
require('./mathService.js');

let _mathService;

beforeEach(
    angular.mock.module('mathModule')
);

beforeEach(inject(mathService => {
    _mathService = mathService;
}));

describe('Success', function() {

    it('1 + 1 should equal 2', function() {
        let atual = _mathService.addTwoNumbers(1,1);
        expect(atual).toEqual(2);
    });

    it('2 + 3 should equal 5', function() {
        let atual = _mathService.addTwoNumbers(2,3);
        expect(atual).toEqual(5);
    });

    it('(2+3)*4 should equal 20', function() {
        let soma = _mathService.addTwoNumbers(2,3);
        let multiplicacao = _mathService.addMultiplyNumbers(soma, 4);
        expect(multiplicacao).toEqual(20); 
    });

    it('((2+2)* 2)/2 should equal 4', function() {
        let soma = _mathService.addTwoNumbers(2,2);
        let multiplicacao = _mathService.addMultiplyNumbers(soma, 2);
        let divisao = _mathService.addDivisionNumbers(multiplicacao, 2);
        expect(divisao).toEqual(4);
    });

});

describe('Failure', function() {

    it('4+2 should equal 6', function() {
        let soma = _mathService.addTwoNumbers(4,3);
        expect(soma).toEqual(6);
    });

    it('4*2 should equal 8', function() {
        let multiplicacao = _mathService.addMultiplyNumbers(4,3);
        expect(multiplicacao).toEqual(8);
    });

    it('4/2 should equal 2', function() {
        let divisao = _mathService.addDivisionNumbers(4,3);
        expect(divisao).toEqual(2);
    });
});
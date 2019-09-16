require('../../node_modules/angular/angular.min.js');
require('../../node_modules/angular-mocks/angular-mocks.js');
require('./mathService.js');

describe('Math service - addTwoNumbers', function() {

    beforeEach(
        angular.mock.module('mathModule')
    );

    let _mathService;

    beforeEach(inject(mathService => {
        _mathService = mathService;
    }));

    it('1 + 1 should equal 2', function() {
        let atual = _mathService.addTwoNumbers(1,1);
        expect(atual).toEqual(2);
    });
    
});
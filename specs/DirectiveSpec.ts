/**
 * Created by malte on 15.10.14.
 */
///<reference path="../src/Directive.ts"/>
describe('Directive Test Suite', () => {


    it('test Abstract getInstance', () => {
        expect(() => {ng.ts.Directive.getInstance()}).toThrow(new Error('This method is abstract'));

    });
});
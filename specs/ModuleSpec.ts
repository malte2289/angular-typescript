///<reference path='../typings/angularjs/angular.d.ts'/>
///<reference path='../typings/jasmine/jasmine.d.ts'/>

describe("Module Test Suite", () => {
    var testModule;

    it("create module", () => {
        testModule =  new TestModule();
        //test if angular.module is initialized
        expect('test').toBe(testModule.app.name);
        //singleton, expect error on second constructor call
        expect(() => {new TestModule()}).toThrow(new Error("Error: Instantiation failed: Use TestModule.getInstance() instead of new."));
    });

    it('getInstance', () => {
        //Method abstract, expected to throw Exception (needs to be manually implemented
        expect(() => {ng.ts.Module.getInstance()}).toThrow(new Error('This method is abstract'));
        //If initialized should return Object
        expect(TestModule.getInstance()).toBe(testModule);
    });

    it('addController', () => {
        //Test basic creation
        testModule.addController('testController', () => {});
        var queue = testModule.app._invokeQueue;
        expect(queue[queue.length-1][2][0]).toBe('testController');
    });

    it('addDirective', () => {
        testModule.addDirective('testDirective', TestDirective, []);
        var queue = testModule.app._invokeQueue;
        expect(queue[queue.length-1][2][0]).toBe('testDirective');
    });

    it('addFilter', () => {
        testModule.addService('testFilter', () => {});
        var queue = testModule.app._invokeQueue;
        expect(queue[queue.length-1][2][0]).toBe('testFilter');
    });

    it('addService', () => {
        testModule.addService('testService', () => {});
        var queue = testModule.app._invokeQueue;
        expect(queue[queue.length-1][2][0]).toBe('testService');
    });

    it('addConfig', () => {
       testModule.addConfig(['$stateProvider'], ($stateProvider) => {});
        var queue = testModule.app._invokeQueue;
        expect(queue[queue.length-1][2][0][0]).toBe('$stateProvider');
    });
});


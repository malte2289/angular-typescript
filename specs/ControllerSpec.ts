/**
 * Created by malte on 14.10.14.
 */
///<reference path='../typings/angularjs/angular.d.ts'/>
///<reference path='../typings/angularjs/angular-mocks.d.ts'/>
///<reference path='../src/Directive.ts'/>
///<reference path='../src/Module.ts'/>
///<reference path='../src/Controller.ts'/>
///<reference path='../typings/jasmine/jasmine.d.ts'/>

class TestModule extends ng.ts.Module {
    private static _instance:TestModule = null;

    constructor() {
        if (TestModule._instance) {
            throw new Error("Error: Instantiation failed: Use TestModule.getInstance() instead of new.");
        }
        super('test', ['']);
        TestModule._instance = this;
    }

    public static getInstance():TestModule {
        if (TestModule._instance === null) {
            TestModule._instance = new TestModule();
        }
        return TestModule._instance;
    }
}

class TestDirective extends ng.ts.Directive {
    public static $inject = [];

    static getInstance():Function {
        return () => {
            return new TestDirective();
        }
    }

}


class TestController extends  ng.ts.Controller{

    public clickAction = () => {
        return 'test';
    }
}

describe('Controller Test Suite', () => {

    var rootScope;

    beforeEach( inject( function($rootScope){
        rootScope = $rootScope;
    }));

   it('test scope functions', () => {
       var testControllre = new TestController(rootScope);
       expect(testControllre).toBe(testControllre.scope.events);

   });
});
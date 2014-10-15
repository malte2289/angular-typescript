angular-typescript-utils
========================
Collection of classes to support angularjs development with typescript. Classes were written to fit my own needs and are
not functional complete. Any support is welcome.

##Module
Class to create a new angularjs module. It is necessary to implement a getInstance() function

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
    
### Functions

- addConfig
- addController
- addDirective
- addFilter
- addService

### Usage

Initialization via constructor is not necessary but I would recommend to do that directly after ModuleClass definition
to avoid unexpected behaviour. To add filter, controller etc. see example below. 

    TestModule.getInstance().add...(params);
    
To define configs just add a private method with and call them after super() in constructor()

     private configureExample(){
                var conf = (ExampleService) => {
                   ...do configuration
                };
                this.addConfig(['ExampleService'], conf);
            }
     }
     
## Controller

Extend class `ng.ts.Controller`

public functions are accessible via scope.events.functionName

## Directive

Extend class `ng.ts.Directive` and implement getInstance()

### Example

    class TestDirective extends ng.ts.Directive {
        public static $inject = ['ExampleDependency'];
    
        static getInstance():Function {
            return (ExampleDependency) => {
                return new TestDirective(ExampleDependency);
            }
        }
    

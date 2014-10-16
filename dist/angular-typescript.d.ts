/// <reference path="../../../../typings/angularjs/angular.d.ts" " />
declare module ng.ts {
    interface IScope extends ng.IScope {
        events?: Controller;
    }
    class Controller {
        public scope: IScope;
        constructor($scope: IScope);
    }
}
declare module ng.ts {
    class Directive implements IDirective {
        static getInstance(): Function;
    }
}
declare module ng.ts {
    class Module {
        public app: IModule;
        constructor(name: string, modules?: string[]);
        static getInstance(): Module;
        public addController(name: string, controller: Function): void;
        public addDirective(name: string, directive: any, dependencies?: string[]): void;
        public addFilter(name: string, filter: Function): void;
        public addService(name: string, service: Function): void;
        public addConfig(provider: string[], config: Function): void;
    }
}

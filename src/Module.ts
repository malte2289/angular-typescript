/**
 * Created by malte on 03.10.14.
 */
///<reference path="../typings/angularjs/angular.d.ts"/>
module ng.ts{
    export class Module {

        app:ng.IModule = null;

        constructor(name:string, modules:Array< string > = []) {
            this.app = angular.module(name, modules);
        }


        public static getInstance(): Module
        {
            throw new Error('This method is abstract');
        }

        addController(name:string, controller:Function):void {
            this.app.controller(name, controller);
        }

        addDirective(name:string, directive:any, dependencies?: string[] ):void
        {
            var formatedInput:Array<any>  = angular.isDefined(dependencies) ? dependencies : directive.$inject;
            formatedInput.push(directive.getInstance());
            this.app.directive(name, formatedInput);
        }

        addFilter(name: string, filter:Function) : void
        {
            this.app.filter(name, Function );
        }

        addService( name: string, service: Function ): void
        {
            this.app.service( name, service );
        }

        addConfig(provider: Array<string>, config:Function){
            var configInput: Array<any> = provider;
            configInput.push(config);
            this.app.config(configInput);
        }
    }
}
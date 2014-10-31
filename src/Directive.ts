/**
 * Created by malte on 08.10.14.
 */
///ts:ref=angular.d.ts
/// No file or directory matched name "angular.d.ts" ///ts:ref:generated
///ts:ref=jquery.d.ts
/// No file or directory matched name "jquery.d.ts" ///ts:ref:generated
module ng.ts {
    export class Directive implements ng.IDirective {

        static getInstance() :Function{
            throw new Error('This method is abstract');
        }

        public compile = (tElement: JQuery, tAttrs: ng.IAttributes, transclude :ng.ITranscludeFunction) => {
            if(this.compileFn !== Directive.prototype.compileFn){
                this.compileFn(tElement, tAttrs, transclude);
            }
            return {
                pre: (scope: ng.IScope, iElement: JQuery, iAttrs: ng.IAttributes, controller: ng.ts.Controller, transcludeFn: ng.ITranscludeFunction) => {
                    if(this.preLink !== Directive.prototype.preLink){
                        this.preLink(scope, iElement, iAttrs, controller, transcludeFn);
                    }
                },
                post: (scope: ng.IScope, iElement: JQuery, iAttrs: ng.IAttributes,  controller: ng.ts.Controller, transcludeFn: ng.ITranscludeFunction) => {
                    if(this.postLink !== Directive.prototype.postLink){
                        this.postLink(scope, iElement, iAttrs, controller, transcludeFn);
                    }
                    if(this.onDestroy !== Directive.prototype.onDestroy){
                        scope.$on('$destroy', this.onDestroy);
                    }
                }
            }
        };

        public compileFn(tElement: JQuery, tAttrs: ng.IAttributes, transclude :ng.ITranscludeFunction) {}

        public preLink (scope: ng.IScope, iElement: JQuery, iAttrs: ng.IAttributes,  controller?: ng.ts.Controller, transcludeFn?: ng.ITranscludeFunction){}

        public postLink (scope: ng.IScope, iElement: JQuery, iAttrs: ng.IAttributes,  controller?: ng.ts.Controller, transcludeFn?: ng.ITranscludeFunction) {}

        public onDestroy(event: ng.IAngularEvent): void {}

    }

}
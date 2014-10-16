/**
 * Created by malte on 03.10.14.
 */
///<reference path="../typings/angularjs/angular.d.ts"/>
module ng.ts {
    export interface IScope extends ng.IScope
    {
        events?: Controller;
    }

    export class Controller
    {
        scope: IScope;

        constructor( $scope: IScope )
        {
            this.scope        = $scope;
            this.scope.events = this;
        }
    }
}
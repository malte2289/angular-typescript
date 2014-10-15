var ng;
(function (ng) {
    (function (ts) {
        var Controller = (function () {
            function Controller($scope) {
                this.scope = $scope;
                this.scope.events = this;
            }
            return Controller;
        })();
        ts.Controller = Controller;
    })(ng.ts || (ng.ts = {}));
    var ts = ng.ts;
})(ng || (ng = {}));
var ng;
(function (ng) {
    (function (ts) {
        var Directive = (function () {
            function Directive() {
            }
            Directive.getInstance = function () {
                throw new Error('This method is abstract');
            };
            return Directive;
        })();
        ts.Directive = Directive;
    })(ng.ts || (ng.ts = {}));
    var ts = ng.ts;
})(ng || (ng = {}));
var ng;
(function (ng) {
    (function (ts) {
        var Module = (function () {
            function Module(name, modules) {
                if (typeof modules === "undefined") { modules = []; }
                this.app = null;
                this.app = angular.module(name, modules);
            }
            Module.getInstance = function () {
                throw new Error('This method is abstract');
            };

            Module.prototype.addController = function (name, controller) {
                this.app.controller(name, controller);
            };

            Module.prototype.addDirective = function (name, directive, dependencies) {
                var formatedInput = angular.isDefined(dependencies) ? dependencies : directive.$inject;
                formatedInput.push(directive.getInstance());
                this.app.directive(name, formatedInput);
            };

            Module.prototype.addFilter = function (name, filter) {
                this.app.filter(name, Function);
            };

            Module.prototype.addService = function (name, service) {
                this.app.service(name, service);
            };

            Module.prototype.addConfig = function (provider, config) {
                var configInput = provider;
                configInput.push(config);
                this.app.config(configInput);
            };
            return Module;
        })();
        ts.Module = Module;
    })(ng.ts || (ng.ts = {}));
    var ts = ng.ts;
})(ng || (ng = {}));
//# sourceMappingURL=angular-typescript-utils.js.map

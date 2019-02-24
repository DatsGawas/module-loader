var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Compiler, Component, Injector, NgModuleFactoryLoader, SystemJsNgModuleLoader, ViewChild, ViewContainerRef } from '@angular/core';
var AppComponent = /** @class */ (function () {
    function AppComponent(_compiler, _injector) {
        this._compiler = _compiler;
        this._injector = _injector;
        this.show = false;
        this.url = './profile.module';
        this.data = {
            url: './profile.module',
            className: 'ProfileModule'
        };
    }
    AppComponent.prototype.addModule = function () {
        var _this = this;
        this.show = true;
        if (this.show) {
            System.import('./js/profile.js').then(function (module) {
                _this._compiler.compileModuleAndAllComponentsAsync(module[_this.data.className])
                    .then(function (compiled) {
                    var factory = compiled.componentFactories[0];
                    _this._container.createComponent(factory);
                });
            });
        }
    };
    __decorate([
        ViewChild('vc', { read: ViewContainerRef }),
        __metadata("design:type", ViewContainerRef)
    ], AppComponent.prototype, "_container", void 0);
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            providers: [
                {
                    provide: NgModuleFactoryLoader,
                    useClass: SystemJsNgModuleLoader
                }
            ],
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [Compiler, Injector])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map
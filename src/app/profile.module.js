var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by dattaram on 22/2/19.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ProfileComponent } from "./profile.component";
var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        NgModule({
            imports: [CommonModule], exports: [ProfileComponent], declarations: [ProfileComponent], providers: [],
        })
    ], ProfileModule);
    return ProfileModule;
}());
export { ProfileModule };
//# sourceMappingURL=profile.module.js.map
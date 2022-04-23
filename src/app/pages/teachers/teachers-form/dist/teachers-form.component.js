"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TeachersFormComponent = void 0;
var core_1 = require("@angular/core");
var TeachersFormComponent = /** @class */ (function () {
    function TeachersFormComponent(route) {
        this.route = route;
    }
    TeachersFormComponent.prototype.ngOnInit = function () {
    };
    TeachersFormComponent.prototype.OnEdit = function () {
        this.route.navigateByUrl('/edit-teacher');
    };
    TeachersFormComponent.prototype.OnDelete = function () {
    };
    TeachersFormComponent.prototype.OnAdd = function () {
        this.route.navigateByUrl('/add-teacher');
    };
    TeachersFormComponent = __decorate([
        core_1.Component({
            selector: 'app-teachers-form',
            templateUrl: './teachers-form.component.html',
            styleUrls: ['./teachers-form.component.css']
        })
    ], TeachersFormComponent);
    return TeachersFormComponent;
}());
exports.TeachersFormComponent = TeachersFormComponent;

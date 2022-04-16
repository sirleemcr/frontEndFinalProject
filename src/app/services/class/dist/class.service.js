"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ClassService = void 0;
var core_1 = require("@angular/core");
var ClassService = /** @class */ (function () {
    function ClassService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:8089/c';
    }
    ClassService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/course");
    };
    ClassService.prototype.add = function (body) {
        return this.http.post(this.apiUrl + "/c1", body);
    };
    ClassService.prototype.update = function (body) {
        return this.http.put(this.apiUrl + "/edit", body);
    };
    ClassService.prototype.getById = function (course_id) {
        return this.http.get(this.apiUrl + "/course" + '/' + course_id);
    };
    ClassService.prototype["delete"] = function (id) {
        return this.http["delete"](this.apiUrl + "/delete" + '/' + id);
    };
    ClassService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ClassService);
    return ClassService;
}());
exports.ClassService = ClassService;

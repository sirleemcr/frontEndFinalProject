"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateStudentComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CreateStudentComponent = /** @class */ (function () {
    function CreateStudentComponent() {
        this.studentForm = forms_1.FormGroup;
    }
    CreateStudentComponent.prototype.ngOnInit = function () {
        this.configureSudentForm();
    };
    CreateStudentComponent.prototype.configureSudentForm = function () {
        this.studentForm = new forms_1.FormGroup({
            FirstName: new forms_1.FormControl(null, forms_1.Validators.required)
        });
    };
    CreateStudentComponent.prototype.OnBack = function () {
    };
    CreateStudentComponent.prototype.Onsave = function () {
    };
    CreateStudentComponent = __decorate([
        core_1.Component({
            selector: 'app-create-student',
            templateUrl: './create-student.component.html',
            styleUrls: ['./create-student.component.css']
        })
    ], CreateStudentComponent);
    return CreateStudentComponent;
}());
exports.CreateStudentComponent = CreateStudentComponent;

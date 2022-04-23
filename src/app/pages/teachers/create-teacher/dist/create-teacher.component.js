"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateTeacherComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CreateTeacherComponent = /** @class */ (function () {
    function CreateTeacherComponent(router) {
        this.router = router;
    }
    CreateTeacherComponent.prototype.ngOnInit = function () {
        this.addFormTeacherConfig();
    };
    CreateTeacherComponent.prototype.addFormTeacherConfig = function () {
        this.addFormTeacher = new forms_1.FormGroup({
            FirstName: new forms_1.FormControl(null, forms_1.Validators.required),
            LastName: new forms_1.FormControl(null, forms_1.Validators.required),
            MiddleName: new forms_1.FormControl(null, forms_1.Validators.required),
            Place: new forms_1.FormControl(null, forms_1.Validators.required),
            Nationality: new forms_1.FormControl(null, forms_1.Validators.required),
            Gender: new forms_1.FormControl(null, forms_1.Validators.required),
            phone_number: new forms_1.FormControl(null, forms_1.Validators.required),
            email: new forms_1.FormControl(null, forms_1.Validators.required)
        });
    };
    CreateTeacherComponent.prototype.OnBack = function () {
        this.router.navigateByUrl('/teacher');
    };
    CreateTeacherComponent.prototype.OnSave = function () {
    };
    CreateTeacherComponent = __decorate([
        core_1.Component({
            selector: 'app-create-teacher',
            templateUrl: './create-teacher.component.html',
            styleUrls: ['./create-teacher.component.css']
        })
    ], CreateTeacherComponent);
    return CreateTeacherComponent;
}());
exports.CreateTeacherComponent = CreateTeacherComponent;

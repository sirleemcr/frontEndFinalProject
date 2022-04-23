"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StudentAddComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var StudentAddComponent = /** @class */ (function () {
    function StudentAddComponent(router, studentservice) {
        this.router = router;
        this.studentservice = studentservice;
        this.date = Date();
    }
    StudentAddComponent.prototype.ngOnInit = function () {
        this.studentFormConfigure();
    };
    StudentAddComponent.prototype.studentFormConfigure = function () {
        this.studentForm = new forms_1.FormGroup({
            FirstName: new forms_1.FormControl(null, forms_1.Validators.required),
            LastName: new forms_1.FormControl(null, forms_1.Validators.required),
            MiddleName: new forms_1.FormControl(null, forms_1.Validators.required),
            Place: new forms_1.FormControl(null, forms_1.Validators.required),
            Nationality: new forms_1.FormControl(null, forms_1.Validators.required),
            Dob: new forms_1.FormControl(null, forms_1.Validators.required),
            Gender: new forms_1.FormControl(null, forms_1.Validators.required),
            course_id: new forms_1.FormControl(null, forms_1.Validators.required),
            parent_number: new forms_1.FormControl(null, forms_1.Validators.required),
            parent_name: new forms_1.FormControl(null, forms_1.Validators.required)
        });
    };
    StudentAddComponent.prototype.OnBack = function () {
        this.router.navigateByUrl('/student');
    };
    StudentAddComponent.prototype.Onsave = function () {
    };
    StudentAddComponent = __decorate([
        core_1.Component({
            selector: 'app-student-add',
            templateUrl: './student-add.component.html',
            styleUrls: ['./student-add.component.css']
        })
    ], StudentAddComponent);
    return StudentAddComponent;
}());
exports.StudentAddComponent = StudentAddComponent;

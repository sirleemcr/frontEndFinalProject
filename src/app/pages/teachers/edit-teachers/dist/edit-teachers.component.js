"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EditTeachersComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var EditTeachersComponent = /** @class */ (function () {
    function EditTeachersComponent(router) {
        this.router = router;
    }
    EditTeachersComponent.prototype.ngOnInit = function () {
        this.configEditFormTeacher();
    };
    EditTeachersComponent.prototype.configEditFormTeacher = function () {
        this.editFormTeacher = new forms_1.FormGroup({
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
    EditTeachersComponent.prototype.OnBack = function () {
        this.router.navigateByUrl('/teacher');
    };
    EditTeachersComponent.prototype.OnSave = function () {
    };
    EditTeachersComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-teachers',
            templateUrl: './edit-teachers.component.html',
            styleUrls: ['./edit-teachers.component.css']
        })
    ], EditTeachersComponent);
    return EditTeachersComponent;
}());
exports.EditTeachersComponent = EditTeachersComponent;

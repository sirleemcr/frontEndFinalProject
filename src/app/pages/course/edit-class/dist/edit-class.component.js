"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EditClassComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var EditClassComponent = /** @class */ (function () {
    function EditClassComponent(route, classervices, router) {
        this.route = route;
        this.classervices = classervices;
        this.router = router;
        this.date = new Date();
    }
    EditClassComponent.prototype.configureCreateForm = function () {
        this.editForm = new forms_1.FormGroup({
            course_id: new forms_1.FormControl(null),
            course_name: new forms_1.FormControl(null, forms_1.Validators.required)
        });
    };
    EditClassComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configureCreateForm();
        this.route.params.subscribe(function (parasValues) {
            console.log('nahuu ', parasValues);
            var course_id = parasValues.course_id;
            _this.fetchClassById(course_id);
        });
    };
    EditClassComponent.prototype.fetchClassById = function (course_id) {
        var _this = this;
        this.classervices.getById(course_id).subscribe(function (response) {
            var _a, _b;
            console.log('bingo', response);
            (_a = _this.editForm.get('course_id')) === null || _a === void 0 ? void 0 : _a.setValue(response.course_id);
            (_b = _this.editForm.get('course_name')) === null || _b === void 0 ? void 0 : _b.setValue(response.course_name);
        }, function (error) {
            console.log('mmeapata erreor', error);
        });
    };
    EditClassComponent.prototype.OnChange = function () {
        var _this = this;
        var values = this.editForm.value;
        this.classervices.update(values).subscribe(function (response) {
            _this.router.navigateByUrl('/coursetable');
        }, function (error) {
            console.log(error);
        });
    };
    EditClassComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-class',
            templateUrl: './edit-class.component.html',
            styleUrls: ['./edit-class.component.css']
        })
    ], EditClassComponent);
    return EditClassComponent;
}());
exports.EditClassComponent = EditClassComponent;

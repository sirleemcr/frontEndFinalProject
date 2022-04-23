"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var main_layout_component_1 = require("./layout/main-layout/main-layout.component");
var layout_1 = require("@angular/cdk/layout");
var toolbar_1 = require("@angular/material/toolbar");
var button_1 = require("@angular/material/button");
var sidenav_1 = require("@angular/material/sidenav");
var icon_1 = require("@angular/material/icon");
var list_1 = require("@angular/material/list");
var students_form_component_1 = require("./pages/students/students-form/students-form.component");
var teachers_form_component_1 = require("./pages/teachers/teachers-form/teachers-form.component");
var subject_form_component_1 = require("./pages/subject/subject-form/subject-form.component");
var course_teacherform_component_1 = require("./pages/course_enr/course-teacherform/course-teacherform.component");
var examform_component_1 = require("./pages/exam/examform/examform.component");
var dashbord_component_1 = require("./pages/home/dashbord/dashbord.component");
var course_table_component_1 = require("./pages/course/course-table/course-table.component");
var card_1 = require("@angular/material/card");
var form_field_1 = require("@angular/material/form-field");
var forms_1 = require("@angular/forms");
var create_class_component_1 = require("./pages/course/create-class/create-class.component");
var edit_class_component_1 = require("./pages/course/edit-class/edit-class.component");
var input_1 = require("@angular/material/input");
var edit_student_component_1 = require("./pages/students/edit-student/edit-student.component");
var create_teacher_component_1 = require("./pages/teachers/create-teacher/create-teacher.component");
var edit_teachers_component_1 = require("./pages/teachers/edit-teachers/edit-teachers.component");
var edit_subject_component_1 = require("./pages/subject/edit-subject/edit-subject.component");
var http_1 = require("@angular/common/http");
var table_1 = require("@angular/material/table");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var student_table_component_1 = require("./pages/students/student-table/student-table.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                main_layout_component_1.MainLayoutComponent,
                students_form_component_1.StudentsFormComponent,
                teachers_form_component_1.TeachersFormComponent,
                subject_form_component_1.SubjectFormComponent,
                course_teacherform_component_1.CourseTeacherformComponent,
                examform_component_1.ExamformComponent,
                dashbord_component_1.DashbordComponent,
                course_table_component_1.CourseTableComponent,
                create_class_component_1.CreateClassComponent,
                edit_class_component_1.EditClassComponent,
                edit_student_component_1.EditStudentComponent,
                create_teacher_component_1.CreateTeacherComponent,
                edit_teachers_component_1.EditTeachersComponent,
                edit_subject_component_1.EditSubjectComponent,
                student_table_component_1.StudentTableComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                layout_1.LayoutModule,
                toolbar_1.MatToolbarModule,
                button_1.MatButtonModule,
                sidenav_1.MatSidenavModule,
                icon_1.MatIconModule,
                list_1.MatListModule,
                card_1.MatCardModule,
                form_field_1.MatFormFieldModule,
                forms_1.ReactiveFormsModule,
                input_1.MatInputModule,
                http_1.HttpClientModule,
                table_1.MatTableModule,
                paginator_1.MatPaginatorModule,
                sort_1.MatSortModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

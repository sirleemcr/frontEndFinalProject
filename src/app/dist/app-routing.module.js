"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var main_layout_component_1 = require("./layout/main-layout/main-layout.component");
var course_table_component_1 = require("./pages/course/course-table/course-table.component");
var create_class_component_1 = require("./pages/course/create-class/create-class.component");
var edit_class_component_1 = require("./pages/course/edit-class/edit-class.component");
var course_teacherform_component_1 = require("./pages/course_enr/course-teacherform/course-teacherform.component");
var examform_component_1 = require("./pages/exam/examform/examform.component");
var dashbord_component_1 = require("./pages/home/dashbord/dashbord.component");
var student_add_component_1 = require("./pages/students/student-add/student-add.component");
var students_form_component_1 = require("./pages/students/students-form/students-form.component");
var subject_form_component_1 = require("./pages/subject/subject-form/subject-form.component");
var create_teacher_component_1 = require("./pages/teachers/create-teacher/create-teacher.component");
var edit_teachers_component_1 = require("./pages/teachers/edit-teachers/edit-teachers.component");
var teachers_form_component_1 = require("./pages/teachers/teachers-form/teachers-form.component");
var routes = [
    {
        path: '',
        component: main_layout_component_1.MainLayoutComponent,
        children: [
            {
                path: '',
                component: dashbord_component_1.DashbordComponent
            },
            {
                path: 'student',
                component: students_form_component_1.StudentsFormComponent
            },
            {
                path: 'teacher',
                component: teachers_form_component_1.TeachersFormComponent
            },
            {
                path: 'subject',
                component: subject_form_component_1.SubjectFormComponent
            },
            {
                path: 'exam',
                component: examform_component_1.ExamformComponent
            },
            {
                path: 't.co',
                component: course_teacherform_component_1.CourseTeacherformComponent
            },
            {
                path: 'coursetable',
                component: course_table_component_1.CourseTableComponent
            },
            {
                path: 'create-class',
                component: create_class_component_1.CreateClassComponent
            },
            {
                path: 'edit-class/:course_id',
                component: edit_class_component_1.EditClassComponent
            },
            {
                path: 'edit-teacher',
                component: edit_teachers_component_1.EditTeachersComponent
            },
            {
                path: 'student-add',
                component: student_add_component_1.StudentAddComponent
            },
            {
                path: 'add-teacher',
                component: create_teacher_component_1.CreateTeacherComponent
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;

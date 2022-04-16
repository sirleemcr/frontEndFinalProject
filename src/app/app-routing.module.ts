import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { CourseTableComponent } from './pages/course/course-table/course-table.component';
import { CreateClassComponent } from './pages/course/create-class/create-class.component';
import { EditClassComponent } from './pages/course/edit-class/edit-class.component';
import { CourseTeacherformComponent } from './pages/course_enr/course-teacherform/course-teacherform.component';
import { ExamformComponent } from './pages/exam/examform/examform.component';
import { DashbordComponent } from './pages/home/dashbord/dashbord.component';
import { StudentTableComponent } from './pages/students/student-table/student-table.component';
import { StudentsFormComponent } from './pages/students/students-form/students-form.component';
import { CreateStudentComponent } from './pages/subject/create-student/create-student.component';
import { SubjectFormComponent } from './pages/subject/subject-form/subject-form.component';
import { EditTeachersComponent } from './pages/teachers/edit-teachers/edit-teachers.component';
import { TeachersFormComponent } from './pages/teachers/teachers-form/teachers-form.component';

const routes: Routes = [
  {
    path:'',
    component:MainLayoutComponent,
    children:
    [
      {
        path:'',
        component:DashbordComponent
      },

      {
        path:'student',
        component:StudentsFormComponent
      },
      {
        path:'teacher',
        component:TeachersFormComponent
      },
      {
        path:'subject',
        component:SubjectFormComponent
      },
    
      {
        path:'exam',
        component:ExamformComponent
      },
      {
        path:'t.co',
        component:CourseTeacherformComponent
      }
    ,
    {
      path:'coursetable',
      component:CourseTableComponent
    }
    ,
    {
      path:'create-class',
      component:CreateClassComponent
    },
    {
      path:'edit-class/:course_id',
      component:EditClassComponent
    },
    {
      path:'edit-taecher',
      component:EditTeachersComponent
    },
     {
       path:'create-student',
       component:CreateStudentComponent
     },
     {
       path:'student-table',
       component:StudentTableComponent
     }
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

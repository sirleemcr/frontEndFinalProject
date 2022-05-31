import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CourseTableComponent } from './pages/course/course-table/course-table.component';
import { CreateClassComponent } from './pages/course/create-class/create-class.component';
import { EditClassComponent } from './pages/course/edit-class/edit-class.component';
import { AddExamComponent } from './pages/exam/add-exam/add-exam.component';
import { ExamformComponent } from './pages/exam/examform/examform.component';
import { FitrahAddComponent } from './pages/fitrah/fitrah-add/fitrah-add.component';
import { FitrahEditComponent } from './pages/fitrah/fitrah-edit/fitrah-edit.component';
import { FitrahtbComponent } from './pages/fitrah/fitrahtb/fitrahtb.component';
import { DashbordComponent } from './pages/home/dashbord/dashbord.component';
import { LogOutComponent } from './pages/log-out/log-out.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { EditStudentComponent } from './pages/students/edit-student/edit-student.component';
import { StudentAddComponent } from './pages/students/student-add/student-add.component';
import { StudentsFormComponent } from './pages/students/students-form/students-form.component';
import { AddSubjectComponent } from './pages/subject/add-subject/add-subject.component';
import { EditSubjectComponent } from './pages/subject/edit-subject/edit-subject.component';
import { SubjectFormComponent } from './pages/subject/subject-form/subject-form.component';
import { CreateTeacherComponent } from './pages/teachers/create-teacher/create-teacher.component';
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
      path:'coursetable',
      component:CourseTableComponent
    }
    ,
    {
      path:'create-class',
      component:CreateClassComponent
    },
    {
      path:'edit-class/:id',
      component:EditClassComponent
    },
    {
      path:'edit-teacher/:id',
      component:EditTeachersComponent
    },
    {
      path:'student-add',
      component:StudentAddComponent
    },
    {
      path:'add-teacher',
      component:CreateTeacherComponent
    },{
      path:'add-exam',
      component:AddExamComponent
    },
    {
      path:'add-subject',
      component:AddSubjectComponent
    },
    {
      path:'edit-subject/:id',
      component:EditSubjectComponent
    },
    {
      path:'edit-student/:id',
      component:EditStudentComponent
    },
    {
      path:'fitrah',
      component:FitrahtbComponent
    },
    {
      path:'fitrah-add',
      component:FitrahAddComponent
    },
    {
      path:'fitrah-edit/:id',
      component:FitrahEditComponent
    },
    {
      path:'admin',
      component:AdminComponent
    },
    {
      path:'log-out',
      component:LogOutComponent
    },
    ]
  },
  {
    path:'login',
    component:LoginpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

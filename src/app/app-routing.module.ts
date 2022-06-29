import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { RoleguardGuard } from './loginrole/roleguard.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { CourseTableComponent } from './pages/course/course-table/course-table.component';
import { CreateClassComponent } from './pages/course/create-class/create-class.component';
import { EditClassComponent } from './pages/course/edit-class/edit-class.component';
import { AddExamComponent } from './pages/exam/add-exam/add-exam.component';
import { ExamformComponent } from './pages/exam/examform/examform.component';
import { ExamsubjectComponent } from './pages/exam/examsubject/examsubject.component';
import { FitrahAddComponent } from './pages/fitrah/fitrah-add/fitrah-add.component';
import { FitrahEditComponent } from './pages/fitrah/fitrah-edit/fitrah-edit.component';
import { FitrahtbComponent } from './pages/fitrah/fitrahtb/fitrahtb.component';
import { DashbordComponent } from './pages/home/dashbord/dashbord.component';
import { LogOutComponent } from './pages/log-out/log-out.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { RolesComponent } from './pages/roles/roles.component';
import { EditStudentComponent } from './pages/students/edit-student/edit-student.component';
import { MatokeoComponent } from './pages/students/matokeo/matokeo.component';
import { StudentAddComponent } from './pages/students/student-add/student-add.component';
import { StudentResultComponent } from './pages/students/student-result/student-result.component';
import { StudentsFormComponent } from './pages/students/students-form/students-form.component';
import { AddSubjectComponent } from './pages/subject/add-subject/add-subject.component';
import { EditSubjectComponent } from './pages/subject/edit-subject/edit-subject.component';
import { SubjectFormComponent } from './pages/subject/subject-form/subject-form.component';
import { ChangePaswordComponent } from './pages/teachers/change-pasword/change-pasword.component';
import { CreateTeacherComponent } from './pages/teachers/create-teacher/create-teacher.component';
import { EditTeachersComponent } from './pages/teachers/edit-teachers/edit-teachers.component';
import { TeacherAddComponent } from './pages/teachers/teacher-add/teacher-add.component';
import { TeachersFormComponent } from './pages/teachers/teachers-form/teachers-form.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginpageComponent
  }
  ,
  {
    path:'add-ust',
    component:TeacherAddComponent
  },
  {
    path:'main',
    component:MainLayoutComponent,
    canActivate:[AuthguardGuard],
    children:
    [
      {
        path:'',
        component:DashbordComponent
      },
      

      {
        path:'student',
        component:StudentsFormComponent,
        // canActivate:[RoleguardGuard],
        // data:{
        //   expectedRoles:['admin']
        // }
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
      path:'edit-class/:swaful_id',
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
      path:'edit-student',
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
      path:'result',
      component:StudentResultComponent
    },
    {
      path:'password',
      component:ChangePaswordComponent
    },

    {
      path:'matokeo/:tilmydh_id',
      component:MatokeoComponent
    },
    {
      path:'role',
      component:RolesComponent
    },{
      path:'marks',
      component:ExamsubjectComponent
    },
    {
      path:'role/:ustaadh_id',
      component:RolesComponent
    }
    ]

  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

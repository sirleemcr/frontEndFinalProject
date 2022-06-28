import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { StudentsFormComponent } from './pages/students/students-form/students-form.component';
import { TeachersFormComponent } from './pages/teachers/teachers-form/teachers-form.component';
import { SubjectFormComponent } from './pages/subject/subject-form/subject-form.component';
import { ExamformComponent } from './pages/exam/examform/examform.component';
import { DashbordComponent } from './pages/home/dashbord/dashbord.component';
import { CourseTableComponent } from './pages/course/course-table/course-table.component';
import{MatCardModule} from '@angular/material/card';
import{MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateClassComponent } from './pages/course/create-class/create-class.component';
import { EditClassComponent } from './pages/course/edit-class/edit-class.component';
import {MatInputModule} from '@angular/material/input';
import { EditStudentComponent } from './pages/students/edit-student/edit-student.component';
import { CreateTeacherComponent } from './pages/teachers/create-teacher/create-teacher.component';
import { EditTeachersComponent } from './pages/teachers/edit-teachers/edit-teachers.component';
import { EditSubjectComponent } from './pages/subject/edit-subject/edit-subject.component'
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { StudentAddComponent } from './pages/students/student-add/student-add.component';
import { AddExamComponent } from './pages/exam/add-exam/add-exam.component';
import { AddSubjectComponent } from './pages/subject/add-subject/add-subject.component';
import { FitrahtbComponent } from './pages/fitrah/fitrahtb/fitrahtb.component';
import { FitrahAddComponent } from './pages/fitrah/fitrah-add/fitrah-add.component';
import { FitrahEditComponent } from './pages/fitrah/fitrah-edit/fitrah-edit.component';
import {MatSelectModule } from '@angular/material/select';
import { AdminComponent } from './pages/admin/admin.component';
import { LogOutComponent } from './pages/log-out/log-out.component';
import {MatTabsModule} from '@angular/material/tabs';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { TeacherAddComponent } from './pages/teachers/teacher-add/teacher-add.component'; 
import {MatDialogModule} from '@angular/material/dialog';
import { StudentResultComponent } from './pages/students/student-result/student-result.component';
import { ChangePaswordComponent } from './pages/teachers/change-pasword/change-pasword.component';
import { MatokeoComponent } from './pages/students/matokeo/matokeo.component';
import { RolesComponent } from './pages/roles/roles.component';
import { ExamsubjectComponent } from './pages/exam/examsubject/examsubject.component';





@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    StudentsFormComponent,
    TeachersFormComponent,
    SubjectFormComponent,
    ExamformComponent,
    DashbordComponent,
    CourseTableComponent,
    CreateClassComponent,
    EditClassComponent,
    EditStudentComponent,
    CreateTeacherComponent,
    EditTeachersComponent,
    EditSubjectComponent,
    StudentAddComponent,
    AddExamComponent,
    AddSubjectComponent,
    FitrahtbComponent,
    FitrahAddComponent,
    FitrahEditComponent,
    AdminComponent,
    LogOutComponent,
    LoginpageComponent,
    TeacherAddComponent,
    StudentResultComponent,
    ChangePaswordComponent,
    MatokeoComponent,
    RolesComponent,
    ExamsubjectComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

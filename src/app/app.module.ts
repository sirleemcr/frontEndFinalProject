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
import { CourseTeacherformComponent } from './pages/course_enr/course-teacherform/course-teacherform.component';
import { ExamformComponent } from './pages/exam/examform/examform.component';
import { DashbordComponent } from './pages/home/dashbord/dashbord.component';
import { CourseTableComponent } from './pages/course/course-table/course-table.component';
import{MatCardModule} from '@angular/material/card';
import{MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateClassComponent } from './pages/course/create-class/create-class.component';
import { EditClassComponent } from './pages/course/edit-class/edit-class.component';
import {MatInputModule} from '@angular/material/input';
import { CreateStudentComponent } from './pages/students/create-student/create-student.component';
import { EditStudentComponent } from './pages/students/edit-student/edit-student.component';
import { CreateTeacherComponent } from './pages/teachers/create-teacher/create-teacher.component';
import { EditTeachersComponent } from './pages/teachers/edit-teachers/edit-teachers.component';
import { EditSubjectComponent } from './pages/subject/edit-subject/edit-subject.component'
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { StudentTableComponent } from './pages/students/student-table/student-table.component';





@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    StudentsFormComponent,
    TeachersFormComponent,
    SubjectFormComponent,
    CourseTeacherformComponent,
    ExamformComponent,
    DashbordComponent,
    CourseTableComponent,
    CreateClassComponent,
    EditClassComponent,
    CreateStudentComponent,
    EditStudentComponent,
    CreateTeacherComponent,
    EditTeachersComponent,
    EditSubjectComponent,
    StudentTableComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

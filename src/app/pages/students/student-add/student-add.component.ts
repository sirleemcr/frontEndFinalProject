import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/services/student/students.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})

export class StudentAddComponent implements OnInit {
  date=Date();
  studentForm !:FormGroup;

  constructor(private router :Router,private studentservice : StudentsService,) { }

  ngOnInit(): void {
    this.studentFormConfigure()
  }


  studentFormConfigure(){
    this.studentForm = new FormGroup({
      FirstName:new FormControl(null,Validators.required),
      LastName:new FormControl  (null,Validators.required),
      MiddleName:new FormControl(null,Validators.required),
      Place:new FormControl(null,Validators.required),
      Nationality: new FormControl(null,Validators.required),
      Dob: new FormControl(null,Validators.required),
      Gender: new FormControl(null,Validators.required),
      course_id:new FormControl(null,Validators.required),
      parent_number:new FormControl(null,Validators.required),
      parent_name:new FormControl(null,Validators.required)
    })

  }


  OnBack(){
    this.router.navigateByUrl('/student')
  }

  Onsave(){
    
  }


}

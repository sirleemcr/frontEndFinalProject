import { HttpErrorResponse } from '@angular/common/http';
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

  constructor(private router :Router,private studentservice : StudentsService) { }

  ngOnInit(): void {
    this.studentFormConfigure()
  }


  studentFormConfigure(){
    this.studentForm = new FormGroup({
      firstName:new FormControl(null,Validators.required),
      lastName: new FormControl(null,Validators.required),
      middleName:new FormControl(null,Validators.required),
      place:new FormControl(null,Validators.required),
      nationality:new FormControl(null, Validators.required),
      gender:new FormControl(null,Validators.required),
      swaful_id:new FormControl(null,Validators.required),
      parent_number:new FormControl(null,Validators.required),
      parent_name:new FormControl(null,Validators.required)
    })

  }


  OnBack(){
    this.router.navigateByUrl('/student')
  }

  Onsave(){
    const values=this.studentForm.value;
    console.log('student',values);
    this.studentservice.add(values).subscribe((response:any)=>{
      console.log('create student =>',response);
      alert('saved')
      this.router.navigateByUrl('/student');
    },
    (error:HttpErrorResponse)=>{
     console.log(error);
    }
    )
    
  }


}

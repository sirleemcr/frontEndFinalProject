import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassService } from 'src/app/services/class/class.service';
import { StudentsService } from 'src/app/services/student/students.service';
import { SubjectService } from 'src/app/services/subject/subject.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})

export class StudentAddComponent implements OnInit {
  studentForm !:FormGroup;
  viewSwaful:any[] =[]

  constructor(private router :Router,
    private classService:ClassService,
    private studentservice : StudentsService) { }

  ngOnInit(): void {
    this.studentFormConfigure()
    this.viewSwafulconfig()
  }

  viewSwafulconfig(){
    this.classService.getAll().subscribe((salum:any)=>{
      console.log("swaful=>",salum)
      this.viewSwaful=salum;
    })
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
      parent_name:new FormControl(null,Validators.required),
      dob:new FormControl(null,Validators.required)
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
      Swal.fire('Tilmydh inserted!',
      'You clicked the button!',
      'success')
      this.router.navigateByUrl('/student');
      
    },
    (error:HttpErrorResponse)=>{
     console.log(error);
    }
    )
    
  }


}

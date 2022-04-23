import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit {
  addFormTeacher !:FormGroup

  constructor(private router:Router) {
 
   }

  ngOnInit(): void {
    this.addFormTeacherConfig()
  }

  addFormTeacherConfig(){
    this.addFormTeacher=new FormGroup({
      FirstName:new FormControl(null,Validators.required),
      LastName: new FormControl(null,Validators.required),
      MiddleName:new FormControl(null,Validators.required),
      Place:new FormControl(null,Validators.required),
      Nationality:new FormControl(null, Validators.required),
      Gender:new FormControl(null,Validators.required),
      phone_number:new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.required)
    })

  }

  OnBack(){
    this.router.navigateByUrl('/teacher')
  }
  OnSave(){
    
  }

}

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UstadhService } from 'src/app/services/ustaadh/ustadh.service';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit {
  addFormTeacher !:FormGroup

  constructor(private router:Router,private ustaadhservice:UstadhService) {
 
   }

  ngOnInit(): void {
    this.addFormTeacherConfig()
  }

  addFormTeacherConfig(){
    this.addFormTeacher=new FormGroup({
      firstName:new FormControl(null,Validators.required),
      lastName: new FormControl(null,Validators.required),
      middleName:new FormControl(null,Validators.required),
      place:new FormControl(null,Validators.required),
      nationality:new FormControl(null, Validators.required),
      gender:new FormControl(null,Validators.required),
      phone_number:new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.email)
    })

  }

  OnBack(){
    this.router.navigateByUrl('/teacher')
  }
  OnSave(){
    const values=this.addFormTeacher.value;
    console.log('ustaadh =>', values);
    this.ustaadhservice.add(values).subscribe((response:any)=>{
      console.log('create ustaadh =>',response);
      alert('saved')
      this.router.navigateByUrl('/teacher');
    },
    (error:HttpErrorResponse)=>{
     console.log(error);
    }
    )
    
  }

}

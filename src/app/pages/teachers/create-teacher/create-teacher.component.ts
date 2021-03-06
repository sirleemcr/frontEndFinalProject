import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/services/role/role.service';
import { UstadhService } from 'src/app/services/ustaadh/ustadh.service';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit {
  addFormTeacher !:FormGroup
  getRole:any[]=[]
  password:any
  email: any;


  constructor(private router:Router,private ustaadhservice:UstadhService,private rolesService:RoleService) {
 
   }

  ngOnInit(): void {
    this.addFormTeacherConfig()
    this.email=this.ustaadhservice.email
    this.addFormTeacher.get("password")?.setValue(this.email)
    this.getroleconfig()

  }

  getroleconfig(){
    this.rolesService.getrole().subscribe((res:any)=>{
      console.log("role=>",res)
      this.getRole=res

    })
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
      email:new FormControl(null,Validators.email),
      rolesId:new FormControl('',Validators.required),
      
      
    })

  }

  OnBack(){
    this.router.navigateByUrl('/main/teacher')
  }
  OnSave(){
    const values=this.addFormTeacher.value
    console.log("value",values)
    // console.log('ustaadh =>', values);
    // this.ustaadhservice.add(values).subscribe((response:any)=>{
    //   console.log('create ustaadh =>',response);
    //   alert('saved')
    //   this.router.navigateByUrl('/main/teacher');
    // },
    // (error:HttpErrorResponse)=>{
    //  console.log(error);
    // }
    // )
    
  }

}

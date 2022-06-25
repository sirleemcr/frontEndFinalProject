import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/services/role/role.service';
import { UstadhService } from 'src/app/services/ustaadh/ustadh.service';


@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {
  addFormTeacher !:FormGroup
  constructor(private ustadhService:UstadhService,private route:Router,private role:RoleService) { }
 
  getRole:any[]=[]
  ngOnInit(): void {
    this.addFormTeacherConfig()
    this.confifRed()
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
      password:new FormControl('',Validators.required),
      rolesId:new FormControl('',Validators.required)
    })

  }

  confifRed(){
    this.role.getrole().subscribe((res:any)=>{
      this.getRole=res
    })
  }

  OnRegister(){
    const c = this.addFormTeacher.value;
    this.ustadhService.add(c).subscribe((res:any)=>{
      console.log("succesfully")
      this.route.navigateByUrl('/login')
    })
  }

}

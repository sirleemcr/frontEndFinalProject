import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/services/role/role.service';
import { UstadhService } from 'src/app/services/ustaadh/ustadh.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  roleform!:FormGroup
  data=false
  dat=false
  viewUstaadh:any[]=[]
  viewcheo:any[]=[]
  cheo=false
  addrole=false
  changeForm !:FormGroup

  constructor( private ustaadhServce:UstadhService, private router:Router,private roleService:RoleService) { }

  ngOnInit(): void {
    this.configRole()
    this.getustaadh()
    this.getcheo()
  }

  configRole(){
    this.roleform=new FormGroup({
      rolesName: new FormControl('',Validators.required)
    })
  }
  getcheo(){
    this.roleService.getrole().subscribe((cr:any)=>{
      console.log("ceheo =>",cr)
      this.viewcheo=cr
    })
  }

  getustaadh(){
    this.ustaadhServce.getSetting().subscribe((cr:any)=>{
      console.log(cr)
      this.viewUstaadh=cr
    })
  }

  OnRole(){
    const rl=this.roleform.value
    console.log("value =>",rl)

    this.roleService.Addrole(rl).subscribe((res)=>{
      console.log( "role=>",rl)
      this.data=true
      this.addrole=false
    })
  }

  Onaddrole(){
   this.data=true
   this.dat=false
  }

  Onchangeauth(){
    this.dat=true
    this.data=false
  }

  Onfuta(rolesId:number){
    this.roleService.delete(rolesId).subscribe((cr:any)=>{
      this.configRole
    })
    
  }
  OnCheo(){
    this.data=false
    this.addrole=true
    

  }
  OnBadili(ust:any){
    this.data=false
    this.addrole=false
    this.dat=false
    this.router.navigateByUrl("main/role/"+ust.ustaadh_id)
  }

}

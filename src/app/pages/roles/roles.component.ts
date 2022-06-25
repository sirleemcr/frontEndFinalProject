import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/services/role/role.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  roleform!:FormGroup

  constructor(private router:Router,private roleService:RoleService) { }

  ngOnInit(): void {
    this.configRole()
  }

  configRole(){
    this.roleform=new FormGroup({
      rolesName: new FormControl('',Validators.required)
    })
  }

  OnRole(){
    const rl=this.roleform.value
    console.log("value =>",rl)

    this.roleService.Addrole(rl).subscribe((res)=>{
      console.log( "role=>",rl)
    })
  }

}

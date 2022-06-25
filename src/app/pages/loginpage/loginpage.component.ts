import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UstadhService } from 'src/app/services/ustaadh/ustadh.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  LoginForm !:FormGroup
  

  constructor(private route:Router,private ustaadhservice:UstadhService) { }

  ngOnInit(): void {
    this.configLoginForm()
  }

  configLoginForm(){
    this.LoginForm= new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email])
        //,Validators.pattern(
        //'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}&',
     // )]),
      ,password:new FormControl('',Validators.required)
    })
  }

  Onlogin(){
   
    if(! this.LoginForm.valid){
      return;
    }
    this.ustaadhservice.log(this.LoginForm.value.email,this.LoginForm.value.password).subscribe((cr)=>{
      console.log(cr);
      sessionStorage.setItem('ustaadh',JSON.stringify(cr))
      if(cr){
        this.route.navigateByUrl("main")
      }
      else{
        this.route.navigateByUrl("/login")
      }
    })

  }

}

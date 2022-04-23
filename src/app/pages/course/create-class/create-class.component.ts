import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassService } from 'src/app/services/class/class.service';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {
  date =new Date()
   createForm !: FormGroup;
  constructor(private router: Router,private classervices : ClassService) { }

  ngOnInit(): void {
    this.configureCreateForm();
  }
  configureCreateForm(){
    this.createForm=new FormGroup({
      course_name: new FormControl(null,Validators.required)
    });
  }
  
  Onsave(){
    const values=this.createForm.value;
    console.log('course =>', values);
    this.classervices.add(values).subscribe((response:any)=>{
      console.log('create course =>',response);
      alert('saved')
      this.router.navigateByUrl('/coursetable');
    },
    (error:HttpErrorResponse)=>{
     console.log(error);
    }
    )

  }

  OnBack(){
    this.router.navigateByUrl('/coursetable');
  }

}

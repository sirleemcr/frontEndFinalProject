import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-teachers',
  templateUrl: './edit-teachers.component.html',
  styleUrls: ['./edit-teachers.component.css']
})
export class EditTeachersComponent implements OnInit {
  editFormTeacher !:FormGroup

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.configEditFormTeacher()
  }

  configEditFormTeacher(){
    this.editFormTeacher= new FormGroup({
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

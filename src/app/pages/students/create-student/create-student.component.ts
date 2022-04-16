import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
   
  studentForm :any= FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.configureSudentForm();
  }
  configureSudentForm(){
    this.studentForm= new FormGroup({
      FirstName: new FormControl(null,Validators.required)
    });
  }
  OnBack(){

  }
Onsave(){

}
}

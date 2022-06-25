import { Component, OnInit } from '@angular/core';

import { StudentsService } from 'src/app/services/student/students.service';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent implements OnInit {

  constructor( private result:StudentsService) { }
  firstName:any
  lastName:any
  middleName:any
  swaful_name:any

  ngOnInit(): void {
    this.firstName=this.result.firstName;
    this.lastName=this.result.lastName;
    this.middleName=this.result.middleName;
    this.swaful_name=this.result.swaful_name;
    
  }

}

import { Component, OnInit } from '@angular/core';
import { ExamService } from 'src/app/services/exam/exam.service';

import { StudentsService } from 'src/app/services/student/students.service';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent implements OnInit {

  constructor( private result:StudentsService,private examser:ExamService) { }
  firstName:any
  lastName:any
  middleName:any
  swaful_name:any
  Result:any[]=[]
  year:any
  

  ngOnInit(): void {
     this.firstName=this.examser.firstName 
     this.middleName=this.examser.middleName
     this.lastName=this.examser.lastName
     this.Result=this.examser.Result
     this.year=this.examser.year
    this.examser.OnfetchData();
    
  }

}

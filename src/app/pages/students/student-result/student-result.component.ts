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
  subject_name:any
  marks:any
  

  ngOnInit(): void {
    // this.subject_name=this.examser.subject_name
    // this.marks=this.examser.marks
    this.examser.OnfetchData();
    
  }

}

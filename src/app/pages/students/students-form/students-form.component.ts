import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/services/student/students.service';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent implements OnInit {
  studentList:any []=[];
  date= Date();
  

  constructor(private router :Router,private studentservice :StudentsService) { }

  ngOnInit(): void {
    this.fetchAllStudent();
  }

  

fetchAllStudent(){
  this.studentservice.getAll().subscribe((response:any)=>{
    console.log("class response ", response)
    this.studentList=response;
  }
)
}

  OnCreate(){
    this.router.navigateByUrl('/student-add');
  }

  
  OnEdit(){

  }

  OnDelete(){
    
  }

}

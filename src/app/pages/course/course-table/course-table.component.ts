import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassService } from 'src/app/services/class/class.service';


@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {
  classList: any []=[];
date = Date()

  constructor(private classervices: ClassService , private router :Router) { }

  ngOnInit(): void {
    this.fetchAllclass();
  }
  fetchAllclass(){
   this.classervices.getAll().subscribe((response:any) =>{
    console.log("class response ", response)
    this.classList=response;
   })
  }
  OnCreate(){
    this.router.navigateByUrl('/create-class');

  }
  OnEdit(classes:any){
    this.router.navigateByUrl('/edit-class/'+classes.course_id)

  }

  Ondelete(id:number){
    this.classervices.delete(id).subscribe(res =>{
      this.fetchAllclass();
    })
  }
}

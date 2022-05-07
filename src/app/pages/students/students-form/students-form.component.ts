import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/services/student/students.service';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent implements OnInit {
  studentList:any []=[];
  date= Date();
  

  constructor(private route :Router,private studentservice :StudentsService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchAllStudent()
  }

  

fetchAllStudent(){
  this.studentservice.getAll().subscribe((response:any)=>{
    console.log("class response ", response)
    this.studentList=response;
  }
)
}

  OnCreate(){
    this.route.navigateByUrl('/student-add');
  }

  
  OnEdit(stud:any){
    this.route.navigateByUrl('/edit-student/'+stud.tilmydh_id)

  }


  OnDelete(id:number){
    this.studentservice.delete(id).subscribe(res =>{
      this.fetchAllStudent;
      
    })
  }

}

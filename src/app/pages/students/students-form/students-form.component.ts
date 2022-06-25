import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassService } from 'src/app/services/class/class.service';
import { StudentsService } from 'src/app/services/student/students.service';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent implements OnInit {
  studentList:any []=[];
  classList:any[]=[]
  selectForm !:FormGroup
  selectbyid !:FormGroup
  

  constructor(private route :Router,
    private classSerive:ClassService,
    private studentservice :StudentsService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchAllStudent()
    this.fetchAllClass()
    this.configSelectForm()
    this.configureselectByid()
  }
 fetchAllClass(){
   this.classSerive.getAll().subscribe((response:any)=>{
     this.classList=response;
   })
 }
 configSelectForm(){
   this.selectForm= new FormGroup({
    swaful_id:new FormControl(''),
   })
 }
 configureselectByid(){
   this.selectbyid= new FormGroup({
     tilmydh_id:new FormControl(null)
   })
 }
  

fetchAllStudent(){
  this.studentservice.getAll().subscribe((response:any)=>{
    console.log("class response ", response)
    this.studentList=response;
  }
)
}

  OnCreate(){
    this.route.navigateByUrl('/main/student-add');
  }

  
  OnEdit(stud:any){
    this.route.navigateByUrl('/main/edit-student/'+stud.tilmydh_id)

  }


  OnDelete(id:number){
    this.studentservice.delete(id).subscribe(res =>{
      this.fetchAllStudent;
      
    })
  }

  OnSelect(){
    console.log(this.selectForm.value.swaful_id)
    this.studentservice.getbyswaful(this.selectForm.value.swaful_id).subscribe((res:any)=>{
      console.log("student by class =>",res)
      this.studentList=res;
    })

  }

  OnSelectId(){
    console.log("id =>",this.selectbyid.value.tilmydh_id)
    this.studentservice.getById(this.selectbyid.value.tilmydh_id).subscribe((response:any)=>{
      console.log("student by id => ", response)
      this.studentList=response;
    })
  }


  OnViewResult(stud:any){
    this.route.navigateByUrl('/main/matokeo/'+stud.tilmydh_id)
  }

}

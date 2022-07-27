import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { ExamService } from 'src/app/services/exam/exam.service';
import { FitrahService } from 'src/app/services/fitrah/fitrah.service';
import { StudentsService } from 'src/app/services/student/students.service';

@Component({
  selector: 'app-matokeo',
  templateUrl: './matokeo.component.html',
  styleUrls: ['./matokeo.component.css']
})
export class MatokeoComponent implements OnInit {

  constructor(private router:Router,private stuentservice:StudentsService,
    private route:ActivatedRoute,private examService:ExamService,private fitrahService:FitrahService) { }
  FitrahForm !:FormGroup
  viewFitrah :[]=[]
  Result:any[]=[]
  tilmydh_id:any
  data=false
  subject_name:any
  marks:any
  firstName:any
  lastName:any
  middleName:any
  x:any
  year:any

  ngOnInit(): void {
    
    this.configFitrahForm()
   this.fetchFitrahData()
    this.route.params.subscribe((cr:any)=>{
      console.log("id =>",cr);
      this.tilmydh_id =cr.tilmydh_id
      this.OnFetchmarks(this.tilmydh_id);
      this.OnFetchstudnt(this.tilmydh_id);
      

    })
    
  }

  fetchFitrahData(){
    this.fitrahService.getAll().subscribe((response:any)=>{
      console.log("Fitarh List =>", response);
      this.viewFitrah=response
      
    })
  }
  configFitrahForm(){
    this.FitrahForm=new FormGroup({
      fitrah_name:new FormControl('',)
    })
  }



  OnFetchmarks(tilmydh_id:number){
    this.examService.getMatokeo(tilmydh_id).subscribe((response)=>{
      console.log("tttt",response)
    })
  }
  OnFetchstudnt(tilmydh_id:number){
    this.stuentservice.getById(tilmydh_id).subscribe((response:any)=>{
      console.log("student=>",response.firstName)
    this.firstName=response.firstName
    this.middleName=response.middleName
    this.lastName=response.lastName
    })
  }

  view(){
  console.log(this.FitrahForm.value.fitrah_name)
  console.log("student id => ",this.tilmydh_id)

    this.examService.getResult(this.tilmydh_id,this.FitrahForm.value.fitrah_name).subscribe((res:any)=>{
      this.x=this.FitrahForm.value.fitrah_name
      console.log(" kkkk =>",this.x)
      console.log("matokeo =>",res)
      this.fitrahService.getById(this.x).subscribe((sr:any)=>{
        console.log("muhula huuu ni =>",sr)
        this.year=sr.year
      })
    this.Result=res
     if(res.length>0){
       this.data=true
     }
     else{
       this.data=false
     }
   })
  }



  
  

  OnPrint(){
    this.router.navigateByUrl("result")
  }
  send(){
    
    console.log("kuku =>",this.Result)
     this.examService.firstName=this.firstName
     this.examService.lastName=this.lastName
     this.examService.middleName=this.middleName
     this.examService.Result=this.Result
     this.examService.year=this.year

  }

}

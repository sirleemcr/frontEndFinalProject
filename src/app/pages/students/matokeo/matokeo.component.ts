import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { ExamService } from 'src/app/services/exam/exam.service';
import { FitrahService } from 'src/app/services/fitrah/fitrah.service';

@Component({
  selector: 'app-matokeo',
  templateUrl: './matokeo.component.html',
  styleUrls: ['./matokeo.component.css']
})
export class MatokeoComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private examService:ExamService,private fitrahService:FitrahService) { }
  FitrahForm !:FormGroup
  viewFitrah :[]=[]
  Result:any[]=[]
  tilmydh_id:any
  data=false
  subject_name:any
  marks:any

  ngOnInit(): void {
    this.configFitrahForm()
   this.fetchFitrahData()
    this.route.params.subscribe((cr:any)=>{
      console.log("id =>",cr);
      this.tilmydh_id =cr.tilmydh_id
      this.OnFetchmarks(this.tilmydh_id);
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

  view(){
  console.log(this.FitrahForm.value.fitrah_name)
  console.log("student id => ",this.tilmydh_id)

    this.examService.getResult(this.tilmydh_id,this.FitrahForm.value.fitrah_name).subscribe((res:any)=>{
      console.log("matokeo =>",res)
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
    this.router.navigateByUrl("/main/result")
  }
  // send(){
  //   this.examService.subject_name=;
  // }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject/subject.service';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent implements OnInit {

  subjectTable:any[]=[]

  constructor(private route:Router,private subjectService:SubjectService) { }

  ngOnInit(): void {
    this.fetchSubjectData();
  
  }


  fetchSubjectData(){
    this.subjectService.getbyustaadh().subscribe((response:any)=>{
      console.log('subject =>',response)
      this.subjectTable=response;
    })
  }


  OnAdd(){
    this.route.navigateByUrl('main/add-subject')
  }


  OnUpdate(ust:any){
   this.route.navigateByUrl('main/edit-subject/'+ust.id)
  }
  OnDelete(id:any){
    this.subjectService.delete(id).subscribe((response)=>{
      this.fetchSubjectData();
      console.log("deleted succesful")
    })
  }

}

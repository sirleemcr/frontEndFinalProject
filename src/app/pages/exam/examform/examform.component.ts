import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ClassService } from 'src/app/services/class/class.service';
import { ExamService } from 'src/app/services/exam/exam.service';
import { StudentsService } from 'src/app/services/student/students.service';
import { SubjectService } from 'src/app/services/subject/subject.service';

@Component({
  selector: 'app-examform',
  templateUrl: './examform.component.html',
  styleUrls: ['./examform.component.css']
})
export class ExamformComponent implements OnInit {
  viewClass:any[]=[]
  viewStudent:any[]=[]
  viewSubject:any[]=[]
  upperForm !:FormGroup
  insertmarks !:FormGroup
  exam:any
  marks = new FormArray([]);
  swaful_id = new FormArray([]);
  subject_id = new FormArray([]);
  tilmydh_id= new FormArray([]);
  skillss = new FormArray([]);
  constructor(private route:Router,private examService:ExamService,
    private studentService:StudentsService ,
    private subjectService:SubjectService,private classService:ClassService ) { }

  ngOnInit(): void {
    this.fetchstudent()
    this.fetchClass()
    this.fetchSubject()
    this.configureUpperForm()
    this.configureCreateForm()
    this.insertmarks.valueChanges.subscribe(() => {
      if (this.insertmarks.valid) {
       console.log('try',this.insertmarks.value)
      }
    })
  }

  fetchSubject(){
    this.subjectService.getAll().subscribe((response :any)=>{
      console.log("subject =>", response)
      this.viewSubject=response
    })
  }
  

  fetchClass(){
    this.classService.getAll().subscribe((response:any)=>{
      console.log("swaful =>",response)
      this.viewClass=response
    })
  }

  fetchstudent(){
    this.studentService.getAll().subscribe((response:any)=>{
     console.log("student =>",response)
    
     this.viewStudent=response 
    })
  }

  configureCreateForm(){
    this.insertmarks=new FormGroup({
      subject_id:new FormControl(null,Validators.required),
      swaful_id: new FormControl(null,Validators.required),
      marks: new FormControl(null,Validators.required),
      tilmydh_id:new FormControl(null ,Validators.required)
      
    });
  }
formdata(){
  this.marks.push(this.insertmarks),
  this.tilmydh_id.push(this.insertmarks),
  this.swaful_id.push(this.insertmarks),
  this.subject_id.push(this.insertmarks)
}

  configureUpperForm(){
    this.upperForm = new FormGroup({
      swaful_id :new FormControl(null,Validators.required),
      subject_id : new FormControl(null,Validators.required)

    });
  }

  examMarks(object:any){
   console.log("hello=>",object)
    // object['exam'] = this.exam
    // console.log('on exam =>',object)
   
  }
  group!:FormGroup
  addSkill() {
    this.marks.push(new FormControl('')),
    this.swaful_id.push(new FormControl('')),
    this.subject_id.push(new FormControl('')),
    this.tilmydh_id.push(new FormControl(''))

  }
  data!:[]
clickme(){
  
  let i;
  for(i=0;i<this.marks.length;i++){
  this.group=  new FormGroup({
      marks: new FormControl(this.marks.value[i]),
      
      
    })
 this.skillss.push(this.group)}
  console.log(this.skillss.value)
    
  
}
OnSave(){

  // const values=this.insertmarks.value;
  //   console.log('marks =>', values);
  //   this.examService.add(values).subscribe((response)=>{
  //     console.log("exam =>",response)
  //   })
    
}
 
  OnUpdate(){

  }
  OnDelete(){
    
  }
  view(){
    console.log(this.upperForm.value.swaful_id)
    this.studentService.getbyclass(this.upperForm.value.swaful_id,this.upperForm.value.subject_id).subscribe((response:any)=>{
      console.log("student view =>",response)
      let i=0
      for(i;i<response.length;i++){
       this.addSkill() 
      }
      this.viewStudent=response 
     })
  }

}

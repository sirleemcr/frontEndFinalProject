import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
  addsubjectform !:FormGroup

  constructor(private route:Router) { }

  ngOnInit(): void {
    this.configAddSubjectForm();
  }
   configAddSubjectForm(){
     this.addsubjectform=new FormGroup({
      Subject_name:new FormControl(null,Validators.required)
     })
   }

  OnBack(){
   this.route.navigateByUrl('/subject')
  }
  OnAdd(){

  }

}

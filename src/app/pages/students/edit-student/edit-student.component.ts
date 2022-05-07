import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/services/student/students.service';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
editForm !:FormGroup

  constructor(private route:ActivatedRoute, private router:Router,private studentService:StudentsService) { }

  ngOnInit(): void {
    this.onConfigure()
   this.route.params.subscribe((ParamValue:any)=>{
     console.log("values =>",ParamValue);
     const tilmydh_id=ParamValue.tilmydh_id;
     this.OnFetchData(tilmydh_id);
   })
  }

  OnFetchData(tilmydh_id:number){
    this.studentService.getById(tilmydh_id).subscribe((response:any)=>{
      console.log("data =>",response);
      this.editForm.get("tilmydh_id")?.setValue(response.tilmydh_id);
      this.editForm.get('firstName')?.setValue(response.firstName);
      this.editForm.get('lastName')?.setValue(response.lastName);
      this.editForm.get('middleName')?.setValue(response.middleName);
      this.editForm.get('gender')?.setValue(response.gender),
      this.editForm.get('place')?.setValue(response.place),
      this.editForm.get('nationality')?.setValue(response.nationality);
      this.editForm.get('swaful_id')?.setValue(response.swaful_id);
      this.editForm.get('parent_name')?.setValue(response.parent_name);
      this.editForm.get('parent_number')?.setValue(response.parent_number)

    })
    
  }


  onConfigure(){
    this.editForm = new FormGroup({
      tilmydh_id:new FormControl(null),
      firstName:new FormControl(null,Validators.required),
      lastName:new FormControl (null,Validators.required),
      middleName:new FormControl(null,Validators.required),
      gender:new FormControl(null,Validators.required),
      place:new FormControl(null,Validators.required),
      nationality:new FormControl(null,Validators.required),
      swaful_id:new FormControl(null,Validators.required),
      parent_number:new FormControl(null,Validators.required),
      parent_name:new FormControl(null,Validators.required)
    })
  }

OnBack(){
  this.router.navigateByUrl('/student')
}
  Onsave(){
  const values = this.editForm.value;
  this.studentService.update(values).subscribe((response)=>{
    this.router.navigateByUrl("/student");
  })
  }
}

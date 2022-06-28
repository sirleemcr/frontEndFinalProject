import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UstadhService } from 'src/app/services/ustaadh/ustadh.service';

@Component({
  selector: 'app-edit-teachers',
  templateUrl: './edit-teachers.component.html',
  styleUrls: ['./edit-teachers.component.css']
})
export class EditTeachersComponent implements OnInit {
  editFormTeacher !:FormGroup

  constructor(private router:Router,private route:ActivatedRoute,private ustaadhService:UstadhService) { }

  ngOnInit(): void {
    this.configEditFormTeacher();
    this.route.params.subscribe((ParamValues:any)=>{
      console.log(ParamValues)
      const id= ParamValues.id
      this.onfetchUstaadh(id);
    })
  }

  onfetchUstaadh(id:number){
    this.ustaadhService.getById(id).subscribe((response:any)=>{
      console.log("dd",response);
      this.editFormTeacher.get('id')?.setValidators(response.id);
      this.editFormTeacher.get('firstName')?.setValue(response.firstName);
      this.editFormTeacher.get('middleName')?.setValue(response.middleName);
      this.editFormTeacher.get('lastName')?.setValue(response.lastName);
      this.editFormTeacher.get('place')?.setValue(response.place);
      this.editFormTeacher.get('nationality')?.setValue(response.nationality);
      this.editFormTeacher.get('gender')?.setValue(response.gender);
      this.editFormTeacher.get('phone_number')?.setValue(response.phone_number);
      this.editFormTeacher.get('email')?.setValue(response.email)
    })
  }

  configEditFormTeacher(){
    this.editFormTeacher= new FormGroup({
      id:new FormControl(null),
      firstName:new FormControl(null,Validators.required),
      lastName: new FormControl(null,Validators.required),
      middleName:new FormControl(null,Validators.required),
      place:new FormControl(null,Validators.required),
      nationality:new FormControl(null, Validators.required),
      gender:new FormControl(null,Validators.required),
      phone_number:new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.required)
    })
  }


  OnBack(){
    this.router.navigateByUrl('/main/teacher')

  }
  OnSave(){
    const values=this.editFormTeacher.value;
    this.ustaadhService.update(values).subscribe((response)=>{
      this.router.navigateByUrl('/main/teacher')
    })
    
  }

}

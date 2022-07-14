import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UstadhService } from 'src/app/services/ustaadh/ustadh.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-change-pasword',
  templateUrl: './change-pasword.component.html',
  styleUrls: ['./change-pasword.component.css']
})
export class ChangePaswordComponent implements OnInit {
  firstName:any
  middleName:any
  lastName:any
  gender:any
  email:any
  password:any
  phone_number:any
  place:any
  nationality:any
  dob:any
  form !:FormGroup
  ustaadh_id:any
  data=false
  dete=true

  constructor(private ustaadhservice:UstadhService) { }

  ngOnInit(): void {
    const ustaadh =JSON.parse(sessionStorage.getItem('ustaadh')!)
    this.firstName=ustaadh.firstName
    this.middleName=ustaadh.middleName
    this.lastName=ustaadh.lastName
    this.gender=ustaadh.gender
    this.email=ustaadh.email
    this.password=ustaadh.password
    this.nationality=ustaadh.nationality
    this.phone_number=ustaadh.phone_number
    this.ustaadh_id=ustaadh.ustaadh_id
    this.formpassword()
    this.getbyid(this.ustaadh_id)
  }

  formpassword(){
    this.form=new FormGroup({
      ustaadh_id:new FormControl(null),
      rolesList:new FormControl(null),
      firstName:new FormControl(null),
      lastName: new FormControl(null),
      middleName:new FormControl(null),
      place:new FormControl(null),
      nationality:new FormControl(null),
      gender:new FormControl(null),
      phone_number:new FormControl(null),
      email:new FormControl(null),
      password:new FormControl(null),
      confirmpassword:new FormControl(null,Validators.required),
      subjectList:new FormControl(null),
      newpassword:new FormControl(null,Validators.required)
    })
  }


 

  

  getbyid(ustaadh_id:any){
    this.ustaadhservice.getById(ustaadh_id).subscribe((cr:any)=>{
      console.log("dd",cr);
      this.form.get('ustaadh_id')?.setValue(cr.ustaadh_id);
      this.form.get('firstName')?.setValue(cr.firstName);
      this.form.get('middleName')?.setValue(cr.middleName);
      this.form.get('lastName')?.setValue(cr.lastName);
      this.form.get('place')?.setValue(cr.place);
      this.form.get('nationality')?.setValue(cr.nationality);
      this.form.get('gender')?.setValue(cr.gender);
      this.form.get('phone_number')?.setValue(cr.phone_number);
      this.form.get('email')?.setValue(cr.email)
      this.form.get('rolesList')?.setValue(cr.rolesList),
      this.form.get('password')?.setValue(cr.password),
      this.form.get("subjectList")?.setValue(cr.subjectList)
      

    })
  }
  Onchenge(){
    const s=this.form.value
    var x=this.form.value.password
    const z=this.form.value.newpassword
    const y = this.form.value.confirmpassword
    if (z==y){
     x=this.form.value.newpassword
     s['password']=x
     console.log("pasword => ",x)
     this.ustaadhservice.update(s).subscribe((cr:any)=>{
        
          Swal.fire('Saved!', '', 'success')
         this.dete=true
          this.data=false
        })
    }
  
     else{
       Swal.fire(' new pasword and confirm password are not matched,please input again', '', 'error')
     }

  }

  Onclick(){
    this.data=true
    this.dete=false
  }
  Onbacked(){
    this.data=false
    this.dete=true
  }



}

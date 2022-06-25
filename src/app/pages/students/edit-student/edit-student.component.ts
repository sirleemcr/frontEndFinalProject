
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassService } from 'src/app/services/class/class.service';
import { StudentsService } from 'src/app/services/student/students.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
SwafulView:any[]=[]  
editForm !:FormGroup

  constructor(private route:ActivatedRoute, private router:Router,private studentService:StudentsService,private classServive:ClassService) { }

  ngOnInit(): void {
    this.Onview()
    this.onConfigure()
   this.route.params.subscribe((ParamValue:any)=>{
     console.log("values =>",ParamValue);
     const id=ParamValue.id;
     this.OnFetchData(id);
   })
  }

  OnFetchData(id:number){
    this.studentService.getById(id).subscribe((response:any)=>{
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

  Onview(){
    this.classServive.getAll().subscribe((res:any)=>{
      console.log("swaful=>",res)
      this.SwafulView=res
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
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {

    const values = this.editForm.value;
    this.studentService.update(values).subscribe((response)=>{
    this.router.navigateByUrl("/student");
       })
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    
  
  }

  
}

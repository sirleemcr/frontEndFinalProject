import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassService } from 'src/app/services/class/class.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css']
})
export class EditClassComponent implements OnInit {
  date =new Date()
  editForm !: FormGroup;
  constructor(private route: ActivatedRoute ,private classervices :ClassService,private router :Router){ }


  configureCreateForm(){
    this.editForm=new FormGroup({
      swaful_id:new FormControl(null),
      swaful_name: new FormControl(null,Validators.required)
    });
  }
  
  

  ngOnInit(): void {
    this.configureCreateForm();
    this.route.params.subscribe((parasValues:any)=>{
      console.log('nahuu ',parasValues);
       const swaful_id=parasValues.swaful_id;
       this.fetchClassById(swaful_id);
    });
    
  }

  fetchClassById(swaful_id :number){
    this.classervices.getById(swaful_id).subscribe((response:any)=>{
      console.log('bingo', response);
      this.editForm.get('swaful_id')?.setValue(response.swaful_id);
      this.editForm.get('swaful_name')?.setValue(response.swaful_name);
    },(error:HttpErrorResponse)=>{
      console.log('mmeapata erreor',error)
    }
    )

  }
  OnChange(){
    Swal.fire({
  title: 'Do you want to save the changes?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'Save',
  denyButtonText: `Don't save`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {

    const values =this.editForm.value;
    console.log(values)
   this.classervices.update(values).subscribe((response)=>{
    this.router.navigateByUrl('main/coursetable');
   },error =>{
      console.log(error)
   })
    Swal.fire('Saved!', '', 'success')
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
})




   
  }
}

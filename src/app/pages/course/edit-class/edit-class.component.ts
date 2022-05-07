import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassService } from 'src/app/services/class/class.service';

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
      id:new FormControl(null),
      swaful_name: new FormControl(null,Validators.required)
    });
  }
  
  

  ngOnInit(): void {
    this.configureCreateForm();
    this.route.params.subscribe((parasValues:any)=>{
      console.log('nahuu ',parasValues);
       const id=parasValues.id;
       this.fetchClassById(id);
    });
    
  }

  fetchClassById(swaful_id :number){
    this.classervices.getById(swaful_id).subscribe((response:any)=>{
      console.log('bingo', response);
      this.editForm.get('id')?.setValue(response.id);
      this.editForm.get('swaful_name')?.setValue(response.swaful_name);
    },(error:HttpErrorResponse)=>{
      console.log('mmeapata erreor',error)
    }
    )

  }
  OnChange(){
    const values =this.editForm.value;
    console.log(values)
   this.classervices.update(values).subscribe((response)=>{
    this.router.navigateByUrl('/coursetable');
   },error =>{
      console.log(error)
   })
   
  }
}

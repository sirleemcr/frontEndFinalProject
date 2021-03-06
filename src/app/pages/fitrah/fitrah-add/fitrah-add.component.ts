import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FitrahService } from 'src/app/services/fitrah/fitrah.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-fitrah-add',
  templateUrl: './fitrah-add.component.html',
  styleUrls: ['./fitrah-add.component.css']
})
export class FitrahAddComponent implements OnInit {
 FitrahForm !:FormGroup
  constructor(private route:Router,private fitrahService:FitrahService) { }

  ngOnInit(): void {
    this.OnconfigureForm();
  }

  OnconfigureForm(){
    this.FitrahForm=new FormGroup({
      fitrah_name:new FormControl(null,Validators.required),
      year:new FormControl(null,Validators.required)
    })
  }



  OnBack(){
    this.route.navigateByUrl('main/fitrah')
  }
  OnSave(){
    const values=this.FitrahForm.value;
    console.log("Fitrah =>",values);
    this.fitrahService.add(values).subscribe((response:any)=>{
     console.log(" Fitrah =>",response);
     this.route.navigateByUrl("main/fitrah");
     Swal.fire(
      'Fitrah inserted!',
      'You clicked the button!',
      'success'
    )
    })
  }
}

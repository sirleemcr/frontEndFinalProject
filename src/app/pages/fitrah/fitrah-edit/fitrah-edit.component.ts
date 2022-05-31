import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FitrahService } from 'src/app/services/fitrah/fitrah.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-fitrah-edit',
  templateUrl: './fitrah-edit.component.html',
  styleUrls: ['./fitrah-edit.component.css']
})
export class FitrahEditComponent implements OnInit {

  constructor(private route:ActivatedRoute,private fitrahSerivice:FitrahService,private router:Router) { }
  FitrahEdit !:FormGroup
  ngOnInit(): void {
    this.configureEditForm();
    this.route.params.subscribe((ParamValues:any)=>{
      console.log("values =>",ParamValues);
      const id =ParamValues.id;
      this.fetchFitrahData(id)
    })
  }

  configureEditForm(){
    this.FitrahEdit = new FormGroup({
      id:new FormControl(null),
      fitrah_name:new FormControl(null,Validators.required),
      year:new FormControl(null,Validators.required)
    })
  }

  fetchFitrahData(fitrah_id:number){
    this.fitrahSerivice.getById(fitrah_id).subscribe((response:any)=>{
      console.log("fetch data =>",response);
      this.FitrahEdit.get('id')?.setValue(response.id);
      this.FitrahEdit.get('fitrah_name')?.setValue(response.fitrah_name);
      this.FitrahEdit.get('year')?.setValue(response.year);
    })
  }


  OnSave(){
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
           
    const values=this.FitrahEdit.value
    this.fitrahSerivice.update(values).subscribe((response:any)=>{
      console.log("value =>",response);
      this.router.navigateByUrl("/fitrah")
    })
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
 

    
  }
  OnBack(){
    this.router.navigateByUrl('/fitrah')
  }
  

}



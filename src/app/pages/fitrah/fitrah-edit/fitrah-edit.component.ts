import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FitrahService } from 'src/app/services/fitrah/fitrah.service';

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
      const fitrah_id =ParamValues.fitrah_id;
      this.fetchFitrahData(fitrah_id)
    })
  }

  configureEditForm(){
    this.FitrahEdit = new FormGroup({
      fitrah_id:new FormControl(null),
      fitrah_name:new FormControl(null,Validators.required),
      year:new FormControl(null,Validators.required)
    })
  }

  fetchFitrahData(fitrah_id:number){
    this.fitrahSerivice.getById(fitrah_id).subscribe((response:any)=>{
      console.log("fetch data =>",response);
      this.FitrahEdit.get('fitrah_id')?.setValue(response.fitrah_id);
      this.FitrahEdit.get('fitrah_name')?.setValue(response.fitrah_name);
      this.FitrahEdit.get('year')?.setValue(response.year);
    })
  }


  OnSave(){
    const values=this.FitrahEdit.value
    this.fitrahSerivice.update(values).subscribe((response)=>{
      console.log("value =>",response);
      this.router.navigateByUrl("/fitrah")
    })

    
  }
  OnBack(){
    this.router.navigateByUrl('/fitrah')
  }
  

}



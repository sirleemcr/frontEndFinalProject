import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FitrahService } from 'src/app/services/fitrah/fitrah.service';

@Component({
  selector: 'app-fitrahtb',
  templateUrl: './fitrahtb.component.html',
  styleUrls: ['./fitrahtb.component.css']
})
export class FitrahtbComponent implements OnInit {
  fitrahList:any[]=[]

  constructor(private route:Router,private fitrahServicce:FitrahService) { }

  ngOnInit(): void {
    this.fetchFitrahData();
  }

  fetchFitrahData(){
    this.fitrahServicce.getAll().subscribe((response:any)=>{
      console.log("Fitarh List =>", response);
      this.fitrahList=response
    })
  }

  OnAdd(){
    this.route.navigateByUrl('/fitrah-add')
  }
   
  OnUpdate(fit:any){
    this.route.navigateByUrl('/fitrah-edit/'+fit.fitrah_id)

  }

  OnDelete(fitrah_id:number){
    this.fitrahServicce.delete(fitrah_id).subscribe((response)=>{
      this.fetchFitrahData();
      console.log("succesfuly")
    })
  }

}

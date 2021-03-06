import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FitrahService } from 'src/app/services/fitrah/fitrah.service';
import Swal from 'sweetalert2';
import { FitrahAddComponent } from '../fitrah-add/fitrah-add.component';

@Component({
  selector: 'app-fitrahtb',
  templateUrl: './fitrahtb.component.html',
  styleUrls: ['./fitrahtb.component.css']
})
export class FitrahtbComponent implements OnInit {
  fitrahList:any[]=[]

  constructor(private route:Router,private fitrahServicce:FitrahService,private matDialog:MatDialog) { }

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
    const cr={
      width:'50%'
    }
   // this.route.navigateByUrl('/fitrah-add')
   this.matDialog.open(FitrahAddComponent,cr);
  }
   
  OnUpdate(fit:any){
    this.route.navigateByUrl('main/fitrah-edit/'+fit.id)

  }

  OnDelete(id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.fitrahServicce.delete(id).subscribe((response)=>{
          this.fetchFitrahData();
          console.log("succesfuly")
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    
  }

}

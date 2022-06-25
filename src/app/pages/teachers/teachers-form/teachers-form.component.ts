import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UstadhService } from 'src/app/services/ustaadh/ustadh.service';

@Component({
  selector: 'app-teachers-form',
  templateUrl: './teachers-form.component.html',
  styleUrls: ['./teachers-form.component.css']
})
export class TeachersFormComponent implements OnInit {

  teacherForm : any[]=[]

  constructor(private route:Router,private ustadhService:UstadhService) { }

  ngOnInit(): void {
    this.fetchUstaadh();
  }

  fetchUstaadh(){
    this.ustadhService.getAll().subscribe((response:any)=>
    {
      console.log("teacher data => ", response)
       this.teacherForm=response;
    })
  }



  OnEdit(Ustaadhes:any){
    this.route.navigateByUrl('/edit-teacher/'+Ustaadhes.id)
   
    
  }
OnDelete(id:number){
  this.ustadhService.delete(id).subscribe((response)=>{
    this.fetchUstaadh;
  })

}
OnAdd(){
  this.route.navigateByUrl('/add-teacher')

}

Addrole(){
  this.route.navigateByUrl('/role')
}


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teachers-form',
  templateUrl: './teachers-form.component.html',
  styleUrls: ['./teachers-form.component.css']
})
export class TeachersFormComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }



  OnEdit(){
    this.route.navigateByUrl('/edit-teacher')
   
    
  }
OnDelete(){

}
OnAdd(){
  this.route.navigateByUrl('/add-teacher')

}


}

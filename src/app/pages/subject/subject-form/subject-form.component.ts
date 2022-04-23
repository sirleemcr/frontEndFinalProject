import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  OnAdd(){
    this.route.navigateByUrl('/add-subject')
  }

  OnEdit(){

  }
  OnUpdate(){
   this.route.navigateByUrl('/edit-subject')
  }
  OnDelete(){

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent implements OnInit {

  constructor(private route :Router) { }

  ngOnInit(): void {
  }
  OnCreate(){
    this.route.navigateByUrl('/create-student');
  }

}

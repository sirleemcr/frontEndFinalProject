import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-examform',
  templateUrl: './examform.component.html',
  styleUrls: ['./examform.component.css']
})
export class ExamformComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  AddExam(){
    this.route.navigateByUrl('/add-exam')

  }
  OnUpdate(){

  }
  OnDelete(){
    
  }

}

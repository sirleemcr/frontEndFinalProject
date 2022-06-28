import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  date= new Date();

  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log('hello')
  }

  OnSetting(){
    this.router.navigateByUrl("main/role")
  }

}

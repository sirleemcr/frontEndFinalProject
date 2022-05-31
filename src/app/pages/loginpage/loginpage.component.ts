import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  Onlogin(){
    this.route.navigateByUrl('/')

  }

}

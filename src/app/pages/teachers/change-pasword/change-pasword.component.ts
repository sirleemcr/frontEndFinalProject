import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-pasword',
  templateUrl: './change-pasword.component.html',
  styleUrls: ['./change-pasword.component.css']
})
export class ChangePaswordComponent implements OnInit {
  firstName:any
  middleName:any
  lastName:any
  gender:any
  email:any
  password:any
  constructor() { }

  ngOnInit(): void {
    const ustaadh =JSON.parse(sessionStorage.getItem('ustaadh')!)
    this.firstName=ustaadh.firstName
    this.middleName=ustaadh.middleName
    this.lastName=ustaadh.lastName
    this.gender=ustaadh.gender
    this.email=ustaadh.email
    this.password=ustaadh.password
  }

}

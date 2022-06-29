import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassService } from 'src/app/services/class/class.service';
import { StudentsService } from 'src/app/services/student/students.service';
import { SubjectService } from 'src/app/services/subject/subject.service';
import { UstadhService } from 'src/app/services/ustaadh/ustadh.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  date= new Date();
  wanafunzi :any
  ustaadh:any
  somo:any
  darasa:any
  firstname:any
  middlename:any
  subjectname:any
  lastname:any
  email:any
  phonenumber:any
  dob:any
  place:any
  tzid:any
  rolesList:any
  masom:any
  gender:any
  

  constructor(private router:Router,private studentService:StudentsService,private ustaadhservice:UstadhService,
    private subjectservice:SubjectService,private classservice:ClassService) { 
      const ustaadh =JSON.parse(sessionStorage.getItem('ustaadh')!)
      this.rolesList=ustaadh.rolesList
      this.firstname=ustaadh.firstName
      this.email=ustaadh.email
      this.middlename=ustaadh.middleName
      this.lastname=ustaadh.lastName
      this.phonenumber=ustaadh.phone_number
      this.dob=ustaadh.dob
      this.place=ustaadh.place
      this.gender=ustaadh.gender
      
      // this.masom=ustaadh.suject_list.subject_name
    }
  
  ngOnInit(): void {
    this.madarasa()
    this.student()
    this.ustaadhs()
    this.subject()
    console.log('hello')
  }
  student(){
    this.studentService.getAll().subscribe((cr:any)=>{
      console.log("ct",cr)
      this.wanafunzi=cr.length;
      console.log("wwwwwww",cr.length)
    })
  }
  ustaadhs(){
    this.ustaadhservice.getAll().subscribe((cr:any)=>{
      console.log("ustaadh=>",cr.length)
      this.ustaadh=cr.length
    })
  }
  subject(){
    this.subjectservice.getAll().subscribe((cr:any)=>{
      console.log("masomo",cr.length)
      this.somo=cr.length

    })
  }

  madarasa(){
    this.classservice.getAll().subscribe((cr:any)=>{
      this.darasa=cr.length
      console.log("madarsa=>",cr.length)
    })
  }

  OnSetting(){
    this.router.navigateByUrl("main/role")
  }

}

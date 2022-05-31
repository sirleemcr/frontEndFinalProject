import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassService } from 'src/app/services/class/class.service';
import { UstadhService } from 'src/app/services/ustaadh/ustadh.service';
import { SubjectService } from 'src/app/services/subject/subject.service';
import { FitrahService } from 'src/app/services/fitrah/fitrah.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
  UstadhView:any[]=[]
  swafulView:any[]=[]
  fitrahView:any[]=[]
  addsubjectform !:FormGroup

  constructor(private route:Router,private ustaadhService:UstadhService,
    private classService:ClassService,
    private subjectService:SubjectService,private fitrahService:FitrahService) { }

  ngOnInit(): void {
    this.configAddSubjectForm();
    this.fetchUstadh();
    this.fetchFitrah();
    this.fetchSwaful()
    
  }
  fetchSwaful(){
    this.classService.getAll().subscribe((response:any)=>{
      console.log("swaful data =>",response)
      this.swafulView=response;
    })
  }
   fetchFitrah(){
     this.fitrahService.getAll().subscribe((response:any)=>{
       console.log("fitrah =>",response)
       this.fitrahView=response
     })
   }


  fetchUstadh(){
    this.ustaadhService.getAll().subscribe((response:any)=>{
      console.log('ustaadh data =>',response)
      this.UstadhView=response;
    })
  }

  
   configAddSubjectForm(){
     this.addsubjectform=new FormGroup({
      subject_name:new FormControl(null,Validators.required),
      ustaadh_id:new FormControl(null,Validators.required),
      fitrah_id:new FormControl(null,Validators.required),
      swaful_id:new FormControl(null,Validators.required)
     })
   }

  OnBack(){
   this.route.navigateByUrl('/subject')
  }
  OnAdd(){
    const values= this.addsubjectform.value;
    console.log("subject data =>",values);
    this.subjectService.add(values).subscribe((response)=>{
      console.log('succesful',response)
      Swal.fire(
        'data inserted!',
        'You clicked the button!',
        'success'
      )
    })

  }

}

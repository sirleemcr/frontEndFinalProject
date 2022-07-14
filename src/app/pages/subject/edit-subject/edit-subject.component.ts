import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassService } from 'src/app/services/class/class.service';
import { FitrahService } from 'src/app/services/fitrah/fitrah.service';
import { SubjectService } from 'src/app/services/subject/subject.service';
import { UstadhService } from 'src/app/services/ustaadh/ustadh.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent implements OnInit {
editsubjectform !:FormGroup
swafulView :any[]=[]
UstadhView:any[]=[]
fitrahView:any[]=[]
databyid:any
  constructor(private route:Router,private router:ActivatedRoute,
    private subjectService:SubjectService,private teacherService:UstadhService,
    private classService:ClassService,private fitrahService:FitrahService) { }

  ngOnInit(): void {
    this.configureEditForm();
    this.fetchUstaadh()
    this.fetchSwaful()
    this.fetchFitrah()
    this.router.params.subscribe((ParamValues:any)=>{
      console.log("param Value => ",ParamValues)
      const id =ParamValues.id;
      this.fethData(id)
    })
}

fethData(id:number){
  this.subjectService.getById(id).subscribe((response:any)=>{
    console.log("data fetched => ",response)
    this.databyid = response
    this.editsubjectform.get('id')?.setValue(response.id)
    this.editsubjectform.get('subject_name')?.setValue(response.subject_name)
    this.editsubjectform.get('ustaadh_id')?.setValue(response.ustaadh_id)
    this.editsubjectform.get('fitrah_id')?.setValue(response.fitrah_id)
    this.editsubjectform.get('swaful_id')?.setValue(response.swaful_id)
  })
      
}
  fetchFitrah(){
    this.fitrahService.getAll().subscribe((response:any)=>{
      console.log("fitrah =>",response)
      this.fitrahView=response;
    })
  }

  fetchSwaful(){
    this.classService.getAll().subscribe((respose:any)=>{
      console.log('saful =>',respose)
      this.swafulView=respose;
      
    })
  }


  fetchUstaadh(){
    this.teacherService.getAll().subscribe((response:any)=>{
      console.log("ustaadh =>",response)
      this.UstadhView=response;
    })
  }

  configureEditForm(){
    this.editsubjectform=new FormGroup({
      id:new FormControl(null),
      subject_name:new FormControl(null,Validators.required),
      ustaadh_id:new FormControl(null,Validators.required),
      swaful_id:new FormControl(null,Validators.required),
      fitrah_id:new FormControl(null,Validators.required)
    })
  }

  OnBack(){
    this.route.navigateByUrl('main/subject')
  }
  OnChange(){

    Swal.fire({
      title: 'Are you sure want to save change?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const values =this.editsubjectform.value;
        this.subjectService.update(values).subscribe((response)=>{
          this.route.navigateByUrl('main/subject');
        })
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
   
    
  }
}

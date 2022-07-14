import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassService } from 'src/app/services/class/class.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {
  classList: any []=[];



  constructor(private classervices: ClassService , private router :Router) { }

  ngOnInit(): void {
    this.fetchAllclass()
  }
  fetchAllclass(){
   this.classervices.getAll().subscribe((response:any) =>{
    console.log("class response ", response)
    this.classList=response;
   })
  }
  OnCreate(){
    this.router.navigateByUrl('/main/create-class');

  }
  OnEdit(classes:any){
    this.router.navigateByUrl('/main/edit-class/'+classes.swaful_id)

  }

  Ondelete(swaful_id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.classervices.delete(swaful_id).subscribe(res =>{
          this.fetchAllclass();
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
}

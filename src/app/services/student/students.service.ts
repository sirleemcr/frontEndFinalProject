import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  firstName:any
  lastName:any
  middleName:any
  swaful_name:any


  private sapiUrl:string ='http://localhost:8090/t'


  constructor(private http:HttpClient,private router:Router) { }
  getAll(){
    return this.http.get(this.sapiUrl+"/tilmiydh");
  }



  add(body:any){
   return this.http.post(this.sapiUrl+"/t1",body);
   }

   getbyclass(swaful_id:any,subject_id:any){
    return this.http.get(this.sapiUrl+"/tilmy/"+"swaful/"+swaful_id+"/subject/"+subject_id);
  
  }

  getbyswaful(swaful_id:any){
    return this.http.get(this.sapiUrl+"/tilmy/"+"swaful/"+swaful_id);
  }
  

  update(body:any){
    return this.http.put(this.sapiUrl+"/edit",body);

  }



  getById(id:number){
    return this.http.get(this.sapiUrl+"/tilmiydh"+'/'+id); 
   }

  delete(id:number){
   return this.http.delete(this.sapiUrl+"/delete"+'/'+id);
  }




  getbyustaadh(swaful_id:number,subject_id:number,ustaadh_id:number){
     return this.http.get(this.sapiUrl+"/tilmy/swaful_id/"+swaful_id+"/subject_id/"+subject_id+"/ustaadh_id/"+ustaadh_id);
  }


  OnfetchData(){
    this.router.navigateByUrl('/result').then(()=>{
      this.router.navigateByUrl('result')
      window.print();
      this.router.navigateByUrl("")
    })
  }


  
}

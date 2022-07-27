import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ExamService {
  Result:any
  firstName:any
  lastName:any
  middleName:any
  year:any
  private ExamApi:string="http://localhost:8090/i"

  constructor(private http:HttpClient,private router:Router) { }


  getAll(){
    return this.http.get(this.ExamApi+"/imtihaan")
  }

  add(data:object){
    return this.http.post(this.ExamApi+"/i",data)
  }
  update(body:any){
    return this.http.put(this.ExamApi+"/edit",body)
  }

  getById(id:number){
   return this.http.get(this.ExamApi+"/imtihaan"+"/"+id)
  }
  delete(id:number){
   return this.http.delete(this.ExamApi+"delete"+"/"+id)
  }

  getBySubject(swaful_id:number){
   return this.http.get(this.ExamApi+"/tilmy"+"/"+swaful_id)
  }

  getMatokeo(tilmydh_id:number){
   return this.http.get(this.ExamApi+"/imt/"+tilmydh_id)

  }
  getResult(tilmydh_id:number,fitrah_id:number){
    return this.http.get(this.ExamApi+"/im/tilmydh_id/"+tilmydh_id+"/fitrah_id/"+fitrah_id)
  }
  getAllResult(){
   return this.http.get(this.ExamApi+"/imt/view")
  }
 
   getbyustaadh(ustaadh_id:number){
    return this.http.get("http://localhost:8090/i/byustaadh/"+ustaadh_id)
   }  
  OnfetchData(){
    this.router.navigateByUrl('result').then(()=>{
      this.router.navigateByUrl('result')
      window.print();
      this.router.navigateByUrl("main/student")
    })
}
}

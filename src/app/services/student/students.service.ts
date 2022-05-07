import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private sapiUrl:string ='http://localhost:8089/t'


  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get(this.sapiUrl+"/tilmydh");
  }



  add(body:any){
   return this.http.post(this.sapiUrl+"/t1",body);
   }



  update(body:any){
    return this.http.put(this.sapiUrl+"/edit",body);

  }



  getById(tilmydh_id:number){
    return this.http.get(this.sapiUrl+"/tilmydh"+'/'+tilmydh_id); 
   }

  delete(tilmydh_id:number){
   return this.http.delete(this.sapiUrl+"/delete"+'/'+tilmydh_id);
  }
}

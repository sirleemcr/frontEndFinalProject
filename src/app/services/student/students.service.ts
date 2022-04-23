import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private sapiUrl:string ='http://localhost:8089/s'


  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get(this.sapiUrl+"/student");
  }



  // add(body:any){
  //   return this.http.post(this.sapiUrl+"/",body);
  // }



  // update(body:any){
  //   return this.http.put(this.sapiUrl+"/edit",body);

  // }



  // getById(course_id:number){
  //   return this.http.get(this.sapiUrl+"/course"+'/'+course_id); 
  // }

  // delete(id:number){
  //   return this.http.delete(this.sapiUrl+"/delete"+'/'+id);
  // }
}

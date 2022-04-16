import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private apiUrl:string='http://localhost:8089/c';
  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get(this.apiUrl+"/course");
  }



  add(body:any){
    return this.http.post(this.apiUrl+"/c1",body);
  }



  update(body:any){
    return this.http.put(this.apiUrl+"/edit",body);

  }



  getById(course_id:number){
    return this.http.get(this.apiUrl+"/course"+'/'+course_id); 
  }

  delete(id:number){
    return this.http.delete(this.apiUrl+"/delete"+'/'+id);
  }
}
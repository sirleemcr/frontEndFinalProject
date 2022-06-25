import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private apiUrl:string='http://localhost:8090/su'

  constructor(private http:HttpClient) { }


  getAll(){
    return this.http.get(this.apiUrl+"/subject");
  }

  getbyustaadh(){
    return this.http.get(this.apiUrl+"/subject/ustaadh");
  }

  add(body:any){
    return this.http.post(this.apiUrl+"/s1",body);
  }
  update(body:any){
    return this.http.put(this.apiUrl+"/edit",body)
  }
  getById(id:number){
    return this.http.get(this.apiUrl+'/subject'+'/'+id)
  }

  delete(id:number){
    return this.http.delete(this.apiUrl+'/delete'+'/'+id)
  }
}

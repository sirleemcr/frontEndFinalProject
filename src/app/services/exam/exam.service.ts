import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private ExamApi:string="http://localhost:8090/i"

  constructor(private http:HttpClient) { }


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
    this.http.get(this.ExamApi+"/imtihaan"+"/"+id)
  }
  delete(id:number){
    this.http.delete(this.ExamApi+"delete"+"/"+id)
  }

  getBySubject(swaful_id:number){
    this.http.get(this.ExamApi+"/tilmy"+"/"+swaful_id)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FitrahService {
  private ApiFit:string='http://localhost:8090/f';

  constructor(private http:HttpClient) { }

  getAll(){
   return this.http.get(this.ApiFit+"/fitrah")
  }
  add(body:any){
    return this.http.post(this.ApiFit+"/f1",body)
  }

  update(body:any){
    return this.http.put(this.ApiFit +"/edit",body)
  }
  getById(fitrah_id:number){
    return this.http.get(this.ApiFit+"/fitrah"+'/'+fitrah_id)
  }
  delete(fitrah_id:number){
    return this.http.delete(this.ApiFit+'/delete'+"/"+fitrah_id)
  }
}

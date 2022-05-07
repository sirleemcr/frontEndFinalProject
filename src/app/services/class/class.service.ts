import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private apiUrl:string='http://localhost:8089/s';
  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get(this.apiUrl+"/swaful");
  }



  add(body:any){
    return this.http.post(this.apiUrl+"/s1",body);
  }



  update(body:any){
    return this.http.put(this.apiUrl+"/edit",body);

  }



  getById(swaful_id:number){
    return this.http.get(this.apiUrl+"/swaful"+'/'+swaful_id); 
    
  }

  delete(id:number){
    return this.http.delete(this.apiUrl+"/delete"+'/'+id);
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UstadhService {
  private apiUrl:string='http://localhost:8089/u';

  constructor(private http:HttpClient) { }
    
  getAll(){
    return this.http.get(this.apiUrl+"/ustaadh");
  }

  add(body:any){
    return this.http.post(this.apiUrl+"/u1",body);
  }



  update(body:any){
    return this.http.put(this.apiUrl+"/edit",body);

  }



  getById(ustaadh_id:number){
    return this.http.get(this.apiUrl+"/ustaadh"+'/'+ustaadh_id); 
  }

  delete(id:number){
    return this.http.delete(this.apiUrl+"/delete"+'/'+id);
  }
}

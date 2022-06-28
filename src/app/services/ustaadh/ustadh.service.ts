import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UstadhService {
  private apiUrl:string='http://localhost:8090/u';

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



  getById(id:number){
    return this.http.get(this.apiUrl+"/ustaadh"+'/'+id); 
  }

  delete(id:number){
    return this.http.delete(this.apiUrl+"/delete"+'/'+id);
  }

  log(email:String,password:String){
    return this.http.get(this.apiUrl+"/email/"+email+"/password/"+password);
  }

  getSetting(){
    return this.http.get("http://localhost:8090/u/setting")
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
private  rolesApi:string='http://localhost:8090/r'
  constructor(private http:HttpClient) { }


  getrole(){
    return this.http.get(this.rolesApi+"/r2")
  }

  Addrole(body:any){
    return this.http.post(this.rolesApi+"/r1",body)
  }
}

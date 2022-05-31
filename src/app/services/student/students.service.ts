import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private sapiUrl:string ='http://localhost:8090/t'


  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get(this.sapiUrl+"/tilmiydh");
  }



  add(body:any){
   return this.http.post(this.sapiUrl+"/t1",body);
   }

   getbyclass(swaful_id:any,subject_id:any){
    return this.http.get(this.sapiUrl+"/tilmy/"+"swaful/"+swaful_id+"/subject/"+subject_id);
  
  }

  getbyswaful(swaful_id:any){
    return this.http.get(this.sapiUrl+"/tilmy/"+"swaful/"+swaful_id);
  }

  update(body:any){
    return this.http.put(this.sapiUrl+"/edit",body);

  }



  getById(tilmydh_id:number){
    return this.http.get(this.sapiUrl+"/tilmiydh"+'/'+tilmydh_id); 
   }

  delete(id:number){
   return this.http.delete(this.sapiUrl+"/delete"+'/'+id);
  }
}

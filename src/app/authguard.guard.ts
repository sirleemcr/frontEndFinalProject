import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  ustaadh=JSON.parse(sessionStorage.getItem('ustaadh')!)
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.ustaadh){
        console.log(this.ustaadh)
        return true;
      }
      else{
        console.log(this.ustaadh)
        this.router.navigateByUrl('login')
        return false
      }
    
  }
  
}

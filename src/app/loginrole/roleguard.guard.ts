import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleguardGuard implements CanActivate {
  ustaadh =JSON.parse(sessionStorage.getItem('ustaadh')!)
  nowRoles:any
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.isAuhorize(route);
    
  }
  private isAuhorize(route:ActivatedRouteSnapshot):boolean {
    const expectedRoles= route.data['expectedRoles'];
    this.ustaadh.roles.forEach((element:any) => {
        this.nowRoles=element.roleName
    });
    if(this.nowRoles==expectedRoles){
        console.log(this.nowRoles);
        return true;
    }
    else{
        this.router.navigateByUrl('main')
        console.log(this.nowRoles)
        return false
    }
  }

  
}

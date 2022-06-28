import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UstadhService } from 'src/app/services/ustaadh/ustadh.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    
    rolesList:any

  constructor(private breakpointObserver: BreakpointObserver,private router:Router) {
    const ustaadh =JSON.parse(sessionStorage.getItem('ustaadh')!)
    this.rolesList=ustaadh.rolesList
    console.log("role is =>",ustaadh.rolesList)

  }

  OnLogOut(){
    sessionStorage.clear()
    this.router.navigateByUrl("/login")
  }

}

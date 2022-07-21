import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate():boolean {
    if (localStorage.getItem('username') !=null)
      return true;
    else{
      alert("you're not valid user");
      this.router.navigate(['account']);
      return false
    }
  }
}

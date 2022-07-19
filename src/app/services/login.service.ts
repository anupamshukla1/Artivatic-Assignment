import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { truncate } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router) { }
  checkUser(form):boolean{
    if(form.get('email').value=='anupamshukla@gmail.com' && form.get('password').value=='anupam123')
    {
      localStorage.setItem("username","anupamshukla@gmail.com")
      return true
    }
    else
      return false  
  }
  logOutUser(){
    localStorage.clear()
    this.router.navigate(['account'])
  }

}

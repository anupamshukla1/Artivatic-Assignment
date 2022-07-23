import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

 interface User{
  username:string,
  password:string
};
@Injectable({
  providedIn: 'root'
})

export class LoginService implements User{
  flag: any;
   
  constructor(private router:Router ,private httpClient:HttpClient) { }
  username: string;
  password: string;
  
  checkUser(form):boolean{
    console.log("service =>"+form.get('email').value+ ","+form.get('password').value);
    this.httpClient.get(`${environment.baseUrl}/login`).subscribe((data:User)=>{
      console.log("observable :",data[0]);
        const {username,password} = data[0]
        if(username == form.get('email').value && password == form.get('password').value) {
          localStorage.setItem('username',username);
          localStorage.setItem('password',password);
          this.flag = true;;
        }
    });
    return this.flag;
  }
  logOutUser(){
    localStorage.clear()
    this.router.navigate(['account'])
  }
}
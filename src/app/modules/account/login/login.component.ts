import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

interface User{
  username:string,
  password:string
};
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})


export class LoginComponent implements OnInit {
  loginReactiveForm: FormGroup;
  result: Promise<any>;
  constructor(private loginservice: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.loginReactiveForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(25),
      ]),
    });
   
    if (localStorage.getItem('username') != null) {
      this.router.navigate(['../account/dashboard']);
    }
  }
  onSubmit() {
    console.log(this.loginReactiveForm);
      this.loginservice.checkUser(this.loginReactiveForm).subscribe((data: User) => {
      console.log("observable :", data[0]);
       const { username, password } :User= data[0];
      if (username == this.loginReactiveForm.get('email').value && password == this.loginReactiveForm.get('password').value) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        this.router.navigate(['../account/dashboard']);
      }else{
        alert('user name and password are incorrect!!');
      }
    });
  
  }
}
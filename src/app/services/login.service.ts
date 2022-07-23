import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private router: Router, private httpClient: HttpClient) {}

  checkUser(form) {
    console.log(
      'service =>' + form.get('email').value + ',' + form.get('password').value
    );
    return this.httpClient.get(`${environment.baseUrl}/login`);
  }
  logOutUser() {
    localStorage.clear();
    this.router.navigate(['account']);
  }
}
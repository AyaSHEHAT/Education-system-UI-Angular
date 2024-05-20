import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  isLogged: boolean = false;
  baseUrl: string = 'https://localhost:7020/api/account';
  user: { username: string; isAdmin: boolean } = {
    username: '',
    isAdmin: false,
  };
  constructor(public http: HttpClient) {
    let token = localStorage.getItem('token');
    if (token) {
      this.user = jwtDecode(token);
      this.isLogged = true;
    }
  }
  login(username: string, pass: string) {
    let queryString = `?username=${username}&password=${pass}`;
    this.http
      .get(this.baseUrl + queryString, { responseType: 'text' })
      .subscribe({
        next: (res) => {
          localStorage.setItem('token', res);
          this.user = jwtDecode(res);
          this.isLogged = true;
        },
        error: (err) => {
          console.log(err);
        },
      });
   // this.isLogged = true;
  }
}

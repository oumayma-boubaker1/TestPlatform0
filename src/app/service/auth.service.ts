import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private url = environment.URL;

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }

  register(newUser) {
    return this.http.post(this.url + '/apis/register', newUser, { headers: this.headers });
  }


  authenticate(user) {
    return this.http.post(this.url + '/apis/authenticate', user, { headers: this.headers });
  }
  createQuiz(quiz) {
    return this.http.post(this.url + '/apis/createQuiz', quiz, { headers: this.headers });
  }

  getQuiz() {
    return this.http.get(this.url + '/apis/getQuiz', { headers: this.headers });
  }

  loggedIn() {
    const token: string = sessionStorage.getItem('id_token');
    // const loggedIn = JSON.parse(sessionStorage.getItem('loggedIn'));
    return token != null && !this.jwtHelper.isTokenExpired(token);
  }
}

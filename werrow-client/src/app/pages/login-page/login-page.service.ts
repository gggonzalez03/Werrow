import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Http } from "@angular/http";

@Injectable()
export class LoginPageService {

  constructor(
    private http: Http
  ) { }

  // Check if a user has an account
  loginUser(user: User) {
    return this.http.post('/api/user/login', user)
    .map(data => data.json()).toPromise();
  }
  
}

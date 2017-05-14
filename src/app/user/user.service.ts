import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  // Creates a new user to the database
  createUser(user: User) {
    return this.http.post('/signup', user)
    .map(data => data.json()).toPromise();
  }
  // Check if a user has an account
  loginUser(user: User) {
    return this.http.get('/login', user)
    .map(data => data.json()).toPromise();
  }
  // Gets a user from the database
  getUser(user: User) {
    return this.http.get('/user', user)
    .map(data => data.json()).toPromise();
  }

}

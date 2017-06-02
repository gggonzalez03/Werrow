import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router }  from '@angular/router';
import { User } from './user';
import { Address } from './address';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  users: Array<User> = [];

  constructor(
    private http: Http,
    private router: Router
  ) { }

  // Creates a new user to the database
  createUser(user: User) {
    // Add user
    this.users.push(user);
    // Login the user once created
    this.loginUser(user);

    return this.http.post('/api/user/create', user)
    .map(data => data.json()).toPromise();
  }

  // Check if a user has an account
  loginUser(user: User) {
    return this.http.post('/api/user/login', user)
    .map(data => data.json()).toPromise();
  }

  // Logs user out
  logoutUser() {
    return this.http.get('/api/user/logout')
    .map(data => data.json()).toPromise();
  }

  // Gets a user from the database
  getUser(user: User) {

    // TODO: uncomment this when connected to the database
    //return this.http.get('/user', user)
    //.map(data => data.json()).toPromise();
  }

}

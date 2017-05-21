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

    // TODO: uncomment this when connected to the database
    //return this.http.post('/signup', user)
    //.map(data => data.json()).toPromise();
  }

  // Check if a user has an account
  loginUser(user: User) {
    // Check if the user exists
     var userExists = this.users.filter(function(users) {
       return users.email == user.email && users.password == user.password;
     });

     // Set loggedInUser if the user exists
     // and redirect to the homepage
     if(userExists[0]) {
       sessionStorage.setItem("currentUserId", String(user._id));
       this.router.navigate(['/home']);
     }
    // TODO: uncomment this when connected to the database
    //return this.http.get('/login', user)
    //.map(data => data.json()).toPromise();
  }

  // Logs user out
  logoutUser() {
    sessionStorage.removeItem("currentUserId");
    this.router.navigate(['/login']);
  }

  // Gets a user from the database
  getUser(user: User) {

    // TODO: uncomment this when connected to the database
    //return this.http.get('/user', user)
    //.map(data => data.json()).toPromise();
  }

}

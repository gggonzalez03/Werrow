import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router }  from '@angular/router';
import { User } from './user';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(
    private http: Http,
    private router: Router) { }

  users: Array<User> = [];

  private loggedInUser = new User();

  // Get the logged in user
  getLoggedInUser() {
    return this.loggedInUser;
  }

  // Creates a new user to the database
  createUser(user: User) {
    // Add user
    this.users.push(user);
    // TODO: If the user has successfully been added,
    // login the user and redirect to the homepage
    this.loginUser(user);
    return this.users;

    // TODO: uncomment this when connected to the database
    //return this.http.post('/signup', user)
    //.map(data => data.json()).toPromise();
  }
  // Check if a user has an account
  loginUser(user: User) {
    // Check if the user exists in the array
     var userExists = this.users.filter(function(users) {
       return users.email == user.email;
     });

     if(userExists[0]) {
       this.loggedInUser = userExists[0];
       console.log(userExists[0]);
       this.router.navigate(['/home']);
     }
    // TODO: uncomment this when connected to the database
    //return this.http.get('/login', user)
    //.map(data => data.json()).toPromise();
  }
  // Gets a user from the database
  getUser(user: User) {

    // TODO: uncomment this when connected to the database
    //return this.http.get('/user', user)
    //.map(data => data.json()).toPromise();
  }

}

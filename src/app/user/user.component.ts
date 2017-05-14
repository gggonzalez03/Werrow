import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userLoggedIn = false;
  signUp = true;
  users: Array<User> = [];

  // Store the user who is logged in
  loggedInUser = new User();

  constructor() { }

  ngOnInit() {
  }

  createUser(user: User) {
    // TODO: call createUser function from UserService
    // UserService's .then callback
    this.users.push(user);

    // Login the user after account creation
    this.loginUser(user);
    console.log(this.users);
  }

  loginUser(user: User) {
    // TODO: call loginUser function from UserService

    // Check if the user exists in the array
     var userExists = this.users.filter(function(users) {
       return users.email == user.email;
     });

     if(userExists[0]) {
       this.userLoggedIn = true;
       this.loggedInUser = userExists[0];
       console.log(userExists[0]);
     }
  }
}

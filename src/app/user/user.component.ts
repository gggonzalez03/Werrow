import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user_created = false;
  user = new User();
  constructor() { }

  ngOnInit() {
  }

  createUser(user: User) {
    // TODO: call createUser function from UserService
    console.log(user);
    // UserService's .then callback
    this.user_created = true;
    this.getUser(user);
  }

  getUser(user: User) {
    // TODO: call getUser function from UserService
    this.user = user;
  }
}

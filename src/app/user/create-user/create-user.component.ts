import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  newUser = new User();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  createUser() {
    this.userService.createUser(this.newUser);
    console.log(this.userService.users);
    this.newUser = new User();
    // TODO: uncomment this when connected to the database
    //this.userService.createUser(user);
    //.then(status => console.log(status))
    //.catch(err => console.log(err));

    // Login the user after account creation
    //this.loginUser(user);
  }
}

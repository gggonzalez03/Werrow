import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
        name: new FormControl(),
        email: new FormControl(),
        password: new FormControl()
    });
  }

  // Creates user by asking UserService to add
  // user to the database
  createUser() {
    var newUser = new User();

    newUser.name = this.signUpForm.value.name;
    newUser.email = this.signUpForm.value.email;
    newUser.password = this.signUpForm.value.password;

    this.userService.createUser(newUser);
    // TODO: uncomment this when connected to the database
    //this.userService.createUser(user);
    //.then(status => console.log(status))
    //.catch(err => console.log(err));

    // Login the user after account creation
    //this.loginUser(user);
  }
}

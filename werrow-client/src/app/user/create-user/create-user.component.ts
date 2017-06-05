import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../user.service'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

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

    // TODO: uncomment this when connected to the database
    this.userService.createUser(newUser)
    .then(status => {
      console.log(status);
      this.router.navigate(['/home']);
    })
    .catch(err => console.log(err));

    // Login the user after account creation
    // this.loginUser(user);
  }
}

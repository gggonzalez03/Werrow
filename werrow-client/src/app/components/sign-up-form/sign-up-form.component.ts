import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  @Output() createUserEvent = new EventEmitter();

  signUpForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  // Creates user by asking UserService to add
  // user to the database
  createUser() {
    if (!this.signUpForm.invalid) {
      var newUser = new User();

      newUser.name = this.signUpForm.value.name;
      newUser.email = this.signUpForm.value.email;
      newUser.password = this.signUpForm.value.password;


      this.userService.createUser(newUser)
        .then(status => {
          console.log(status);
          this.router.navigate(['/home']);
        })
        .catch(err => console.log(err));
    }
  }
}

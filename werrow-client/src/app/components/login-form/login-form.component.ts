import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginFormService } from './login-form.service';
import { Router }  from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  logInForm: FormGroup;
  invalidCreds: Boolean = false;

  constructor(
    private loginFormService: LoginFormService,
    private router: Router
  ) { }

  ngOnInit() {
    this.logInForm = new FormGroup({
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    });
  }

  // Logs in the user by asking UserService
  loginUser() {
    var userLogin = new User();

    userLogin.email = this.logInForm.value.email;
    userLogin.password = this.logInForm.value.password;

    this.loginFormService.loginUser(userLogin)
    .then(status => {
      if (status.user) {
        this.router.navigate(['/home']);
      }
      else {
        this.invalidCreds = true;
      }
    })
    .catch(err => console.log(err));
  }
}

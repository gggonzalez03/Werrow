import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router }  from '@angular/router';
import { LoginPageService } from './login-page.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  invalidCreds: Boolean = false;

  constructor(
    private loginPageService: LoginPageService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  // Logs in the user by asking UserService
  loginUser(logInForm: FormGroup) {
    var userLogin = new User();

    userLogin.email = logInForm.value.email;
    userLogin.password = logInForm.value.password;

    this.loginPageService.loginUser(userLogin)
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

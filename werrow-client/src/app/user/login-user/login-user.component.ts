import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router }  from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  logInForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.logInForm = new FormGroup({
        email: new FormControl(),
        password: new FormControl()
    });
  }

  // Logs in the user by asking UserService
  loginUser() {
    var userLogin = new User();

    userLogin.email = this.logInForm.value.email;
    userLogin.password = this.logInForm.value.password;

    this.userService.loginUser(userLogin)
    .then(status => {
      if (status.user) {
        this.router.navigate(['/home']);
      }
    })
    .catch(err => console.log(err));
  }

}

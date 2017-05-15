import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  userLogin = new User();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  loginUser() {
    this.userService.loginUser(this.userLogin);
    this.userLogin = new User();
  }

}

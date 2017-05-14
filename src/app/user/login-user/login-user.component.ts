import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  userLogin = new User();

  @Output()
  loginUserEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  loginUser() {
    this.loginUserEvent.emit(this.userLogin);
    this.userLogin = new User();
  }

}

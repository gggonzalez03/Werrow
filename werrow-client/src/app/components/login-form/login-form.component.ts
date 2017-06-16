import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router }  from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output() loginUserEvent = new EventEmitter();
  @Input() invalidCreds: Boolean = false;

  logInForm: FormGroup;

  constructor(
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
    this.loginUserEvent.emit(this.logInForm);
  }
}

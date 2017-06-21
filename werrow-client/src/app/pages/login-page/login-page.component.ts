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

  constructor(
    private loginPageService: LoginPageService,
    private router: Router
  ) { }

  ngOnInit() {
  }
}
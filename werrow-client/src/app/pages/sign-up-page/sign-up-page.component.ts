import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { SignUpService } from './sign-up-page.service';
import { User } from '../../models/user';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private signUpService: SignUpService,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { SignUpService } from './sign-up.service';
import { User } from '../../models/user';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private signUpService: SignUpService,
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  createUser(signUpForm: FormGroup) {
    if (!signUpForm.invalid) {
      var newUser = new User();

      newUser.name = signUpForm.value.name;
      newUser.email = signUpForm.value.email;
      newUser.password = signUpForm.value.password;


      this.signUpService.createUser(newUser)
        .then(status => {
          console.log(status);
          this.router.navigate(['/home']);
        })
        .catch(err => console.log(err));
    }
  }

}

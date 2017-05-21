import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.css']
})
export class UserControlComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  isUserLoggedIn() {
    if(this.userService.isUserValidLogin()) {
      return true;
    }
    else {
      return false;
    }
  }

}

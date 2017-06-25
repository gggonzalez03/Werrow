import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userActive: boolean = false;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.isUserLoggedIn();
  }

  // Check if user is active and set userActive true or false
  isUserLoggedIn() {
    this.userService.isUserValidLogin()
    .then((result) => {
      this.userActive = result.active;
    })
    .catch(err => {
      console.log(err);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userActive: boolean = false;

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit() {
    this.isUserLoggedIn();
  }

  // Check if user is active and set userActive true or false
  isUserLoggedIn() {
    this.headerService.isUserValidLogin()
    .then(() => {
      this.setActive();
    })
    .catch(err => {
      console.log(err);
    });
  }

  setActive() {
    this.headerService.isUserValidLogin()
    .then(result => {
      this.userActive = result.active;
    })
    .catch(err => {
      console.log(err);
    });
  }




}

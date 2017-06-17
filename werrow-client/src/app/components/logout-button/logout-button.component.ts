import { Component, OnInit } from '@angular/core';
import { LogoutButtonService } from './logout-button.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent implements OnInit {

  constructor(
    private logoutButtonService: LogoutButtonService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logoutUser() {
    this.logoutButtonService.logoutUser()
    .then(status => {
      console.log(status);
      this.router.navigate(['/login'])
    })
    .catch(err => console.log(err));
  }

}

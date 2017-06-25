import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logoutUser() {
    this.userService.logoutUser()
    .then(status => {
      console.log(status);
      this.router.navigate(['/login'])
    })
    .catch(err => console.log(err));
  }

}

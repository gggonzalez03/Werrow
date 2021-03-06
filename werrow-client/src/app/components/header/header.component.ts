import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from '../../services/user.service';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userActive: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events
    .filter(event => event instanceof NavigationEnd)
    .subscribe(() => {
      this.isUserLoggedIn();
    })
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

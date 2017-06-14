import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-logout-user',
  templateUrl: './logout-user.component.html',
  styleUrls: ['./logout-user.component.css']
})
export class LogoutUserComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.logoutUser();
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

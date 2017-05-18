import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.css']
})
export class UserControlComponent implements OnInit {

  constructor(private userService: UserService) { }

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

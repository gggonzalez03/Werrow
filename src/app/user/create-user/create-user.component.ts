import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  newUser = new User();

  @Output()
  createNewUserEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  createUser() {
    this.createNewUserEvent.emit(this.newUser);
    this.newUser = new User();
  }

}

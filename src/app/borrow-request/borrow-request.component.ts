import { Component, OnInit, Input } from '@angular/core';
import { BorrowRequest } from './borrow-request';
import { User } from '../user/user';
@Component({
  selector: 'app-borrow-request',
  templateUrl: './borrow-request.component.html',
  styleUrls: ['./borrow-request.component.css']
})
export class BorrowRequestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

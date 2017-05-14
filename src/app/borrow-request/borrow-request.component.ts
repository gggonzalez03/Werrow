import { Component, OnInit, Input } from '@angular/core';
import { BorrowRequest } from './borrow-request';
import { User } from '../user/user';
@Component({
  selector: 'app-borrow-request',
  templateUrl: './borrow-request.component.html',
  styleUrls: ['./borrow-request.component.css']
})
export class BorrowRequestComponent implements OnInit {

  @Input() user;
  borrowPosts: Array<BorrowRequest> = [];

  postBorrowMode = false;

  constructor() { }

  ngOnInit() {
  }

  createBorrowPost(borrowRequest: BorrowRequest) {
    borrowRequest.user_id = this.user._id;
    this.borrowPosts.push(borrowRequest);
    console.log(this.borrowPosts);
  }

}

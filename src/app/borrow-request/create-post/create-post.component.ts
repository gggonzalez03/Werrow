import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { BorrowRequest } from '../borrow-request';
import { User } from '../../user/user';
import { BorrowRequestService } from '../borrow-request.service'

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  newUserPost = new BorrowRequest();
  loggedInUser = new User();

  constructor(
    private borrowRequestService: BorrowRequestService,
  ) { }

  ngOnInit() {
    this.loggedInUser = this.borrowRequestService.loggedInUser;
  }

  createBorrowPost() {
    console.log(this.borrowRequestService.createBorrowPost(this.newUserPost, this.loggedInUser));
    this.newUserPost = new BorrowRequest();
  }

}

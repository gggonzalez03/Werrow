import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BorrowRequest } from '../borrow-request';
import { User } from '../../user/user';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  @Input() user;
  @Output() createPostEvent = new EventEmitter();

  newUserPost = new BorrowRequest();

  constructor() { }

  ngOnInit() {
  }

  createBorrowPost(user: User) {
    this.createPostEvent.emit(this.newUserPost);
    this.newUserPost = new BorrowRequest();
  }

}

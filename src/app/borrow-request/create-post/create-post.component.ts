import { Component, OnInit} from '@angular/core';
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

  constructor(
    private borrowRequestService: BorrowRequestService
  ) { }

  ngOnInit() {
  }

  postBorrowMode = false;

  newUserPost = new BorrowRequest();
  loggedInUserId: number;

  createBorrowPost() {
    this.loggedInUserId = Number(sessionStorage.getItem("currentUserId"));
    this.borrowRequestService.createBorrowPost(this.newUserPost, this.loggedInUserId);
    this.postBorrowMode = false;
    this.newUserPost = new BorrowRequest();
  }

}

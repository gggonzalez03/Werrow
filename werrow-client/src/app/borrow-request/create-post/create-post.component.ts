import { Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { BorrowRequest } from '../borrow-request';
import { BorrowRequestService } from '../borrow-request.service'

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  postBorrowMode = false;
  newUserPost = new BorrowRequest();
  loggedInUserId: number;

  constructor(
    private borrowRequestService: BorrowRequestService
  ) { }

  ngOnInit() {
    // TODO: Validate user with tokens
    this.loggedInUserId = Number(this.borrowRequestService.isUserValidLogin());
  }

  // Creates a new post by asking BorrowRequestService to add
  // the post to the database
  createBorrowPost() {
    this.borrowRequestService.createBorrowPost(this.newUserPost, this.loggedInUserId);
    this.postBorrowMode = false;
    this.newUserPost = new BorrowRequest();
  }

}

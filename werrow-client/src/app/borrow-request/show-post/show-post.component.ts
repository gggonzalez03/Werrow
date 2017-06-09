import { Component, OnInit } from '@angular/core';
import { BorrowRequestService } from '../borrow-request.service'
import { BorrowRequest } from '../borrow-request';
import timeago from 'timeago.js';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {

  borrowPosts: Array<BorrowRequest> = [];

  constructor(
    private borrowRequestService: BorrowRequestService
  ) { }

  timeInstance = timeago();

  ngOnInit() {
    this.getAllBorrowPosts();
  }

  // Gets all posts by asking BorrowRequestService to look up
  // the database
  getAllBorrowPosts() {
    this.borrowRequestService.getAllBorrowPosts()
    .then(result => this.borrowPosts = result.data)
    .catch(err => console.log(err))
    /*borrowPosts.forEach(post => {
        post.time_ago = this.timeInstance.format(post.time_stamp);
    });*/
  }

  // Gets the user who owns the post by post id
  getUserByPostId(postId: number) {
    return this.borrowRequestService.getUserByPostId(postId);
  }

}

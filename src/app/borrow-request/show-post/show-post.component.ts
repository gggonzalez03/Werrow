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

  constructor(private borrowRequestService: BorrowRequestService) { }

  timeInstance = timeago();
  borrowPosts: Array<BorrowRequest> = [];

  ngOnInit() {
  }

  // Gets all posts by asking BorrowRequestService to look up
  // the database
  showAllBorrowPosts() {

    this.borrowPosts = this.borrowRequestService.getAllBorrowPosts();
    this.borrowPosts.forEach(post => {
        post.time_ago = this.timeInstance.format(post.time_stamp);
    });

    return this.borrowPosts.sort((a, b) => {
      return b.time_stamp-a.time_stamp;
    });
  }

  // Gets the user who owns the post by post id
  getUserByPostId(postId: number) {
    return this.borrowRequestService.getUserByPostId(postId);
  }

}

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

  constructor(
    private borrowRequestService: BorrowRequestService
  ) { }

  timeInstance = timeago();

  ngOnInit() {
  }

  // Gets all posts by asking BorrowRequestService to look up
  // the database
  showAllBorrowPosts() {
    var borrowPosts = this.borrowRequestService.getAllBorrowPosts();
    borrowPosts.forEach(post => {
        post.time_ago = this.timeInstance.format(post.time_stamp);
    });

    return borrowPosts.sort((a, b) => {
      return b.time_stamp-a.time_stamp;
    });
  }

  // Gets the user who owns the post by post id
  getUserByPostId(postId: number) {
    return this.borrowRequestService.getUserByPostId(postId);
  }

  mapHideAllShowOne(postId: number) {
    var mapShowPost: BorrowRequest;
    var borrowPosts = this.borrowRequestService.getAllBorrowPosts();
    borrowPosts.forEach((post) => {
      if (post._id != postId) {
        post.map_hidden = true;
      }
      else {
        mapShowPost = post;
      }
    });

    mapShowPost.map_hidden = !mapShowPost.map_hidden;
  }

}

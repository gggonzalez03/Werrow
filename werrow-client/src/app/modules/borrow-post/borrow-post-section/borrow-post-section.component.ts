import { Component, OnInit } from '@angular/core';
import { BorrowRequestService } from '../../../services/borrow-request.service';
import { CommentService } from '../../../services/comment.service';
import { BorrowRequest } from '../../../models/borrow-request';
import { Comment } from '../../../models/comment';
import timeago from 'timeago.js';

@Component({
    selector: 'app-borrow-post-section',
    templateUrl: 'borrow-post-section.component.html',
    styleUrls: ['borrow-post-section.component.css']
})
export class BorrowPostSectionComponent implements OnInit {

  borrowPosts: Array<BorrowRequest> = [];
  comments: Array<Comment> = [];
  showCommentsOf: BorrowRequest;

  constructor(
    private borrowRequestService: BorrowRequestService,
    private commentService: CommentService
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

  addComment(comment: Comment) {
    this.commentService.addComment(comment)
    .then(result => {
      console.log(result);
      this.comments.push(result.comment);
    })
    .catch(err => console.log(err));
  }

  showComments(showCommentsOf: BorrowRequest) {
    this.commentService.getPostComments(showCommentsOf._id)
    .then(result => {
      this.comments = result.data;
    })
    .catch(err => console.log(err));

    if (this.showCommentsOf != showCommentsOf) {
      this.showCommentsOf = showCommentsOf;
    }
    else {
      this.showCommentsOf = undefined;
    }
  }

  createBorrowPost(borrowPost: BorrowRequest) {
    this.borrowPosts.unshift(borrowPost);
  }

}

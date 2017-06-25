import { Component, OnInit } from '@angular/core';
import { FeedPageService } from './feed-page.service'
import { BorrowRequest } from '../../models/borrow-request';
import { Comment } from '../../models/comment';
import timeago from 'timeago.js';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.css']
})
export class FeedPageComponent implements OnInit {

  borrowPosts: Array<BorrowRequest> = [];
  comments: Array<Comment> = [];
  showCommentsOf: BorrowRequest;

  constructor(
    private feedPageService: FeedPageService
  ) { }

  timeInstance = timeago();

  ngOnInit() {
    this.getAllBorrowPosts();
  }

  // Gets all posts by asking BorrowRequestService to look up
  // the database
  getAllBorrowPosts() {
    this.feedPageService.getAllBorrowPosts()
    .then(result => this.borrowPosts = result.data)
    .catch(err => console.log(err))
    /*borrowPosts.forEach(post => {
        post.time_ago = this.timeInstance.format(post.time_stamp);
    });*/
  }

  addComment(comment: Comment) {
    this.feedPageService.addComment(comment)
    .then(result => {
      console.log(result);
      this.comments.push(result.comment);
    })
    .catch(err => console.log(err));
  }

  showComments(showCommentsOf: BorrowRequest) {
    this.feedPageService.getPostComments(showCommentsOf._id)
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

}

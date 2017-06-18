import { Component, OnInit } from '@angular/core';
import { FeedPageService } from './feed-page.service'
import { BorrowRequest } from '../../models/borrow-request';
import timeago from 'timeago.js';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.css']
})
export class FeedPageComponent implements OnInit {

  borrowPosts: Array<BorrowRequest> = [];

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

}

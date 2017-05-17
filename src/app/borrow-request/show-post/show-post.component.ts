import { Component, OnInit } from '@angular/core';
import { BorrowRequestService } from '../borrow-request.service'
import { BorrowRequest } from '../borrow-request';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {

  constructor(private borrowRequestService: BorrowRequestService) { }
  
  borrowPosts: Array<BorrowRequest> = [];

  ngOnInit() {
    this.showAllBorrowPosts();
  }

  // Gets all posts by asking BorrowRequestService to look up
  // the database
  showAllBorrowPosts() {
    this.borrowPosts = this.borrowRequestService.getAllBorrowPosts();
  }

}

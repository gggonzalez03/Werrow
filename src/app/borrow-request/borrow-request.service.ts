import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../user/user';
import { BorrowRequest } from './borrow-request'

@Injectable()
export class BorrowRequestService {
  constructor(
    private http: Http
  ) { }

  borrowPosts: Array<BorrowRequest> = [];

  // Creates a new user to the database
  createBorrowPost(borrowPost: BorrowRequest, userId: number) {
    borrowPost.user_id = userId;
    this.borrowPosts.push(borrowPost);
    //return this.http.post('/post', user, borrowRequest)
    //.map(data => data.json()).toPromise();
  }

  // Gets all the posts
  getAllBorrowPosts() {
    return this.borrowPosts;
  }
  // Gets a user from the database
  getUser(borrowPost: BorrowRequest) {
    return this.http.get('/post/:id', borrowPost)
    .map(data => data.json()).toPromise();
  }
}

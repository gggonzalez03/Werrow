import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BorrowRequest } from './borrow-request'

@Injectable()
export class BorrowRequestService {
  constructor(
    private http: Http
  ) { }

  borrowPosts: Array<BorrowRequest> = [];

  // Creates a new user to the database
  createBorrowPost(borrowPost: BorrowRequest) {
    return this.http.post('/api/borrow/create', borrowPost)
    .map(data => data.json()).toPromise();
  }

  // Functions below this will be connected to the API
  // which is connected to the database

  // Gets all the posts
  getAllBorrowPosts() {
    return this.http.get('/api/borrow/borrows')
    .map(data => data.json()).toPromise();
  }
}

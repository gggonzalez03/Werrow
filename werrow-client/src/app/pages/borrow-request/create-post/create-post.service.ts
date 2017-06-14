import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BorrowRequest } from '../borrow-request'

@Injectable()
export class CreatePostService {

  constructor(
    private http: Http
  ) { }

    // Creates a new user to the database
  createBorrowPost(borrowPost: BorrowRequest) {
    return this.http.post('/api/borrow/create', borrowPost)
    .map(data => data.json()).toPromise();
  }
}
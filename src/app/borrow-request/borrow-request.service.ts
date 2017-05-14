import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../user/user';
import { BorrowRequest } from './borrow-request'

@Injectable()
export class BorrowRequestService {

  constructor(private http: Http) { }

  // Creates a new user to the database
  createBorrowPost(borrowRequest: BorrowRequest, user: User) {
    return this.http.post('/post', user, borrowRequest)
    .map(data => data.json()).toPromise();
  }
  // Gets a user from the database
  getUser(borrowRequest: BorrowRequest) {
    return this.http.get('/post/:id', borrowRequest)
    .map(data => data.json()).toPromise();
  }
}

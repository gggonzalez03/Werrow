import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../user/user';
import { BorrowRequest } from './borrow-request'
import { UserService } from '../user/user.service'

@Injectable()
export class BorrowRequestService {
  constructor(
    private http: Http,
    private userService: UserService
  ) { }

  loggedInUser = this.userService.getLoggedInUser();

  // Creates a new user to the database
  createBorrowPost(borrowRequest: BorrowRequest, user: User) {
    borrowRequest.user_id = user._id;
    return borrowRequest;
    //return this.http.post('/post', user, borrowRequest)
    //.map(data => data.json()).toPromise();
  }
  // Gets a user from the database
  getUser(borrowRequest: BorrowRequest) {
    return this.http.get('/post/:id', borrowRequest)
    .map(data => data.json()).toPromise();
  }
}

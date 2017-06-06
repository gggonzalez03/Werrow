import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../user/user';
import { Address } from '../user/address';
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

  // Gets the user who owns a certain post
  getUserByPostId(postId: number) {
    return new User(1, "name", "email", "password", "pic", new Address(
      0, "2415 Rinconada Dr.", "San+Jose", "California", "95125", 0
    ));
  }

  // Validate the logged in user
  isUserValidLogin() {
    // Use API validation for session tokens
    if(sessionStorage.getItem("currentUserId")) {
      return sessionStorage.getItem("currentUserId");
    }
    else {
      return null;
    }
  }
}

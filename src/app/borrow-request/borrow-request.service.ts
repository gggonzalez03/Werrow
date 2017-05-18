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

  // Functions below this will be connected to the API
  // which is connected to the database

  // Gets all the posts
  getAllBorrowPosts() {
    return this.borrowPosts;
  }

  // Gets the user who owns a certain post
  getUserByPostId(postId: number) {
    return new User(1, "first", "last", "email", "pic");
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

  // Gets a user from the database
  getUser(borrowPost: BorrowRequest) {
    return this.http.get('/post/:id', borrowPost)
    .map(data => data.json()).toPromise();
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserProfilePageService {

  constructor(
    private http: Http
  ) { }

  // Gets all the posts of a certain user
  getCurrentUserPosts() {
    return this.http.get('/api/borrow/borrows/user')
    .map(data => data.json()).toPromise();
  }

  getCurrentUser() {
    return this.http.get('/api/user/currentuser')
    .map(data => data.json()).toPromise();
  }

}

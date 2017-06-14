import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserProfileService {

  constructor(
    private http: Http
  ) { }

  // Gets all the posts of a certain user
  getCurrentUserPosts() {
    return this.http.get('/api/borrow/borrows/user')
    .map(data => data.json()).toPromise();
  }

}
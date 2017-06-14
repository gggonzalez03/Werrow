import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ShowPostService {

  constructor(
    private http: Http
  ) { }

    // Gets all the posts
  getAllBorrowPosts() {
    return this.http.get('/api/borrow/borrows')
    .map(data => data.json()).toPromise();
  }
}

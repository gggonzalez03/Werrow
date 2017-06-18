import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BorrowRequest } from '../../models/borrow-request'

@Injectable()
export class CreatePostFormService {

  constructor(
    private http: Http
  ) { }

    // Creates a new user to the database
  createBorrowPost(borrowPost: BorrowRequest) {
    return this.http.post('/api/borrow/create', borrowPost)
    .map(data => data.json()).toPromise();
  }
}
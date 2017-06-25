import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BorrowRequest } from '../models/borrow-request';

@Injectable()
export class BorrowRequestService {
    constructor(private http: Http) { }
    
    // Creates a new user to the database
    createBorrowPost(borrowPost: BorrowRequest) {
        return this.http.post('/api/borrow/create', borrowPost)
        .map(data => data.json()).toPromise();
    }

    // Gets all the posts
    getAllBorrowPosts() {
        return this.http.get('/api/borrow/borrows')
        .map(data => data.json()).toPromise();
    }

    // Gets all the posts of the current user
    getCurrentUserPosts() {
        return this.http.get('/api/borrow/borrows/user')
        .map(data => data.json()).toPromise();
    }
}
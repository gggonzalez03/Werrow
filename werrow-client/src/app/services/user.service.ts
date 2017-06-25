import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
    constructor(private http: Http) { }
    
    // Creates a new user to the database
    createUser(user: User) {
        return this.http.post('/api/user/create', user)
        .map(data => data.json()).toPromise();
    }
    
    // Check if a user has an account
    loginUser(user: User) {
        return this.http.post('/api/user/login', user)
        .map(data => data.json()).toPromise();
    }

    // Validate the logged in user
    isUserValidLogin() {
        return this.http.get('/api/user/active')
        .map(data => data.json()).toPromise();
    }

    // Logs user out
    logoutUser() {
        return this.http.get('/api/user/logout')
        .map(data => data.json()).toPromise();
    }
}
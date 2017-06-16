import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginFormService {
    constructor(private http: Http) { }
    
    // Check if a user has an account
    loginUser(user: User) {
        return this.http.post('/api/user/login', user)
        .map(data => data.json()).toPromise();
    }
}
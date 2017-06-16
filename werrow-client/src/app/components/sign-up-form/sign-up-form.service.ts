import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SignUpFormService {
    constructor(private http: Http) { }

    // Creates a new user to the database
    createUser(user: User) {
        return this.http.post('/api/user/create', user)
        .map(data => data.json()).toPromise();
    }
    
}
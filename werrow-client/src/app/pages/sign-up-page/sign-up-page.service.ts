import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router }  from '@angular/router';
import { User } from '../../models/user';
import { Address } from '../../models/address';

@Injectable()
export class SignUpService {

  constructor(
    private http: Http
  ) { }

  // Creates a new user to the database
  createUser(user: User) {
    return this.http.post('/api/user/create', user)
    .map(data => data.json()).toPromise();
  }
}

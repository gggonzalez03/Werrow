import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HeaderService {

  constructor(
    private http: Http
  ) { }

  // Validate the logged in user
  isUserValidLogin() {
    return this.http.get('/api/user/active')
    .map(data => data.json()).toPromise();
  }
}

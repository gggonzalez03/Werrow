import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class LogoutButtonService {

  constructor(
    private http: Http
  ) { }

  // Logs user out
  logoutUser() {
    return this.http.get('/api/user/logout')
    .map(data => data.json()).toPromise();
  }

}

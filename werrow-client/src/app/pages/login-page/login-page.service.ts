import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Http } from "@angular/http";

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginPageService {

  constructor(
    private http: Http
  ) { } 
}

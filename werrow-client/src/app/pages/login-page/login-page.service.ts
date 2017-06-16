import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Http } from "@angular/http";

@Injectable()
export class LoginPageService {

  constructor(
    private http: Http
  ) { } 
}

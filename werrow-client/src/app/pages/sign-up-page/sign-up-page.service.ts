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
}

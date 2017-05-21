import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { Address } from '../user/address'

@Injectable()
export class GoogleMapService {

  constructor() { }

  private getCurrentUser() {
    // TODO: Connect to the database and retrieve the user
    return new User(
      0, "name", "email", "password", "pic", new Address(
        0, "2415 Rinconada Dr.", "San+Jose", "California", "95125", 0
      ));
  }

  getCurrentUserAddress() {
    return this.getCurrentUser().address;
  }

  getAddressByPostId(postId: number) {
    // TODO: Connect to database and get user of the postId(not current user)
    // and then return the address
    return this.getCurrentUser().address;
  }
}

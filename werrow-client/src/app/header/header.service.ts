import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {

  constructor() { }

  // Validate the logged in user
  isUserValidLogin() {
    // Use API validation for session tokens
    if(sessionStorage.getItem("currentUserId")) {
      return sessionStorage.getItem("currentUserId");
    }
    else {
      return false;
    }
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor() { }

  //creating method for authentication
  authenticate(username: string, password: string) {
    // console.log("before" + this.isUserLoggedIn());

    if (username === 'dgsh' && password === 'dgsh') {
      // console.log("after" + this.isUserLoggedIn());
      sessionStorage.setItem('authenticateUser', username);
      return true;
    }
    else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null)
  }


}

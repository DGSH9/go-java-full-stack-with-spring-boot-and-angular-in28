import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor() { }

  //creating method for authentication
  authenticate(username: string, password: string) {
    if (username === 'dgsh' && password === 'dgsh') {
      return true;
    }
    else {
      return false;
    }
  }


}

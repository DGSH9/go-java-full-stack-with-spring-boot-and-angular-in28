import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {
  constructor(private http: HttpClient) { }
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

  //copied data
  executeBasicAuthenticatedService(username: string, password: string) {
    let basicAuthheaderString = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({ Authorization: basicAuthheaderString });
    return this.http.get<AuthenticationBean>('http://localhost:8080/basicauth', { headers }).pipe(
      map(
        (data: any) => {
          sessionStorage.setItem('authenticateUser', username);
          return data;
        }
      )
    );
    // console.log('helloWorldSErvice');
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticateUser');
  }
}
//authentication class
export class AuthenticationBean {
  constructor(public message: string) { }

}

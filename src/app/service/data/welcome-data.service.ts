import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//model class for api call
export class HelloWordlBean {
  constructor(public message: string) {

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldService() {
    let headersStringValue = this.createBasicAuthenticationHeader();

    let headers = new HttpHeaders({ Authorization: headersStringValue });

    return this.http.get<HelloWordlBean>('http://localhost:8080/hello-bean', { headers });
    // console.log('helloWorldSErvice');
  }

  createBasicAuthenticationHeader() {
    let username = "dgsh";
    let password = "dgsh";

    let basicAuthheaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthheaderString;
  }




  // Access to XMLHttpRequest at 'http://localhost:8080/hello-bean' from origin 'http://localhost:4200' has been blocked by
  //CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.



  //Access to XMLHttpRequest at 'http://localhost:8080/hello-bean' from origin 'http://localhost:4200' has been blocked by
  //CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
}

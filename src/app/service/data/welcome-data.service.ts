import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

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
    return this.http.get<HelloWordlBean>('http://localhost:8080/hello-bean');
    // console.log('helloWorldSErvice');
  }

}

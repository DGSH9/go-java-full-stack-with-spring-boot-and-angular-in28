import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let username = "dgsh";
    let password = "dgsh";

    let basicAuthheaderString = 'Basic ' + window.btoa(username + ':' + password);

    request = request.clone({
      setHeaders: { Authorization: basicAuthheaderString }
    })

    return next.handle(request);
  }



}

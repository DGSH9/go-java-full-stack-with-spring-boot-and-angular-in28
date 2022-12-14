import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'dgsh';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;


  //Router
  //Angular.giveMeRoute
  //Dependecy Injection
  constructor(private router: Router,
    private hardCodedAuthenticationService: HardCodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) {

  }

  ngOnInit(): void {
  }

  //Login function defined
  handleLogin() {
    // console.log(this.username);
    // if (this.username === 'dgsh' && this.password === 'dgsh')
    if (this.hardCodedAuthenticationService.authenticate(this.username, this.password)) {
      //redrect to welcome page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    }
    else {
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin() {
    this.basicAuthenticationService.executeBasicAuthenticatedService(this.username, this.password).subscribe(
      data => {
        console.log(data);
        //redrect to welcome page
        this.router.navigate(['welcome', this.username]);
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    )
  }
}


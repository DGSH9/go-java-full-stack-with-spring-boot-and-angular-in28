import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
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
    private hardCodedAuthenticationService: HardCodedAuthenticationService) {

  }

  ngOnInit(): void {
  }

  //Login function defined
  handleLogin() {
    // console.log(this.username);
    // if (this.username === 'dgsh' && this.password === 'dgsh')
    if (this.hardCodedAuthenticationService.authenticate(this.username, this.password)) {
      //redrect to welcome page
      this.router.navigate(['welcome']);
      this.invalidLogin = false;
    }
    else {
      this.invalidLogin = true;
    }


  }

}

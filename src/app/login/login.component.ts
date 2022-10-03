import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='dgsh';
  password='';
  errorMessage='Invalid Credentials';
  invalidLogin = false;


  //Router
  //Angular.giveMeRoute
  //Dependecy Injection
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  //Login function defined
  handleLogin(){
    // console.log(this.username);
    if(this.username==='dgsh' && this.password==='dgsh'){
      //redrect to welcome page
      this.router.navigate(['welcome']);
      this.invalidLogin=false;
    }
    else{
      this.invalidLogin=true;
    }


  }

}

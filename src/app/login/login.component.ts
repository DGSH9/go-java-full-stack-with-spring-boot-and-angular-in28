import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {
  }

  //Login function defined
  handleLogin(){
    // console.log(this.username);
    if(this.username==='dgsh' && this.password==='dgsh'){
      this.invalidLogin=false;
    }
    else{
      this.invalidLogin=true;
    }


  }

}

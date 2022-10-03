import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  //String
  message:string= 'Hello from DGSH';

  //deafult constructor
  constructor() { }

  ngOnInit(): void {
    console.log(this.message);
  }

}

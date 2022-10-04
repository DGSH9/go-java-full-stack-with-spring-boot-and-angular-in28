import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWordlBean, WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  //String
  message: string = 'Hello from DGSH';
  welcomeMessageFromService: string = '';
  name = '';


  //deafult constructor
  //AcivatedRoute
  constructor(private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService) { }

  ngOnInit(): void {
    console.log(this.message);
    // console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }

  //getWelcomeMessage
  getWelcomeMessage() {
    // console.log("get welcome message");
    console.log(this.welcomeDataService.executeHelloWorldService());
    this.welcomeDataService.executeHelloWorldService().subscribe(
      data => this.handleResponse(data)
    );
    console.log("last line of getWelcomeMessage");

  }
  handleResponse(data: HelloWordlBean) {
    console.log(data);
    this.welcomeMessageFromService = data.message;

  }

}

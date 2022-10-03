import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  //hard coded todo data
  todos = [
    {id: "1",description: "Angular Course"},
    {id: "2",description: "Springboot Course"},
    {id: "3",description: "Python Course"}
  ];

  todo = {
    id: "1",
    description: "Angular Course"
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

//blueprint class of object
//Future
// - No navigation Menu and Footer
// - Formatting - Bootstrap
// - No Security for Menu
// - Hardcoded logic in the TodoList and Login Components
// - Remaining Functionality - Edit, Delete, Add
// - Spring Boot
// - Spring Security

export class Todo{
  constructor(
        public id:number,
        public description:string,
        public done:boolean,
        public targetDate:Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  //hard coded todo data
  todos = [
    new Todo(1,'Angular',false,new Date()),
    new Todo(2,'React',true,new Date()),
    new Todo(3,'java',true,new Date()),
    new Todo(4,'Typecript',false,new Date())
  ];


  constructor() { }

  ngOnInit(): void {
  }

}

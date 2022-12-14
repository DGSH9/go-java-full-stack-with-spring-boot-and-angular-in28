import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataServiceService } from '../service/data/todo-data-service.service';

//blueprint class of object
//Future
// - No navigation Menu and Footer
// - Formatting - Bootstrap
// - No Security for Menu
// - Hardcoded logic in the TodoList and Login Components
// - Remaining Functionality - Edit, Delete, Add
// - Spring Boot
// - Spring Security

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  //hard coded todo data
  message: string = '';
  todos: Todo[] = [
    // new Todo(1,'Angular',false,new Date()),
    // new Todo(2,'React',true,new Date()),
    // new Todo(3,'java',true,new Date()),
    // new Todo(4,'Typecript',false,new Date())


  ];


  constructor(
    private todoDataServiceService: TodoDataServiceService,
    private router: Router) { }

  ngOnInit() {
    this.refressTodo();
  }


  refressTodo() {
    this.todoDataServiceService.retrieveAllTodos('dgsh').subscribe(
      response => { this.todos = response; console.log(response); }
    );
  }

  //deleteTodo
  deleteTodo(id: number) {
    // console.log(`deleteTodo called..${id}`)
    this.todoDataServiceService.deleteTodo("dgsh", id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of ${id} Successfull`;
        this.refressTodo();
      }
    )
  }

  //update
  updateTodo(id: number) {
    console.log(`updateTodoWorks${id}`);
    this.router.navigate(['todos', id]);
  }

  //addTodo
  addTodo() {
    this.router.navigate(['todos', -1]);
  }


}



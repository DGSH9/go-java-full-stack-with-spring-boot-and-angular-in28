import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataServiceService } from '../service/data/todo-data-service.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number = 0;
  todo!: Todo;

  //dependcy injection
  constructor(
    private todoDataServiceService: TodoDataServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());

    if (this.id != -1) {
      this.todoDataServiceService.retrieveTodo('dgsh', this.id).subscribe(
        data => this.todo = data
      );
    }
  }

  saveTodo() {
    if (this.id == -1) {
      //create todo
      this.todoDataServiceService.createTodo('dgsh', this.todo).subscribe(
        response => {
          console.log(response)
          this.router.navigate(['todos'])
        }
      );
    }
    else {
      this.todoDataServiceService.putTodo('dgsh', this.id, this.todo).subscribe(
        response => {
          console.log(response)
          this.router.navigate(['todos'])
        }
      );
    }


  }

}

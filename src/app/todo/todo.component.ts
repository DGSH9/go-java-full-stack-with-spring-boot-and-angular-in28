import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private todoDataServiceService: TodoDataServiceService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(1, '', false, new Date());
    this.todoDataServiceService.retrieveTodo('dgsh', this.id).subscribe(
      data => this.todo = data
    );
  }

  saveTodo() {
    // this.todoDataServiceService.retrieveTodo('dgsh', id).subscribe(
    //   response => {
    //     console.log(response);
    //   }
    // );
  }

}

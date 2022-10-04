import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})


export class TodoDataServiceService {

  constructor(private httpClient: HttpClient) { }

  retrieveAllTodos(username: string) {
    return this.httpClient.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
  }

  deleteTodo(username: string, id: number) {
    return this.httpClient.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  retrieveTodo(username: string, id: number) {
    return this.httpClient.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  putTodo(username: string, id: number, todo: any) {
    return this.httpClient.put(`http://localhost:8080/users/${username}/todos/${id}`, todo);
  }


}

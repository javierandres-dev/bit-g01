import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PrivateService {
  constructor(private http: HttpClient) {}

  url = environment.todosApiUrl;

  createTodo(todo: any) {
    return this.http.post<any>(this.url, todo);
  }

  readTodos() {
    return this.http.get<any>(this.url);
  }

  readTodo(id: any) {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  updateTodo(id: any, todo: any) {
    return this.http.put<any>(`${this.url}/${id}`, todo);
  }

  deleteTodo(id: any) {
    this.http.delete<any>(`${this.url}/${id}`);
  }
}

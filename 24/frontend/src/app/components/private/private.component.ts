import { Component, OnInit } from '@angular/core';
import { throttleTime } from 'rxjs';
import { PrivateService } from '../../services/private.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css'],
})
export class PrivateComponent implements OnInit {
  constructor(private privateService: PrivateService) {}

  todo = {
    name: '',
    completed: false,
  };

  todos = <any>[];

  isEmpty: boolean = true;

  completedTodos = <any>[];
  pendingTodos = <any>[];

  ngOnInit(): void {
    this.getTodos();
  }

  newTodo() {
    //console.log('todo', this.todo);
    this.privateService.createTodo(this.todo).subscribe(
      (res) => {
        if (res.success) {
          this.todo = {
            name: '',
            completed: false,
          };
        }
        this.getTodos();
      },
      (err) => {
        console.log('err:', err);
      }
    );
  }

  getTodos() {
    this.isEmpty = true;
    this.completedTodos = [];
    this.pendingTodos = [];
    this.privateService.readTodos().subscribe(
      (res) => {
        if (res.success) {
          this.todos = res.success;
          if (this.todos.length > 0) {
            this.isEmpty = false;
            this.completedTodos = this.todos.filter(
              (item: any) => item.completed === true
            );
            this.pendingTodos = this.todos.filter(
              (item: any) => item.completed === false
            );
          }
        }
      },
      (err) => {
        console.log('err:', err);
      }
    );
  }

  getTodo(id: any) {
    console.log(id);
    this.privateService.readTodo(id).subscribe(
      (res) => {
        console.log('res:', res);
      },
      (err) => {
        console.log('err:', err);
      }
    );
  }

  updTodo(id: any) {
    this.privateService.readTodo(id).subscribe(
      (res) => {
        if (res.success._id) {
          let editTodo: any = res.success;
          editTodo.completed = !editTodo.completed;
          this.privateService.updateTodo(id, editTodo).subscribe(
            (res) => {
              if (res.success) {
                this.getTodos();
              }
            },
            (err) => {
              console.log('err:', err);
            }
          );
        }
      },
      (err) => {
        console.log('err:', err);
      }
    );
  }

  delTodo(id: any) {
    this.privateService.deleteTodo(id).subscribe(
      (res) => {
        if (res.success) {
          this.getTodos();
        }
      },
      (err) => {
        console.log('err:', err);
      }
    );
  }
}

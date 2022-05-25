import { Component, OnInit } from '@angular/core';
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
    this.privateService.readTodos().subscribe(
      (res) => {
        if (res.success) {
          this.todos = res.success;
          if (this.todos.length > 0) {
            this.isEmpty = false;
          }
        }
      },
      (err) => {
        console.log('err:', err);
      }
    );
  }
}

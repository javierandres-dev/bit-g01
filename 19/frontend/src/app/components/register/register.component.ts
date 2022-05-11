import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  user = {
    name: '',
    email: '',
    password: '',
  };

  ngOnInit(): void {}

  register() {
    console.log('user:', this.user);
  }
}

import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  user = {
    username: '',
    password: '',
  };

  ngOnInit(): void {}

  login() {
    //console.log('user:', this.user);
    this.loginService.loginUser(this.user).subscribe(
      (res) => {
        if (res.success) {
          localStorage.setItem('token', res.success);
          this.router.navigate(['private']);
        }
      },
      (err) => console.log('err:', err)
    );
  }
}

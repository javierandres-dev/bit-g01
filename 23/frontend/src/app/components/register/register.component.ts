import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  user = {
    name: '',
    email: '',
    password: '',
  };

  ngOnInit(): void {}

  register() {
    this.registerService.createUser(this.user).subscribe(
      (res: any) => {
        if (res.success) {
          this.router.navigate(['login']);
        }
      },
      (err: any) => {
        console.log('err:', err);
      }
    );
  }
}

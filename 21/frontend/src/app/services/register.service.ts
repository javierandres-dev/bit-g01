import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  private URL = 'http://localhost:4000/api/v1/users';

  createUser(user: any) {
    return this.http.post<any>(this.URL, user);
  }
}

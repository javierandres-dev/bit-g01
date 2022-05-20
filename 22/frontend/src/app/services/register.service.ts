import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  url = environment.userApiUrl;

  createUser(user: any) {
    return this.http.post<any>(this.url, user);
  }
}

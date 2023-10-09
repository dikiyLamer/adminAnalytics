import { Injectable } from '@angular/core';
import { User } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string | null = null;
  private users: User[] = [];
  constructor(private http: HttpClient) {}

  login(user: User) {
    if (
      this.users.find(
        (elem) => elem.email === user.email && elem.password === user.password
      )
    ) {
      localStorage.setItem('token', 'token');
      this.setToken('token');
      return of({ token: 'token' });
    } else {
      return of();
    }
  }
  register(user: User) {
    this.users.push(user);
    return of({ token: 'token' });
  }

  setToken(token: string | null) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  isAunthenticated() {
    return !!this.token;
  }

  logout() {
    this.setToken(null);
    localStorage.clear();
  }
}

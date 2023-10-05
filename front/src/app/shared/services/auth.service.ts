import { Injectable } from '@angular/core';
import { User } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string | null = null;
  constructor(private http: HttpClient) {}

  login(user: User): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('api/auth/login', user).pipe(
      tap(({ token }) => {
        localStorage.setItem('token', token);
        this.setToken(token);
      })
    );
  }

  register(user: User): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('api/auth/register', user);
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

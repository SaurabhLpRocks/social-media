import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { appApiResources } from '@shared/constants';
import { User } from '@shared/typings';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  constructor(private http: HttpClient) {
    const user = JSON.parse(localStorage.getItem('currentUser')) || null;
    this.currentUserSubject = new BehaviorSubject<User>(user);
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  loginUser(username: string, password: string): Observable<User> {
    return this.http
      .post<User>(appApiResources.login, { username, password })
      .pipe(
        tap((user) => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('token', user.token);
          this.currentUserSubject.next(user);
        })
      );
  }
}

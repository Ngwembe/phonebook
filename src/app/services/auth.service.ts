import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../user/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  currentUser!: User;

  private readonly authTokenKey = 'PHONEBOOK_AUTH_TOKEN';

  constructor(private http: HttpClient) { }

  loginUser(_email: string, password: string) {
    this.currentUser = {
      id: 1,
      username: _email,
      password: password,
      firstName: 'Themba',
      lastName: 'Monareng'
    };
  }

  login(email: string, password: string) {
    this.currentUser = {
      id: 1,
      username: email,
      password: password,
      firstName: 'Themba',
      lastName: 'Monareng'
    };


    const credentials = { username: email, password: password };
    //this._isLoggedIn$.next(true);
    //const credentials = { username: 'string', password: 'string' };
    //return this.http.post('/api/auth/login', { username: 'string', password: 'string' });

    return this.http.post('/api/auth/login', credentials)
      .pipe(
        tap((response: any) => {
          console.log({ response });

          this._isLoggedIn$.next(true);
          localStorage.setItem(this.authTokenKey, response?.token);
        }));
  }

  updateProfile(_firstName: string, _lastName: string) {
    this.currentUser = Object.assign(this.currentUser, { firstName: _firstName, lastName: _lastName });
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}

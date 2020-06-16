import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LoginResponse } from '../_models/loginresponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUserSubject: BehaviorSubject<string>;
  currentUser: Observable<string>;
  loginResponse: Observable<LoginResponse>;

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<string>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  callLogin(): Observable<LoginResponse> {
    return this.httpClient.get<LoginResponse>('https://yesno.wtf/api');
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}

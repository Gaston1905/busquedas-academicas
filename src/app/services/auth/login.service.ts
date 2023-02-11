import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'https://reqres.in/api/login';
  currentUserSubject: BehaviorSubject<any>;
  parcero: boolean | undefined;

  constructor(
    private http: HttpClient
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('currentUser') || '{}' )
    )
   }

   login(credentials: any): Observable<any> {
    return this.http.post(`${this.url}`, credentials).pipe(
      map((data) => {
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        this.parcero = true;
        return data
      })
    )
   }

   get userAuth() {
    return this.currentUserSubject.value;
   }

   loggedIn() {
    this.parcero;
    return localStorage.getItem('currentUser')
   }

   logoutUser() {
    this.parcero = false;
    localStorage.clear();
    this.currentUserSubject.next(null);
   }
}

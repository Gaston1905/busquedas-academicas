import { LoginService } from './login.service';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(
    private authSVC: LoginService
  ) { }

  intercept (
    req: HttpRequest<any>,
    next: HttpHandler
  ) : Observable<HttpEvent<any>> {
    let currentUser = this.authSVC.userAuth;
    if( currentUser && currentUser.token) {
      req = req.clone ({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }
    return next.handle(req);
  }
}

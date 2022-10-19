import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { User } from '../models/user';

@Injectable()
export class JwTokenInterceptor implements HttpInterceptor {

  constructor(private accountService: AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    //this variable will contain the contents of the cuurent user or null.
    let currentUser: User;

    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next: (user => {currentUser = user})
    })

    if(currentUser){
      //we will clone the currentUser and add the authentication header to it
      request = request.clone({
        setHeaders: {

          //this attaches the token for every request when we are logged in
          Authorization: `Bearer ${currentUser.token}`
        }
      })
    }
    return next.handle(request);
  }
}

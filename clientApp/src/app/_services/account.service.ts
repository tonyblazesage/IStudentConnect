import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baserUrl = environment.apiUrl;

  private currentUserStorage = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserStorage.asObservable();

  constructor( private http: HttpClient) { }

  login(model: any)
  {
    return this.http.post(this.baserUrl + 'account/login', model).pipe(
      map((res: User) => {
        const user = res;
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserStorage.next(user);
        }
      })
    )
  }


  //method to logout user and remove the user object from the browser local storage
  logout()
  {
    localStorage.removeItem('user');
    this.currentUserStorage.next(null);
  }

  //Register user
  register(model: any)
  {
    return this.http.post(this.baserUrl + 'account/register', model).pipe(
      map( (user: User) => {
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserStorage.next(user);
        }
      })
    )
  }
  

  //set a current user to the stored object (user) in local storage
  setCurrentUser(user: User)
  {
    this.currentUserStorage.next(user);
  }

  
}

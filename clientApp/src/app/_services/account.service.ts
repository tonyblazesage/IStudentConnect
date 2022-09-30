import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baserUrl = 'https://localhost:7001/api/';

  constructor( private http: HttpClient) { }

  login(model: any)
  {
    return this.http.post(this.baserUrl + 'account/login', model);
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  signInMode = false;
  signUpMode = false;
  model: any = {};
  //users: any;



  constructor(public accountService: AccountService, private http: HttpClient) { }

  ngOnInit(): void {
    //this.getUsers();
  }

  signInToggle() {
    this.signInMode = !this.signInMode;

  }

  signUpToggle() {
    this.signUpMode = !this.signUpMode
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => { console.log(error) }
    })
  }

  // getUsers() {
  //   this.http.get('https://localhost:7001/api/users').subscribe({
  //     next: (response) => { this.users = response },
  //     error: (error) => { console.log("Please contact administrator" + error) }
  //   })
  // }

  //method to logout user and remove the user object from the browser local storage
  logout() {
    this.accountService.logout();

  }

}

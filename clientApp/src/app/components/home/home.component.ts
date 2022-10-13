import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  signInMode = false;
  signUpMode = false;
  learnMoreMode = false;
  model: any = {};
  //users: any;



  constructor(public accountService: AccountService, private http: HttpClient,
    private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    //this.getUsers();
    this.accountService.currentUser$;
  }

  signInToggle() {
    this.signInMode = !this.signInMode;

  }

  signUpToggle() {
    this.signUpMode = !this.signUpMode
  }

  learnMoreToggle() {
    this.learnMoreMode = !this.learnMoreMode
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: (res) => {
        this.router.navigateByUrl('/students'),
        this.toastr.success("logged in successfully")
      }
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
    this.router.navigateByUrl('/')
  }

}

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

  

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  signInToggle()
  {
    this.signInMode = !this.signInMode;

  }

  signUpToggle()
  {
    this.signUpMode = !this.signUpMode
  }

  login()
  {
    this.accountService.login(this.model).subscribe({
      next: (res) => { 
        console.log(res);
        
      },
      error: (error) => { console.log(error)}
    })
  }

  //method to logout user and remove the user object from the browser local storage
  logout(){
    this.accountService.logout();
    
  }

}

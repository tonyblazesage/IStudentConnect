import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  
  
  constructor( public accountService: AccountService, private router: Router) { }

  ngOnInit() {
    //to get current user logged in
    
  }

  
  //method to logout user and remove the user object from the browser local storage
  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/')
  }


  
  
}

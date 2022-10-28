import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { Student } from 'src/app/models/student';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/_services/account.service';
import { StudentsService } from 'src/app/_services/students.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  currentuser: User;
  student: Student;
  
  
  constructor( public accountService: AccountService, private router: Router, private studentService: StudentsService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next: (currentuser) => { this.currentuser = currentuser}
     })
   }

  ngOnInit() {
    //to get current user logged in
    this.loadCurrentuser();
  }

  
  //method to logout user and remove the user object from the browser local storage
  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/')
  }

  loadCurrentuser()
  {
    this.studentService.getStudent(this.currentuser.username).subscribe({
      next: (student)=> { this.student = student
      }
    })
  }
  
  
}

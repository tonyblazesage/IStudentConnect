import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Student } from 'src/app/models/student';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/_services/account.service';
import { StudentsService } from 'src/app/_services/students.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  student: Student;
  currentuser: User;

  constructor(private accountService: AccountService, private studentService: StudentsService) { 
    this.accountService.currentUser$.pipe(take(1)).subscribe({
     next: (currentuser) => {this.currentuser = currentuser}
    })
  }

  ngOnInit(): void {
    this.loadCurrentuser();
  }

  loadCurrentuser()
  {
    this.studentService.getStudent(this.currentuser.username).subscribe({
      next: (student)=> { this.student = student}
    })
  }

}

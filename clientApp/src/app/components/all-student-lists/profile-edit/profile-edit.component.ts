import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
  @ViewChild('profileEDitForm') profileEDitForm: NgForm;
  currentuser: User;

  @HostListener('window:beforeunload', ['$event']) unloadNotification($event: any){
    if(this.profileEDitForm.dirty){
      $event.returnValue = true;
    }
  }

  constructor(private accountService: AccountService, private studentService: StudentsService, private toastr: ToastrService) { 
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
      next: (student)=> { this.student = student
      }
    })
  }
  
  updateProfile()
  {
    this.studentService.updateProfile(this.student).subscribe({
      next: () => { this.toastr.success("Profile successfully updated");
      this.profileEDitForm.reset(this.student); },
      error: (error) => { this.toastr.error("Profile update failed"), error }
    })
    
  }
}

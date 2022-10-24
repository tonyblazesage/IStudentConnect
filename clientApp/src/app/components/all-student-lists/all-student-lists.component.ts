import { Component, OnInit } from '@angular/core';
import { timeStamp } from 'console';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/_services/students.service';

@Component({
  selector: 'app-all-student-lists',
  templateUrl: './all-student-lists.component.html',
  styleUrls: ['./all-student-lists.component.css']
})
export class AllStudentListsComponent implements OnInit {
  students$: Observable<Student[]>;

  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
    this.students$ = this.studentService.getStudents();
  }


}

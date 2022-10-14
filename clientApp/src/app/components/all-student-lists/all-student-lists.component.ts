import { Component, OnInit } from '@angular/core';
import { timeStamp } from 'console';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/_services/students.service';

@Component({
  selector: 'app-all-student-lists',
  templateUrl: './all-student-lists.component.html',
  styleUrls: ['./all-student-lists.component.css']
})
export class AllStudentListsComponent implements OnInit {
  students: Student[];

  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(){
    this.studentService.getStudents().subscribe({
      next: (res) => { this.students = res}
    })
  }

}

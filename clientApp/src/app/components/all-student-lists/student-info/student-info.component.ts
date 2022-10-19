import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/_services/students.service';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
  student: Student;
  isChecked: boolean = true;
  isTwoFacActive: any;

  constructor(private studentService: StudentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadStudent();
  }

  loadStudent()
  {
    this.studentService.getStudent(this.route.snapshot.paramMap.get('username')).subscribe( student => { this.student = student})
  }
}

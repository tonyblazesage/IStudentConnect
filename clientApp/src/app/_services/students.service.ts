import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../models/student';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  baseUrl = environment.apiUrl;
  students: Student[] =[];

  constructor(private http: HttpClient) { }

  getStudents(){
    if(this.students.length > 0) return of (this.students);
    return this.http.get<Student[]>(this.baseUrl + 'users').pipe(
      map(students => {
        this.students = students;
        return students;
      })
    )
  }

  getStudent(username: string){
    const student = this.students.find(x => x.username === username);
    if(student !== undefined) return of (student);
    return this.http.get<Student>(this.baseUrl + 'users/' + username);
  }

  updateProfile(student: Student)
  {
    return this.http.put(this.baseUrl + 'users', student).pipe(
      map(() => {
        const index = this.students.indexOf(student);
        this.students[index] = student;
      })
    )
  }
}

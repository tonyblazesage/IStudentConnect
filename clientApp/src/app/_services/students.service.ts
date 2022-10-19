import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Student } from '../models/student';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getStudents(){
    return this.http.get<Student[]>(this.baseUrl + 'users');
  }

  getStudent(username: string){
    return this.http.get<Student>(this.baseUrl + 'users/' + username);
  }
}

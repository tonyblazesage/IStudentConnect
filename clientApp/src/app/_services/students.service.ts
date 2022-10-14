import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Student } from '../models/student';

const httpOptions = {
  headers: new HttpHeaders ({
    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).token
  })
}

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getStudents(){
    return this.http.get<Student[]>(this.baseUrl + 'users', httpOptions);
  }

  getStudent(username: string){
    return this.http.get<Student>(this.baseUrl + 'users/' + username, httpOptions);
  }
}

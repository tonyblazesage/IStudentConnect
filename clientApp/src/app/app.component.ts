import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any;
  title="IStudentConnect App";
  constructor(private http: HttpClient){}


  ngOnInit(){
    this.getUsers();
  }

  getUsers()
  {
    this.http.get('https://localhost:7001/api/users').subscribe({
    next: (response) => { this.users = response},
    error: (error) => { console.log(error)} 
  })
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errors-testing',
  templateUrl: './errors-testing.component.html',
  styleUrls: ['./errors-testing.component.css']
})
export class ErrorsTestingComponent implements OnInit {
  baserUrl = 'https://localhost:7001/api/';
  validationErrors: string[] = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  get404Error()
  {
    this.http.get(this.baserUrl + 'error/not-found').subscribe({
      next: (res) => { console.log(res)},
      error: (err) => { console.log(err)}
    })
  }

  get400Error()
  {
    this.http.get(this.baserUrl + 'error/bad-request').subscribe({
      next: (res) => { console.log(res)},
      error: (err) => { console.log(err)}
    })
  }


  get500Error()
  {
    this.http.get(this.baserUrl + 'error/server-error').subscribe({
      next: (res) => { console.log(res)},
      error: (err) => { console.log(err)}
    })
  }


  get401Error()
  {
    this.http.get(this.baserUrl + 'error/auth').subscribe({
      next: (res) => { console.log(res)},
      error: (err) => { console.log(err)}
    })
  }

  get400ValidationError()
  {
    this.http.post(this.baserUrl + 'account/register', {}).subscribe({
      next: (res) => { console.log(res)},
      error: (err) => { 
        console.log(err),
        this.validationErrors = err}
    })
  }
}

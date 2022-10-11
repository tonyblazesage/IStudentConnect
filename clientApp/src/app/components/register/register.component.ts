import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};

  constructor(private accountService: AccountService, private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model).subscribe({
      next: (res) => { console.log(res);
      this.cancel();
      this.toastr.success("Student registration success")},
      error: (err) => { console.log(err);
        this.toastr.error(err.error)
      }
    })
  }

  cancel(){
    console.log('cancelled');
    window.location.reload();
  }

}

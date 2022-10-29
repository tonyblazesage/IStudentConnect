import { Component, Input, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { take } from 'rxjs';
import { Student } from 'src/app/models/student';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/_services/account.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.css']
})
export class EditPhotoComponent implements OnInit {
  @Input() student: Student;
  uploader: FileUploader;
  hasBaseDropzoneOver= false;
  baseUrl = environment.apiUrl;

  currentUser: User;


  constructor(private accountService: AccountService) { 
    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next: (currentUser) => { this.currentUser = currentUser}
    })
  }

  ngOnInit(): void {
    this.initUploader();
  }

  fileOverBase(event: any)
  {
    this.hasBaseDropzoneOver = event;
  }

  initUploader()
  {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'users/upload-photo',
      authToken: 'Bearer ' + this.currentUser.token,
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      //set max upload size to 10mb which is the max for cloudinary
      maxFileSize: 10 * 1024 * 1024
    });
    this.uploader.onAfterAddingFile = (file) =>
    {
      file.withCredentials = false;
    }

    this.uploader.onSuccessItem = (item, response, staus, headers) => {
      if(response) {
        const Image = JSON.parse(response);
        this.student.photos.push(Image);
      }
    }
  }

}

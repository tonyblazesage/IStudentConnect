import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
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
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  

  constructor(private studentService: StudentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadStudent();
    this.galleryOptions = [
      {
        width: '400px',
        height: '400px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
        
      }
    ]
  }

  getImages(): NgxGalleryImage[]
  {
    const imageUrls = [];
    for( const photo of this.student.photos)
    {
      imageUrls.push({
        small: photo?.url,
        medium: photo?.url,
        big: photo?.url
      })
    }

    return imageUrls;
  }

  loadStudent()
  {
    this.studentService.getStudent(this.route.snapshot.paramMap.get('username')).subscribe( student => { this.student = student;
      this.galleryImages = this.getImages();})
  }
}

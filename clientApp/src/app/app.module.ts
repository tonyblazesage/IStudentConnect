import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from  '@angular/common/http';
import { NavComponent } from './components/nav/nav.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared-module/shared.module';
import { NgxSpinnerModule } from "ngx-spinner";



//components import
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentListComponent } from './components/students/student-list/student-list.component';
import { StudentInfoComponent } from './components/all-student-lists/student-info/student-info.component';
import { AllStudentListsComponent } from './components/all-student-lists/all-student-lists.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ErrorsTestingComponent } from 'src/errorhandler/errors-testing/errors-testing.component';
import { ErrorInterceptorInterceptor } from './_interceptors/error-interceptor.interceptor';
import { NotFoundComponent } from 'src/errorhandler/not-found/not-found.component';
import { ServerErrorComponent } from 'src/errorhandler/server-error/server-error.component';
import { StudentCardComponent } from './components/all-student-lists/student-card/student-card.component';
import { JwTokenInterceptor } from './_interceptors/jw-token.interceptor';
import { ProfileEditComponent } from './components/all-student-lists/profile-edit/profile-edit.component';
import { LoadingInterceptor } from './_interceptors/loading.interceptor';
import { EditPhotoComponent } from './components/all-student-lists/edit-photo/edit-photo.component';
import { FileUploadModule } from 'ng2-file-upload';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    StudentListComponent,
    StudentInfoComponent,
    AllStudentListsComponent,
    MessagesComponent,
    ErrorsTestingComponent,
    NotFoundComponent,
    ServerErrorComponent,
    StudentCardComponent,
    ProfileEditComponent,
    EditPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxSpinnerModule,
    FileUploadModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: JwTokenInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

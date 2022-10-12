import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from  '@angular/common/http';
import { NavComponent } from './components/nav/nav.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared-module/shared.module';




//components import
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentListComponent } from './components/students/student-list/student-list.component';
import { StudentInfoComponent } from './components/students/student-info/student-info.component';
import { AllStudentListsComponent } from './components/all-student-lists/all-student-lists.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ErrorsTestingComponent } from 'src/errorhandler/errors-testing/errors-testing.component';
import { ErrorInterceptorInterceptor } from './_interceptors/error-interceptor.interceptor';
import { NotFoundComponent } from 'src/errorhandler/not-found/not-found.component';



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
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStudentListsComponent } from './components/all-student-lists/all-student-lists.component';
import { HomeComponent } from './components/home/home.component';
import { MessagesComponent } from './components/messages/messages.component';
import { StudentInfoComponent } from './components/students/student-info/student-info.component';
import { StudentListComponent } from './components/students/student-list/student-list.component';
import { AuthenticateGuard } from './_guards/authenticate.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthenticateGuard],
    children: [
      {path: 'students', component: StudentListComponent, canActivate: [AuthenticateGuard]},
      {path: 'students/:id', component: StudentInfoComponent},
      {path: 'list-students', component: AllStudentListsComponent},
      {path: 'messages', component: MessagesComponent},
    ]},
  
  {path: '**', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

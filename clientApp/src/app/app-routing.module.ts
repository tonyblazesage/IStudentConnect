import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorsTestingComponent } from 'src/errorhandler/errors-testing/errors-testing.component';
import { NotFoundComponent } from 'src/errorhandler/not-found/not-found.component';
import { ServerErrorComponent } from 'src/errorhandler/server-error/server-error.component';
import { AllStudentListsComponent } from './components/all-student-lists/all-student-lists.component';
import { HomeComponent } from './components/home/home.component';
import { MessagesComponent } from './components/messages/messages.component';
import { StudentInfoComponent } from './components/all-student-lists/student-info/student-info.component';
import { StudentListComponent } from './components/students/student-list/student-list.component';
import { AuthenticateGuard } from './_guards/authenticate.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthenticateGuard],
    children: [
      { path: 'jobs', component: StudentListComponent},
      { path: 'list-students/:username', component: StudentInfoComponent },
      { path: 'list-students', component: AllStudentListsComponent },
      { path: 'messages', component: MessagesComponent },
      

    ]
  },
  { path: 'errors', component: ErrorsTestingComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'server-error', component: ServerErrorComponent },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

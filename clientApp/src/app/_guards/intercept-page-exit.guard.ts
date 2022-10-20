import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileEditComponent } from '../components/all-student-lists/profile-edit/profile-edit.component';

@Injectable({
  providedIn: 'root'
})
export class InterceptPageExitGuard implements CanDeactivate<unknown> {
  canDeactivate( component: ProfileEditComponent):  boolean {
    if(component.profileEDitForm.dirty){
      return confirm('Leaving this page will result in loss of any unsaved changes. Do you want to continue?')
    }
    return true;
  }
  
}

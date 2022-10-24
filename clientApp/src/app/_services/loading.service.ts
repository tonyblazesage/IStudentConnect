import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loadingRequestCount = 0;

  constructor(private spinnerService: NgxSpinnerService) { }

  loading()
  {
    this.loadingRequestCount++;
    this.spinnerService.show(undefined, {
      type: 'ball-atom',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#008000'
    });
  }


  idle()
  {
    this.loadingRequestCount--;
    if(this.loadingRequestCount <= 0)
    {
      this.loadingRequestCount = 0;
      this.spinnerService.hide();
    }
  }
}

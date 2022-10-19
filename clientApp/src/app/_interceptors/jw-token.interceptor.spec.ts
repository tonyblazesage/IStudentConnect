import { TestBed } from '@angular/core/testing';

import { JwTokenInterceptor } from './jw-token.interceptor';

describe('JwTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JwTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JwTokenInterceptor = TestBed.inject(JwTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

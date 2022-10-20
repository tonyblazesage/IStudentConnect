import { TestBed } from '@angular/core/testing';

import { InterceptPageExitGuard } from './intercept-page-exit.guard';

describe('InterceptPageExitGuard', () => {
  let guard: InterceptPageExitGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InterceptPageExitGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

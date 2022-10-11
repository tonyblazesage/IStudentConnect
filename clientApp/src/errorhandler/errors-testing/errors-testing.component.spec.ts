import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsTestingComponent } from './errors-testing.component';

describe('ErrorsTestingComponent', () => {
  let component: ErrorsTestingComponent;
  let fixture: ComponentFixture<ErrorsTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorsTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

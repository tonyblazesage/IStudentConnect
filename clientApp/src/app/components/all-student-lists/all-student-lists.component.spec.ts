import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStudentListsComponent } from './all-student-lists.component';

describe('AllStudentListsComponent', () => {
  let component: AllStudentListsComponent;
  let fixture: ComponentFixture<AllStudentListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllStudentListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStudentListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDeleteConfirmationComponent } from './employee-delete-confirmation.component';

describe('EmployeeDeleteConfirmationComponent', () => {
  let component: EmployeeDeleteConfirmationComponent;
  let fixture: ComponentFixture<EmployeeDeleteConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDeleteConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDeleteConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

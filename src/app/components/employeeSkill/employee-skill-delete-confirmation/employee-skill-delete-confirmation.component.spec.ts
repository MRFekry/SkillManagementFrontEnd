import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSkillDeleteConfirmationComponent } from './employee-skill-delete-confirmation.component';

describe('EmployeeSkillDeleteConfirmationComponent', () => {
  let component: EmployeeSkillDeleteConfirmationComponent;
  let fixture: ComponentFixture<EmployeeSkillDeleteConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSkillDeleteConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSkillDeleteConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

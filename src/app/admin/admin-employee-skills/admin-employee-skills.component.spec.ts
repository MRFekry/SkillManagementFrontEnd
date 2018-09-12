import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeeSkillsComponent } from './admin-employee-skills.component';

describe('AdminEmployeeSkillsComponent', () => {
  let component: AdminEmployeeSkillsComponent;
  let fixture: ComponentFixture<AdminEmployeeSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEmployeeSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployeeSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

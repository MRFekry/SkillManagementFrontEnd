import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDeleteConfirmationComponent } from './skill-delete-confirmation.component';

describe('SkillDeleteConfirmationComponent', () => {
  let component: SkillDeleteConfirmationComponent;
  let fixture: ComponentFixture<SkillDeleteConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillDeleteConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillDeleteConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

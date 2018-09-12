import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminScoresComponent } from './admin-scores.component';

describe('AdminScoresComponent', () => {
  let component: AdminScoresComponent;
  let fixture: ComponentFixture<AdminScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

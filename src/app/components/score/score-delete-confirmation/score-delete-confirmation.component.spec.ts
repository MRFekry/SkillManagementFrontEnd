import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreDeleteConfirmationComponent } from './score-delete-confirmation.component';

describe('ScoreDeleteConfirmationComponent', () => {
  let component: ScoreDeleteConfirmationComponent;
  let fixture: ComponentFixture<ScoreDeleteConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreDeleteConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreDeleteConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

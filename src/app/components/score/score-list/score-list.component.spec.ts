
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreListComponent } from './score-list.component';

describe('ScoreListComponent', () => {
  let component: ScoreListComponent;
  let fixture: ComponentFixture<ScoreListComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

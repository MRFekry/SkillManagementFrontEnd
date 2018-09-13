
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoresDataTableComponent } from './scores-data-table.component';

describe('ScoresDataTableComponent', () => {
  let component: ScoresDataTableComponent;
  let fixture: ComponentFixture<ScoresDataTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoresDataTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoresDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

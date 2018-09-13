
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsDataTableComponent } from './skills-data-table.component';

describe('SkillsDataTableComponent', () => {
  let component: SkillsDataTableComponent;
  let fixture: ComponentFixture<SkillsDataTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsDataTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});


import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListComponent } from './employee-list.component';
import { EmployeeService } from '../../../services/employee/employee.service';
import { from } from 'rxjs';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should return array of employee', () => {
    let arr = [1, 2, 3];

    spyOn(<any>EmployeeService, 'getEmployees').and.returnValue(arr);

    component.ngOnInit();

    expect(arr.length).toBeGreaterThan(0);
    expect(arr).toEqual([1, 2, 3]);
  });
});

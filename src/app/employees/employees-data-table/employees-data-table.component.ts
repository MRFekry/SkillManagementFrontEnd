import { map } from 'rxjs/operators';
import { EmployeeService } from './../../services/employee.service';
import {Component, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Employee } from '../../Interfaces/Employee';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'employees-data-table',
  templateUrl: './employees-data-table.component.html',
  styleUrls: ['./employees-data-table.component.css']
})
export class EmployeesDataTableComponent implements OnInit {
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['FirstName', 'LastName', 'Email', 'Actions'];

  dataSource: MatTableDataSource<Employee>;
  employees: Employee[];
  dataSourceLength: number;
  employee = {};

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private employeeService: EmployeeService,
     private changeDetectorRefs: ChangeDetectorRef,
     private modalService: ModalService) {  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.employeeService.getEmployees().subscribe(result => {
      this.employees = result;
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSourceLength = this.dataSource.data.length;
      this.changeDetectorRefs.detectChanges();
    });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openModal(id: string, row: Employee) {
    let emp: Employee = {
      Id : row.Id,
      FirstName : row.FirstName,
      LastName : row.LastName,
      Email : row.Email,
      IsActive : row.IsActive,
    }
    this.employee = emp;

    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  DeleteEmployee(employee, id: string){
    this.employeeService.DeleteEmployee(this.employee);

    this.closeModal(id);
  }
}

import { EmployeeService } from './../../services/employee.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Employee } from '../../Interfaces/Employee';

@Component({
  selector: 'employees-data-table',
  templateUrl: './employees-data-table.component.html',
  styleUrls: ['./employees-data-table.component.css']
})
export class EmployeesDataTableComponent implements OnInit {
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['FirstName', 'LastName', 'Email', 'IsActive', 'Actions'];

  dataSource: MatTableDataSource<Employee>;
  employees: Employee[];
  dataSourceLength: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private employeeService: EmployeeService) {  }

  ngOnInit() {

    this.employeeService.getEmployees().subscribe(result => {
      this.employees = result;
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSourceLength = this.dataSource.data.length;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

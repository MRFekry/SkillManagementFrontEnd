import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { EmployeeService } from '../../../services/employee/employee.service';
import { Employee } from '../../../Models/Employee';
import { EmployeeSkillsScores } from '../../../Models/EmployeeSkillsScores';
import { EmployeeSkillService } from '../../../services/employeeSkill/employee-skill.service';
import { Router } from '@angular/router';
import { asEnumerable } from 'linq-es2015';
import { MatDialog } from '@angular/material';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { EmployeeSkillFormComponent } from '../../employeeSkill/employee-skill-form/employee-skill-form.component';
import { EmployeeSkillListComponent } from '../../employeeSkill/employee-skill-list/employee-skill-list.component';
import { EmployeeDeleteConfirmationComponent } from '../employee-delete-confirmation/employee-delete-confirmation.component';

@Component({
  selector: 'app-components/employee/employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['FirstName', 'LastName', 'Email', 'Actions'];

  dataSource: MatTableDataSource<Employee>;
  employees: Employee[];
  dataSourceLength: number;
  employee = {};
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private employeeService: EmployeeService,
    public dialog: MatDialog) {  }

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
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openEmployeeSkillsDialog(employee: Employee): void {
    const dialRef = this.dialog.open(EmployeeSkillListComponent, {
      width: '80%',
      data: employee
    });

    // dialRef.afterClosed().subscribe(result => {
    //   console.log(result);
    // });
  }

  openEmployeeFormDialog(employee: Employee): void {
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      width: '40%',
      data: employee
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    // });
  }

  openEmployeeDeleteConfirmationDialog(employee: Employee): void {
    const dialogRef = this.dialog.open(EmployeeDeleteConfirmationComponent, {
      width: '40%',
      data: employee
    });
  }
}

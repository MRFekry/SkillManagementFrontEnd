import { Component, OnInit, ViewChild, ChangeDetectorRef  } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialogRef } from '@angular/material';
import { EmployeeService } from '../../../services/employee/employee.service';
import { Employee } from '../../../Models/Employee';
import { MatDialog } from '@angular/material';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
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
    public dialog: MatDialog, 
    private changeDetectorRefs: ChangeDetectorRef) {  }

  ngOnInit() {
    this.refresh();
  }

  refresh(){
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

  openEmployeeSkillsDialog(employee: Employee): void {
    const dialogRef = this.dialog.open(EmployeeSkillListComponent, {
      width: '80%',
      data: employee
    });

    this.refreshAfterClosingDialog(dialogRef);
  }

  openEmployeeFormDialog(employee: Employee): void {
    const dialogRef = this.dialog.open(EmployeeFormComponent, {
      width: '40%',
      data: employee
    });

    this.refreshAfterClosingDialog(dialogRef);
  }

  openEmployeeDeleteConfirmationDialog(employee: Employee): void {
    const dialogRef = this.dialog.open(EmployeeDeleteConfirmationComponent, {
      width: '40%',
      data: employee
    });

    this.refreshAfterClosingDialog(dialogRef);
  }

  refreshAfterClosingDialog(dialogRef: MatDialogRef<any, any>){
    dialogRef.afterClosed().subscribe(result => {
      this.refresh();
    });
  }
}

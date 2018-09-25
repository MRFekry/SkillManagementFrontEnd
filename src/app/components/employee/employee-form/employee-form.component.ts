import { Component, OnInit, Inject } from '@angular/core';
import { EmployeeService } from '../../../services/employee/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Employee } from '../../../Models/Employee';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employee = {};

  constructor(private employeeService: EmployeeService,
    public dialogRef: MatDialogRef<EmployeeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee) {  }

  ngOnInit() {
    if(this.data) this.employee = this.data;
  }

  save(employee)
  {
    if (this.data) this.employeeService.UpdateEmployee(employee.id, employee).subscribe();
    else this.employeeService.AddNewEmployee(employee).subscribe();

    this.dialogRef.close();
  }

}

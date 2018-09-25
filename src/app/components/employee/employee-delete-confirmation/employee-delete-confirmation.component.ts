import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmployeeService } from '../../../services/employee/employee.service';
import { Employee } from '../../../Models/Employee';

@Component({
  selector: 'app-employee-delete-confirmation',
  templateUrl: './employee-delete-confirmation.component.html',
  styleUrls: ['./employee-delete-confirmation.component.css']
})
export class EmployeeDeleteConfirmationComponent implements OnInit {

  employee = {};

  constructor(public thisDialogRef: MatDialogRef<EmployeeDeleteConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    if(this.data) this.employee = this.data;
  }

  onConfirmDeleting() {
    if(this.employee)
      this.employeeService.DeleteEmployee(this.employee);
    
    this.thisDialogRef.close();
  }

  onCloseDialog() {
    this.thisDialogRef.close();
  }

}
